window.addEventListener("load", function(event) {
    // Like
    const likeBtn = document.getElementById('like');
    likeBtn.addEventListener('click', function() {
        console.log("Di like");
    });

    // Dislike
    const dislikeBtn = document.getElementById('dislike');
    dislikeBtn.addEventListener('click', function() {
        console.log("Di dislike");
    });

    // Comentario
    const comentarioBtn = document.getElementById('comentario');
    comentarioBtn.addEventListener('click', function() {
        console.log("Vi comentario");
    });

    // Agregar comentario
    const agregarcomentarioBtn = document.getElementById('agregar');
    agregarcomentarioBtn.addEventListener('click', function() {
        console.log("Agregar comentario");
    });

    // LikeCom
    const likeComBtn = document.getElementById('likeCom');
    likeComBtn.addEventListener('click', function() {
        console.log("Di like");
    });

    // DislikeCom
    const dislikeComBtn = document.getElementById('dislikeCom');
    dislikeComBtn.addEventListener('click', function() {
        console.log("Di dislike");
    });

    // ComentarioCom
    const comentarioComBtn = document.getElementById('comentarioCom');
    comentarioComBtn.addEventListener('click', function() {
        console.log("Vi comentario");
    });

    // Agregar comentarioCom
    const agregarComBtn = document.getElementById('agregarCom');
    agregarComBtn.addEventListener('click', function() {
        console.log("Agregar comentario");
    });
});
