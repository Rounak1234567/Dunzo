document.getElementById("logo").addEventListener("click",home);
    function home(){
        window.location.href="../home2/home2.html"
    }
    document.getElementById("img2").addEventListener("click",remove);
    function remove(){
        window.location.href="../home2/home2.html"
    }
    document.getElementById("shop1").addEventListener("click",go);
    function go(){
        window.location.href="../Groceries2_changes/Groceries2_changes.html"
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
        window.location.href="pay2.html"
    }
    //cart redirect
    document.getElementById("cart").addEventListener("click",cart)
    function cart(){
        window.location.href = "../pay/pay.html"
    }