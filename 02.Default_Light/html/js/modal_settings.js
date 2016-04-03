var report = (function () {
var 
parent_div = document.querySelectorAll(".parent")[0],
div_1 = document.querySelectorAll(".address")[0],
div_2 = document.querySelectorAll(".address_2")[0],
div_3 = document.querySelectorAll(".address_3")[0],
div_4 = document.querySelectorAll(".address_4")[0],
div_5 = document.querySelectorAll(".address_5")[0],
div_6 = document.querySelectorAll(".address_6")[0],
take_text =document.getElementById("take_text"),
first_btn = document.getElementById("first_btn"),
second_btn = document.getElementById("second_btn"),
autorized = document.getElementById("autorized"),
h3_take = document.getElementById("h3_take"),
parent = document.getElementById("parent"),
parent_2_2 = document.getElementById("parent_2_2"),
compose_msg = document.getElementById("compose_msg"),
pl = document.getElementById("pl"),
text_2 =document.getElementById("text_2"),
first_inp = document.getElementById("first_inp"),
second_inp = document.getElementById("second_inp"),
third_btn = document.getElementById("third_btn"),
quota = document.getElementById('quota'),
fourth_btn = document.getElementById("fourth_btn"),
msg_parser = Math.floor(Math.random() * 2),
add_comment = document.querySelectorAll(".add_comment")[0],
//quota = document.getElementById('quota'),
set_text_msg = {
   low_curr : "Hi, my name is user_name. I am experiencing low current at user_address. Please kindly come and attend to it",
   t_blow : "Hi, my name is user_name. My transformer at user_address has just blown up. Please kindly come and attend to it", 
   meter_nw : "Hi, my name is user_name. My meter isn't working at user_address. Please kindly come and attend to it",
   line_dis : "Hi, my name is user_name. My line has been disconnected at user_address. Please kindly come and attend to it",
   recon_line : "Hi, my name is user_name. I have offset my bills, kindly come and recconect my line at user_address. Please kindly come and attend to it",
   without_light : "Hi, my name is user_name. I am the only one without light at user_address. Please kindly come and attend to it",
};

quota.textContent = '+' + window.localStorage.length;

function one_click_email (event) {
	
		if (event.target.classList.contains("address")) {
			take_text.textContent = set_text_msg.low_curr;
			autorized.classList.remove("none");
		}
		else if (event.target.classList.contains("address_2")) {
			take_text.textContent = set_text_msg.t_blow;
			autorized.classList.remove("none");
		}
		else if (event.target.classList.contains("address_3")) {
		   take_text.textContent = set_text_msg.meter_nw;
		   autorized.classList.remove("none");
		}
		else if (event.target.classList.contains("address_4")) {
			take_text.textContent = set_text_msg.line_dis;
			autorized.classList.remove("none");
		}
		else if (event.target.classList.contains("address_5")) {
			take_text.textContent = set_text_msg.recon_line;
			autorized.classList.remove("none");
		}
		else if (event.target.classList.contains("address_6")) {
			take_text.textContent = set_text_msg.without_light;
			autorized.classList.remove("none");
		}
	};

function click_button_1 (event) {
	if (!autorized.classList.contains("none")) {
		take_text.textContent = "";
		first_btn = parent.removeChild(first_btn);
		parent.removeChild(second_btn);
		h3_take.textContent = ".....sending your message";
		take_text.classList.add("loading");
		setTimeout(replace_buttons, 10000);
	}
}

function replace_buttons () {
	h3_take.textContent = "";
	take_text.classList.remove("loading");
  if (msg_parser) {
	var span = "<span class='fa fa-check' style='color:green;font-size:40px;font-weight:500;position:absolute;left:40%;'></span><br><br><p class='container page_info_2' id='take_text' style='text-align:center;'>Message succesfully sent</p>",
	span_2 = "<a href='report_page.html' class='btn btn-success' id='first_btn'>continue</a>";
	parent.insertAdjacentHTML("beforeend", span);
	parent.insertAdjacentHTML("beforeend", span_2);
	remove_quota()
	} else {
	span = "<span class='fa fa-times' style='color:red;font-size:40px;font-weight:500;position:absolute;left:40%;'></span><br><br><p class='container page_info_2' id='take_text' style='text-align:center;'>Message Not sent. Try Again</p>";
	span_2 = "<a href='report_page.html' class='btn btn-warning' id='first_btn'>continue</a>";
	parent.insertAdjacentHTML("beforeend", span);
	parent.insertAdjacentHTML("beforeend", span_2);
	}
}

function click_button_2 (event) {
    if (!autorized.classList.contains("none")) {
    	autorized.classList.add("none");
    	second_btn.href = "#compose_msg"; 
    } 
}	

function compose_text_msg () {
	var textarea =  document.getElementById("textarea"),
	span_2 = add_comment.getElementsByTagName("span")[1],
	warning = "characters should not be more than 40";

    if (textarea.value.length > 40) {
    	textarea.style.border = "1px solid red";
    	add_comment.querySelectorAll(".quota_textarea")[0].style.backgroundColor = "red"
    	span_2.insertAdjacentHTML("afterbegin", warning.fontcolor("red"));
    	setTimeout(function () { span_2.insertAdjacentHTML("afterbegin", "")}, 5000);
    } else {
    	warning = "";
    	document.getElementById("take_text_2").textContent = textarea.value;
    	pl.classList.remove("none");
    }
}

function send_composed_msg (event) {
	if (!pl.classList.contains("none")) {
		take_text_2.textContent = "";
		parent_2_2.removeChild(first_inp);
		text_2.textContent = ".....sending your message";
		take_text_2.classList.add("loading");
		setTimeout(replace_composed_msg, 10000);
	}
}

function replace_composed_msg () {
	text_2.textContent = "";
	take_text_2.classList.remove("loading");
  if (msg_parser) {
	var span = "<span class='fa fa-check' style='color:green;font-size:40px;font-weight:500;position:absolute;left:40%;'></span><br><br><p class='container page_info_2' id='take_text' style='text-align:center;'>Message succesfully sent</p>",
	span_2 = "<a href='report_page.html' class='btn btn-success' id='first_btn'>continue</a>";
	parent_2_2.insertAdjacentHTML("beforeend", span);
	parent_2_2.insertAdjacentHTML("beforeend", span_2);
	remove_quota();
	} else {
	span = "<span class='fa fa-times' style='color:red;font-size:40px;font-weight:500;position:absolute;left:40%;'></span><br><br><p class='container page_info_2' id='take_text' style='text-align:center;'>Message Not sent. Try Again</p>";
	span_2 = "<a href='report_page.html' class='btn btn-warning' id='first_btn'>continue</a>";
	parent_2_2.insertAdjacentHTML("beforeend", span);
	parent_2_2.insertAdjacentHTML("beforeend", span_2);
	}
}

function remove_quota() {
    if (window.localStorage.length === 10) {
      window.localStorage.removeItem('quota9');
      quota.textContent = window.localStorage.length;
    } else if (window.localStorage.length === 9) {
      window.localStorage.removeItem('quota8');
      quota.textContent = '+' + window.localStorage.length;
    } else if (window.localStorage.length === 8) {
      window.localStorage.removeItem('quota7');
      quota.textContent = '+' + window.localStorage.length;
    } else if (window.localStorage.length === 7) {
      window.localStorage.removeItem('quota6');
      quota.textContent = '+' + window.localStorage.length;
    } else if (window.localStorage.length === 6) {
      window.localStorage.removeItem('quota5');
      quota.textContent = '+' + window.localStorage.length;
    } else if (window.localStorage.length === 5) {
      window.localStorage.removeItem('quota4');
      quota.textContent = '+' + window.localStorage.length;
    } else if (window.localStorage.length === 4) {
      window.localStorage.removeItem('quota3');
      quota.textContent = '+' + window.localStorage.length;
    } else if (window.localStorage.length === 3) {
      window.localStorage.removeItem('quota2');
      quota.textContent = '+' + window.localStorage.length;
    } else if (window.localStorage.length === 2) {
      window.localStorage.removeItem('quota1');
      $('#quota_alert').show();
      setTimeout(function () {$('#quota_alert').hide()}, 15000);
      quota.textContent = '+' + window.localStorage.length;
    } else if (window.localStorage.length === 1) {
      window.localStorage.removeItem('quota0');
      quota.textContent = '+' + window.localStorage.length;
    } else if (window.localStorage.length === 0) {
      window.location.replace('signOut.html');
    }
  }

function edit_msg (event) {
    if (!pl.classList.contains("none")) {
    	pl.classList.add("none");
    	fourth_btn.href = "#textarea"; 
    } 
}

function goBack () {
	history.back();
}

function goForward () {
	history.forward();
} 

function sign_out () {
	window.location.replace();
}

function word_enumerator () {
x = textarea.value.length;
document.getElementById("nos_count").textContent = x;
if (textarea.previousElementSibling.nodeName === 'SPAN') {
   if (textarea.previousElementSibling.innerHTML.length > 0) {
   		textarea.previousElementSibling.textContent = "";
   		textarea.style.border = "1px solid green";
   		add_comment.querySelectorAll(".quota_textarea")[0].style.backgroundColor = "#218DEA";
     }
  }

    if (textarea.value.length > 40) {
    	add_comment.querySelectorAll(".quota_textarea")[0].style.backgroundColor = "red"
   }
}

function changebg () {
  if (event.keyCode === 8) {
	if (textarea.value.length <= 40) {
		add_comment.querySelectorAll(".quota_textarea")[0].style.backgroundColor = "#218DEA";
	    }
    }
}

$("#compose_msg").click(function () { console.log(this)});

var firstName = " peter",
 lastName = "Ally";
  function showFullNames () {
  console.log(this.firstName + " " + this.lastName)
  } 
  
  window.showFullNames();

function init () {
//parent_div.addEventListener("click", one_click_email, true);
//second_btn.addEventListener("click", click_button_2);
//first_btn.addEventListener("click", click_button_1);
//compose_msg.addEventListener("click", compose_text_msg);
//third_btn.addEventListener("click", send_composed_msg);
fourth_btn.addEventListener("click", edit_msg);
textarea.addEventListener("input", word_enumerator);
textarea.addEventListener("keydown", changebg);
}

 init();
}());