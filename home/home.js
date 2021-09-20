 function myFunction() {
            window.location.href = "http://google.com";
        }


        var btn = document.getElementById("btn");
        btn.addEventListener("click", function () {
            document.querySelector(".bd-modal").style.display = "flex";
        });

        var close = document.getElementById("close");
        close.addEventListener("click", function () {
            document.querySelector(".bd-modal").style.display = "none";
        });

        var otp_btn = document.getElementById("otp");
        otp_btn.addEventListener("click", sendOTP);

        var parent = document.querySelector(".modal-content")

        var otp_value = 0;


        function sendOTP() {

            var mobile_no = document.getElementById("inp_1").value;
            if (mobile_no.length !== 10) {
                alert("Invalid Mobile Number")
            } else {

                var div = document.createElement("div");


                var otp = document.getElementById("otp")
                var input = document.getElementById("inp_1");
                input.style.marginTop = "0px"


                parent.removeChild(otp);


                var otp_lebel = document.createElement("p");
                otp_lebel.textContent = "Enter your OTP"
                otp_lebel.style.marginBottom = "0px"
                var otp_input = document.createElement("input");
                otp_input.type = "number";
                otp_input.id = "otp_input";
                otp_input.setAttribute("class", "otp_input")

                var enterOTP = document.createElement("button");
                enterOTP.textContent = "Verify and continue";
                enterOTP.id = "enterOTPbutton"
                enterOTP.setAttribute("onclick", "CheckOTP()");
                enterOTP.style.marginTop = "20px";
                enterOTP.setAttribute("class", "otp_dom");


                div.append(otp_lebel, otp_input, enterOTP);
                parent.append(div);


                setTimeout(function () {
                    otp_value = generateOTP()
                    //console.log(otp_value)
                }, 2000);

            }
        }


        function generateOTP() {
            var n = Math.floor(Math.random() * 1000000);
            console.log(n)
            return n;
        }


        function CheckOTP() {
            var otpGiven = document.getElementById("otp_input").value;
            console.log(otpGiven)
            var message = document.createElement("p");


            if (otp_value == otpGiven) {
                window.location.href = "home2.html"
            }
            else {
                alert("Invalid OTP");
                return
            }
        }
        document.getElementById("logo").addEventListener("click", hello);
        function hello() {
            window.location.href = "../home2.html"
        }
        // logo functionality
        document.getElementById("logo").addEventListener("click", home);
        function home() {
            window.location.href = "../home2.html"
        }
        // if no data is set a random data is give;
        var data = localStorage.getItem("location");
        data = JSON.parse(data);
        if (data == null) {
            var place = "Delhi";
            place = JSON.stringify(place)
            localStorage.setItem("location", place);
        }
        // location functionality
        document.getElementById("set_location").addEventListener("click", getLoc);
        function getLoc() {
            var input = prompt("Please enter your location.");
            var place = "Delhi"
            if (localStorage.getItem("location") == null) {
                localStorage.setItem("location", JSON.stringify("place"));
            } else if (localStorage.getItem("location") != null) {
                var data = localStorage.getItem("location");
                data = JSON.parse(data);
                if (data != input) {
                    localStorage.setItem("location", JSON.stringify(input));
                }
            }
        }


        // cart functionality
        document.getElementById("cart").addEventListener("click", alertLogin);
        function alertLogin() {
            alert("Please login to check your cart.")
        }
        //
        document.getElementById("search").addEventListener("click", alerrtSearch);
        function alerrtSearch() {
            alert("Please login to search.")
        }
        // redirecting to play store and app store
        function google() {
            window.location.href = "https://play.google.com/store/apps/details?id=com.dunzo.user&hl=en"
        }
        function appStore() {
            window.location.href = "https://apps.apple.com/in/app/dunzoit/id1032391728"
        }
