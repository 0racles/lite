var set = (function () { 
    var 
    transformer = 'images/new_transformer.gif',
    wrap_map = document.getElementById("wrap_map"),
    i_submit = document.getElementById("i_submit"),
    newLocation,
    save_street = document.querySelectorAll(".save_street")[0],
    geo_Map,
    autocomplete,
    newinfowindow,
    addy,
    autorize = document.getElementById("autorized"),
    i = 0,
    mod_header = document.getElementById("mod_header"),
    street_yes = document.querySelectorAll(".street_yes")[0],
    street_no = document.querySelectorAll(".street_no")[0],
    page_info_2 = document.querySelectorAll(".page_info_2"),
    forme = document.querySelectorAll(".forme")[0],
    cd_parser = Math.floor(Math.random() * 2),
    quota = document.getElementById('quota'),
    form_inputs = {
      street_number : 'short_name',
      route : 'long_name',
      //country : 'long_name',
      administrative_area_level_1 : 'long_name'
    },
    initialize_geo = function (callback) {
    
    user_input = document.getElementById("my_address"),
    mapOptions = {
      center : new google.maps.LatLng(6.5833, 3.7500),
      zoom : 8
    };
    geo_Map = new google.maps.Map(wrap_map, mapOptions);
    wrap_map.classList.add("loading");
    callback();
    quota.textContent = '+' + window.localStorage.length;
    
 },
    z = 0,
    newLocation;
        
    get_user_position = function () {
    navigator.geolocation.getCurrentPosition(positionSuccess, positionError, positionOptions);
}
    var positionOptions = {
      enableHighAccuracy : true,
      maximumAge : 10000,
      timeout : 60000
    };

    function positionSuccess (position) { 
    newLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        
    wrap_map.classList.remove("loading");  
  
    marker = new google.maps.Marker({
      position : newLocation,
      map : geo_Map,
      draggable : true,
      //label : "D",
      //icon : 'img/start/map_icons/medium_house.png',
      title : "You are here"
      //animation : google.maps.Animation.BOUNCE  
     });
     
    geo_Map.setZoom(18);
    geo_Map.setCenter(newLocation);
    
      //reverse_geocoder(newLocation);
       
    marker.addListener('position_changed', function (event) {
        markerPosition = marker.getPosition();
        reverse_geocoder(markerPosition);
        contentString = "your address is " + addy;
        //infowindow = new google.maps.InfoWindow();
        //contentString = "Your address is: " + markerPosition;
        //infowindow.setContent(contentString);
        
       }); 
    newinfowindow = new google.maps.InfoWindow(); 
    newinfowindow.setContent("Drag me");
    newinfowindow.open(geo_Map, marker);   

        setTimeout(function () {
        marker.addListener("dragend", function (event) {         
                    
        newinfowindow.setContent(contentString);
        //newinfowindow.open(geo_Map, marker);
        page_info_2[1].textContent = addy;
        })}, 0);

        marker.addListener("place_changed", function (event) {
        page_info_2[1].textContent = "";
        })

 }
   
    function positionError () {
      wrap_map.classList.remove("loading");
      alert("power.ng could not get your location. Please try again");
    }
    
        
    function userAutocomplete () {
    var query_options = {
        bounds: geo_Map.getBounds(),
        types : ['address']
        
        };
    autocomplete = new google.maps.places.Autocomplete(/** @type {!HTMLInputElement} */(document.getElementById("my_address")), query_options);
    places = new google.maps.places.PlacesService(geo_Map);
    autocomplete.addListener('place_changed', populateField);
    geo_Map.setCenter(addy);
    }

  function populateField () {
    var place = autocomplete.getPlace();


    for (var component in form_inputs) {
      document.getElementById(component).value = '';
      document.getElementById(component).disabled = false; 
    }

    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      if (form_inputs[addressType]) {
        var val = place.address_components[i][form_inputs[addressType]];
        document.getElementById(addressType).value = val;
      }
    }
    //new_addy = place.geometry.location.lat() + ', ' + place.geometry.location.lng()
    geo_Map.setCenter(place.geometry.location);
    marker.setPosition(place.geometry.location);
  }

  function validate_forme () {
    form_head = document.querySelectorAll(".form_head")[0];
    header = document.getElementById("header");
    text_text = document.getElementById("text_text");
      if (forme.value === "") {
        forme.style.border = '1px solid red';
        forme.placeholder = "enter your house number";
      } else {       
        if (!pl.classList.contains("none")) {
          header.textContent = "We are now searching your street.....";
          form_head.removeChild(document.getElementById("child"));
          text_text.classList.add("loading");
          setTimeout(res_validate_forme, 6000);
      }
    }
}

function res_validate_forme () {
  text_text.classList.remove("loading");
  header.textContent = "";
   if (cd_parser) {
  var span = "<span class='fa fa-check' style='color:green;font-size:40px;font-weight:500;position:absolute;left:40%;'></span><br><br><p class='container page_info_2' id='take_text' style='text-align:center;'>Message succesfully sent</p>",
  span_2 = "<a href='menu_2_page.html' class='btn btn-success' id='first_btn'>continue</a>";
  form_head.insertAdjacentHTML("beforeend", span);
  form_head.insertAdjacentHTML("beforeend", span_2);
  } else {
  span = "<span class='fa fa-times' style='color:red;font-size:40px;font-weight:500;position:absolute;left:40%;'></span><br><br><p class='container page_info_2' id='take_text' style='text-align:center;'>Message Not sent. Try Again</p>";
  span_2 = "<a href='set_page.html' class='btn btn-warning' id='first_btn'>continue</a>";
  form_head.insertAdjacentHTML("beforeend", span);
  form_head.insertAdjacentHTML("beforeend", span_2);
  }
}

function remove_forme_border () {
  forme.style.border = '1px solid green';
}

function reverse_geocoder(location) {
  //var address = document.getElementById('any_address').value;
  geocoder = new google.maps.Geocoder();
  geocoder.geocode({'location': location}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
        addy = results[0].formatted_address;
        //geocodeAddress(addy);
      //li[1].insertAdjacentHTML("afterbegin", " Auto-Address: " + results[0].formatted_address);
      //li[2].insertAdjacentHTML("afterbegin", " Auto place_id: " + results[0].place_id);
    } else {
      //alert('Geocode was not successful for the following reason: ' + status);
    }
  });

}

function what_3_api () {
    var data = {
      'key' : '0BEC9FI7',
      'position' : addy
    };
    $.post('http://api.what3words.com/position', data, function (response) {  
      console.log(response.words[0] + ' ' + response.words[1] + ' ' + response.words[2]);
      /*if (response.words.length !== null) {
        pop_over.insertAdjacentHTML("afterbegin", html_string);
        $("#pop_over").popover({title:"Use Three Words Instead", content : "You can use these three words as your address next time. It is simple and easy to remember. <br><a href='suport_faq.html'>Learn more</a>", html : true, placement : "auto down", selector: ".glyphicon", trigger : "hover"});
      }
    });*/
    });
  }


function find_street (event) {
    if (event.target) {
      autorize.classList.remove("none");
      
    }
  }   

function save_user_street (event) {
   login_form = document.querySelectorAll(".login_form")[0];
  if (!autorized.classList.contains("none")) {
    mod_header.textContent = "";
    page_info_2[1].textContent = "";
    login_form.removeChild(street_yes);
    login_form.removeChild(street_no);
    mod_header.textContent = "We are saving your address....";
    page_info_2[1].classList.add("loading");
    setTimeout(refill_save_streets, 10000);
  }
}

function refill_save_streets () {
  mod_header.textContent = "";
  page_info_2[1].classList.remove("loading");
  if (cd_parser) {
  var span = "<span class='fa fa-check' style='color:green;font-size:40px;font-weight:500;position:absolute;left:40%;'></span><br><br><p class='container page_info_2' id='take_text' style='text-align:center;'>Save succesful</p>",
  span_2 = "<a href='menu_2_page.html' class='btn btn-success' id='first_btn'>continue to site</a>";
  login_form.insertAdjacentHTML("beforeend", span);
  login_form.insertAdjacentHTML("beforeend", span_2);
  } else {
  span = "<span class='fa fa-times' style='color:red;font-size:40px;font-weight:500;position:absolute;left:40%;'></span><br><br><p class='container page_info_2' id='take_text' style='text-align:center;'>Sorry! We couldn't save your address at this time </p>";
  span_2 = "<a href='set_page.html' class='btn btn-warning' id='first_btn'>Try Again</a>";
  login_form.insertAdjacentHTML("beforeend", span);
  login_form.insertAdjacentHTML("beforeend", span_2);
  }
}


function init () {
    google.maps.event.addDomListener(window, "load", initialize_geo(get_user_position));
    //now_submit.addEventListener("click", get_user_position);
    document.getElementById("my_address").addEventListener("focus", userAutocomplete);
    save_street.addEventListener("click", find_street);
    street_yes.addEventListener("click", save_user_street);
    document.getElementById("add").addEventListener("click", validate_forme);
    forme.addEventListener("input", remove_forme_border);
    document.getElementById('three_words').addEventListener('click', what_3_api);
  };



init();

}());