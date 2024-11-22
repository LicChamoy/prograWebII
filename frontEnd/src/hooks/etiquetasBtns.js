window.addEventListener("load", function(event) {
    const crearEtiqueta = document.getElementById("btn-crearEtiqueta");
    crearEtiqueta.addEventListener('click', function(){
        const nombreEtiqueta = document.getElementById("input-eti-etiqueta").value;
        if(nombreEtiqueta !== ''){
            console.log("El nombre de la etiqueta es: " + nombreEtiqueta);
        }
    });
});