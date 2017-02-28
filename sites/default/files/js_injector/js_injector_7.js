jQuery(document).ready( function(){ 
         jQuery("#edit-field-cliente-a-facturar-und").chosen().change(function(event) {
              jQuery("#edit-field-hoja-de-trabajo-del-client-und-0-field-cliente-a-facturar-und").val(jQuery(this).val());
         });
/*
         jQuery("#edit-field-marca-und").chosen().change(function(event) {
              jQuery("#edit-field-hoja-de-trabajo-del-client-und-0-field-cliente-a-facturar-und").val(jQuery(this).val());
         });
*/
 });  