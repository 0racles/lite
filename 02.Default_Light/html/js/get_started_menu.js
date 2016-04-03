var getStarted = (function () {
var 
quota = document.querySelectorAll(".quota"),
pl = document.getElementById('pl'),
facebook_btn = document.getElementById('facebook_btn'),
instagram_btn = document.getElementById('instagram_btn'),
twitter_btn = document.getElementById('twitter_btn'),
tell_friendz =document.getElementById('tell_friendz'),
text_3 = document.getElementById('text_3'),
take_text_3 = document.getElementById('take_text_3'),
place_form = document.querySelectorAll('.place_form')[0],
send_parser = Math.floor(Math.random() * 2);
whatsapp_btn = document.getElementById('whatsapp_btn');
quota[0].textContent = '+' + window.localStorage.length;
quota[1].textContent = '+' + window.localStorage.length;

function add_quota () {
	if (window.localStorage.length === 9) {
      window.localStorage.setItem('quota9', '9');
      quota.textContent = window.localStorage.length;
    } else if (window.localStorage.length === 8) {
      window.localStorage.setItem('quota8', '8');
      quota.textContent = '+' + window.localStorage.length;
    } else if (window.localStorage.length === 7) {
      window.localStorage.setItem('quota7', '7');
      quota.textContent = '+' + window.localStorage.length;
    } else if (window.localStorage.length === 6) {
      window.localStorage.setItem('quota6', '6');
      quota.textContent = '+' + window.localStorage.length;
    } else if (window.localStorage.length === 5) {
      window.localStorage.setItem('quota5', '5');
      quota.textContent = '+' + window.localStorage.length;
    } else if (window.localStorage.length === 4) {
      window.localStorage.setItem('quota4', '4');
      quota.textContent = '+' + window.localStorage.length;
    } else if (window.localStorage.length === 3) {
      window.localStorage.setItem('quota3', '3');
      quota.textContent = '+' + window.localStorage.length;
    } else if (window.localStorage.length === 2) {
      window.localStorage.setItem('quota2', '2');
      quota.textContent = '+' + window.localStorage.length;
    } else if (window.localStorage.length === 1) {
      window.localStorage.setItem('quota1', '1');
      quota.textContent = '+' + window.localStorage.length;
    } else if (window.localStorage.length === 0) {
      window.localStorage.setItem('quota0', '0');
      quota.textContent = '+' + window.localStorage.length;
    }
}

function send_msg () {
  pl.classList.remove("none");
}

function composed_msg (event) {
  if (!pl.classList.contains("none")) {
    take_text_3.textContent = "";
    place_form.removeChild(document.getElementById('form'));
    text_3.textContent = ".....sending your message";
    take_text_3.classList.add("loading");
    setTimeout(rep_composed_msg, 10000);
  }
} 

function rep_composed_msg () {
  text_3.textContent = "";
  take_text_3.classList.remove("loading");
  if (send_parser) {
  var span = "<span class='fa fa-check' style='color:green;font-size:40px;font-weight:500;position:absolute;left:40%;'></span><br><br><p class='container page_info_2' id='take_text' style='text-align:center;'>Message succesfully sent</p>",
  span_2 = "<a href='menu_2_page.html' class='btn btn-success' id='first_btn'>continue</a>";
  place_form.insertAdjacentHTML("beforeend", span);
  place_form.insertAdjacentHTML("beforeend", span_2);
  add_quota()
  } else {
  span = "<span class='fa fa-times' style='color:red;font-size:40px;font-weight:500;position:absolute;left:40%;'></span><br><br><p class='container page_info_2' id='take_text' style='text-align:center;'>Message Not sent. Try Again</p>";
  span_2 = "<a href='menu_2_page.html' class='btn btn-warning' id='first_btn'>continue</a>";
  place_form.insertAdjacentHTML("beforeend", span);
  place_form.insertAdjacentHTML("beforeend", span_2);
  }
}

function init () {
   tell_friendz.addEventListener('click', send_msg);
   facebook_btn.addEventListener('click', add_quota);
   instagram_btn.addEventListener('click', add_quota);
   twitter_btn.addEventListener('click', add_quota);
   document.getElementById('add').addEventListener('click', composed_msg);
   whatsapp_btn.addEventListener('click', add_quota);
}

init();

}());