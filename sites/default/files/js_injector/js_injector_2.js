jQuery(document).ready(function($) { 
   $("input:text").each(function(){
       $(this).attr('size','60');
   });
   $("select").each(function(){
       $(this).width('450');
   });
  // $("#field-tareas-add-more-wrapper :input").attr("disabled", true);     
   $("#edit-field-hoja-de-trabajo-del-client-und-0-field-fecha-de-vencimiento").hide();
}); 