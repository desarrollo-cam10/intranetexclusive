jQuery(document).ready(function($) {
if($('#edit-parameter-tamano-imagen')){
    $('#edit-parameter-tamano-imagen-settings-tamano-imagen').val('original');
    $('#edit-parameter-tamano-imagen-settings-tamano-imagen').hide(); 
    $('#edit-parameter-tamano-imagen > div  > div  > .grippie').hide(); 
    $('#edit-parameter-tamano-imagen').append('<select id="tamano-imagen-personalizada-galeria-imagen" > <option value="thumbnail">Miniaturas</option> <option value="medium">Mediana</option><option value="large">Grande</option> <option value="original" selected >Original</option></select>');
    $('#tamano-imagen-personalizada-galeria-imagen').show(); 
}

$('#tamano-imagen-personalizada-galeria-imagen').change(function(){
        $('#edit-parameter-tamano-imagen-settings-tamano-imagen').val( $('#tamano-imagen-personalizada-galeria-imagen').val());
});
}); 