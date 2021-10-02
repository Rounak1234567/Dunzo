document.getElementById("logo").addEventListener("click",home);
    function home(){
        //window.location.href="../home2/home2.html"
        window.location.href="/search"
    }
    document.getElementById("img2").addEventListener("click",remove);
    function remove(){
        //window.location.href="../home2/home2.html"
        window.location.href="home2"
    }
    document.getElementById("shop1").addEventListener("click",go);
    function go(){
        //window.location.href="../Groceries2_changes/Groceries2_changes.html"
        window.location.href="/groceries2"
    }
    document.getElementById("location").addEventListener("click",getLoc);
        function getLoc(){
            var input = prompt("Please enter your location.");
            if(localStorage.getItem("location")==null){
                localStorage.setItem("location",JSON.stringify(input));
            }else if(localStorage.getItem("location")!=null){
            var data = localStorage.getItem("location");
            data = JSON.parse(data);
            if(data!=input){
                localStorage.setItem("location",JSON.stringify(input));
            } 
        }
    }
    document.getElementById("location").innerHTML=JSON.parse(localStorage.getItem("location"));
    // cart icon redirecting to cart;
    function redirect(){
        //window.location.href="pay2.html"
        window.location.href="/pay"
    }
    //cart redirect
    document.getElementById("cart").addEventListener("click",cart)
    function cart(){
        //window.location.href = "../pay/pay.html"
        window.location.href="/pay"
    }