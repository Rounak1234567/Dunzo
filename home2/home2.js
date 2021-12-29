function myFunction() {
    window.location.href = "http://google.com";
}
function img1_ref(){
    window.location.href = "../Groceries/Groceries.html";
}
document.getElementById("search").addEventListener("click",refer);
function refer(){
    window.location.href="dunzo.html"
}
document.getElementById("logo").addEventListener("click",home);
function home(){
    window.location.href="../home2/home2.html"
}
// Getting location data from local storage;
function showData(){
if(localStorage.getItem("location")!=null){
    var data = JSON.parse(localStorage.getItem("location"));
    document.getElementById("location").innerText=data;
    document.getElementById("location1").innerText=data;
    document.getElementById("homeloc").innerText=`India > ${data}`
}
}
showData();
document.getElementById("set_location").addEventListener("click",getLoc);
function getLoc(){
    var input = prompt("Please enter your location.");
    if(localStorage.getItem("location")==null){
        localStorage.setItem("location",JSON.stringify(input));
    }else if(localStorage.getItem("location")!=null){
    var data = localStorage.getItem("location");
    data = JSON.parse(data);
    if(data!=input&&input!=""){
        localStorage.setItem("location",JSON.stringify(input));
    } 
}
}
// redirecting to cart;
document.getElementById("cart").addEventListener("click",cart);
function cart(){
window.location.href="../pay/pay.html"
}

if(JSON.parse(localStorage.getItem('dunzoCart')) != null){
    var circle = document.getElementById('circle');

    let arr = JSON.parse(localStorage.getItem('dunzoCart'));
    let qty = 0;

    arr.forEach(function(prd){
        qty += prd.qty;
    });

    circle.innerText = qty;
}