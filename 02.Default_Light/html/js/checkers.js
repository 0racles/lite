var checker = (function () {
var
item = document.querySelectorAll(".cat_item"),
autorize = document.getElementById("autorized"),
validate_1 = document.getElementById("validate_1"),
validate_2 = document.getElementById("validate_2"),
reset_btn = document.getElementById("reset_btn"),
dashboard_btn = document.getElementById("dashboard_btn"),
autorized =document.getElementById("autorized"),
head = document.getElementById("head"),
form_par = document.getElementById("form_par"),
quota = document.getElementById('quota'),
body = document.body;
//place_form = document.querySelectorAll(".place_form")[0];

function initiali (event) {
quota.textContent = '+' + window.localStorage.length;
}

function join_checkers () {
	if (true) {
		autorize.classList.add("bounceInLeft");
		autorize.classList.remove("none");
	}
}

function go_to_dashBoard () {
	if (true) {
		window.location.assign("dashboard.html")
	}
}

function allow_me (event) {
   	   if ((validate_1 || validate_2).value === "") { 
   	   	   validate_1.placeholder = "atleast enter 1 char";
           validate_2.placeholder = "atleast enter 1 char";
           validate_1.style.border = "1px solid red";
           validate_2.style.border = "1px solid red";
   	   } else {
          create_dashbaord();
          setTimeout(function () {
           window.location.assign("dashboard.html");
           autorize.classList.add("none")}, 6000);
       }
   }

function go_to_setPage () {
	autorize.classList.add("none");
	window.location.assign("set_page.html")
}

function back_to_green () {
    validate_1.style.border = "1px solid green";
}

function back_to_green_2 () {
	validate_2.style.border = "1px solid green";
}

function create_dashbaord (event) {
  if (!autorized.classList.contains("none")) {
    head.textContent = "Hold on while we create your dashboard....";
    form_par.removeChild(document.getElementById("cool"));
    document.getElementById("takeAtext").classList.add("loading");
    //setTimeout(replace_composed_msg, 10000);
  }
}

function init () {
   body.addEventListener('load', initiali, true);
   item[0].addEventListener("click", go_to_dashBoard);
   item[1].addEventListener("click", join_checkers);
   reset_btn.addEventListener("click", go_to_setPage);
   dashboard_btn.addEventListener("click", allow_me);
   validate_1.addEventListener("input", back_to_green);
   validate_2.addEventListener("input", back_to_green_2);
}

 return {
  init : init()
}

}());
