$(document).ready(function(){
    $('#box-form').submit(function(){
        var txt_nombre = $('#txt-nombre').val();
        var txt_correo = $('#txt-correo').val();
        var txt_user = $('#txt-user').val();
        var txt_password = $('#txt-password').val();

        //almacenar los valores dentro de localstorage
        localStorage.setItem('nombre',txt_nombre);
        localStorage.setItem('correo',txt_correo);
        localStorage.setItem('usuario',txt_user);
        localStorage.setItem('password',txt_password);
    });
    var txt_nombre = localStorage.getItem('nombre');
    var txt_correo =localStorage.getItem('correo');
    var txt_user = localStorage.getItem('usuario');
    var txt_password =localStorage.getItem('password');

   // if(txt_user != null && txt_user != 'undefined'){
        //llamamos al documento sesion.html
    //    window.location = 'inici';
    //}
});

