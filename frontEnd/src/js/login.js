window.addEventListener("load", function(event) {
    //boton registrar
    const registrarBtn = document.getElementById('btnRegistrar');
    registrarBtn.addEventListener('click', function(){
        //obtener valores de los input
        const nombreUsu = document.getElementById('nombreUsu').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if(nombreUsu === '' || email === '' || password === ''){
            alert("Por favor rellene todos los campos.");
        }else{
            alert("Usuario registrado correctamente. Inicie sesion")
            location.replace("login.html");
        }
        //obtener valores de los input
    });
    //boton registrar
});