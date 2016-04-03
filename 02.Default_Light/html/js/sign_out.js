var sign_out = (function () { 
var 
quota = document.querySelectorAll(".quota"),
facebook_btn = document.getElementById('facebook_btn'),
instagram_btn = document.getElementById('instagram_btn'),
twitter_btn = document.getElementById('twitter_btn'),
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

function init () {
   facebook_btn.addEventListener('click', add_quota);
   instagram_btn.addEventListener('click', add_quota);
   twitter_btn.addEventListener('click', add_quota);
}

init();
}())