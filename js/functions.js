// JavaScript Document
'use strict';
$(function () {
    $('body').addClass('opened')
    $('.toggleMenu').click(function () {
        $('.drawer').toggleClass('opened')
        var parentId=$('.main-nav').attr('id'),
            menu_item =  $('.main-nav').find('.menu-item'),
            submenu= menu_item.find('.collapse');

        if($('.drawer').hasClass('opened')){
            submenu.removeAttr('data-parent');
        }
        else {
            menu_item.find('a').attr('aria-expanded','false');
            submenu.attr('data-parent', '#'+parentId).removeClass('show');
        }
    })

})


// $(window).on('load, resize', function(){
//     toggleMenu()
// })
// function toggleMenu(){
//     if ( $(window).width() > 768  ) {
//         $('.drawer').addClass('opened')
//     }
// 	else{
// 		$('.drawer').removeClass('opened')
// 	}
// }
var table1_addRow = [1, 1, 1, 1, 1, 1],
    filterDefaultOptions = ['option 1', 'option 2', 'option 3'],
    tabelExpandData = '<table cellpadding="5" cellspacing="0" border="0" style="width:95%;margin:0 auto;" class="expanded_Table">' +
        '<thead>' +
        '<tr>' +
        '<th>نوع الوظيفة</th>' +
        '<th>المرتبة</th>' +
        '<th>الرمز التصنيفي</th>' +
        '<th>العدد الكلي</th>' +
        '<th>العدد المشغول</th>' +
        '<th>العدد الشاغر</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>' +
        '<tr>' +
        '<td>رسمية</td>' +
        '<td>  6 </td>' +
        '<td> 1001006</td>' +
        '<td> 2 </td>' +
        '<td> 1 </td>' +
        '<td> 1 </td>' +
        '</tr>' +

        '<tr>' +
        '<td>رسمية</td>' +
        '<td> 7  </td>' +
        '<td> 1001007 </td>' +
        '<td> 1 </td>' +
        '<td> 1 </td>' +
        '<td> 0 </td>' +
        '</tr>' +

        '<tr>' +
        '<td> غير رسمية</td>' +
        '<td>   </td>' +
        '<td>  </td>' +
        '<td>   1 </td>' +
        '<td> 1 </td>' +
        '<td> 0 </td>' +
        '</tr>' +
        '</tbody>' +
        '</table>';

var langOptions;
if ($('html').attr('dir') == "rtl") {
    langOptions = {
        'sSearch': 'بحث',
        'lengthMenu': 'عرض _MENU_ نتبجة  ',
        'zeroRecords': 'عذرا، لا توجد نتائج',
        'info': 'اظهار صفحة رقم _PAGE_ من _PAGES_',
        'infoEmpty': 'لا توجد نتائج للعرض',
        'infoFiltered': '(نتائج مفلترة من _MAX_ نتيجة كلية )',
        'paginate': {
            'first': 'الاول',
            'last': 'الاخير',
            'next': 'التالي',
            'previous': 'السابق'
        },
        select: {
            rows: {
                _: "لقد قمت باختيار  %d عنصر",
                0: "اضغط علي العنصر لتحديده",
                1: "تم تحديد صف واحد فقط"
            }
        }
    }
}

$(document).ready(function () {
    // DataTables configuration function
    if ($('.grid_tables').length) tableGenerate();

    function generateFilter(container, options) {
        var optionsList = eval(options);
        var filter = '<div class="dropdown filter_container dropleft">' +
            '<button class="btn btn-secondary" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
            '<i class="fas fa-filter"></i> </button>' +
            '<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">'
        // generate option from array sent on table configuration
        optionsList.forEach(function (option) {
            filter += '<a class="dropdown-item" href="#" >' + option + '</a>'
        });
        filter += '</div></div>'
        container.append(filter)

    }

    // expand details common function
    function expandDetails(id, data) {
        $('#' + id + ' tbody').on('click', '.tbl_expand_btn', function () {
            $(this).toggleClass('opened')
            var tr = $(this).closest('tr');
            var newTabl = $('#' + id).DataTable();
            var row = newTabl.row(tr);

            if (row.child.isShown()) {
                // This row is already open - close it
                row.child.hide();
                tr.removeClass('shown');
            } else {
                // Open this row
                row.child(data).show();
                tr.addClass('shown');
            }
            var nextRow = $(this).parents('tr.shown').next('tr').find('.expanded_Table td')

            // function to change the width of input to its actual content width
            chnageInputWidth(nextRow)

            // check if there is any edit or update buttons in the page

            if ($('.expand_btn_holder').length) {
                openEditModal(id)
            }
        });
    }


    // function to change the width of input to its actual content width
    function chnageInputWidth(item) {
        item.each(function (i, e) {
            var input = $(this).find('input');
            // adding new span to get the actual width of the input
            $(e).append('<span class="width_input_span">' + $(input).val() + '</span>');
            var newWidth = $(e).find('.width_input_span').outerWidth();
            // assign new width for the input based on its content
            input.css('width', newWidth + 10)
            // remove the div after doing its magic mission
            $(e).find('.width_input_span').remove();
        })
    }

    // function to open edit modal and change its data based on the clicked button
    function openEditModal(id) {
        $('.expand_btn_holder .btn').on('click', function () {
            var EditVar = $('#' + id).data('to-expand'),
                modalId = $(this).data('target');

            if ($(modalId).length) {
                $(modalId).on('show.bs.modal', function (e) {
                    $(this).find('.editTables').html(eval(EditVar)).find('.expand_btn_holder').remove();
                    if ($(this).find('.editable').length) {
                        $(this).find('.editable').removeAttr('readonly')
                    }
                })
                $(modalId).on('shown.bs.modal', function (e) {
                    chnageInputWidth($(modalId).find('.editTables .expanded_Table td'))
                })

            }


        })
    }

    var table;

    function tableGenerate() {
        // change table labels on arabic based on dir attribute of HTML tag.



        // generate tables on each table with grid_tables class
        $('.grid_tables').each(function (i, e) {
            var id = $(this).attr('id'),
                length,
                filter,
                filterOptions,
                selectable,
                selectStyle,
                orderable,
                dataToExpand,
                rowSelection;
            // check if dataTables custom optio exists or not if not will assign default values
            if (typeof $(e).data('custom-filter') !== 'undefined') {
                filter = $(e).data('custom-filter');
            } else {
                filter = false;
            }
            if (typeof $(e).data('length') !== 'undefined') {
                length = $(e).data('length');
            } else {
                length = 10;
            }
            if (typeof $(e).data('filter-options') !== 'undefined') {
                filterOptions = $(e).data('filter-options');
            } else {
                filterOptions = filterDefaultOptions
            }
            if (typeof $(e).data('select-checkbox') == 'true' || typeof $(e).data('select-checkbox') !== 'undefined') {
                selectable = 'select-checkbox';
                orderable = false

            } else {
                selectable = '';
                orderable = true;
            }
            if (typeof $(e).data(' select-style') == 'multi' || typeof $(e).data('select-style') !== 'undefined') {
                selectStyle = 'multi';

            } else {
                selectStyle = 'os';
            }

            if (typeof $(e).data('to-expand') !== 'undefined') {
                dataToExpand = eval($(e).data('to-expand'));
            } else {
                dataToExpand = tabelExpandData
            }


            //initialize Datatable based on the selected configurations
            table = $(e).DataTable({
                "pageLength": length,
                "dom": '<"top" <"filter_visibilty"fB>>rt<"bottom"p <"info_length"il>><"clear"> ',
                responsive: false,
                "scrollX": true,
                buttons: [
                    'colvis'
                ],
                //"order": [],
                columnDefs: [{
                    orderable: orderable,
                    className: selectable,
                    targets: 0
                }],
                select: {
                    style: selectStyle,
                    info: false
                },
                "aLengthMenu": [
                    [5, 10, 15, 20, 50],
                    ["5", "10", "15", "20", "50"]
                ],
                'language': langOptions,
                "initComplete": function () {

                    if (filter == true) {

                        // var filter_cont = $(this).parents('.data_tables_holders').find(filterContainer).detach();
                        // $('#' + id + '_wrapper').find('.dataTables_filter').append(filter_cont);
                        generateFilter($('#' + id + '_wrapper').find('.dataTables_filter'), filterOptions)
                    }

                    // adding buttons next to search on the table
                    if ($('#' + id + '_wrapper').parents('.data_tables_holders').find('.table_btns').length) {
                        var tblBtns = $('#' + id + '_wrapper').parents('.data_tables_holders').find('.table_btns').detach();
                        $('#' + id + '_wrapper').find('.top').append(tblBtns);
                    }

                    // expand function
                    // Add event listener for opening and closing details

                    expandDetails(id, dataToExpand);

                },

            }) // end of table

        }); // end of each function
        $('.add-row').on('click', function () {
            console.log('test');
            var nextTabl = $(this).parents('.data_tables_holders').find('.dataTables_scrollBody').find('.grid_tables'),
                id = nextTabl.attr('id'),
                nextRowSrc;
            console.log(id)
            var newTabl = $('#' + id).DataTable();
            if (typeof $('#' + id).data('row-data') !== 'undefined') {
                nextRowSrc = eval($(nextTabl).data('row-data'));
                newTabl.row.add(nextRowSrc).draw(false);
                newTabl.order([0, 'asc']).draw();
            }
        });


    } // end of generate table function

    // years tabs clicking function
    $('.years_tabs li:not(".disabled") a').on('click', function () {
        var $this = $(this),
            $parent = $(this).parent();

        if (!$parent.hasClass('active')) {
            $this.parents('.years_tabs').find('li').removeClass('active');
            $parent.addClass('active');

            // simulate loading tabs
            $('.loading_tabs').addClass('show')
            $('.filter_container').removeClass('show').find('.dropdown-menu').removeClass('show');
            if ($('.dt-button.buttons-collection').attr('aria-expanded') == 'true') {
                $('body').trigger('click')
            }

            setTimeout(function () {
                if ($('.loading_tabs').parent().find('.tbl_expand_btn').hasClass('opened')) {
                    $('.loading_tabs').parent().find('.tbl_expand_btn.opened').trigger('click');
                }
                $('.loading_tabs').removeClass('show');


            }, 700)
        }

        return false;
    });

}); // end of document ready function


$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})
