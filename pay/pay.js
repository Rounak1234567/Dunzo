var btn = document.getElementById("add");
    btn.addEventListener("click", function() {
        document.getElementById("add1").style.display = "flex";
    });
    var close = document.getElementById("close");
    close.addEventListener("click", function() {
        document.getElementById("add1").style.display = "none";
    });
    var btn2 = document.getElementById("cards");
    btn2.addEventListener("click", function() {
        document.getElementById("add_card").style.display = "flex";
    });
    var close2 = document.getElementById("close2");
    close2.addEventListener("click", function() {
        document.getElementById("add_card").style.display = "none";
    });

    var continue_btn = document.getElementById("continue_btn");
    var add_address = document.getElementById("add");

    continue_btn.addEventListener("click", cont)

    function cont() {
        var parent = document.getElementById("pay1");
        parent.removeChild(add_address);
        document.getElementById("add1").style.display = "none";

        var new_add = document.createElement("div");
        new_add.setAttribute("id", "div1");

        var address1 = document.getElementById("aline1").value;
        address1.textContent = address1;

        var address2 = document.getElementById("aline2").value;

        address2.textContent = address2;

        var address3 = document.getElementById("aline3").value;

        address3.textContent = address3;

        var address4 = document.getElementById("aline4").value;

        address4.textContent = address4;

        var page1 = document.getElementById("page");
        parent.removeChild(page1);


        new_add.append(address1+", " +address2 + ", " + address3 + ", " + address4);
        parent.append(new_add);

        var change_add = document.createElement("div");

        var change_add_btn = document.createElement("button");
        change_add_btn.innerText = "Change Address";
        change_add_btn.setAttribute("id", "change_add_btn");

        change_add.append(change_add_btn);
        parent.append(change_add);

    };


    function displayCartItems() {
        let total_price = 0;
        let main_div = document.getElementById('cart')
        main_div.style.overflow = 'scroll';
        let cart = JSON.parse(localStorage.getItem('dunzoCart'));
        //console.log(cart);

        while (main_div.firstChild) {
            main_div.removeChild(main_div.lastChild);
        }

        let p = document.createElement('p');
        p.innerText = 'Your Cart';
        let ul = document.createElement('ul');
        main_div.append(p);

        cart.forEach(function (prd) {
            let li = document.createElement('li');
            li.style.display = 'flex';
            li.style.marginBottom = '15px'

            let div1 = document.createElement('div');
            div1.style.width = '40%'
            let h3 = document.createElement('h3');
            h3.innerText = prd.name;
            h3.style.fontWeight = 'lighter';
            let h5 = document.createElement('h5');
            h5.style.fontWeight = 'lighter';
            h5.innerText = prd.volume;

            let div2 = document.createElement('div');
            div2.id = "box";
            div2.style.width = '20%'
            let btn1 = document.createElement('button');
            btn1.id = 'minus';
            
            btn1.addEventListener('click', function () {//when quantity of an item is decreased
                let name = event.target.parentNode.parentNode.firstChild.querySelector('h3').innerText;

                let cart = JSON.parse(localStorage.getItem('dunzoCart'));

                cart.forEach(function (prd, index) {
                    if (prd.name == name) {
                        prd.qty = prd.qty - 1;
                        if (prd.qty == 0) {
                            cart.splice(index, 1)
                        }
                        total_price -= prd.price;
                    }
                });
                localStorage.removeItem('dunzoCart')
                localStorage.setItem('dunzoCart', JSON.stringify(cart));
                location.reload();
                if (JSON.parse(localStorage.getItem('dunzoCart')).length === 0) {
                    localStorage.removeItem('dunzoCart')
                }

            })


            let span = document.createElement('span');
            span.id = 'val';


            let btn2 = document.createElement('button');
            btn2.id = 'plus';


            btn2.addEventListener('click', function () {
                //when quantity of an item is increased
                let name = event.target.parentNode.parentNode.firstChild.querySelector('h3').innerText;

                let cart = JSON.parse(localStorage.getItem('dunzoCart'));

                cart.forEach(function (prd) {
                    if (prd.name == name) {
                        prd.qty = prd.qty + 1;
                        total_price += prd.price;
                    }
                });
                localStorage.removeItem('dunzoCart')
                localStorage.setItem('dunzoCart', JSON.stringify(cart));
                location.reload();
            })

            span.innerText = prd.qty;
            btn1.innerText = '-';
            btn2.innerText = '+';

            let div3 = document.createElement('div');
            div3.style.width = '20%'
            let h4 = document.createElement('h4');
            h4.innerText = '₹' + prd.price * prd.qty;
            
           
            total_price += prd.price*prd.qty;
            document.getElementById('itemtotal').innerText = `₹ ${total_price}`;
            document.getElementById('topay').innerText = `₹ ${total_price}`;

            //console.log(total_price);


            div1.append(h3, h5);
            div2.append(btn1, span, btn2);
            div3.append(h4)
            
            li.append(div1, div2, div3);
            ul.append(li)
        })

        

        main_div.append(ul);
    }

    //displayCartItems();
    // display location of place;
    //document.getElementById("location").innerText=JSON.parse(localStorage.getItem("location"))
    //Search Redirect;
    function redirect(){
        window.location.href="dunzo.html"
    }
    //redirect to home
    function home(){
        window.location.href="home2.html"
    }

    var confirm_pay = document.getElementById("confirm_pay");
    confirm_pay.addEventListener("click",function(){
        console.log("ckgsdyuvdsvh")
        window.location.href = "payment_lastpg.html"
    })