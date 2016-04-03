var mapPage = (function () {
 var 
    transformer = 'images/new_transformer.gif',
    wrap_map = document.getElementById("map"),
    now_submit = document.getElementById("ad"),
    modal_box_ = document.getElementById("modal"),
    modal_link = document.querySelectorAll(".modal_link")[0],
    quota = document.getElementById('quota'),
    newLocation,
    li = document.getElementsByTagName("li"),
    geo_Map,
    autocomplete,
    newinfowindow,
    addy,
    quota = document.getElementById('quota'),
    div = document.querySelectorAll(".page_info_2")[0],
    mod_header = document.getElementById("mod_header"),
    configureModal = {
    upNepa_img : "<img src='img/start/bulbs/upNepa.png'>",
    downNepa_img : "<img src='img/start/bulbs/light_Off.png' alt='http://www.thelighting-company.co.uk/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/k/h/khl28-42-70gls-e27.png'>",
    h2_pos : "There Is Light",
    h2_neg : "No Light",
    transformer_blow : "<p>Hi there, this problem has been reported. It has been sent to the Oga at the top</p>",
},
parser = Math.floor(Math.random() * 2),
complan = document.getElementById('complan'),
    initialize_geo = function (callback) {
    
    //user_input = document.getElementById("any_address"),
    mapOptions = {
      center : new google.maps.LatLng(8.0000, 10.0000),
      zoom : 6
    };
    geo_Map = new google.maps.Map(wrap_map, mapOptions);
    wrap_map.classList.add("loading");
    quota.textContent = '+' + window.localStorage.length;
    callback();

    
 },
    z = 0,
    newLocation;
    
    get_user_position = function () {
    console.time("pausetime");  
    navigator.geolocation.getCurrentPosition(positionSuccess, positionError, positionOptions);
}
    var positionOptions = {
      enableHighAccuracy : true,
      maximumAge : 10000,
      timeout : 60000
    };

    function positionSuccess (position) { 
    //modal_link.setAttribute("data-toggle", "modal");
    //$(modal).show()
    newLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        marker_positions = [[6.506623179606779, 3.347502203541353], [6.510015254682043, 3.347556947443195], [6.5092268899865084, 3.3469494732107705], [6.507691738658793, 3.3458064064607242], [6.509910955202074, 3.3483407581904888], [6.50766533580812, 3.345328513739446], [6.509351614163335, 3.3441802572353936], [6.509089747718623, 3.3435528206875915], [6.508829062846491, 3.3429370508464444], [6.508849150177612, 3.346326154308599], [6.511624876847128, 3.3438890681448428], [6.510392030320103, 3.3442201023397047], [6.507992745912776, 3.341040218978378], [6.5099635291414, 3.341861258566041], [6.509495001520672, 3.339951212279402], [6.498888259283254, 3.3473837759552225], [6.499320037685539, 3.348070221484136], [6.503906806084277, 3.3476962313001195], [6.504432104278059, 3.347640976209618], [6.500901172822057, 3.346146143872261], [6.502237051485708, 3.3451152953424526], [6.5034715039509665, 3.3443129379371612], [6.5042285254304675, 3.3438177058428664], [6.505355483576793, 3.3430167722758597], [6.504599454508715, 3.3428684466889536], [6.5040258099201385, 3.3419896781837224], [6.501954228699198, 3.34230962219763], [6.505295463344597, 3.347178969174365], [6.499946112943077, 3.345587516818341], [6.497849874331626, 3.341003245875072], [6.49728252240201, 3.33932313239233741], [6.49689236470969, 3.3419596553621886], [6.500604734151317, 3.340280238086848], [6.498401633498982, 3.3386361601818635], [6.500572072461225, 3.34140614501689], [6.501410083421605, 3.3385222024459154], [6.49709016283481, 3.347318838198589], [6.4978960988477406, 3.346789832022978], [6.498775608238271, 3.34579857437177], [6.500556485572931, 3.3433167927291834], [6.499118063945248, 3.3429693832509884], [6.498756152889632, 3.3439856005727506], [6.502848554219036, 3.339953877691869], [6.504034609192129, 3.3400140955864117], [6.503131103515623, 3.3391540527343295], [6.496312617746675, 3.345256958841219], [6.497099916354457, 3.3455469111179355], [6.491845015414898, 3.344129797463438], [6.491930069170155, 3.3435515740261508], [6.496191091003958, 3.3390222531645577], [6.495561367449365, 3.3379848668674867], [6.500529862477947, 3.352208986384312], [6.493872422362663, 3.3452220469406484]],
    markers_title = ["Ayinde Sub-Station", "Olatilewa Sub-Station", "Abayomi Sub-Station", "Muniru Baruwa Sub-Station", "Ajose SubStation", "Abiodun Wright SubStation", "Onadeko SubStation", "Zamba SubStation", "Gasper SubStation", "Akanji SubStation", "Babalola 1 SubStation", "Babalola 2 SubStation", "Olaogun 1 SubStation", "Olaogun 2 SubStation", "Ramoni SubStation", "Odelola 2 SubStation", "Odelola 1 SubStation", "Folawiyo Bankole SubStation", "Victoria SubStation", "Apogunma SubStation", "Olaitan Odularu SubStation", "Ajoke SubStation", "Nnobi SubStation", "Ijero SubStation", "Onibuore 1 SubStation", "Onibuore 2 SubStation", "Oduduwa 1 SubStation", "Memedu Aremu SubStation", "Olayemi SubStation",  "Ola Ona SubStation", "Shaki Crescent SubStation", "St Barths SubStation", "Rosanwo SubStation", "Aina SubStation", "Ogunleye SubStation", "Oladehinde SubStation", "Nuru Oniwo 1 substation", "Adex 1 Substation", "Adex 2 Substation", "Ikenne Substation", "Eloseh Substation", "Agoro Substation", "Dipo Olubi Substation", "Alhaji Otun Substation", "Owoseni Substation", "Ogundare Substation", "Nuru Oniwo 2 Substation", "Aiyetoro Substation", "Ademola Oki Substation", "Enitan Substation", "Shola Bunmi Substation", "Maduagwu Morunu SubStation", "Olatunde substation"];
     
    for (z; z < (marker_positions.length || markers_title.length); z++) { 
       pos_LatLng = new google.maps.LatLng(marker_positions[z][0], marker_positions[z][1]);
       position_markers = new google.maps.Marker({position : pos_LatLng , map : geo_Map, icon : transformer, title :  markers_title[z]}); 
    }
    
  
    marker = new google.maps.Marker({
      position : newLocation,
     map : geo_Map,
      draggable : true,
      //label : "D",
      //icon : 'images/medium_house.png',
      title : "You are here"
      //animation : google.maps.Animation.BOUNCE  
     });
     geo_Map.setZoom(18);
     wrap_map.classList.remove("loading");
    geo_Map.setCenter(newLocation);
    log_result(position.coords.accuracy, newLocation);
    //reverse_geocoder(newLocation);

   

     if (positionSuccess) {
         setTimeout(give_user_info, 1000);
         setTimeout(remove_user_info, 8000)
         setTimeout(function () { 
          //$(modal).hide();
         if (parser) {
         document.getElementById("autorized").classList.remove("none");
         div.insertAdjacentHTML("afterbegin", configureModal.downNepa_img);
         mod_header.insertAdjacentHTML("afterbegin", configureModal.h2_neg);
         complan.insertAdjacentHTML("beforebegin", "<a type='button' class='btn btn-warning' href='invite_us..html'>Subscribe to instant Alert</a>");
         complan.innerHTML = "But, i have Light";
         complan.href = 'complaint.html';
         remove_quota();
       } else {
          document.getElementById("autorized").classList.remove("none");
         div.insertAdjacentHTML("afterbegin", configureModal.upNepa_img);
         mod_header.insertAdjacentHTML("afterbegin", configureModal.h2_pos);
         complan.insertAdjacentHTML("beforebegin", "<a type='button' class='btn btn-warning' href='invite_us..html'>Subscribe to instant Alert</a>");
         complan.innerHTML = "But, i dont have light";
         complan.href = 'support_faq_page.html#faq';
         remove_quota();
       }}, 8000); 

      } else {
        alert("marker isnt");
      }
            
      
    marker.addListener('position_changed', function (event) {
        markerPosition = marker.getPosition();
        reverse_geocoder(markerPosition);
        contentString = "your address is " + addy;
       }); 
       
        setTimeout(function () {
        marker.addListener("dragend", function (event) {         
        newinfowindow = new google.maps.InfoWindow();             
        newinfowindow.setContent(contentString);
        newinfowindow.open(geo_Map, marker);
        
        })}, 0);
 }
   
    function positionError () {
      $('#alarm').show(5000);
      setTimeout(function () { $('#alarm').hide()}, 10000);
      //alert("power.ng could not get your location. Please try again");
    }

    function give_user_info () {
      document.getElementById("autorized").classList.remove("none");
      mod_header.textContent = "We've found your street. Now checking for power....";
      div.classList.add('loading');
      $('#cont').hide();
    }
    
    function remove_user_info () {
      mod_header.textContent = '';
      div.classList.remove('loading');
      $('#cont').show();
    }  
   
  function log_result (accuracy_result, position_result) {
      var log_test = {
        "Accuracy" : accuracy_result,
        "LatLng" : position_result
      };
      for (var prop in log_test) {
      li[0].insertAdjacentHTML("afterbegin", prop + ' : ' + log_test[prop] + '<br>');
        }
  }

  /*function resultPage {
    modal_link.setAttribute("data-toggle", "modal");
  }*/

  function init () {
    google.maps.event.addDomListener(window, "load", initialize_geo(get_user_position));
    //now_submit.addEventListener("click", get_user_position);
  };

function reverse_geocoder(location) {
  //var address = document.getElementById('any_address').value;
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({'location': location}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
        addy = results[0].formatted_address;
      //li[1].insertAdjacentHTML("afterbegin", " Auto-Address: " + results[0].formatted_address);
      //li[2].insertAdjacentHTML("afterbegin", " Auto place_id: " + results[0].place_id);
    } else {
      //alert('Geocode was not successful for the following reason: ' + status);
    }
  });

}

function remove_quota () {
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
    } else {
      window.location.replace('signOut.html');
    }
  }

function goBack () {
  window.history.back();
}

function goForward() {
  window.history.forward();
}

function sign_out () {
  window.location.replace('signOut.html')
}

function tos() {
  document.getElementById("tos").textContent = "Page under construction";
}


function disclaimer() {
  document.getElementById("disclaimer").textContent = "Page under construction";
}
 init();

}());