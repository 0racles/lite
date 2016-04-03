var Coverage = (function () {
var 
wrap_map = document.getElementById("map"),
//li = document.getElementsByTagName("li"),
i = 0,
j = 0,
x = 0,
y = 0,
l = 0,
geo_Map,
  initialize_geo = function (callback) {
    var
    mapOptions = {
      center : new google.maps.LatLng(6.504432104278059, 3.347640976209618),
      zoom : 12
    }
    geo_Map = new google.maps.Map(wrap_map, mapOptions);
    callback();
   // document.getElementById('now_submit').addEventListener('click', function() {
    //place_id (user_input.value);
  //});
  },
  babs_img = "img/icon/blue_marker.png",
  agb_img = "img/icon/old_marker.png",
  ikate_img = "img/icon/pink_marker.png",
  aguda_img = "img/icon/green_marker.png",
  get_user_position = function () {
    
    var
    Babalola_Feeder = [[6.506623179606779, 3.347502203541353], [6.510015254682043, 3.347556947443195], [6.5092268899865084, 3.3469494732107705], [6.507691738658793, 3.3458064064607242], [6.509910955202074, 3.3483407581904888], [6.50766533580812, 3.345328513739446], [6.509351614163335, 3.3441802572353936], [6.509089747718623, 3.3435528206875915], [6.508829062846491, 3.3429370508464444], [6.508849150177612, 3.346326154308599], [6.511624876847128, 3.3438890681448428], [6.510392030320103, 3.3442201023397047], [6.507992745912776, 3.341040218978378], [6.5099635291414, 3.341861258566041], [6.509495001520672, 3.339951212279402]],
    Agbonyin_Feeder = [[6.498888259283254, 3.3473837759552225], [6.499320037685539, 3.348070221484136], [6.503906806084277, 3.3476962313001195], [6.504432104278059, 3.347640976209618], [6.500901172822057, 3.346146143872261], [6.502237051485708, 3.3451152953424526], [6.5034715039509665, 3.3443129379371612], [6.5042285254304675, 3.3438177058428664], [6.505355483576793, 3.3430167722758597], [6.504599454508715, 3.3428684466889536], [6.5040258099201385, 3.3419896781837224], [6.501954228699198, 3.34230962219763], [6.505295463344597, 3.347178969174365], [6.499946112943077, 3.345587516818341]], 
    Akinyele_Feeder = [[6.497849874331626, 3.341003245875072], [6.49728252240201, 3.33932313239233741], [6.49689236470969, 3.3419596553621886], [6.500604734151317, 3.340280238086848], [6.498401633498982, 3.3386361601818635], [6.500572072461225, 3.34140614501689], [6.501410083421605, 3.3385222024459154]],
    Ikate_Feeder = [[6.49709016283481, 3.347318838198589], [6.4978960988477406, 3.346789832022978], [6.498775608238271, 3.34579857437177], [6.500556485572931, 3.3433167927291834], [6.499118063945248, 3.3429693832509884], [6.498756152889632, 3.3439856005727506], [6.502848554219036, 3.339953877691869], [6.504034609192129, 3.3400140955864117], [6.503131103515623, 3.3391540527343295]],
    Aguda_Feeder = [[6.496312617746675, 3.345256958841219], [6.497099916354457, 3.3455469111179355], [6.491845015414898, 3.344129797463438], [6.491930069170155, 3.3435515740261508], [6.496191091003958, 3.3390222531645577], [6.495561367449365, 3.3379848668674867]], 
    //Olatinde substation[6.493872422362663, 3.3452220469406484]], maduagwu moronu[6.500529862477947, 3.352208986384312]
    
    markers_title = [/*Agbonyin Feeder*/ "Odelola 2 SubStation", "Odelola 1 SubStation", "Folawiyo Bankole SubStation", "Victoria SubStation", "Apogunma SubStation", "Olaitan Odularu SubStation", "Ajoke SubStation", "Nnobi SubStation", "Ijero SubStation", "Onibuore 1 SubStation", "Onibuore 2 SubStation", "Oduduwa 1 SubStation", "Memedu Aremu SubStation", "Olayemi SubStation"];
    babalolaMarkerTitle = ["Ayinde SubStation", "Olatilewa SubStation", "Abayomi SubStation", "Muniru Baruwa SubStation", "Ajose SubStation", "Abiodun Wright SubStation", "Onadeko SubStation", "Zamba SubStation", "Gasper SubStation", "Akanji SubStation", "Babalola 1 SubStation", "Babalola 2 SubStation", "Olaogun 1 SubStation", "Olaogun 2 SubStation", "Ramoni SubStation"];

   // Babalola markers
    for (i; i < (Babalola_Feeder.length || babalolaMarkerTitle.length); i++) {
         Babalola_LatLng = new google.maps.LatLng(Babalola_Feeder[i][0], Babalola_Feeder[i][1]);     
          Babalola_markers = new google.maps.Marker({position : Babalola_LatLng, map : geo_Map,  icon : babs_img, title: babalolaMarkerTitle[i]});
        }
        /*for (var v = 0; v < babalolaMarker.length; v++) {
           Babalola_markers.position[v].setTitle(babalolaMarker[v]);
           }*/
     var 
     Ayinde_start = new google.maps.LatLng(6.51003721175251, 3.347630202770233);
     Ayinde_end = new google.maps.LatLng( 6.50673270732692, 3.3476677536964417);
     Ayinde_path = new google.maps.Polyline({
         path : [Ayinde_start, Ayinde_end],
         strokeColor : '#9999FF',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
         });
       
     Olatilewa_start = new google.maps.LatLng(6.512177133259042, 3.347539007663727);
     Olatilewa_end = new google.maps.LatLng(6.51003721175251, 3.347630202770233);
       Olatilewa_path = new google.maps.Polyline({
         path : [Olatilewa_start, Olatilewa_end],
         strokeColor : '#6666FF',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
         });  
    
    // Abayomi sub-station
     Abayomi_start = new google.maps.LatLng(6.511995919836174, 3.3469274640083313);
     Abayomi_end = new google.maps.LatLng(6.507220389589516, 3.3470910787582397);
       Abayomi_path = new google.maps.Polyline({
         path : [Abayomi_start, Abayomi_end],
         strokeColor : '#99CCFF',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
         });
         
   // muniry baruwa sub-station      
       muniru_baruwa_start = new google.maps.LatLng(6.508877972756545, 3.3457553386688232);
       muniru_baruwa_end = new google.maps.LatLng(6.507688084429397, 3.3457741141319275);
       mulusi_start = new google.maps.LatLng(6.507550840689617, 3.3459752798080444);
       mulusi_end = new google.maps.LatLng(6.505712037452678, 3.3442962169647217);
       ikpoh_start = new google.maps.LatLng(6.507273688168749, 3.3458465337753296);
       ikpoh_end = new google.maps.LatLng(6.506149086947717, 3.347160816192627);
       muniru_baruwa_path = new google.maps.Polyline({
         path : [muniru_baruwa_start, muniru_baruwa_end, mulusi_start, mulusi_end, ikpoh_start, ikpoh_end],
         strokeColor : '#333366',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
         });
    
   // Ajose sub-station
        Ajose_start = new google.maps.LatLng(6.511217767335589, 3.348233699798584);
        Ajose_end = new google.maps.LatLng(6.50844625548106, 3.3482444286346436);
        Ajose_path = new google.maps.Polyline({
         path : [Ajose_start, Ajose_end],
         strokeColor : '#0033FF',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
         });
   
   //Abiodun Wright sub-station 
       Abiodun_Wright_start = new google.maps.LatLng(6.5054615333024, 3.3430999517440796);
       Abiodun_Wright_end = new google.maps.LatLng(6.507705406452139, 3.345387876033783);
       Aleje_start = new google.maps.LatLng(6.508872642915906, 3.3451759815216064);
       Aleje_end = new google.maps.LatLng(6.5079505796330634, 3.3451732993125916);
       Bayo_Ojukutu_start = new google.maps.LatLng(6.507977228884641, 3.3449050784111023);
       Bayo_Ojukutu_end = new google.maps.LatLng(6.506290328471544, 3.3430087566375732);
       Olusola_Keku_start = new google.maps.LatLng(6.5071990701562505, 3.343861699104309);
       Olusola_Keku_end = new google.maps.LatLng(6.5079079408275735, 3.343260884284973);
       Abiodun_Wright_path = new google.maps.Polyline({
         path : [Abiodun_Wright_start, Abiodun_Wright_end, Aleje_start, Aleje_end, Bayo_Ojukutu_start, Bayo_Ojukutu_end, Olusola_Keku_start, Olusola_Keku_end],
         strokeColor : '#6600FF',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
         });
   
   // Onadeko sub-station
        Onadeko_start = new google.maps.LatLng(6.509597500724252, 3.346307873725891);
        Onadeko_end = new google.maps.LatLng(6.509602830557206, 3.344162106513977);
        cole_start = new google.maps.LatLng(6.510351671524432, 3.3440038561820984);
        cole_end = new google.maps.LatLng(6.509376312606888, 3.344113826751709);
        Onadeko_path = new google.maps.Polyline({
         path : [Onadeko_start, Onadeko_end, cole_start, cole_end],
         strokeColor : '#003399',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
         });
    
   // Babalola 1 sub-station
        Lawanson_road_start = new google.maps.LatLng(6.5115908543014696, 3.34321528673172);
        Lawanson_road_end = new google.maps.LatLng(6.511628162982807, 3.3439448475837708);
        cole_house_start = new google.maps.LatLng(6.511566870147712, 3.34396094083786);
        cole_house_end = new google.maps.LatLng(6.511537556180466, 3.3439555764198303);
        Babalola_1_path = new google.maps.Polyline({
         path : [Lawanson_road_start, Lawanson_road_end, cole_house_start, cole_house_end],
         strokeColor : '#66CCFF',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
         });
    
    // Babalola 2 sub-station
        Adegbola_start = new google.maps.LatLng(6.510434283804724, 3.3462274074554443);
        Adegbola_end = new google.maps.LatLng(6.510407634683524, 3.34409236907959);
        cole_2_house_start = new google.maps.LatLng(6.51147892824082, 3.3439797163009644);
        cole_2_house_end = new google.maps.LatLng(6.510492911866364, 3.3439958095550537);
        Babalola_1_path = new google.maps.Polyline({
         path : [Adegbola_start, Adegbola_end, cole_2_house_start, cole_2_house_end],
         strokeColor : '#9900FF',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
         });
    
    // Zamba sub-station
        Zamba_start = new google.maps.LatLng(6.507572160107972, 3.3443713188171387);
        Zamba_end = new google.maps.LatLng(6.511510907117839, 3.343169689178467);
        Zamba_path = new google.maps.Polyline({
         path : [Zamba_start, Zamba_end],
         strokeColor : '#333399',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
         });
    
    // Gasper sub-station (under verification)
         Gasper_start = new google.maps.LatLng();
        Gasper_end = new google.maps.LatLng();
        Gasper_path = new google.maps.Polyline({
         path : [Gasper_start, Gasper_end],
         strokeColor : '#',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
         });
    
    // Olaogun 1 sub-station
        Olaogun_start = new google.maps.LatLng();
        Olaogun_end = new google.maps.LatLng();
        Odubiyi_start = new google.maps.LatLng(6.507332834816077, 3.3395112307334784);
        Odubiyi_curve_1 = new google.maps.LatLng(6.508174951518245, 3.3411527426505927);
        Olusola_intersect = new google.maps.LatLng(6.508883561704684, 3.342850543631357);
        Odubiyi_end = new google.maps.LatLng(6.50924599073176, 3.344081677405484);
        Olusola_keku_start = new google.maps.LatLng(6.508020385900221, 3.3431804925021424);
        Olusola_keku_end = new google.maps.LatLng(6.507172679951489, 3.3438671006842924);
        Olaogun_1_path = new google.maps.Polyline({
         path : [Odubiyi_start, Odubiyi_curve_1, Olusola_intersect, Odubiyi_end, Olusola_intersect, Olusola_keku_start, Olusola_keku_end],
         strokeColor : '#000099',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
         }); 
    
    // Olaogun 2 sub-station
        Iyaru_start = new google.maps.LatLng(6.50804170497332, 3.3388835934965755);
        Adebisi_start = new google.maps.LatLng(6.508324186916915, 3.339446857389703);
        Adebisi_end = new google.maps.LatLng(6.507542975461633, 3.339878637380025);
        Shonde_start = new google.maps.LatLng(6.508726201789149, 3.339957762545964);
        Shonde_end = new google.maps.LatLng( 6.507814797900699, 3.3404512890047044);
        Iyaru_end = new google.maps.LatLng(6.509084633576422, 3.340412396892134);   
        Durojaiye_start = new google.maps.LatLng(6.509035332568584, 3.340574670537535);
        Durojaiye_end = new google.maps.LatLng(6.5095766995700295, 3.34251530450274);
        Olusola_up_start = new google.maps.LatLng(6.5093901553733735, 3.342644050535455);
        Olusola_up_end = new google.maps.LatLng(6.50895310869843, 3.342815711912408);
        Adeosu_start = new google.maps.LatLng();
        Adeosu_end = new google.maps.LatLng();
        Olaogun_2_path = new google.maps.Polyline({
         path : [Iyaru_start, Adebisi_start, Adebisi_end, Adebisi_start, Shonde_start, Shonde_end, Shonde_start, Iyaru_end, Durojaiye_start, Durojaiye_end, Olusola_up_start, Olusola_up_end],
         strokeColor : '#330066',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
         });
    
    // Ramonu sub-station 
        Ramonu_start = new google.maps.LatLng(6.511202295775374, 3.3406967664632248);
        Ramonu_c_1 = new google.maps.LatLng(6.51045612098882, 3.340616300192778);
        Ramonu_c_2 = new google.maps.LatLng(6.509608678929743, 3.34006376513571);
        Ramonu_c_3 = new google.maps.LatLng(6.508164291821955, 3.3379823709401535);
        Asimowu_start = new google.maps.LatLng(6.508489412456336, 3.3385563636693405);
        Asimowu_mid = new google.maps.LatLng(6.509326197383375, 3.3381057525548385);
        Asimowu_end = new google.maps.LatLng(6.511095699445213, 3.338095023718779);
        Ramonu_path = new google.maps.Polyline({
         path : [Ramonu_start,Ramonu_c_1, Ramonu_c_2, Ramonu_c_3, Asimowu_start, Asimowu_mid, Asimowu_end], 
         strokeColor : '#9999CC',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
         });
     
        Ayisatu_close_start = new google.maps.LatLng(6.508142972428751, 3.3379555495048407);
        Ayisatu_curve_1 = new google.maps.LatLng(6.508313527549112, 3.3377677948737983);
        Ayisatu_curve_2 = new google.maps.LatLng(6.5083081977024815, 3.337499573972309);
        Ayisatu_close_end = new google.maps.LatLng(6.507983076950802, 3.336700275685871);
         Ramonu_2 = new google.maps.Polyline({
         path : [Ayisatu_close_start, Ayisatu_curve_1, Ayisatu_curve_2, Ayisatu_close_end],
         strokeColor : '#9999CC',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
         });
     
     
     
     // Akanji sub-station (under verification)
        Akanji_start = new google.maps.LatLng(6.508923276399724, 3.3442237973213196);
        Akanji_end = new google.maps.LatLng(6.508971244958667, 3.3463293313980103);
        Anjorin_start = new google.maps.LatLng(6.511838690489814, 3.3462676405906677);
        Anjorin_end = new google.maps.LatLng(6.507628123576838, 3.3464178442955017);
        Akanji_path = new google.maps.Polyline({
         path : [Akanji_start, Akanji_end, Anjorin_start, Anjorin_end],
         strokeColor : '#0099CC',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
         });
    
    // Agbonyin markers
    for (j; j < Agbonyin_Feeder.length; j++) {
         Agbonyin_LatLng = new google.maps.LatLng(Agbonyin_Feeder[j][0], Agbonyin_Feeder[j][1]);
          
          Agbonyin_markers = new google.maps.Marker({position : Agbonyin_LatLng, map : geo_Map,  icon : agb_img, title:"Babalola Feeder"});
        }
    
     // Akinyele markers
     var akinyeleMarkerTitle = ["Ola Ona SubStation", "Shaki Crescent SubStation", "St Barths SubStation", "Rosanwo SubStation", "Aina SubStation", "Ogunleye SubStation", "Oladehinde SubStation"];
    for (x; x < (Akinyele_Feeder.length || akinyeleMarkerTitle.length); x++) {
         Akinyele_LatLng = new google.maps.LatLng(Akinyele_Feeder[x][0], Akinyele_Feeder[x][1]);
          
          Akinyele_markers = new google.maps.Marker({position : Akinyele_LatLng, map : geo_Map,  title:akinyeleMarkerTitle[x]});
        }
        
    // Ola Ona sub-station 
        Akinyele_start = new google.maps.LatLng(6.497776310003831, 3.3425260333387996);
        A_1 = new google.maps.LatLng(6.497712868726287, 3.340498357647448);
        Akinyele_end = new google.maps.LatLng(6.497169212613164, 3.339318185680895);
        Akinyele_path = new google.maps.Polyline({
         path : [Akinyele_start, A_1, Akinyele_end],
         strokeColor : '#FF3333',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
         });
        
    // Shaki sub-station 
        Shaki_crescent_start = new google.maps.LatLng(6.497329111856267, 3.33839550610719);
        S_j_1 = new google.maps.LatLng(6.497947387193503, 3.3385671674841433);
        S_j_2 = new google.maps.LatLng(6.498874798774506, 3.340348154270032);
        S_j_2_return = new google.maps.LatLng(6.4987575399334165, 3.3401335775488405);
        S_j_3 = new google.maps.LatLng(6.498171245317897, 3.3404339849585085);
        S_j_4 = new google.maps.LatLng(6.497403731333857, 3.339103609287122);
        S_j_5 = new google.maps.LatLng(6.497062613631731, 3.338921219074109);
        Shaki_crescent_end = new google.maps.LatLng(6.496817435140477, 3.338921219074109);
        Onadeko_start = new google.maps.LatLng();
        Onadeko_end = new google.maps.LatLng();
        Willi_Omiyi_end = new google.maps.LatLng(6.496860074886673, 3.3377088605993777);
        Willi_Omiyi_start = new google.maps.LatLng();
        Shaki_path = new google.maps.Polyline({
         path : [Shaki_crescent_start, S_j_1, S_j_2, S_j_2_return, S_j_3, S_j_4, S_j_5, Shaki_crescent_end, Willi_Omiyi_end],
         strokeColor : '#CC6633',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
         });   
        
        
      // St Barth sub-station 
        
        samuel_omotara_start = new google.maps.LatLng(6.49692351594645, 3.3426011353549256);
        Willi_Omiyi_start = new google.maps.LatLng(6.496934175881091, 3.342016413789679);
        W_O_1 = new google.maps.LatLng(6.496752956961511, 3.3411795645770326);
        W_O_2 = new google.maps.LatLng(6.496800926681866, 3.3390123395292903);
        St_Barth = new google.maps.Polyline({
         path : [],
         strokeColor : '#CC6633',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
         });   
        
   // Rosanwo sub-station 
        Rosanwo_start = new google.maps.LatLng(6.498287985744335, 3.340846970495477);
        Rosanwo_mid_point = new google.maps.LatLng(6.498922249741863, 3.340417817053094);
        Adeshina_ent_point = new google.maps.LatLng(6.499359305140228, 3.3402997995290207);
        Rosanwo_end = new google.maps.LatLng(6.500835696949677, 3.340015485373442);
        Adeshina_start = new google.maps.LatLng(6.499162097263611, 3.339393212881987);
        Adeshina_end = new google.maps.LatLng(6.498492929939642, 3.338679708285781);
        Rosanwo_path = new google.maps.Polyline({
         path : [Rosanwo_start, Rosanwo_mid_point, Adeshina_ent_point, Rosanwo_end, Adeshina_ent_point, Adeshina_start, Adeshina_end],
         strokeColor : '#CC3300',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
         });
    
        
   // Aina sub-station
        Osogbo_start = new google.maps.LatLng(6.500676317532907, 3.3376444879104383);
        Osogbo_end = new google.maps.LatLng(6.5047590251768925, 3.3339752259780653);
        aina_start = new google.maps.LatLng(6.4982778437390945, 3.33835259109037);
        aina_end = new google.maps.LatLng(6.502882902069745, 3.3339644958323333);
        adeshina_intersect = new google.maps.LatLng(6.499194595474907, 3.339371830516029);
        Shaki_left_start = new google.maps.LatLng();
        Shaki_left_end = new google.maps.LatLng();
        Aina_path = new google.maps.Polyline({
         path : [aina_start, aina_end, aina_start, adeshina_intersect, Osogbo_start, Osogbo_end],
         strokeColor : '#FF3300',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
         });  
      
                     
  // Ogunleye sub-station
        Ogunleye_start = new google.maps.LatLng(6.498543305518973, 3.341764211654663);
        Ogunleye_end = new google.maps.LatLng(6.5006219818067885, 3.3413565158843994);
        Ogunleye_path = new google.maps.Polyline({
         path : [Ogunleye_start, Ogunleye_end],
         strokeColor : '#663300',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
         });
        
        
  // Oladehinde sub-station 
        Oladehinde_start = new google.maps.LatLng(6.503948364212673, 3.33757467516989);
        Oladehinde_middle_1 = new google.maps.LatLng(6.503004972281201, 3.337295725432341);
        Oladehinde_middle_2 = new google.maps.LatLng(6.5025945694261855, 3.3378375316533493);
        Oladehinde_middle_3 = new google.maps.LatLng(6.500798387304212, 3.3393610263738083);
        Oladehinde_end = new google.maps.LatLng(6.5000415371980385, 3.339892104413593);
        Oladehinde_path = new google.maps.Polyline({
         path : [Oladehinde_start, Oladehinde_middle_1, Oladehinde_middle_2, Oladehinde_middle_3, Oladehinde_end],
         strokeColor : '#FF6600',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
         });
               

     // Ikate markers
     var ikateMarkerFeeder = ["Nuru Oniwo 1substation", "Adex 1 Substation", "Adex 2 Substation", "Ikenne Substation", "Eloseh Substation", "Agoro Substation", "Dipo Olubi Substation", "Alhaji Otun Substation", "Owoseni Substation"];
    for (y; y < (Ikate_Feeder.length || ikateMarkerFeeder.length); y++) {
         Ikate_LatLng = new google.maps.LatLng(Ikate_Feeder[y][0], Ikate_Feeder[y][1]);
          
          Ikate_markers = new google.maps.Marker({position : Ikate_LatLng, map : geo_Map, icon : ikate_img, title:ikateMarkerFeeder[y]});
        }
       
    // Nuru_Oniwo 1 subStation 
       n_o_1_start = new google.maps.LatLng(6.4969496478805535, 3.3456534147262573);
       n_o_2_start = new google.maps.LatLng(6.496992287615528,  3.347133994102478);
       n_o_3_start = new google.maps.LatLng(6.497061577177177, 3.347461223602295);
       n_o_4_start = new google.maps.LatLng(6.497333405365324, 3.348255157470703);
       n_o_5_start = new google.maps.LatLng(6.497238576647639, 3.3483678847369447);
       n_o_6_start = new google.maps.LatLng(6.497238576647639, 3.348362520318915);
       n_o_7_start = new google.maps.LatLng(6.49672634420087, 3.348370529784006);
       agb_right_start = new google.maps.LatLng(6.497650093685691, 3.3468498292495497);
       agb_right_end = new google.maps.LatLng(6.497159737156297, 3.3470751348068006);
       nuru_Oniwo_1 = new google.maps.Polyline({
          path : [n_o_1_start, n_o_2_start, n_o_3_start, n_o_4_start, n_o_5_start, n_o_6_start, n_o_7_start, agb_right_start, agb_right_end],
          strokeColor : '#FFCCCC',
          strokeWeight : 2,
          strokeOpacity : 0.5,
          map : geo_Map,
          geodesic : true
        });
        
        
    // Adex 1 substation   
        A_Agbonyin_start = new google.maps.LatLng(6.49796989051409, 3.3435882604680955);
        A_A_1 = new google.maps.LatLng(6.497735372382679, 3.343845754498034);
        A_A_2 = new google.maps.LatLng(6.4977247124650095, 3.344071058090776);
        A_A_3 = new google.maps.LatLng(6.497671412873316, 3.3472038782201707);
        A_A_4 = new google.maps.LatLng(6.497692732710678, 3.3472575224004686);
        A_A_5 = new google.maps.LatLng(6.498215068443685,3.3483518636785448);
        A_A_6 = new google.maps.LatLng(6.498215068443685, 3.3485127962194383);
        A_Agbonyin_end = new google.maps.LatLng(6.497927250861962, 3.349671510513872);
        Gasper_path = new google.maps.Polyline({
         path : [A_Agbonyin_start,A_A_1, A_A_2, A_A_3, A_A_4, A_A_5, A_A_6, A_Agbonyin_end, ],
         strokeColor : '#FF3399',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
         });
        
    // Adex 2 substation
       Eloseh_start = new google.maps.LatLng(6.499080371237349, 3.3438725022642757);
       Eloseh_end = new google.maps.LatLng(6.4991496605113594, 3.3454281834929134);
       Alade_shonubi_point = new google.maps.LatLng(6.498621995799517, 3.345910981115594); // under verification
       kuye_start_1 = new google.maps.LatLng(6.498462097292687, 3.3454067258207942); 
       kuye_start_2 = new google.maps.LatLng(6.498446107439216, 3.3441782740919734);
       kuye_end = new google.maps.LatLng(6.498579356202667, 3.3438778666823055); 
       Adex_2 = new google.maps.Polyline({
         path : [Eloseh_start, Eloseh_end, Alade_shonubi_point, kuye_start_1, kuye_start_2, kuye_end],
         strokeColor : '#FFCC99',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
       });
        
    // Ikenne substation
       oduduwa_start = new google.maps.LatLng(6.501821732277731, 3.3423060925269965);
       oduduwa_c_1 = new google.maps.LatLng(6.501421988458889, 3.3428854496742133);
       ikene_start = new google.maps.LatLng(6.501096863251862, 3.3436579258705024);
       ikene_c_1 = new google.maps.LatLng(6.500435952509557, 3.3434326203132514);
       ikene_c_2 = new google.maps.LatLng(6.499791030221838, 3.343411162313714);
       ikene_end = new google.maps.LatLng(6.499162097263611, 3.343319967207208);
         Ikenne = new google.maps.Polyline({
         path : [oduduwa_start, oduduwa_c_1, ikene_start, ikene_c_1, ikene_c_2, ikene_end],
         strokeColor : '#FF99FF',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
       });    
       shotayo_hughes_start = new google.maps.LatLng(6.501741783702036, 3.3412117512489203); 
       shot_2 = new google.maps.LatLng(6.500990264940216, 3.342322185781086);
       shotayo_hughes_end = new google.maps.LatLng(6.500579860440511, 3.3434755356574897); 
         Ikenne_2 = new google.maps.Polyline({
         path : [shotayo_hughes_start, shot_2, shotayo_hughes_end],
         strokeColor : '#FF99FF',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
       });
        
        
        
        
     // Eloseh substation
       Eloseh_again_start = new google.maps.LatLng(6.499085701832478, 3.3423758299613837);
       Eloseh_again_end = new google.maps.LatLng(6.499069711998817, 3.34371693446883);
       Okoya_start = new google.maps.LatLng(6.499103468205274, 3.342638686444843); 
       Okoya_end = new google.maps.LatLng(6.499186970767134, 3.342644050862873); 
       Eloseh = new google.maps.Polyline({
         path : [Eloseh_again_start, Eloseh_again_end, Okoya_start, Okoya_end],
         strokeColor : '#FF33FF',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
       });   
        
     // Agoro substation
       Kuye_again_start = new google.maps.LatLng(6.498510066850083, 3.343668654706562);
       Kuye_again_mid = new google.maps.LatLng(6.49843544753661, 3.3417267353797797);
       kuye_again_end = new google.maps.LatLng(6.498270219017416, 3.34097035243758);
       Agoro_start = new google.maps.LatLng(6.499011081953783, 3.343765214231098); 
       Agoro_end = new google.maps.LatLng(6.4986433155965875, 3.3438242228294257); 
       Agoro = new google.maps.Polyline({
         path : [Agoro_start, Agoro_end, Kuye_again_start, Kuye_again_mid, kuye_again_end],
         strokeColor : '#FF9999',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
       });   
        
      // Dipo Olubi substation
       dipo_start = new google.maps.LatLng(6.502480864670633, 3.339521958914702);
       dipo_mid = new google.maps.LatLng(6.500775291064747, 3.341292216864531); 
       dipo_end = new google.maps.LatLng(6.500236968194172, 3.3425528557563666); 
       Dipo_Olubi = new google.maps.Polyline({
         path : [dipo_start, dipo_mid, dipo_end],
         strokeColor : '#CC6699',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
       });
      
     // Alhaji Otun substation
       oduduwa_up_start = new google.maps.LatLng(6.502347616941042, 3.3416033537650947);
       oduduwa_up_end = new google.maps.LatLng(6.503472226832444, 3.3407772327336716);
       raimi_link = new google.maps.LatLng(6.5031204534436515, 3.3402837062749313);
       alh_otun_end = new google.maps.LatLng(6.5018519350769, 3.341115191724384);  
       Alhaji_Otun = new google.maps.Polyline({
         path : [oduduwa_up_start, oduduwa_up_end, raimi_link, alh_otun_end],
         strokeColor : '#FF33FF',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
       }); 
      
     // Owoseni substation
       oduduwa_start = new google.maps.LatLng(6.503553951900825, 3.3407343173894333);
       oduduwa_close = new google.maps.LatLng( 6.505072970278224, 3.339886739340727);
       oduduwa_link = new google.maps.LatLng(6.504827795692957, 3.340042307463591);
       odu_conn = new google.maps.LatLng(6.504054961978357, 3.339747264471953);
       owoseni_corner = new google.maps.LatLng(6.503191130162737, 3.339178580827138); 
       odu_intersection = new google.maps.LatLng(6.503363019438843, 3.338773567265889);
       owoseni_back = new google.maps.LatLng(6.502766070402899, 3.338616658038518);
       owoseni_front_1 = new google.maps.LatLng(6.503909333802052, 3.339115548915288);
       owoseni_front_2 = new google.maps.LatLng(6.504702154911124, 3.339428026265523);
       owoseni_front_3 = new google.maps.LatLng(6.505247135348771, 3.3395822532838793);
       owoseni_front_4 = new google.maps.LatLng(6.5057494762066534, 3.3396935647942882);
       owoseni_front_5 = new google.maps.LatLng(6.506151881355657, 3.339737821406743);
       owoseni_front_6 = new google.maps.LatLng(6.506636899249925, 3.3398169464089733);
       owoseni_front_7 = new google.maps.LatLng(6.506880740486926, 3.340058345302168);
       owoseni_end = new google.maps.LatLng(6.507389742031902, 3.341204989696962);
       Owoseni = new google.maps.Polyline({
         path : [oduduwa_start, oduduwa_close, oduduwa_link, odu_conn, owoseni_corner, odu_intersection, owoseni_back, odu_intersection,  owoseni_front_1, owoseni_front_2, owoseni_front_3, owoseni_front_4, owoseni_front_5, owoseni_front_6, owoseni_front_7, owoseni_end],
         strokeColor : '#CC0099',
         strokeWeight : 2,
         strokeOpacity : 0.5,
         geodesic : true,
         map : geo_Map
       });  
      
     
     
     // Aguda markers
     var agudaMarkerTitle = ["Ogundare Substation", "Nuru Oniwo 2 Substation", "Aiyetoro Substation", "Ademola Oki Substation", "Enitan Substation", "Shola Bunmi Substation", "Maduagwu Morunu SubStation", "Olatunde substation"];
      for (l; l < (Aguda_Feeder.length || agudaMarkerTitle.length); l++) {
         Aguda_LatLng = new google.maps.LatLng(Aguda_Feeder[l][0], Aguda_Feeder[l][1]);
          
          Aguda_markers = new google.maps.Marker({position : Aguda_LatLng, map : geo_Map, icon : aguda_img, title: agudaMarkerTitle[l]});
        }

    // Ogundare substation
        Alh_shittu_mid_point = new google.maps.LatLng(6.49626193331095, 3.3438242971533327);
        Alh_shittu_end = new google.maps.LatLng(6.496475132241149, 3.342064768039563);
        Ogundare_str_start = new google.maps.LatLng(6.496134014560091, 3.348212391429115);
        Ogundare = new google.maps.Polyline({ 
           path : [Ogundare_str_start, Alh_shittu_mid_point, Alh_shittu_end],
           strokeColor : '#339933',
           strokeWeight : 2,
           strokeOpacity : 0.5,
           geodesic : true,
           map : geo_Map
        });

    // Nuru Oniwo 2 substation
        nuru_oniwo_start = new google.maps.LatLng(6.496954830154447, 3.345465809397865);
        nuru__oniwo_end = new google.maps.LatLng(6.496944170220239, 3.343770653300453);
        Nuru_Oniwo_2 = new google.maps.Polyline({ 
           path : [nuru_oniwo_start, nuru__oniwo_end],
           strokeColor : '#33FF66',
           strokeWeight : 2,
           strokeOpacity : 0.5,
           geodesic : true,
           map : geo_Map
        });

    // Aiyetoro substation
        Aiyetoro_right_middle = new google.maps.LatLng(6.492984061911045, 3.344038799550617);
        Aiyetoro_end = new google.maps.LatLng(6.49374092328455, 3.3446825295504823);
        Idowu_randle_start = new google.maps.LatLng(6.493085332724353, 3.3447522668211604);
        Idowu_randle_end = new google.maps.LatLng(6.490697483466663, 3.3446557074603334);
        Idowu_return = new google.maps.LatLng(6.49164622850074, 3.344714716058661);
        id_aiy_link = new google.maps.LatLng(6.4917048587531845, 3.344092443403497);
        aiy_mid_left = new google.maps.LatLng(6.4904256516948955, 3.343936875280633);
        Aiyetoro_left_end = new google.maps.LatLng(6.489114461088103, 3.3433467892973567);
        Aiyetoro = new google.maps.Polyline({ 
           path : [Idowu_randle_start, Idowu_randle_end, Idowu_return, id_aiy_link, aiy_mid_left, Aiyetoro_left_end, aiy_mid_left, id_aiy_link, Aiyetoro_right_middle, Aiyetoro_end],
           strokeColor : '#99FF33',
           strokeWeight : 2,
           strokeOpacity : 0.5,
           geodesic : true,
           map : geo_Map
        });

   // Ademola Oki substation
        ademola_oki_start = new google.maps.LatLng(6.4895302048207775, 3.3426816017890815);
        ademola_oki_mid = new google.maps.LatLng(6.490121839541032, 3.3430785687232856);
        ademola_oki_end = new google.maps.LatLng(6.491870088777263, 3.3434755353300716);
        ademola_oki_and_ramlat_connect = new google.maps.LatLng(6.491870088777263, 3.3428478984205867);
        ramlat_mid_left = new google.maps.LatLng(6.491395717345188, 3.34252066892077);
        ramlat_end_left = new google.maps.LatLng(6.490542912477179, 3.341646268781915);
        ramlat_mid_right = new google.maps.LatLng(6.492877461717808, 3.3431322125761653);
        ramlat_mid_right_2 = new google.maps.LatLng(6.493111982763765, 3.343137576994195);
        ramlat_mid_end = new google.maps.LatLng(6.493714273278417, 3.3430839328138973);
        Ademola_oki = new google.maps.Polyline({ 
           path : [ademola_oki_start, ademola_oki_mid, ademola_oki_end, ademola_oki_and_ramlat_connect, ramlat_mid_left, ramlat_end_left, ramlat_mid_left, ademola_oki_and_ramlat_connect, ramlat_mid_right, ramlat_mid_right_2, ramlat_mid_end],
           strokeColor : '#',
           strokeWeight : 2,
           strokeOpacity : 0.5,
           geodesic : true,
           map : geo_Map
        });
        
   // Enitan substation
        Enitan_up_middle = new google.maps.LatLng( 6.496216739784655, 3.3411366119889863);
        Enitan_up_end = new google.maps.LatLng(6.4957623777654465, 3.343199212140462);
        Enitan_down = new google.maps.LatLng(6.4962406879102845, 3.3369577675875917);
        Enitan_down_end = new google.maps.LatLng(6.496507186244855, 3.33649642763703);
        Wole_madariola_start = new google.maps.LatLng(6.4936822932692095, 3.3378643543983344);
        Wole_madariola_end = new google.maps.LatLng(6.496191441027765, 3.339079339093587);
        Enitan = new google.maps.Polyline({ 
           path : [Wole_madariola_start, Wole_madariola_end, Enitan_up_middle, Enitan_up_end, Enitan_up_middle, Enitan_down, Enitan_down_end],
           strokeColor : '#006600',
           strokeWeight : 2,
           strokeOpacity : 0.5,
           geodesic : true,
           map : geo_Map
        });

  // Shola Bunmi (see for Olufemi shokan below)
        shola_bunmi_start = new google.maps.LatLng();
        shola_bunmi_end = new google.maps.LatLng();
        oladimeji_start = new google.maps.LatLng(6.491107895863686, 3.335922434907843);
        ol_shola_bunmi_entrance = new google.maps.LatLng(6.495446520741466, 3.3380252868573734);
        oladimeji_end = new google.maps.LatLng(6.496091448273767, 3.33835788077522);
        shola_Bunmi_curve_1 = new google.maps.LatLng(6.495537130444664, 3.3375746757428715);
        shola_Bunmi_curve_2 = new google.maps.LatLng(6.494737632500364, 3.336689546767957);
        shola_bunmi_end_1 = new google.maps.LatLng(6.4936183325940595, 3.336147740465094);
        shola_bunmi_end_2 = new google.maps.LatLng(6.49435920303053, 3.3373708277963487);
        Shola_Bunmi = new google.maps.Polyline({ 
           path : [oladimeji_start, ol_shola_bunmi_entrance, oladimeji_end, ol_shola_bunmi_entrance, shola_Bunmi_curve_1, shola_Bunmi_curve_2, shola_bunmi_end_1, shola_Bunmi_curve_2, shola_bunmi_end_2],
           strokeColor : '#669966',
           strokeWeight : 2,
           strokeOpacity : 0.5,
           geodesic : true,
           map : geo_Map
        });
        Olufemi_shokan_start = new google.maps.LatLng(6.496160737959483, 3.3369094878253236);
        Olufemi_and_shola_link_start = new google.maps.LatLng(6.4946523897307955, 3.3353349938897736);
        Olufemi_shokan_end = new google.maps.LatLng(6.4944178329670175, 3.335605934244086);
        Olufemi_and_shola_link_end = new google.maps.LatLng(6.4938528903810475, 3.3362093940286286); 
        shola_Bunmi_2 = new google.maps.Polyline({
           path : [Olufemi_shokan_start, Olufemi_shokan_end, Olufemi_and_shola_link_start, Olufemi_and_shola_link_end],
           strokeColor : '#669966',
           strokeWeight : 2,
           strokeOpacity :0.5,
           geodesic : true,
           map : geo_Map
        });
    
    var 
    olatunde = new google.maps.LatLng(6.4933838872576946, 3.346238136291504),
    census = new google.maps.LatLng(6.4937729774624104, 3.3455461263656616),
    path_way = [olatunde, census],
    polylinno = new google.maps.Polyline({
        path : path_way,
        strokeColor : '#CC00FF',
        strokeOpacity : 0.4,
        strokeWeight : 2,
        map : geo_Map,
        geodesic : true
    });
    geo_Map.addListener("click", get_path);
}
    
    function get_path (event) {
        //var get_array = [];
        var path = polylinno.getPath();
       //path.push(event.latLng);
        console.log(event.latLng);
       
        }
  
  
  function init () {
    google.maps.event.addDomListener(window, "load", initialize_geo(get_user_position));
  
  };
init();

}());

