(function(A) {

	if (!Array.prototype.forEach)
		A.forEach = A.forEach || function(action, that) {
			for (var i = 0, l = this.length; i < l; i++)
				if (i in this)
					action.call(that, this[i], i, this);
			};

		})(Array.prototype);

		var
		mapObject,
		markers = [],
		markersData = {
			'Park': [
			{
				name: 'Babalola Feeder',
				location_latitude: 6.506623179606779, 
				location_longitude: 3.347502203541353,
				map_image_url: 'img/img3.png',
				name_point: 'Ayinde Sub-Station',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Babalola Feeder',
				location_latitude: 6.510015254682043, 
				location_longitude: 3.347556947443195,
				map_image_url: 'img/img2.png',
				name_point: 'Olatilewa Sub-Station',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Babalola Feeder',
				location_latitude: 6.5092268899865084, 
				location_longitude: 3.3469494732107705,
				map_image_url: 'img/img3.png',
				name_point: 'Abayomi Sub-Station',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Babalola Feeder',
				location_latitude: 6.507691738658793, 
				location_longitude: 3.3458064064607242,
				map_image_url: 'img/img4.png',
				name_point: 'Muniru Baruwa Sub-Station',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Babalola Feeder',
				location_latitude: 6.509910955202074, 
				location_longitude: 3.3483407581904888,
				map_image_url: 'img/img3.png',
				name_point: 'Ajose SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Babalola Feeder',
				location_latitude: 6.50766533580812, 
				location_longitude: 3.345328513739446,
				map_image_url: 'img/img.png',
				name_point: 'Abiodun Wright SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Babalola Feeder',
				location_latitude: 6.509351614163335,  
				location_longitude: 3.3441802572353936,
				map_image_url: 'img/img.png',
				name_point: 'Onadeko SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Babalola Feeder',
				location_latitude: 6.509089747718623, 
				location_longitude: 3.3435528206875915,
				map_image_url: 'img/img.png',
				name_point: 'Zamba SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Babalola Feeder',
				location_latitude: 6.508829062846491,  
				location_longitude: 3.3429370508464444,
				map_image_url: 'img/img.png',
				name_point: 'Gasper SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Babalola Feeder',
				location_latitude: 6.508849150177612,  
				location_longitude: 3.346326154308599,
				map_image_url: 'img/img.png',
				name_point: 'Akanji SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Babalola Feeder',
				location_latitude: 6.511624876847128, 
				location_longitude: 3.3438890681448428,
				map_image_url: 'img/img.png',
				name_point: 'Babalola 1 SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Babalola Feeder',
				location_latitude: 6.510392030320103,
				location_longitude: 3.3442201023397047,
				map_image_url: 'img/img.png',
				name_point: 'Babalola 2 SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Babalola Feeder',
				location_latitude: 6.507992745912776,  
				location_longitude: 3.341040218978378,
				map_image_url: 'img/img.png',
				name_point: 'Olaogun 1 SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Babalola Feeder',
				location_latitude: 6.5099635291414, 
				location_longitude: 3.341861258566041,
				map_image_url: 'img/img.png',
				name_point: 'Olaogun 2 SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Babalola Feeder',
				location_latitude: 6.509495001520672,  
				location_longitude: 3.339951212279402,
				map_image_url: 'img/img.png',
				name_point: 'Ramoni SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			}
			],
			'Post': [
			{
				name: 'Agbonyin Feeder',
				location_latitude: 6.498888259283254, 
				location_longitude: 3.3473837759552225,
				map_image_url: 'img/img.png',
				name_point: 'Odelola 2 SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Agbonyin Feeder',
				location_latitude: 6.499320037685539,  
				location_longitude: 3.348070221484136,
				map_image_url: 'img/img2.png',
				name_point: 'Odelola 1 SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Agbonyin Feeder',
				location_latitude: 6.503906806084277,  
				location_longitude: 3.3476962313001195,
				map_image_url: 'img/img3.png',
				name_point: 'Folawiyo Bankole SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Agbonyin Feeder',
				location_latitude: 6.504432104278059,  
				location_longitude: 3.347640976209618,
				map_image_url: 'img/img.png',
				name_point: 'Victoria SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Agbonyin Feeder',
				location_latitude: 6.500901172822057, 
				location_longitude: 3.346146143872261,
				map_image_url: 'img/img.png',
				name_point: 'Apogunma SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Agbonyin Feeder',
				location_latitude: 6.502237051485708,  
				location_longitude: 3.3451152953424526,
				map_image_url: 'img/img.png',
				name_point: 'Olaitan Odularu SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Agbonyin Feeder',
				location_latitude: 6.5034715039509665,  
				location_longitude: 3.3443129379371612,
				map_image_url: 'img/img.png',
				name_point: 'Ajoke SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Agbonyin Feeder',
				location_latitude: 6.5042285254304675, 
				location_longitude: 3.3438177058428664,
				map_image_url: 'img/img.png',
				name_point: 'Nnobi SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Agbonyin Feeder',
				location_latitude: 6.505355483576793, 
				location_longitude: 3.3430167722758597,
				map_image_url: 'img/img.png',
				name_point: 'Ijero SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Agbonyin Feeder',
				location_latitude: 6.504599454508715, 
				location_longitude: 3.3428684466889536,
				map_image_url: 'img/img.png',
				name_point: 'Onibuore 1 SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Agbonyin Feeder',
				location_latitude: 6.5040258099201385,  
				location_longitude: 3.3419896781837224,
				map_image_url: 'img/img.png',
				name_point: 'Onibuore 2 SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Agbonyin Feeder',
				location_latitude: 6.501954228699198,   
				location_longitude: 3.34230962219763,
				map_image_url: 'img/img.png',
				name_point: 'Oduduwa 1 SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Agbonyin Feeder',
				location_latitude: 6.505295463344597,   
				location_longitude: 3.347178969174365,
				map_image_url: 'img/img.png',
				name_point: 'Memedu Aremu SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Agbonyin Feeder',
				location_latitude: 6.499946112943077,    
				location_longitude: 3.345587516818341,
				map_image_url: 'img/img.png',
				name_point: 'Olayemi SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			}

			],
			'Bank': [
			{
				name: 'Akinyele Feeder',
				location_latitude: 6.497849874331626,  
				location_longitude: 3.341003245875072,
				map_image_url: 'img/img2.png',
				name_point: 'Ola Ona SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Akinyele Feeder',
				location_latitude: 6.49728252240201,  
				location_longitude: 3.33932313239233741,
				map_image_url: 'img/img.png',
				name_point: 'Shaki Crescent SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Akinyele Feeder',
				location_latitude: 6.49689236470969,  
				location_longitude: 3.3419596553621886,
				map_image_url: 'img/img.png',
				name_point: 'St Barths SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Akinyele Feeder',
				location_latitude: 6.500604734151317,   
				location_longitude: 3.340280238086848,
				map_image_url: 'img/img.png',
				name_point: 'Rosanwo SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Akinyele Feeder',
				location_latitude: 6.498401633498982, 
				location_longitude: 3.3386361601818635,
				map_image_url: 'img/img.png',
				name_point: 'Aina SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Akinyele Feeder',
				location_latitude: 6.500572072461225,  
				location_longitude: 3.34140614501689,
				map_image_url: 'img/img.png',
				name_point: 'Ogunleye SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Akinyele Feeder',
				location_latitude: 6.501410083421605,  
				location_longitude: 3.3385222024459154,
				map_image_url: 'img/img.png',
				name_point: 'Oladehinde SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			}
			],

			'Showplace': [
			{
				name: 'Ikate Feeder',
				location_latitude: 6.49709016283481, 
				location_longitude: 3.347318838198589,
				map_image_url: 'img/img.png',
				name_point: 'Nuru Oniwo 1substation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Ikate Feeder',
				location_latitude: 6.4978960988477406,  
				location_longitude: 3.346789832022978,
				map_image_url: 'img/img2.png',
				name_point: 'Adex 1 Substation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Ikate Feeder',
				location_latitude: 6.498775608238271, 
				location_longitude: 3.34579857437177,
				map_image_url: 'img/img3.png',
				name_point: 'Adex 2 Substation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Ikate Feeder',
				location_latitude: 6.500556485572931,  
				location_longitude: 3.3433167927291834,
				map_image_url: 'img/img.png',
				name_point: 'Ikenne Substation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Ikate Feeder',
				location_latitude: 6.499118063945248, 
				location_longitude: 3.3429693832509884,
				map_image_url: 'img/img.png',
				name_point: 'Eloseh Substation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Ikate Feeder',
				location_latitude: 6.498756152889632, 
				location_longitude: 3.3439856005727506,
				map_image_url: 'img/img.png',
				name_point: 'Agoro Substation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Ikate Feeder',
				location_latitude: 6.502848554219036, 
				location_longitude: 3.339953877691869,
				map_image_url: 'img/img.png',
				name_point: 'Dipo Olubi Substation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Ikate Feeder',
				location_latitude: 6.504034609192129,  
				location_longitude: 3.3400140955864117,
				map_image_url: 'img/img.png',
				name_point: 'Alhaji Otun Substation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Ikate Feeder',
				location_latitude: 6.503131103515623, 
				location_longitude: 3.3391540527343295,
				map_image_url: 'img/img.png',
				name_point: 'Owoseni Substation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			}
			],

			'Port': [
			{
				name: 'Aguda Feeder',
				location_latitude: 6.496312617746675, 
				location_longitude: 3.345256958841219,
				map_image_url: 'img/img.png',
				name_point: 'Ogundare Substation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Aguda Feeder',
				location_latitude: 6.497099916354457, 
				location_longitude:  3.3455469111179355,
				map_image_url: 'img/img2.png',
				name_point: 'Nuru Oniwo 2 Substation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Aguda Feeder',
				location_latitude: 6.491845015414898, 
				location_longitude: 3.344129797463438,
				map_image_url: 'img/img3.png',
				name_point: 'Aiyetoro Substation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Aguda Feeder',
				location_latitude: 6.491930069170155,  
				location_longitude: 3.3435515740261508,
				map_image_url: 'img/img.png',
				name_point: 'Ademola Oki Substation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Aguda Feeder',
				location_latitude: 6.496191091003958, 
				location_longitude: 3.3390222531645577,
				map_image_url: 'img/img.png',
				name_point: 'Enitan Substation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Cronulla Beach',
				location_latitude: 6.495561367449365, 
				location_longitude: 3.3379848668674867,
				map_image_url: 'img/img.png',
				name_point: 'Shola Bunmi Substation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Maduagwu Morunu SubStation',
				location_latitude: 6.500529862477947,  
				location_longitude: 3.352208986384312,
				map_image_url: 'img/img.png',
				name_point: 'Maduagwu Morunu SubStation',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			}
			],

			'Port': [
			{
				name: 'Cronulla Beach',
				location_latitude: 43.116508, 
				location_longitude: 131.890469,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Cronulla Beach',
				location_latitude: 43.116508, 
				location_longitude: 131.890469,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Cronulla Beach',
				location_latitude: 43.116508, 
				location_longitude: 131.890469,
				map_image_url: 'img/img3.png',
				name_point: 'Envato',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Cronulla Beach',
				location_latitude: 43.116508, 
				location_longitude: 131.890469,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Cronulla Beach',
				location_latitude: 43.116508,
				location_longitude: 131.890469,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			}
			],


			'Bank': [
			{
				name: 'Cronulla Beach',
				location_latitude: 43.116508, 
				location_longitude: 131.890469,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Manly Beach',
				location_latitude: 43.118686, 
				location_longitude: 131.887207,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Maroubra Beach',
				location_latitude: 43.115678, 
				location_longitude: 131.882615,
				map_image_url: 'img/img3.png',
				name_point: 'Envato',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Cronulla Beach',
				location_latitude: 43.114519, 
				location_longitude: 131.895490,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Manly Beach',
				location_latitude: 43.121520, 
				location_longitude: 131.892894,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Maroubra Beach',
				location_latitude: 41.104,
				location_longitude: -73.406,
				map_image_url: 'img/img3.png',
				name_point: 'Envato',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Cronulla Beach',
				location_latitude: 43.125451, 
				location_longitude: 131.881628,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Manly Beach',
				location_latitude: 43.121113,
				location_longitude: 131.877058,
				map_image_url: 'img/img3.png',
				name_point: 'Envato',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Maroubra Beach',
				location_latitude: 43.123697, 
				location_longitude: 131.894224,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			}
			],


			'Post': [
			{
				name: 'Cronulla Beach',
				location_latitude: 43.115897, 
				location_longitude: 131.889246,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Manly Beach',
				location_latitude: 43.120643, 
				location_longitude: 131.885491,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Maroubra Beach',
				location_latitude: 43.118701, 
				location_longitude: 131.893580,
				map_image_url: 'img/img3.png',
				name_point: 'Envato',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			}
			],

			'Showplace': [
			{
				name: 'Cronulla Beach',
				location_latitude: 43.119030, 
				location_longitude: 131.879225,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Manly Beach',
				location_latitude: 43.115177, 
				location_longitude: 131.885576,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Maroubra Beach',
				location_latitude: 43.113517, 
				location_longitude: 131.893730,
				map_image_url: 'img/img3.png',
				name_point: 'Envato',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Cronulla Beach',
				location_latitude: 43.119437, 
				location_longitude: 131.894095,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Manly Beach',
				location_latitude: 43.122241, 
				location_longitude: 131.901949,
				map_image_url: 'img/img3.png',
				name_point: 'Envato',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Maroubra Beach',
				location_latitude: 43.113986, 
				location_longitude: 131.906970,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			}
			],

			'Park': [
			{
				name: 'Cronulla Beach',
				location_latitude: 43.120401,
				location_longitude:  131.877208,
				map_image_url: 'img/img.png',
				name_point: 'Vladivostok',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Manly Beach',
				location_latitude: 43.117801, 
				location_longitude: 131.878732,
				map_image_url: 'img/img2.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Maroubra Beach',
				location_latitude: 43.126266, 
				location_longitude: 131.890447,
				map_image_url: 'img/img3.png',
				name_point: 'Envato',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Cronulla Beach',
				location_latitude: 43.123071, 
				location_longitude:  131.897593,
				map_image_url: 'img/img3.png',
				name_point: 'Envato',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'Manly Beach',
				location_latitude: 6.491845015414898, 
				location_longitude: 3.344129797463438,
				map_image_url: 'img/img.png',
				name_point: 'Matart Group',
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			},
			{
				name: 'agbara', //Maroubra Beach
				location_latitude: 6.493872422362663,  
				location_longitude: 3.3452220469406484,
				map_image_url: 'img/img3.png',
				name_point: 'coza', //
				description_point: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
				url_point: '02.html'
			}
			]
		};

		function initialize () {
			var mapOptions = {
				zoom: 14,
				center: new google.maps.LatLng(6.503131103515623, 3.3391540527343295), 
				mapTypeId: google.maps.MapTypeId.ROADMAP,

				mapTypeControl: false,
				mapTypeControlOptions: {
					style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
					position: google.maps.ControlPosition.LEFT_CENTER
				},
				panControl: false,
				panControlOptions: {
					position: google.maps.ControlPosition.TOP_RIGHT
				},
				zoomControl: false,
				zoomControlOptions: {
					style: google.maps.ZoomControlStyle.LARGE,
					position: google.maps.ControlPosition.TOP_RIGHT
				},
				scaleControl: false,
				scaleControlOptions: {
					position: google.maps.ControlPosition.TOP_LEFT
				},
				streetViewControl: false,
				streetViewControlOptions: {
					position: google.maps.ControlPosition.LEFT_TOP
				},
				styles: [{"featureType":"poi","stylers":[{"visibility":"off"}]},{"stylers":[{"saturation":-70},{"lightness":37},{"gamma":1.15}]},{"elementType":"labels","stylers":[{"gamma":0.26},{"visibility":"off"}]},{"featureType":"road","stylers":[{"lightness":0},{"saturation":0},{"hue":"#ffffff"},{"gamma":0}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"lightness":50},{"saturation":0},{"hue":"#ffffff"}]},{"featureType":"administrative.province","stylers":[{"visibility":"on"},{"lightness":-50}]},{"featureType":"administrative.province","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"labels.text","stylers":[{"lightness":20}]}]
			};
			var
			marker;
			mapObject = new google.maps.Map(document.getElementById('map'), mapOptions);
			for (var key in markersData)
				markersData[key].forEach(function (item) {
					marker = new google.maps.Marker({
						position: new google.maps.LatLng(item.location_latitude, item.location_longitude),
						map: mapObject,
						icon: 'img/icon/' + key + '.png',
					});

					if ('undefined' === typeof markers[key])
						markers[key] = [];
					markers[key].push(marker);
					google.maps.event.addListener(marker, 'click', (function () {
      closeInfoBox();
      getInfoBox(item).open(mapObject, this);
      mapObject.setCenter(new google.maps.LatLng(item.location_latitude, item.location_longitude));
     }));

					
				});
		};

		function hideAllMarkers () {
			for (var key in markers)
				markers[key].forEach(function (marker) {
					marker.setMap(null);
				});
		};

		function toggleMarkers (category) {
			hideAllMarkers();
			closeInfoBox();

			if ('undefined' === typeof markers[category])
				return false;
			markers[category].forEach(function (marker) {
				marker.setMap(mapObject);
				marker.setAnimation(google.maps.Animation.DROP);

			});
		};
		
		function closeInfoBox() {
			$('div.infoBox').remove();
		};

		function getInfoBox(item) {
			return new InfoBox({
				content:
				'<div class="marker_info none" id="marker_info">' +
				'<div class="info" id="info">'+
				'<img src="' + item.map_image_url + '" class="logotype" alt=""/>' +
				'<h2>'+ item.name_point +'<span></span></h2>' +
				'<span>'+ item.description_point +'</span>' +
				'<a href="'+ item.url_point + '" class="green_btn">More info</a>' +
				'<span class="arrow"></span>' +
				'</div>' +
				'</div>',
				disableAutoPan: true,
				maxWidth: 0,
				pixelOffset: new google.maps.Size(40, -210),
				closeBoxMargin: '50px 200px',
				closeBoxURL: '',
				isHidden: false,
				pane: 'floatPane',
				enableEventPropagation: true
			});


		};

   