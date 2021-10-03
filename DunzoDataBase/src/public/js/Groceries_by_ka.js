// let stores = [
//     {
//         name:"Mataji Kirana And General St...",
//         area:"kurla west",
//         distance:1.3,
//         timeTakes:30,
//         img:'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/OHVWQTk1QmJxT0FWeDE2aEE5YmdNZz09-1618221264264-store_image.jpg'
//     },
//     {
//         name:"Om Sai Dairy",
//         area:"kurla west",
//         distance:1,
//         timeTakes:36,
//         img:'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/NzlLemhwaTdOMjFLQk9JQUdXdDJWUT09-1598353288299-store_image.jpg'
//     },
//     {
//         name:"Maharashtra Dairy Farm",
//         area:"Bandra West",
//         distance:1.1,
//         timeTakes:30,
//         img:'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/SFV6dE8vQ3VGUFg3VHpHSk92V0FHZz09-1600427663123-store_image.jpg'
//     },
//     {
//         name:"V Mart Express",
//         area:"kurla west",
//         distance:0.6,
//         timeTakes:23,
//         img:'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/enB2dVJ0K0tlaCtDc0NjMEF4ZFo5dz09-1582268757627-store_image.jpg'
//     },
//     {
//         name:"Musa Kirana Store",
//         area:"Santacruz East",
//         distance:1.3,
//         timeTakes:26,
//         img:'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/b3c2aktnR2M2WURwMEdyT1F3VXVqUT09-1624960007794-store_image.jpg'
//     },
//     {
//         name:"Walk2Mart Superarket",
//         area:"Santacruz East",
//         distance:1.8,
//         timeTakes:28,
//         img:'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/b3c2aktnR2M2WURwMEdyT1F3VXVqUT09-1624960007794-store_image.jpg'
//     },
//     {
//         name:"Kohinoor Grain Store",
//         area:"kurla East",
//         distance:3.9,
//         timeTakes:30,
//         img:'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/Q2w4dE92cXNsY0FMbHBrSXRwaDNZUT09-1601024844093-store_image.jpg'
//     },
//     {
//         name:"Mini Mart by Dumpling Khang",
//         area:"Santacruz East",
//         distance:3.1,
//         timeTakes:35,
//         img:'https://ik.imagekit.io/dunzo/dunzo-catalog-prod/tr:w-250,h-250,cm-pad_resize_store_thumbnail/stores/dHcva0p4QVJmN3BxbkpORTN0ZFVRUT09-1587626802010-store_image.jpg'
//     },
// ];
// function showItems(){
//     stores.forEach(function(product){
//     var div = document.createElement("div");
//     var details = document.createElement("div");
//     var image = document.createElement("img");
//     var name = document.createElement("p");
//     var area = document.createElement("p");
//     var distance = document.createElement("p");
//         image.src = product.img;
//         name.innerText=product.name;
//         name.style.fontSize="18px"
//         // image border radius;
//         image.style.borderRadius=`${15}px`
//         area.innerText=product.area;
//         distance.innerText=product.distance+" km";
//         area.style.color="grey";
//         distance.style.color="grey";
//         div.addEventListener("click",call);
//         details.append(name,area,distance);
//         details.setAttribute("id","details");
//         div.setAttribute("id","store");
//         div.append(image,details);
//         document.getElementById("body").appendChild(div);
//     })
// }
// showItems();

function call(){
//window.location.href="../Groceries2_changes/Groceries2_changes.html"
window.location.href="groceries2"
}
document.getElementById("search").addEventListener("click",refer);
    function refer(){
        //window.location.href="../search/search.html"
        window.location.href="/search"
    }
    document.getElementById("logo").addEventListener("click",home);
    function home(){
       // window.location.href="../home2/home2.html"
       window.location.href="home2"
    }
    function showData(){
        if(localStorage.getItem("location")!=null){
        var data = JSON.parse(localStorage.getItem("location"));
        document.getElementById("location").innerHTML=data;
        document.getElementById("location1").innerHTML=`Groceries & Essentials in ${data}`
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
        if(data!=input){
            localStorage.setItem("location",JSON.stringify(input));
        } 
    }
}
document.getElementById("cart").addEventListener("click",cart);
document.getElementById("head").querySelector("p").innerText=`India > ${JSON.parse(localStorage.getItem("location"))}`
function cart(){
    //window.location.href="../pay/pay.html"
    window.location.href="pay"
    }


    if(JSON.parse(localStorage.getItem('dunzoCart')) != null){
        var circle = document.getElementById('circle');

        let arr = JSON.parse(localStorage.getItem('dunzoCart'));
        let qty = 0;

        arr.forEach(function(prd){
            qty += prd.qty;
        });

        circle.innerText = qty;
    }else{
        document.getElementById('circle').style.display = "none";
    }


document.getElementById("store").addEventListener("click",aler);
