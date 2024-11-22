window.addEventListener("load", function(event) {
    const btnCrear = document.getElementById("btn-crearPublicacion");
    btnCrear.addEventListener('click', function(){
        const tituloPub = document.getElementById("input-pub-titulo").value;
        const contenidoPub = document.getElementById("input-pub-contenido").value;
        const etiqueta = document.getElementById("etiqueta").value;
        if (tituloPub !== '' || contenidoPub !== ''){ 
            console.log("El titulo es: " + tituloPub + ", el contenido es: " + contenidoPub + ", la etiqueta es: " + etiqueta);
        }
    });
});