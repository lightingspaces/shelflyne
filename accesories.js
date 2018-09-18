var myFullpage = new fullpage('#fullpage', {
	//Navigation
	licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
	menu: '#menu',
	lockAnchors: false,
	anchors:['page1', 'page2', 'page3', 'page4'],
	navigation: true,
	navigationPosition: 'left',
	navigationTooltips: [],
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	//Scrolling
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: false,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
	normalScrollElementTouchThreshold: 5,
	bigSectionsDestination: null,

	//Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Design
	controlArrows: true,
	verticalCentered: true,
	sectionsColor : ['#ccc', '#fff'],
	paddingTop: '3em',
	paddingBottom: '10px',
	fixedElements: '#header, .footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: true,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
	parallaxKey: "c2hlbGZseW5lLmNvbS5hdV8zMXJjR0Z5WVd4c1lYZz1BcHA=",

	//Custom selectors
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,
	
	//events
	onLeave: function(origin, destination, direction){},
	afterLoad: function(origin, destination, direction){},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){}
});



//

//

var imageSwitch = document.querySelector('div#sect2_btns input')
// console.log(imageSwitch.checked)



// 

var bgs = document.querySelectorAll('#page_8 #backgrounds div')
var addOpacity = function (){
	bgs.forEach(function(item){
		item.classList.add('opacityCero')
		item.classList.remove('fadeIn')
	})

}
var btns2 =  document.querySelectorAll('#page_8 .colorbuttons, #page_8 .tinybtns');

btns2.forEach(function(btn){
	btn.addEventListener('mouseenter', function(e){
		console.log(btn.id + ' ...')

		if (btn.id === 'colorbtn_1'){
			addOpacity()
			document.querySelector('#page_8 #background_1').classList.add('fadeIn')
		}else if (btn.id === 'smbtn_1_1'){
			addOpacity()
			document.querySelector('#page_8 #background_1').classList.add('fadeIn')
		}else if (btn.id === 'smbtn_1_2'){
			addOpacity()
			document.querySelector('#page_8 #background_2').classList.add('fadeIn')

		}else if (btn.id === 'smbtn_1_3'){
			addOpacity()
			document.querySelector('#page_8 #background_3').classList.add('fadeIn')

		}else if (btn.id === 'colorbtn_2'){
			addOpacity()
			document.querySelector('#page_8 #background_4').classList.add('fadeIn')

		}else if (btn.id === 'smbtn_2_1'){
			addOpacity()
			document.querySelector('#page_8 #background_4').classList.add('fadeIn')

		}else if (btn.id === 'smbtn_2_2'){
			addOpacity()
			document.querySelector('#page_8 #background_5').classList.add('fadeIn')

		}else if (btn.id === 'smbtn_2_3'){
			addOpacity()
			document.querySelector('#page_8 #background_6').classList.add('fadeIn')

		}else if (btn.id === 'colorbtn_3'){
			addOpacity()
			document.querySelector('#page_8 #background_7').classList.add('fadeIn')

		}else if (btn.id === 'smbtn_3_1'){
			addOpacity()
			document.querySelector('#page_8 #background_7').classList.add('fadeIn')

		}else if (btn.id === 'smbtn_3_2'){
			addOpacity()
			document.querySelector('#page_8 #background_8').classList.add('fadeIn')

		}else if (btn.id === 'smbtn_3_3'){
			addOpacity()
			document.querySelector('#page_8 #background_9').classList.add('fadeIn')

		}else if (btn.id === 'colorbtn_4'){
			addOpacity()
			document.querySelector('#page_8 #background_10').classList.add('fadeIn')

		}else if (btn.id === 'smbtn_4_1'){
			addOpacity()
			document.querySelector('#page_8 #background_10').classList.add('fadeIn')

		}else if (btn.id === 'smbtn_4_2'){
			addOpacity()
			document.querySelector('#page_8 #background_11').classList.add('fadeIn')

		}else if (btn.id === 'smbtn_4_3'){
			addOpacity()
			document.querySelector('#page_8 #background_12').classList.add('fadeIn')

		}

	})
	
})

// 
// 
// 
var posterslists = document.querySelectorAll('#page_9 .postlist')
var addOpacity2 = function (){
	posterslists.forEach(function(item){
		item.classList.add('opacityCero')
		item.classList.remove('fadeIn')
	})

}
var btns =  document.querySelectorAll('#page_9 #accbtns div');

btns.forEach(function(btn){
	btn.addEventListener('mouseenter', function(){

		if (btn.id === 'btn_1'){
			addOpacity2()
			document.querySelector('#page_9 div#poster_row').classList.remove('poster_bg_2')
			document.querySelector('#page_9 div#poster_row').classList.add('poster_bg_1')
			document.querySelector('#page_9 #list_1').classList.add('fadeIn')

		}else if (btn.id === 'btn_2'){
			addOpacity2()
			document.querySelector('#page_9 div#poster_row').classList.remove('poster_bg_1')
			document.querySelector('#page_9 div#poster_row').classList.add('poster_bg_2')
			document.querySelector('#page_9 #list_2').classList.add('fadeIn')

		// }else if (btn.id === 'btn_3'){
		// 	addOpacity2()
		// 	document.querySelector('#page_9 #poster_3').classList.add('fadeIn')
		// 	document.querySelector('#page_9 #list_3').classList.add('fadeIn')

		// }
		}

	})
	
})
// 
// 
// 


var repeater;
var navtop2 = document.querySelector('#navbarid')
var navtopicon = document.querySelectorAll('.animated-icon4 span')
var logoBorder = document.querySelector('#navbarid span#shelfL')

var navWhite = function(){
	navtopicon.forEach(function(item){
		item.classList.remove('blackcolor')
		item.classList.add('whitecolor')
	})
	navtop2.classList.remove('navbar-light')
	navtop2.classList.add('navbar-dark')
	logoBorder.classList.add('logoBordWhite')
	document.querySelectorAll('#fp-nav ul li a span, .fp-slidesNav ul li a span').forEach(function(item){
		item.setAttribute('style','background-color: white;')
})
}

var navBlack = function(){
	navtopicon.forEach(function(item){
		item.classList.remove('whitecolor')
		item.classList.add('blackcolor')
	})
	navtop2.classList.remove('navbar-dark')
	navtop2.classList.add('navbar-light')
	logoBorder.classList.remove('logoBordWhite')
	document.querySelectorAll('#fp-nav ul li a span, .fp-slidesNav ul li a span').forEach(function(item){
		item.setAttribute('style','background-color: #333;')
})
}


var lastSlide;
var currentSlide;
function doWork() {
	$('#more').load('exp1.php');
	repeater = setTimeout(doWork, 100);
	// console.log(fullpage_api.getActiveSection()['anchor']);
	currentSlide = fullpage_api.getActiveSection()['anchor'];
	var isOpen2 = document.querySelector('div#navbarSupportedContent22').classList.contains('show')
	if (currentSlide !== lastSlide){
		// 
		// 
		if (newvarclick === 0 && isOpen2 === true){
			document.querySelector('button#btnnav').click()
		}
	}
	// change here
	if (currentSlide != "page15"){
		navtop2.classList.add('transparent')
	} else {navtop2.classList.remove('transparent')
	}


	
	if (currentSlide === "page4"){
		navWhite()
	} else {navBlack()}

	if (currentSlide !== "page1"){
		// document.querySelector('nav#navbarid').classList.add('lineheight0')
		document.querySelectorAll('nav#navbarid li').forEach(function(item){
			// item.classList.add('lineheight1')

	})
	} else { 
		// document.querySelector('nav#navbarid').classList.remove('lineheight0')
		document.querySelectorAll('nav#navbarid li').forEach(function(item){
			// item.classList.remove('lineheight1')

	})
	}
	lastSlide = fullpage_api.getActiveSection()['anchor'];


}

doWork();


// Navbar 


// Works everywhere
$(document).ready(function () {

	// Hide/show animation hamburger function
	$('.navbar-toggler').on('click', function () {
  
	  // Take this line to first hamburger animations
	  $('.animated-icon1').toggleClass('open');
  
	  // Take this line to second hamburger animation
	  $('.animated-icon3').toggleClass('open');
  
	  // Take this line to third hamburger animation
	  $('.animated-icon4').toggleClass('open');
	});
  
  });

  var newvarclick;
  document.addEventListener("click", function(e) {
	  newvarclick = 0;
		  if (e.target.id === "#btnnav"){
			  newvarclick = 1;
		  }
		  var isOpen = document.querySelector('div#navbarSupportedContent22').classList.contains('show')
		  if (newvarclick === 0 && isOpen === true){
			  document.querySelector('button#btnnav').click()
		  }
  
  })
  


//   
var hideSmallBtns = function(){
	document.querySelectorAll(".colorbuttons_sm").forEach(function(e){
		e.classList.add("hide")
	})
}
document.querySelectorAll(".colorbuttons").forEach(function(e){
	
	e.addEventListener("mouseenter", function(){
		e.classList.add("scaleUp")
		console.log(e.id)
		hideSmallBtns()
		// e.parentElement.classList.add("show")
		if (e.id==="colorbtn_1"){
			document.querySelector("#colorbtn_1small").classList.remove("hide")

		}else if (e.id==="colorbtn_2"){
			document.querySelector("#colorbtn_2small").classList.remove("hide")

		}else if (e.id==="colorbtn_3"){
			document.querySelector("#colorbtn_3small").classList.remove("hide")

		}else if (e.id==="colorbtn_4"){
			document.querySelector("#colorbtn_4small").classList.remove("hide")

		// }else if (e.id==="colorbtn_1_1"){
		// 	document.querySelector("#colorbtn_4small").classList.remove("hide")

		// }else if (e.id==="colorbtn_1_2"){
		// 	document.querySelector("#colorbtn_4small").classList.remove("hide")

		// }else if (e.id==="colorbtn_1_3"){
		// 	document.querySelector("#colorbtn_4small").classList.remove("hide")

		// }else if (e.id==="colorbtn_2_1"){
		// 	document.querySelector("#colorbtn_4small").classList.remove("hide")

		// }else if (e.id==="colorbtn_2_2"){
		// 	document.querySelector("#colorbtn_4small").classList.remove("hide")

		// }else if (e.id==="colorbtn_2_3"){
		// 	document.querySelector("#colorbtn_4small").classList.remove("hide")

		// }else if (e.id==="colorbtn_3_1"){
		// 	document.querySelector("#colorbtn_4small").classList.remove("hide")

		// }else if (e.id==="colorbtn_3_2"){
		// 	document.querySelector("#colorbtn_4small").classList.remove("hide")

		// }else if (e.id==="colorbtn_3_3"){
		// 	document.querySelector("#colorbtn_4small").classList.remove("hide")

		}
	})

})

document.querySelectorAll(".btnparents").forEach(function(e){

	e.addEventListener("mouseleave", function(){
		hideSmallBtns()
		if (e.id==="btnparent_1"){
			document.querySelector("#colorbtn_1").classList.remove("scaleUp")

		}else if (e.id==="btnparent_2"){
			document.querySelector("#colorbtn_2").classList.remove("scaleUp")
			
		}else if (e.id==="btnparent_3"){
			document.querySelector("#colorbtn_3").classList.remove("scaleUp")
			
		}else if (e.id==="btnparent_4"){
			document.querySelector("#colorbtn_4").classList.remove("scaleUp")
			
		}
	})
})






