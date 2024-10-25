window.addEventListener("load", function(event) {
    //Cerrar sesion
    const cerrarSesionBtn = document.getElementById('cerrarSesion');
    cerrarSesionBtn.addEventListener('click', function(){
        location.replace("login.html");
    });
    //Cerrar sesion

    //Ir a home
    const homeBtn = document.getElementById('home');
    homeBtn.addEventListener('click', function(){
        console.log("Fui a home");
    });
    //Ir a home

    //Ir a etiquetas
    const etiquetasBtn = document.getElementById('etiquetas');
    etiquetasBtn.addEventListener('click', function(){
        console.log("Fui a etiquetas");
    });
    //Ir a etiquetas

    //Ir a React
    const reactBtn = document.getElementById('react');
    reactBtn.addEventListener('click', function(){
        console.log("Fui a react");
    });
    //Ir a React

    //Ir a js
    const jsBtn = document.getElementById('js');
    jsBtn.addEventListener('click', function(){
        console.log("Fui a js");
    });
    //Ir a js

    //like
    const likeBtn = document.getElementById('like');
    likeBtn.addEventListener('click', function(){
        console.log("Di like");
    });
    //like

    //dislike
    const dislikeBtn = document.getElementById('dislike');
    dislikeBtn.addEventListener('click', function(){
        console.log("Di dislike");
    });
    //dislike

    //comentario
    const comentarioBtn = document.getElementById('comentario');
    comentarioBtn.addEventListener('click', function(){
        console.log("Vi comentario");
    });
    //comentario

    //agregar comentario
    const agregarcomentarioBtn = document.getElementById('agregar');
    agregarcomentarioBtn.addEventListener('click', function(){
        console.log("Agregar comentario");
    });
    //agregar comentario

    //likeCom
    const likeComBtn = document.getElementById('likeCom');
    likeComBtn.addEventListener('click', function(){
        console.log("Di like");
    });
    //likeCom

    //dislikeCom
    const dislikeComBtn = document.getElementById('dislikeCom');
    dislikeComBtn.addEventListener('click', function(){
        console.log("Di dislike");
    });
    //dislikeCom

    //comentarioCom
    const comentarioComBtn = document.getElementById('comentarioCom');
    comentarioComBtn.addEventListener('click', function(){
        console.log("Vi comentario");
    });
    //comentarioCom

    //agregar comentarioCom
    const agregarComBtn = document.getElementById('agregarCom');
    agregarComBtn.addEventListener('click', function(){
        console.log("Agregar comentario");
    });
    //agregar comentarioCom
  });