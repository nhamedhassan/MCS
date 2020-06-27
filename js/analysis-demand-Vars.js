var ADT_view = '<table cellpadding="5" cellspacing="0" border="0" style="width:95%;margin:0 auto;" class="expanded_Table">' +
    '<thead>' +
    '<tr>' +
    '<th>نوع الوظيفة</th>' +
    '<th>المرتبة</th>' +
    '<th>الرمز التصنيفي</th>' +
    '<th>عدد الوظائف </th>' +
    '<th>عدد الموظفين </th>' +
    '<th>التغير المتوقع </th>' +
    '<th>العرض المتوقع </th>' +
    '</tr>' +
    '</thead>' +
    '<tbody>'
// generate dynamic  3 tr  for detailed expand
for (i = 0; i < 3; i++) {
    ADT_view += '<tr>' +
        '<td> <input type="text" readonly  class="" value="رسمية"/></td>' +
        '<td> <input type="text" readonly  class="" value="6 "/> </td>' +
        '<td><input type="text" readonly   class="" value="1001006"/>  </td>' +
        '<td> <input type="text" readonly  class="" value="2"/> </td>' +
        '<td> <input type="text" readonly  class="" value="1"/> </td>' +
        '<td> <input type="text" readonly  class="" value="0"/> </td>' +
        '<td> <input type="text" readonly  class="" value="1"/> </td>' +
        '</tr>'
}
ADT_view += '</tbody> </table>',

// gabs table details
gabs_view = '<table cellpadding="5" cellspacing="0" border="0" style="width:95%;margin:0 auto;" class="expanded_Table">' +
    '<thead>' +
    '<tr>' +
    '<th>نوع الوظيفة</th>' +
    '<th>المرتبة</th>' +
    '<th>الرمز التصنيفي</th>' +
    '<th>عدد الوظائف </th>' +
    '<th> الوظائف الشاغرة </th>' +
    '<th> آولوية المعالجة </th>' +
    '<th>العرض المتوقع </th>' +
    '<th>الطلب المتوقع </th>' +
    '<th> الفجوات الأولية </th>' +
    '<th> الفجوات المعلقة </th>' +
    '<th> الفجوات النهائية </th>' +
    '</tr>' +
    '</thead>' +
    '<tbody>'
// generate dynamic  3 tr  for detailed expand
for (i = 0; i < 3; i++) {
    gabs_view += '<tr>' +
        '<td> <input type="text" readonly  class="" value="  رسمية"/></td>' +
        '<td> <input type="text" readonly  class="" value="6 "/> </td>' +
        '<td><input type="text" readonly   class="" value="1001006"/>  </td>' +
        '<td> <input type="text" readonly  class="" value="5"/> </td>' +
        '<td> <input type="text" readonly  class="" value="2"/> </td>' +
        '<td> <input type="text" readonly  class="" value="قصوى"/> </td>' +
        '<td> <input type="text" readonly  class="" value="4"/> </td>' +
        '<td> <input type="text" readonly  class="" value="6"/> </td>' +
        '<td> <input type="text" readonly  class="color-green" value="+2"/> </td>' +
        '<td> <input type="text" readonly  class="" value="1"/> </td>' +
        '<td> <input type="text" readonly  class="color-green" value="+1"/> </td>' +
        '</tr>'
}
gabs_view += '</tbody> </table>',


// currnet page variable

AOT_view = '<table cellpadding="5" cellspacing="0" border="0" style="width:95%;margin:0 auto;" class="expanded_Table">' +
    '<thead>' +
    '<tr>' +
    '<th>نوع الوظيفة</th>' +
    '<th>المرتبة</th>' +
    '<th>الرمز التصنيفي</th>' +
    '<th>عدد الوظائف </th>' +
    '<th>عدد الموظفين </th>' +
    '<th>التغير المتوقع </th>' +
    '<th>الطلب المتوقع </th>' +
    '</tr>' +
    '</thead>' +
    '<tbody>'
// generate dynamic  3 tr  for detailed expand
for (i = 0; i < 3; i++) {
    AOT_view += '<tr>' +
        '<td> <input type="text" readonly  class="" value="  رسمية"/></td>' +
        '<td> <input type="text" readonly  class="" value="6 "/> </td>' +
        '<td><input type="text" readonly   class="" value="1001006"/>  </td>' +
        '<td> <input type="text" readonly  class="" value="5"/> </td>' +
        '<td> <input type="text" readonly  class="" value="3"/> </td>' +
        '<td> <input type="text" readonly  class="color-green" value="+3"/> </td>' +
        '<td> <input type="text" readonly  class="" value="6"/> </td>' +
        '</tr>'
}
AOT_view += '</tbody> </table>',



// currnet page variable

AOT_change = '<table cellpadding="5" cellspacing="0" border="0" style="width:95%;margin:0 auto;" class="expanded_Table">' +
    '<thead>' +
    '<tr>' +
    '<th>نوع الوظيفة</th>' +
    '<th>المرتبة</th>' +
    '<th>الرمز التصنيفي</th>' +
    '<th>عدد الوظائف </th>' +
    '</tr>' +
    '</thead>' +
    '<tbody>'
// generate dynamic  3 tr  for detailed expand
for (i = 0; i < 3; i++) {
    AOT_change += '<tr>' +
        '<td> <input type="text" readonly  class="" value="  رسمية"/></td>' +
        '<td> <input type="text" readonly  class="" value="6 "/> </td>' +
        '<td><input type="text" readonly   class="" value="1001006"/>  </td>' +
        '<td> <input type="text" readonly  class="" value="5"/> </td>' +
        '</tr>'
}
AOT_change += '</tbody> </table>',

// reivew workforce demand

RA_workforce = '<table cellpadding="5" cellspacing="0" border="0" style="width:95%;margin:0 auto;" class="expanded_Table styleHide">' +
    '<thead>' +
    '<tr>' +
    '<th>نوع الوظيفة</th>' +
    '<th>المرتبة</th>' +
    '<th>الرمز التصنيفي</th>' +
    '<th>عدد الوظائف </th>' +
    '</tr>' +
    '</thead>' +
    '<tbody>'
// generate dynamic  3 tr  for detailed expand
for (i = 0; i < 3; i++) {
    RA_workforce += '<tr>' +
        '<td> <input type="text" readonly  class="" value="رسمية"/></td>' +
        '<td> <input type="text" readonly  class="" value="6"/> </td>' +
        '<td><input type="text" readonly   class="" value="1001006"/>  </td>' +
        '<td> <input type="text" readonly  class="" value="5"/> </td>' +
        '</tr>'
}
RA_workforce += '</tbody> </table>'+
'<div class="font-size2  mt-4 d-flex justify-content-start" style="width:95%;margin:0 auto;"><label>حالة المراجعه</label><div class="custom-control custom-radio custom-control-inline">'+
'<input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input">'+
'<label class="custom-control-label" for="customRadioInline1">موافقة</label></div>'+
'<div class="font-size2 custom-control custom-radio custom-control-inline">'+
'<input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">'+
'<label class="custom-control-label" for="customRadioInline2">رفض</label></div></div>'+
'<div class="font-size2 justify-content-start" col-12 style="width:95%;margin:0 auto;text-align:right;"><label>الملاحظات</label><textarea rows="3"></textarea></div>'+
'<div class="expand_btn_holder"><button class="btn btn-primary" data-toggle="modal" data-target=".ExpandEditModal">حفظ</button></div>',


// reivew workforce demand

RA_workforce_accept = '<table cellpadding="5" cellspacing="0" border="0" style="width:95%;margin:0 auto;" class="expanded_Table styleHide">' +
    '<thead>' +
    '<tr>' +
    '<th>نوع الوظيفة</th>' +
    '<th>المرتبة</th>' +
    '<th>الرمز التصنيفي</th>' +
    '<th>عدد الوظائف </th>' +
    '</tr>' +
    '</thead>' +
    '<tbody>'
// generate dynamic  3 tr  for detailed expand
for (i = 0; i < 3; i++) {
    RA_workforce_accept += '<tr>' +
        '<td> <input type="text" readonly  class="" value="رسمية"/></td>' +
        '<td> <input type="text" readonly  class="" value="6"/> </td>' +
        '<td><input type="text" readonly   class="" value="1001006"/>  </td>' +
        '<td> <input type="text" readonly  class="" value="5"/> </td>' +
        '</tr>'
}
RA_workforce_accept += '</tbody> </table>'+
'<div class="font-size2  mt-4 d-flex justify-content-start" style="width:95%;margin:0 auto;"><label>حالة الإعتماد</label><div class="custom-control custom-radio custom-control-inline">'+
'<input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input">'+
'<label class="custom-control-label" for="customRadioInline1">موافقة</label></div>'+
'<div class="font-size2 custom-control custom-radio custom-control-inline">'+
'<input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">'+
'<label class="custom-control-label" for="customRadioInline2">رفض</label></div></div>'+
'<div class="font-size2 justify-content-start" col-12 style="width:95%;margin:0 auto;text-align:right;"><label>الملاحظات</label><textarea rows="3"></textarea></div>'+
'<div class="expand_btn_holder"><button class="btn btn-primary" data-toggle="modal" data-target=".ExpandEditModal">حفظ</button></div>',


// reivew workforce plan

R_workforce_plan = '<div class="expanded_Table font-size2  mt-4 d-flex justify-content-start" style="width:95%;margin:0 auto;"><label>حالة المراجعه</label><div class="custom-control custom-radio custom-control-inline">' +
'<input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input">'+
'<label class="custom-control-label" for="customRadioInline1">موافقة</label></div>'+
'<div class="font-size2 custom-control custom-radio custom-control-inline">'+
'<input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">'+
'<label class="custom-control-label" for="customRadioInline2">رفض</label></div></div>'+
'<div class="font-size2 justify-content-start" col-12 style="width:95%;margin:0 auto;text-align:right;"><label>الملاحظات</label><textarea rows="3"></textarea></div>'+
'<div class="expand_btn_holder"><button class="btn btn-primary" data-toggle="modal" data-target=".ExpandEditModal">حفظ</button></div>',




// reivew workforce plan

A_workforce_plan = '<div class="expanded_Table font-size2  mt-4 d-flex justify-content-start" style="width:95%;margin:0 auto;"><label>حالة الاعتماد</label><div class="custom-control custom-radio custom-control-inline">' +
'<input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input">'+
'<label class="custom-control-label" for="customRadioInline1">موافقة</label></div>'+
'<div class="font-size2 custom-control custom-radio custom-control-inline">'+
'<input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">'+
'<label class="custom-control-label" for="customRadioInline2">رفض</label></div></div>'+
'<div class="font-size2 justify-content-start" col-12 style="width:95%;margin:0 auto;text-align:right;"><label>الملاحظات</label><textarea rows="3"></textarea></div>'+
'<div class="expand_btn_holder"><button class="btn btn-primary" data-toggle="modal" data-target=".ExpandEditModal">حفظ</button></div>',


// currnet page variable
ADT_current = '<table cellpadding="5" cellspacing="0" border="0" style="width:95%;margin:0 auto;" class="expanded_Table">' +
    '<thead>' +
    '<tr>' +
    '<th>نوع الوظيفة</th>' +
    '<th>المرتبة</th>' +
    '<th>الرمز التصنيفي</th>' +
    '<th>عدد الوظائف </th>' +
    '<th>عدد الموظفين الحالي </th>' +
    '<th>الترقية </th>' +
    '<th>التقاعد </th>' +
    '<th>الدوران الوظيفي</th>' +
    '<th>التعيين</th>' +
    '<th>النقل</th>' +
    '<th>عدد الموظفين النهائي </th>' +
    '</tr>' +
    '</thead>' +
    '<tbody>'
        // generate dynamic  3 tr  for detailed expand
        for (i = 0; i < 3; i++) {
            ADT_current += '<tr>' +
                '<td> <input type="text" readonly   value="رسمية"/></td>' +
                '<td> <input type="text" readonly   value="6"/></td>' +
                '<td> <input type="text" readonly   value="1001006"/> </td>' +
                '<td> <input type="text" readonly   value="2"/> </td>' +
                '<td> <input type="text" readonly   value="1"/> </td>' +
                '<td> <input type="text" readonly   value="+1" class="color-green"/> </td>' +
                '<td> <input type="text" readonly   value="-1" class="color-red"/> </td>' +
                '<td> <input type="text" readonly   value="-1" class="color-red"/> </td>' +
                '<td> <input type="text" readonly   value="+1" class="color-green"/> </td>' +
                '<td> <input type="text" readonly   value="0"  class="color-green"/> </td>' +
                '<td> <input type="text" readonly   value="1"/> </td>' +
                '</tr>'
        }
ADT_current += '</tbody> </table>',

// currnet year page variable
ADT_year_promote = '<table cellpadding="5" cellspacing="0" border="0" style="width:95%;margin:0 auto;" class="expanded_Table">' +
    '<thead>' +
    '<tr>' +
    '<th>نوع الوظيفة</th>' +
    '<th>المرتبة</th>' +
    '<th>الرمز التصنيفي</th>' +
    '<th>عدد الوظائف </th>' +
    '<th>عدد الموظفين الحالي </th>' +
    '<th>* الترقية من</th>' +
    '<th>* الترقية الي </th>' +
    '<th>عدد الترقية</th>' +
    '<th>عدد الموظفين النهائي </th>' +
    '</tr>' +
    '</thead>' +
    '<tbody>'
// generate dynamic  3 tr  for detailed expand
for (i = 0; i < 3; i++) {
    ADT_year_promote += '<tr>' +
        '<td> <input type="text" readonly  class="" value="رسمية"/></td>' +
        '<td> <input type="text" readonly  class="" value=" 6"/></td>' +
        '<td> <input type="text" readonly  class="" value="1001006"/> </td>' +
        '<td> <input type="text" readonly  class="" value="5"/> </td>' +
        '<td> <input type="text" readonly  class="" value="3"/> </td>' +
        '<td> <input type="text" readonly  class="editable color-red" value="-1"/> </td>' +
        '<td> <input type="text" readonly  class="editable color-green" value="+2"/> </td>' +
        '<td> <input type="text" readonly  class="color-green" value="+1"/> </td>' +
        '<td> <input type="text" readonly  class="" value="4"/> </td>' +
        '</tr>'
}
ADT_year_promote += '</tbody> </table>'+
    '<div class="expand_btn_holder"><button class="btn btn-primary" data-toggle="modal" data-target=".ExpandEditModal">تعديل</button></div>',

    // currnet year page variable
    ADT_year_retire = '<table cellpadding="5" cellspacing="0" border="0" style="width:95%;margin:0 auto;" class="expanded_Table">' +
        '<thead>' +
        '<tr>' +
        '<th rowspan="2">نوع الوظيفة</th>' +
        '<th rowspan="2">المرتبة</th>' +
        '<th rowspan="2">الرمز التصنيفي</th>' +
        '<th rowspan="2">عدد الوظائف </th>' +
        '<th rowspan="2">عدد الموظفين الحالي </th>' +
        '<th colspan="2">عدد التقاعد </th>' +
        '<th rowspan="2">عدد الموظفين النهائي </th>' +
        '</tr>' +
        '<tr>' +
        '<th>التلقائي</th>' +
        '<th>* المتوقع</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>'
// generate dynamic  3 tr  for detailed expand
for (i = 0; i < 3; i++) {
    ADT_year_retire += '<tr>' +
        '<td> <input type="text" readonly  class="" value="رسمية"/></td>' +
        '<td> <input type="text" readonly  class="" value=" ٦ "/></td>' +
        '<td> <input type="text" readonly  class="" value="1001006"/> </td>' +
        '<td> <input type="text" readonly  class="" value="5"/> </td>' +
        '<td> <input type="text" readonly  class="" value="3"/> </td>' +
        '<td> <input type="text" readonly  class="color-red" value="-3"/> </td>' +
        '<td> <input type="text" readonly  class="editable color-red" value="-2"/> </td>' +
        '<td> <input type="text" readonly  class="" value="1"/> </td>' +
        '</tr>'
}
ADT_year_retire += '</tbody> </table>'+
    '<div class="expand_btn_holder"><button class="btn btn-primary" data-toggle="modal" data-target=".ExpandEditModal">تعديل</button></div>',

    // currnet year page variable
    ADT_year_rotation = '<table cellpadding="5" cellspacing="0" border="0" style="width:95%;margin:0 auto;" class="expanded_Table">' +
        '<thead>' +
        '<tr>' +
        '<th rowspan="2">نوع الوظيفة</th>' +
        '<th rowspan="2">المرتبة</th>' +
        '<th rowspan="2">الرمز التصنيفي</th>' +
        '<th rowspan="2">عدد الوظائف </th>' +
        '<th rowspan="2">عدد الموظفين الحالي </th>' +
        '<th colspan="2">عدد الدوران الوظيفي </th>' +
        '<th rowspan="2">عدد الموظفين النهائي </th>' +
        '</tr>' +
        '<tr>' +
        '<th>التلقائي</th>' +
        '<th>* المتوقع</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>'
// generate dynamic  3 tr  for detailed expand
for (i = 0; i < 3; i++) {
    ADT_year_rotation += '<tr>' +
        '<td> <input type="text" readonly  class="" value="رسمية"/></td>' +
        '<td> <input type="text" readonly  class="" value=" 6 "/></td>' +
        '<td> <input type="text" readonly  class="" value="1001006"/> </td>' +
        '<td> <input type="text" readonly  class="" value="5"/> </td>' +
        '<td> <input type="text" readonly  class="" value="3"/> </td>' +
        '<td> <input type="text" readonly  class="color-red" value="-3"/> </td>' +
        '<td> <input type="text" readonly  class="editable color-red" value="-2"/> </td>' +
        '<td> <input type="text" readonly  class="" value="1"/> </td>' +
        '</tr>'
}
ADT_year_rotation += '</tbody> </table>'+
    '<div class="expand_btn_holder"><button class="btn btn-primary" data-toggle="modal" data-target=".ExpandEditModal">تعديل</button></div>',

    // currnet year page variable
    ADT_year_employment = '<table cellpadding="5" cellspacing="0" border="0" style="width:95%;margin:0 auto;" class="expanded_Table">' +
        '<thead>' +
        '<tr>' +
        '<th>نوع الوظيفة</th>' +
        '<th>المرتبة</th>' +
        '<th>الرمز التصنيفي</th>' +
        '<th>عدد الوظائف </th>' +
        '<th>عدد الموظفين الحالي </th>' +
        '<th>* عدد التعيين </th>' +
        '<th>عدد الموظفين النهائي </th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>'
// generate dynamic  3 tr  for detailed expand
for (i = 0; i < 3; i++) {
    ADT_year_employment += '<tr>' +
        '<td> <input type="text" readonly  class="" value="رسمية"/></td>' +
        '<td> <input type="text" readonly  class="" value=" 6 "/></td>' +
        '<td> <input type="text" readonly  class="" value="1001006"/> </td>' +
        '<td> <input type="text" readonly  class="" value="5"/> </td>' +
        '<td> <input type="text" readonly  class="" value="1"/> </td>' +
        '<td> <input type="text" readonly  class="editable" value="1"/> </td>' +
        '<td> <input type="text" readonly  class="" value="5"/> </td>' +
        '</tr>'
}
ADT_year_employment += '</tbody> </table>'+
    '<div class="expand_btn_holder"><button class="btn btn-primary" data-toggle="modal" data-target=".ExpandEditModal">تعديل</button></div>',


    // currnet year page variable
    ADT_year_transfer= '<table cellpadding="5" cellspacing="0" border="0" style="width:95%;margin:0 auto;" class="expanded_Table">' +
        '<thead>' +
        '<tr>' +
        '<th>نوع الوظيفة</th>' +
        '<th>المرتبة</th>' +
        '<th>الرمز التصنيفي</th>' +
        '<th>عدد الوظائف </th>' +
        '<th>عدد الموظفين الحالي </th>' +
        '<th>* النقل من</th>' +
        '<th >* النقل الي </th>' +
        '<th>عدد النقل</th>' +
        '<th>عدد الموظفين النهائي </th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>'
// generate dynamic  3 tr  for detailed expand
for (i = 0; i < 3; i++) {
    ADT_year_transfer += '<tr>' +
        '<td> <input type="text" readonly  class="" value="رسمية"/></td>' +
        '<td> <input type="text" readonly  class="" value=" ٦ "/></td>' +
        '<td> <input type="text" readonly  class="" value="١٠٠١٠٠٦"/> </td>' +
        '<td> <input type="text" readonly  class="" value="٥"/> </td>' +
        '<td> <input type="text" readonly  class="" value="٣"/> </td>' +
        '<td> <input type="text" readonly  class="editable color-red" value="-1"/> </td>' +
        '<td> <input type="text" readonly  class="editable color-green" value="+1"/> </td>' +
        '<td> <input type="text" readonly  class="" value="0"/> </td>' +
        '<td> <input type="text" readonly  class="" value="4"/> </td>' +
        '</tr>'
}
ADT_year_transfer += '</tbody> </table>'+
    '<div class="expand_btn_holder"><button class="btn btn-primary" data-toggle="modal" data-target=".ExpandEditModal">تعديل</button></div>',

    // currnet year page variable
    ADT_offer_promote = '<table cellpadding="5" cellspacing="0" border="0" style="width:95%;margin:0 auto;" class="expanded_Table">' +
        '<thead>' +
        '<tr>' +
        '<th rowspan="2">نوع الوظيفة</th>' +
        '<th rowspan="2">المرتبة</th>' +
        '<th rowspan="2">الرمز التصنيفي</th>' +
        '<th rowspan="2">عدد الوظائف </th>' +
        '<th rowspan="2">عدد الموظفين  </th>' +
        '<th colspan="2">عدد الترقية من الوظيفة</th>'+
        '<th colspan="2">عدد الترقية الى الوظيفة</th>'+
        ' <th rowspan="2">عدد الترقية </th>'+
        '<th rowspan="2">عدد الموظفين النهائي </th>' +
        '</tr>' +
        '<tr>' +
        '<th>التلقائي</th>' +
        '<th>المتوقع</th>' +
        '<th>التلقائي</th>' +
        '<th>المتوقع</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>'
// generate dynamic  3 tr  for detailed expand
for (i = 0; i < 3; i++) {
    ADT_offer_promote += '<tr>' +
        '<td> <input type="text" readonly  class="" value="رسمية"/></td>' +
        '<td> <input type="text" readonly  class="" value=" 6 "/></td>' +
        '<td> <input type="text" readonly  class="" value="1001006"/> </td>' +
        '<td> <input type="text" readonly  class="" value="5"/> </td>' +
        '<td> <input type="text" readonly  class="" value="3"/> </td>' +
        '<td> <input type="text" readonly  class="color-red" value="-2"/> </td>' +
        '<td> <input type="text" readonly  class="editable color-red" value="-1"/> </td>' +
        '<td> <input type="text" readonly  class="color-green" value="+2"/> </td>' +
        '<td> <input type="text" readonly  class="editable color-green" value="+3"/> </td>' +
        '<td> <input type="text" readonly  class="" value="+1"/> </td>' +
        '<td> <input type="text" readonly  class="" value="5"/> </td>' +
        '</tr>'
}
ADT_offer_promote += '</tbody> </table>'+
    '<div class="expand_btn_holder"><button class="btn btn-primary" data-toggle="modal" data-target=".ExpandEditModal">تعديل</button></div>',

    // currnet year page variable
    ADT_offer_retire = '<table cellpadding="5" cellspacing="0" border="0" style="width:95%;margin:0 auto;" class="expanded_Table">' +
        '<thead>' +
        '<tr>' +
        '<th rowspan="2">نوع الوظيفة</th>' +
        '<th rowspan="2">المرتبة</th>' +
        '<th rowspan="2">الرمز التصنيفي</th>' +
        '<th rowspan="2">عدد الوظائف </th>' +
        '<th rowspan="2">عدد الموظفين  </th>' +
        '<th colspan="2">عدد التقاعد </th>' +
        '<th rowspan="2">عدد الموظفين النهائي </th>' +
        '</tr>' +
        '<tr>' +
        '<th>التلقائي</th>' +
        '<th >المتوقع</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>'
// generate dynamic  3 tr  for detailed expand
for (i = 0; i < 3; i++) {
    ADT_offer_retire += '<tr>' +
        '<td> <input type="text" readonly  class="" value="رسمية"/></td>' +
        '<td> <input type="text" readonly  class="" value=" 6 "/></td>' +
        '<td> <input type="text" readonly  class="" value="1001006"/> </td>' +
        '<td> <input type="text" readonly  class="" value="5"/> </td>' +
        '<td> <input type="text" readonly  class="" value="3"/> </td>' +
        '<td> <input type="text" readonly  class="color-red" value="-3"/> </td>' +
        '<td> <input type="text" readonly  class="editable color-red" value="-2"/> </td>' +
        '<td> <input type="text" readonly  class="" value="1"/> </td>' +
        '</tr>'
}
ADT_offer_retire += '</tbody> </table>'+
    '<div class="expand_btn_holder"><button class="btn btn-primary" data-toggle="modal" data-target=".ExpandEditModal">تعديل</button></div>',


    // currnet year page variable
    ADT_offer_rotation = '<table cellpadding="5" cellspacing="0" border="0" style="width:95%;margin:0 auto;" class="expanded_Table">' +
        '<thead>' +
        '<tr>' +
        '<th rowspan="2">نوع الوظيفة</th>' +
        '<th rowspan="2">المرتبة</th>' +
        '<th rowspan="2">الرمز التصنيفي</th>' +
        '<th rowspan="2">عدد الوظائف </th>' +
        '<th rowspan="2">عدد الموظفين  </th>' +
        '<th colspan="2">عدد الدوران الوظيفي </th>' +
        '<th rowspan="2">عدد الموظفين النهائي </th>' +
        '</tr>' +
        '<tr>' +
        '<th>التلقائي</th>' +
        '<th>المتوقع</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>'
// generate dynamic  3 tr  for detailed expand
for (i = 0; i < 3; i++) {
    ADT_offer_rotation += '<tr>' +
        '<td> <input type="text" readonly  class="" value="رسمية"/></td>' +
        '<td> <input type="text" readonly  class="" value=" 6 "/></td>' +
        '<td> <input type="text" readonly  class="" value="1001006"/> </td>' +
        '<td> <input type="text" readonly  class="" value="5"/> </td>' +
        '<td> <input type="text" readonly  class="" value="3"/> </td>' +
        '<td> <input type="text" readonly  class="color-red" value="-3"/> </td>' +
        '<td> <input type="text" readonly  class="editable color-red" value="-2"/> </td>' +
        '<td> <input type="text" readonly  class="" value="1"/> </td>' +
        '</tr>'
}
ADT_offer_rotation += '</tbody> </table>'+
    '<div class="expand_btn_holder"><button class="btn btn-primary" data-toggle="modal" data-target=".ExpandEditModal">تعديل</button></div>',


    // currnet year page variable
    ADT_offer_transfer = '<table cellpadding="5" cellspacing="0" border="0" style="width:95%;margin:0 auto;" class="expanded_Table">' +
        '<thead>' +
        '<tr>' +
        '<th rowspan="2">نوع الوظيفة</th>' +
        '<th rowspan="2">المرتبة</th>' +
        '<th rowspan="2">الرمز التصنيفي</th>' +
        '<th rowspan="2">عدد الوظائف </th>' +
        '<th rowspan="2">عدد الموظفين  </th>' +
        '<th colspan="2">عدد النقل من الوظيفة</th>'+
        '<th colspan="2">عدد النقل الى الوظيفة</th>'+
        ' <th rowspan="2">عدد النقل </th>'+
        '<th rowspan="2">عدد الموظفين النهائي </th>' +
        '</tr>' +
        '<tr>' +
        '<th>التلقائي</th>' +
        '<th>المتوقع</th>' +
        '<th>التلقائي</th>' +
        '<th>المتوقع</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>'
// generate dynamic  3 tr  for detailed expand
for (i = 0; i < 3; i++) {
    ADT_offer_transfer += '<tr>' +
        '<td> <input type="text" readonly  class="" value="رسمية"/></td>' +
        '<td> <input type="text" readonly  class="" value=" 6 "/></td>' +
        '<td> <input type="text" readonly  class="" value="1001006"/> </td>' +
        '<td> <input type="text" readonly  class="" value="5"/> </td>' +
        '<td> <input type="text" readonly  class="" value="3"/> </td>' +
        '<td> <input type="text" readonly  class="color-red" value="-3"/> </td>' +
        '<td> <input type="text" readonly  class="editable color-red" value="-2"/> </td>' +
        '<td> <input type="text" readonly  class="color-green" value="+2"/> </td>' +
        '<td> <input type="text" readonly  class="editable color-green" value="+3"/> </td>' +
        '<td> <input type="text" readonly  class="color-green" value="+1"/> </td>' +
        '<td> <input type="text" readonly  class="" value="5"/> </td>' +
        '</tr>'
}
ADT_offer_transfer += '</tbody> </table>'+
    '<div class="expand_btn_holder"><button class="btn btn-primary"  data-toggle="modal" data-target=".ExpandEditModal">تعديل</button></div>';

