var PowerForecast = (function () {
var 
body = document.body,
user_num = document.querySelectorAll(".user_num"),
month_day = document.querySelectorAll(".month_day"),
user_block = document.querySelectorAll(".user_block"),
user_sm1 = document.querySelectorAll("user_sm1")[0],
quota = document.getElementById('quota'),
user_sm = document.querySelectorAll(".user_sm"),
bulbs = document.querySelectorAll(".bulbs"),
fb_btn = document.querySelectorAll(".fb_btn");
date = new Date(),
todays_date = [],
i = 0,
j = 0,
x= 0,
a = 0,
b = 0,
c = 0,
d = 0,
e = 0,
f = 0,
month_name = new Array(11),
week_day = new Array(7);
week_day[0] = "Mon";
week_day[1] = "Tue";
week_day[2] = "Wed";
week_day[3] = "Thur";
week_day[4] = "Fri";
week_day[5] = "Sat";
week_day[6] = "Sun";

month_name[0] = "Jan";
month_name[1] = "Feb";
month_name[2] = "Mar";
month_name[3] = "Apr";
month_name[4] = "May";
month_name[5] = "Jun";
month_name[6] = "Jul";
month_name[7] = "Aug";
month_name[8] = "Sep";
month_name[9] = "Oct";
month_name[10] = "Nov";
month_name[11] = "Dec";

function set_Day () {
	curr_day = week_day[date.getDay()];
	for (i; i < (user_num.length && week_day.length); i++) {
		user_num[i].insertAdjacentHTML("afterbegin", week_day[i]);
	}
} 

function set_month_day () {
	var day_num = 0,
	curr_month = month_name[date.getMonth()];
	if (curr_month) {
     for (j; j < month_day.length; j++) {
     	month_day[j].insertAdjacentHTML("afterbegin", curr_month + " " + (date.getDate() + j));

     }
   }
}

function get_forecast (event) {
	remove_quota()
	if (event.target.classList.contains("user_sm1")) {
		fb_btn[0].classList.add("loading");
		fb_btn[1].classList.add("loading");
		fb_btn[2].classList.add("loading");
		fb_btn[3].classList.add("loading");
		bulbs[0].classList.add("loading");
		bulbs[1].classList.add("loading");
		bulbs[2].classList.add("loading");
		bulbs[3].classList.add("loading");
		setTimeout(function () { 
		if (Math.random() < 0.25) {
			fb_btn[0].textContent = "7Hrs Light";
			fb_btn[1].textContent = "3Hrs Low Current";
			fb_btn[2].textContent = "4Hrs No Light";
			fb_btn[3].textContent = "5Hrs Light";
			bulbs[0].src = 'img/start/bulbs/danglingon.gif';
			bulbs[1].src = 'img/start/bulbs/danglinglow.jpg';
			bulbs[2].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[3].src = 'img/start/bulbs/danglingon.gif';
			bulbs[0].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
	        bulbs[1].alt = 'http://images.landofnod.com/is/image/LandOfNod/Lamp_Pendant_Bulb_V2_1011?$zm$';
	        bulbs[2].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
	        bulbs[0].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
		} else if (Math.random() > 0.25 < 0.5) {
			fb_btn[0].textContent = "5Hrs Light";
			fb_btn[1].textContent = "3Hrs Low Current";
			fb_btn[2].textContent = "7Hrs Light";
			fb_btn[3].textContent = "4Hrs No Light";
			bulbs[0].src = 'img/start/bulbs/danglingon.gif';
			bulbs[1].src = 'img/start/bulbs/danglinglow.jpg';
			bulbs[2].src = 'img/start/bulbs/danglingon.gif';
			bulbs[3].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[0].alt = 'http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[1].alt = 'http://images.landofnod.com/is/image/LandOfNod/Lamp_Pendant_Bulb_V2_1011?$zm$';
			bulbs[2].alt = 'http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[3].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
		} else if (Math.random() > 0.5 < 0.75) {
			fb_btn[0].textContent = "4Hrs No Light";
			fb_btn[1].textContent = "4Hrs No Light";
			fb_btn[2].textContent = "7Hrs Light";
			fb_btn[3].textContent = "5Hrs Light";
			bulbs[0].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[1].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[2].src = 'img/start/bulbs/danglingon.gif';
			bulbs[3].src = 'img/start/bulbs/danglingon.gif';
			bulbs[0].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[1].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[2].alt = 'http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[3].alt = 'http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
		} else {
			fb_btn[0].textContent = "5Hrs Light";
			fb_btn[1].textContent = "5Hrs Light";
			fb_btn[2].textContent = "7Hrs Light";
			fb_btn[3].textContent = "2Hrs Low Current";
			bulbs[0].src = 'img/start/bulbs/danglingon.gif';
			bulbs[1].src = 'img/start/bulbs/danglingon.gif';
			bulbs[2].src = 'img/start/bulbs/danglingon.gif';
			bulbs[3].src = 'img/start/bulbs/danglinglow.jpg';
			bulbs[0].alt = 'http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[1].alt = 'http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[2].alt = 'http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[3].alt = 'http://images.landofnod.com/is/image/LandOfNod/Lamp_Pendant_Bulb_V2_1011?$zm$';

		}
		stop_loading ();
	}, 10000);
	} else if (event.target.classList.contains("user_sm2")) {
		fb_btn[0].classList.add("loading");
		fb_btn[1].classList.add("loading");
		fb_btn[2].classList.add("loading");
		fb_btn[3].classList.add("loading");
		bulbs[0].classList.add("loading");
		bulbs[1].classList.add("loading");
		bulbs[2].classList.add("loading");
		bulbs[3].classList.add("loading");
		setTimeout(function () {
		if (Math.random() < 0.25) {
			fb_btn[0].textContent = "4Hrs Light";
			fb_btn[1].textContent = "5Hrs Low Current";
			fb_btn[2].textContent = "4Hr No Light";
			fb_btn[3].textContent = "4Hr No Light";
			bulbs[0].src = 'img/start/bulbs/danglingon.gif';
			bulbs[1].src = 'img/start/bulbs/danglinglow.jpg';
			bulbs[2].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[3].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[0].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[1].alt = 'http://images.landofnod.com/is/image/LandOfNod/Lamp_Pendant_Bulb_V2_1011?$zm$';
			bulbs[2].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[3].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
		} else if (Math.random() > 0.25 < 0.5) {
			fb_btn[0].textContent = "7Hrs Low Current";
			fb_btn[1].textContent = "4Hrs No Light";
			fb_btn[2].textContent = "5Hrs No Light";
			fb_btn[3].textContent = "3Hrs Low Current";
			bulbs[0].src = 'img/start/bulbs/danglinglow.jpg';
			bulbs[1].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[2].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[3].src = 'img/start/bulbs/danglinglow.jpg';
			bulbs[0].alt = 'http://images.landofnod.com/is/image/LandOfNod/Lamp_Pendant_Bulb_V2_1011?$zm$';
			bulbs[1].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[2].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[3].alt = 'http://images.landofnod.com/is/image/LandOfNod/Lamp_Pendant_Bulb_V2_1011?$zm$';
		} else if (Math.random() > 0.5 < 0.75) {
			fb_btn[0].textContent = "6Hrs No Light";
			fb_btn[1].textContent = "3Hrs No Light";
			fb_btn[2].textContent = "5Hrs Light";
			fb_btn[3].textContent = "4Hrs Low Current";
			bulbs[0].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[1].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[2].src = 'img/start/bulbs/danglingon.gif';
			bulbs[3].src = 'img/start/bulbs/danglinglow.jpg';
			bulbs[0].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[1].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[2].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[3].alt = 'http://images.landofnod.com/is/image/LandOfNod/Lamp_Pendant_Bulb_V2_1011?$zm$';
		} else {
			fb_btn[0].textContent = "5Hrs N0 Light";
			fb_btn[1].textContent = "3.5Hrs No Light";
			fb_btn[2].textContent = "7Hrs Light";
			fb_btn[3].textContent = "5Hrs Light";
			bulbs[0].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[1].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[2].src = 'img/start/bulbs/danglingon.gif';
			bulbs[3].src = 'img/start/bulbs/danglingon.gif';
			bulbs[0].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[1].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[2].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[3].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
		}
		stop_loading ();
	}, 10000);
	} else if (event.target.classList.contains("user_sm3")) {
		fb_btn[0].classList.add("loading");
		fb_btn[1].classList.add("loading");
		fb_btn[2].classList.add("loading");
		fb_btn[3].classList.add("loading");
		bulbs[0].classList.add("loading");
		bulbs[1].classList.add("loading");
		bulbs[2].classList.add("loading");
		bulbs[3].classList.add("loading");
		setTimeout(function () {
		if (Math.random() < 0.25) {
			fb_btn[0].textContent = "5Hrs No Light";
			fb_btn[1].textContent = "1Hr No Light";
			fb_btn[2].textContent = "4Hrs Light";
			fb_btn[3].textContent = "3Hrs Light";
			bulbs[0].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[1].src = 'img/start/bulbs/danglingon.gif';
			bulbs[2].src = 'img/start/bulbs/danglingon.gif';
			bulbs[3].src = 'img/start/bulbs/danglingon.gif';
			bulbs[0].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[1].alt = 'http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[2].alt = 'http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[3].alt = 'http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
		} else if (Math.random() > 0.25 < 0.5) {
			fb_btn[0].textContent = "4Hrs Low Current";
			fb_btn[1].textContent = "5Hrs Light";
			fb_btn[2].textContent = "7Hrs Light";
			fb_btn[3].textContent = "5Hrs No Light";
			bulbs[0].src = 'img/start/bulbs/danglinglow.jpg';
			bulbs[1].src = 'img/start/bulbs/danglingon.gif';
			bulbs[2].src = 'img/start/bulbs/danglingon.gif';
			bulbs[3].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[0].alt = 'http://images.landofnod.com/is/image/LandOfNod/Lamp_Pendant_Bulb_V2_1011?$zm$';
			bulbs[1].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[2].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[3].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
		} else if (Math.random() > 0.5 < 0.75) {
			fb_btn[0].textContent = "1Hr No Light";
			fb_btn[1].textContent = "7Hrs Light";
			fb_btn[2].textContent = "5Hrs Light";
			fb_btn[3].textContent = "4Hrs Light";
			bulbs[0].src = 'img/start/bulbs/danglingon.gif';
			bulbs[1].src = 'img/start/bulbs/danglingon.gif';
			bulbs[2].src = 'img/start/bulbs/danglingon.gif';
			bulbs[3].src = 'img/start/bulbs/danglingon.gif';
			bulbs[0].alt = 'http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[1].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[2].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[3].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
		} else {
			fb_btn[0].textContent = "10Hrs No Light";
			fb_btn[1].textContent = "7Hrs Light";
			fb_btn[2].textContent = "5Hrs Light";
			fb_btn[3].textContent = "5Hrs N0 Light";
			bulbs[0].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[1].src = 'img/start/bulbs/danglingon.gif';
			bulbs[2].src = 'img/start/bulbs/danglingon.gif';
			bulbs[3].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[0].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[1].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[2].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[3].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
		}
		stop_loading ();
	}, 10000);
	} else if (event.target.classList.contains("user_sm4")) {
		fb_btn[0].classList.add("loading");
		fb_btn[1].classList.add("loading");
		fb_btn[2].classList.add("loading");
		fb_btn[3].classList.add("loading");
		bulbs[0].classList.add("loading");
		bulbs[1].classList.add("loading");
		bulbs[2].classList.add("loading");
		bulbs[3].classList.add("loading");
		setTimeout(function () {
		if (Math.random() < 0.25) {
			fb_btn[0].textContent = "10Hrs Light";
			fb_btn[1].textContent = "4Hrs No Light";
			fb_btn[2].textContent = "5Hrs Light";
			fb_btn[3].textContent = "4Hrs Light";
			bulbs[0].src = 'img/start/bulbs/danglingon.gif';
			bulbs[1].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[2].src = 'img/start/bulbs/danglingon.gif';
			bulbs[3].src = 'img/start/bulbs/danglingon.gif';
			bulbs[0].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[1].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[2].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[3].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
		} else if (Math.random() > 0.25 < 0.5) {
			fb_btn[0].textContent = "5Hrs No Light";
			fb_btn[1].textContent = "4Hrs Low Current";
			fb_btn[2].textContent = "3Hrs Light";
			fb_btn[3].textContent = "4Hrs Light";
			bulbs[0].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[1].src = 'img/start/bulbs/danglinglow.jpg';
			bulbs[2].src = 'img/start/bulbs/danglingon.gif';
			bulbs[3].src = 'img/start/bulbs/danglingon.gif';
			bulbs[0].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[1].alt = 'http://images.landofnod.com/is/image/LandOfNod/Lamp_Pendant_Bulb_V2_1011?$zm$';
			bulbs[2].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[3].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
		} else if (Math.random() > 0.5 < 0.75) {
			fb_btn[0].textContent = "5Hrs No Light";
			fb_btn[1].textContent = "4Hrs No Light";
			fb_btn[2].textContent = "4Hrs Light";
			fb_btn[3].textContent = "3Hrs Light";
			bulbs[0].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[1].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[2].src = 'img/start/bulbs/danglingon.gif';
			bulbs[3].src = 'img/start/bulbs/danglingon.gif';
			bulbs[0].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[1].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[2].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[3].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
		} else {
			fb_btn[0].textContent = "6Hrs Light";
			fb_btn[1].textContent = "5Hrs No Light";
			fb_btn[2].textContent = "0.5Hr No Light";
			fb_btn[3].textContent = "4Hrs Low Current";
			bulbs[0].src = 'img/start/bulbs/danglingon.gif';
			bulbs[1].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[2].src = 'img/start/bulbs/danglingon.gif';
			bulbs[3].src = 'img/start/bulbs/danglinglow.jpg';
			bulbs[0].alt = 'http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[1].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[2].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[3].alt = 'http://images.landofnod.com/is/image/LandOfNod/Lamp_Pendant_Bulb_V2_1011?$zm$';
		}
		stop_loading ();
	}, 10000);
	} else if (event.target.classList.contains("user_sm5")) {
		fb_btn[0].classList.add("loading");
		fb_btn[1].classList.add("loading");
		fb_btn[2].classList.add("loading");
		fb_btn[3].classList.add("loading");
		bulbs[0].classList.add("loading");
		bulbs[1].classList.add("loading");
		bulbs[2].classList.add("loading");
		bulbs[3].classList.add("loading");
		setTimeout(function () {
		if (Math.random() < 0.25) {
			fb_btn[0].textContent = "5Hrs No Light";
			fb_btn[1].textContent = "4Hrs Low current";
			fb_btn[2].textContent = "4Hrs Light";
			fb_btn[3].textContent = "5Hrs No Light";
			bulbs[0].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[1].src = 'img/start/bulbs/danglinglow.jpg';
			bulbs[2].src = 'img/start/bulbs/danglingon.gif';
			bulbs[3].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[0].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[1].alt = 'http://images.landofnod.com/is/image/LandOfNod/Lamp_Pendant_Bulb_V2_1011?$zm$';
			bulbs[2].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[3].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
		} else if (Math.random() > 0.25 < 0.5) {
			fb_btn[0].textContent = "3Hrs Light";
			fb_btn[1].textContent = "5Hrs No Light";
			fb_btn[2].textContent = "4Hrs No Light";
			fb_btn[3].textContent = "4Hrs Light";
			bulbs[0].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[1].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[2].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[3].src = 'img/start/bulbs/danglingon.gif';
			bulbs[0].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[1].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[2].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[3].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
		} else if (Math.random() > 0.5 < 0.75) {
			fb_btn[0].textContent = "1Hr Light";
			fb_btn[1].textContent = "3Hrs No Light";
			fb_btn[2].textContent = "4Hrs Light";
			fb_btn[3].textContent = "4Hrs Low current";
			bulbs[0].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[1].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[2].src = 'img/start/bulbs/danglingon.gif';
			bulbs[3].src = 'img/start/bulbs/danglinglow.jpg';
			bulbs[0].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[1].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[2].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[3].alt = 'http://images.landofnod.com/is/image/LandOfNod/Lamp_Pendant_Bulb_V2_1011?$zm$';
		} else {
			fb_btn[0].textContent = "3Hrs No Light";
			fb_btn[1].textContent = "4Hrs Light";
			fb_btn[2].textContent = "4Hrs Low current";
			fb_btn[3].textContent = "5Hrs No Light";
			bulbs[0].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[1].src = 'img/start/bulbs/danglingon.gif';
			bulbs[2].src = 'img/start/bulbs/danglinglow.jpg';
			bulbs[3].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[0].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[1].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[2].alt = 'http://images.landofnod.com/is/image/LandOfNod/Lamp_Pendant_Bulb_V2_1011?$zm$';
			bulbs[3].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
		}
		stop_loading ();
	}, 10000);
	} else if (event.target.classList.contains("user_sm6")) {
		fb_btn[0].classList.add("loading");
		fb_btn[1].classList.add("loading");
		fb_btn[2].classList.add("loading");
		fb_btn[3].classList.add("loading");
		bulbs[0].classList.add("loading");
		bulbs[1].classList.add("loading");
		bulbs[2].classList.add("loading");
		bulbs[3].classList.add("loading");
		setTimeout(function () {
		if (Math.random() < 0.25) {
			fb_btn[0].textContent = "3Hrs No Light";
			fb_btn[1].textContent = "4Hrs Light";
			fb_btn[2].textContent = "4Hrs Low current";
			fb_btn[3].textContent = "8Hrs Light";
			bulbs[0].src = 'img/start/bulbs/danglingon.gif';
			bulbs[1].src = 'img/start/bulbs/danglingon.gif';
			bulbs[2].src = 'img/start/bulbs/danglinglow.jpg';
			bulbs[3].src = 'img/start/bulbs/danglingon.gif';
			bulbs[0].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[1].alt = 'http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[2].alt = 'http://images.landofnod.com/is/image/LandOfNod/Lamp_Pendant_Bulb_V2_1011?$zm$';
			bulbs[3].alt = 'http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
		} else if (Math.random() > 0.25 < 0.5) {
			fb_btn[0].textContent = "4Hrs Low Current";
			fb_btn[1].textContent = "5Hrs No Light";
			fb_btn[2].textContent = "4Hrs Light";
			fb_btn[3].textContent = "4Hrs Low current";
			bulbs[0].src = 'img/start/bulbs/danglinglow.jpg';
			bulbs[1].src = 'img/start/bulbs/danglinglow.jpg';
			bulbs[2].src = 'img/start/bulbs/danglingon.gif';
			bulbs[3].src = 'img/start/bulbs/danglinglow.jpg';
			bulbs[0].alt = 'http://images.landofnod.com/is/image/LandOfNod/Lamp_Pendant_Bulb_V2_1011?$zm$';
			bulbs[1].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[2].alt = 'http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[3].alt = 'http://images.landofnod.com/is/image/LandOfNod/Lamp_Pendant_Bulb_V2_1011?$zm$';
		} else if (Math.random() > 0.5 < 0.75) {
			fb_btn[0].textContent = "5Hrs No Light";
			fb_btn[1].textContent = "4Hrs No Light";
			fb_btn[2].textContent = "6Hrs Light";
			fb_btn[3].textContent = "4Hrs Low current";
			bulbs[0].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[1].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[2].src = 'img/start/bulbs/danglingon.gif';
			bulbs[3].src = 'img/start/bulbs/danglinglow.jpg';
			bulbs[0].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[1].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[2].alt = 'http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[3].alt = 'http://images.landofnod.com/is/image/LandOfNod/Lamp_Pendant_Bulb_V2_1011?$zm$';
		} else {
			fb_btn[0].textContent = "6Hrs Light";
			fb_btn[1].textContent = "4Hrs No Light";
			fb_btn[2].textContent = "4Hrs Light";
			fb_btn[3].textContent = "0Hr Light";
			bulbs[0].src = 'img/start/bulbs/danglingon.gif';
			bulbs[1].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[2].src = 'img/start/bulbs/danglingon.gif';
			bulbs[3].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[0].alt = 'http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[1].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[2].alt = 'http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[3].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
		}
		stop_loading ();
	}, 10000);
	} else if (event.target.classList.contains("user_sm7")) {
		fb_btn[0].classList.add("loading");
		fb_btn[1].classList.add("loading");
		fb_btn[2].classList.add("loading");
		fb_btn[3].classList.add("loading");
		bulbs[0].classList.add("loading");
		bulbs[1].classList.add("loading");
		bulbs[2].classList.add("loading");
		bulbs[3].classList.add("loading");
		setTimeout(function () {
		if (Math.random() < 0.25) {
			fb_btn[0].textContent = "4Hrs No Light";
			fb_btn[1].textContent = "3Hrs No Light";
			fb_btn[2].textContent = "4Hrs Light";
			fb_btn[3].textContent = "4Hrs Light";
			bulbs[0].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[1].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[2].src = 'img/start/bulbs/danglingon.gif';
			bulbs[3].src = 'img/start/bulbs/danglingon.gif';
			bulbs[0].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[1].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[2].alt = 'http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[3].alt = 'http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
		} else if (Math.random() > 0.25 < 0.5) {
			fb_btn[0].textContent = "1Hr Light";
			fb_btn[1].textContent = "3Hrs No Light";
			fb_btn[2].textContent = "6Hrs Light";
			fb_btn[3].textContent = "3Hrs Low current";
			bulbs[0].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[1].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[2].src = 'img/start/bulbs/danglingon.gif';
			bulbs[3].src = 'img/start/bulbs/danglinglow.jpg';
			bulbs[0].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[1].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[2].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[3].alt = 'http://images.landofnod.com/is/image/LandOfNod/Lamp_Pendant_Bulb_V2_1011?$zm$';
		} else if (Math.random() > 0.5 < 0.75) {
			fb_btn[0].textContent = "5Hrs No Light";
			fb_btn[1].textContent = "3Hrs No Light";
			fb_btn[2].textContent = "4Hrs Light";
			fb_btn[3].textContent = "4Hrs Low current";
			bulbs[0].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[1].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[2].src = 'img/start/bulbs/danglingon.gif';
			bulbs[3].src = 'img/start/bulbs/danglinglow.jpg';
			bulbs[0].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[1].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[2].alt = 'http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[3].alt = 'http://images.landofnod.com/is/image/LandOfNod/Lamp_Pendant_Bulb_V2_1011?$zm$';
		} else {
			fb_btn[0].textContent = "3Hrs No Light";
			fb_btn[1].textContent = "4Hrs Light";
			fb_btn[2].textContent = "4Hrs Low current";
			fb_btn[3].textContent = "3Hrs Light";
			bulbs[0].src = 'img/start/bulbs/danglingoff.jpg';
			bulbs[1].src = 'img/start/bulbs/danglingon.gif';
			bulbs[2].src = 'img/start/bulbs/danglinglow.jpg';
			bulbs[3].src = 'img/start/bulbs/danglingon.gif';
			bulbs[0].alt = 'https://s-media-cache-ak0.pinimg.com/236x/d3/d6/eb/d3d6eb582fd84bea533ff3958171ad51.jpg';
			bulbs[1].alt = 'http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
			bulbs[3].alt = 'http://images.landofnod.com/is/image/LandOfNod/Lamp_Pendant_Bulb_V2_1011?$zm$';
			bulbs[3].alt ='http://38.media.tumblr.com/38ec13182b0f584eee95b6e8442f6219/tumblr_nphm724HXk1qdmmiqo1_500.gif';
		}
		stop_loading ();
	}, 10000);
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


function stop_loading () {
		fb_btn[0].classList.remove("loading");
		fb_btn[1].classList.remove("loading");
		fb_btn[2].classList.remove("loading");
		fb_btn[3].classList.remove("loading");
		bulbs[0].classList.remove("loading");
		bulbs[1].classList.remove("loading");
		bulbs[2].classList.remove("loading");
		bulbs[3].classList.remove("loading");
}

$(".user_sm").click(function () {
	$(".user_sm").removeClass("active");
	$(this).addClass("active");
});

function call_funcs () {
	set_Day();
	set_month_day();
	quota.textContent = '+' + window.localStorage.length;
}

function init () {
	body.addEventListener("load", call_funcs, true)
	user_block[0].addEventListener("click", get_forecast, true);

}

init();

}());