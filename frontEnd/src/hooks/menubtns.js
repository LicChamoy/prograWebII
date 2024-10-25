window.addEventListener("load", function(event) {
    // Cerrar sesión
    const cerrarSesionBtn = document.getElementById('cerrarSesion');
    cerrarSesionBtn.addEventListener('click', function() {
        location.replace("login.html");
    });
    
    // Ir a home
    const homeBtn = document.getElementById('home');
    homeBtn.addEventListener('click', function() {
        console.log("Fui a home");
    });

    // Ir a etiquetas
    const etiquetasBtn = document.getElementById('etiquetas');
    etiquetasBtn.addEventListener('click', function() {
        console.log("Fui a etiquetas");
    });

    // Ir a React
    const reactBtn = document.getElementById('react');
    reactBtn.addEventListener('click', function() {
        console.log("Fui a react");
    });

    // Ir a js
    const jsBtn = document.getElementById('js');
    jsBtn.addEventListener('click', function() {
        console.log("Fui a js");
    });
});
