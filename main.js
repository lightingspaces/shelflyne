var myFullpage = new fullpage('#fullpage', {
	//Navigation
	licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
	menu: '#menu',
	lockAnchors: false,
	anchors:['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
	navigation: true,
	navigationPosition: 'left',
	navigationTooltips: ['firstSlide', 'secondSlide'],
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
	scrollHorizontally: true,
	interlockedSlides: false,
	
	scrollHorizontallyKey: "c2hlbGZseW5lLmNvbS5hdV90VU9jMk55YjJ4c1NHOXlhWHB2Ym5SaGJHeDVVUVU=",

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

//

var imageSwitch = document.querySelector('div#sect2_btns input')
// console.log(imageSwitch.checked)

//

// Switch button

// document.querySelector('div#sect2_btns input').onclick = function(e) {

//     if (e.target.checked === true ){
// 		document.querySelector('#page_2 #sect2').classList.toggle('sect2_2_active')
//     } else if (e.target.checked === false){

// 		document.querySelector('#page_2 #sect2').classList.toggle('sect2_2_active')
// 	}
    
// } 




var bgs = document.querySelectorAll('#page_8 #backgrounds div')
var addOpacity = function (){
	bgs.forEach(function(item){
		item.classList.add('opacityCero')
		item.classList.remove('fadeIn')
	})

}
var btns2 =  document.querySelectorAll('#page_8 .colorbuttons');

btns2.forEach(function(btn){
	btn.addEventListener('mouseenter', function(){

		if (btn.id === 'colorbtn_1'){
			addOpacity()
			document.querySelector('#page_8 #background_1').classList.add('fadeIn')
		}else if (btn.id === 'colorbtn_2'){
			addOpacity()
			document.querySelector('#page_8 #background_2').classList.add('fadeIn')
		}else if (btn.id === 'colorbtn_3'){
			addOpacity()
			document.querySelector('#page_8 #background_3').classList.add('fadeIn')

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
			document.querySelector('#page_9 #poster_1').classList.add('fadeIn')
			document.querySelector('#page_9 #list_1').classList.add('fadeIn')

		}else if (btn.id === 'btn_2'){
			addOpacity2()
			document.querySelector('#page_9 #poster_2').classList.add('fadeIn')
			document.querySelector('#page_9 #list_2').classList.add('fadeIn')

		}else if (btn.id === 'btn_3'){
			addOpacity2()
			document.querySelector('#page_9 #poster_3').classList.add('fadeIn')
			document.querySelector('#page_9 #list_3').classList.add('fadeIn')

		}

	})
	
})
// 
// 
// 

// $('#getActiveSlide').click(function(){
// 	console.log(fullpage_api.getActiveSlide());
//  });
 
//  $('#getActiveSection').click(function(){
// 	console.log(fullpage_api.getActiveSection());
//  });




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
var playvideo = false;
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
	// change here.
	if (currentSlide !== "page15"){
		navtop2.classList.add('transparent')
	// } else {navtop2.classList.remove('transparent')
	}
	// 
// 
// 
	// 
	if (currentSlide !== 'page6')
	{playvideo=true}

	if (currentSlide === 'page6' && playvideo===true){ 
		playvideo = false;
		setTimeout(func, 500);
    		function func() {
				document.querySelector('video#myVideo3').play();
				console.log('sss')
				
			}
		}
	
	if (currentSlide === "page8"){
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

// 


// div.animated-icon4 { open}
// button.navbar-toggler {show}
// button.navbar-toggler.collapsed { 
// 	aria-expanded="true"
// }

// div#navbarSupportedContent22 {
// 	show
// }

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
// 
// 


document.querySelector('#border_icon').addEventListener('mouseenter', function(){
	document.querySelector('#arrow_left').classList.add('set')
	document.querySelector('#arrow_right').classList.add('set')
	document.querySelector('#icon_more_text').classList.remove('hide')
	document.querySelector('#icon_more_text').classList.add('show_i')

})

document.querySelector('#border_icon').addEventListener('mouseleave', function(){
	document.querySelector('#arrow_left').classList.remove('set')
	document.querySelector('#arrow_right').classList.remove('set')
	document.querySelector('#icon_more_text').classList.add('hide')
	document.querySelector('#icon_more_text').classList.remove('show_i')
})

document.querySelector('#border_icon_2').addEventListener('mouseenter', function(){
	document.querySelector('#arrow_left_2').classList.add('set')
	document.querySelector('#arrow_right_2').classList.add('set')
	document.querySelector('#icon_more_text_2').classList.remove('hide')
	document.querySelector('#icon_more_text_2').classList.add('show_i')

})

document.querySelector('#border_icon_2').addEventListener('mouseleave', function(){
	document.querySelector('#arrow_left_2').classList.remove('set')
	document.querySelector('#arrow_right_2').classList.remove('set')
	document.querySelector('#icon_more_text_2').classList.add('hide')
	document.querySelector('#icon_more_text_2').classList.remove('show_i')
})

document.querySelector('input[type="range').addEventListener('change', function(){
	console.log('sss')
	console.log(document.querySelector('input[type="range').value)
})


// 
// 
var img2 = document.querySelector('div#cribg_2');
var $element = $('#range_slider input[type="range"]');
var $output = $('#range_slider output');

function updateOutput(el, val) {
  el.textContent = val;
}

$element
  .rangeslider({
    polyfill: false,
    onInit: function() {
	//   updateOutput($output[0], this.value);
	  img2.setAttribute('style', "margin-top:-40%;");
    }
  })
  .on('#range_slider input', function() {
	// updateOutput($output[0], this.value);
	var range_value = this.value
	var range_value = -range_value;
	// var total = range_value - 100;
	console.log(range_value)
	img2.setAttribute('style', "margin-top:"+range_value+"%;");
  });
