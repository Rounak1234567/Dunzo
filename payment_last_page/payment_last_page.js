var btn = document.getElementById("btn");
    btn.addEventListener("click", function(){
        window.location.href = "../home2/home2.html"
    })

    var loader = document.getElementById("preloader");

    window.addEventListener("load", function(){
        loader.style.display = "none";
    });