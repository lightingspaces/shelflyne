var myFullpage = new fullpage('#fullpage', {
	//Navigation
	licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
	menu: '#menu',
	lockAnchors: false,
	anchors:['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11'],
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
	// parallaxKey: "199E574F-30614DCB-B121998C-5AE314A1",
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

//

document.querySelector('div#sect2_btns input').onclick = function(e) {

    if (e.target.checked === true ){
		document.querySelector('#page_2 #sect2').classList.toggle('sect2_2_active')
    } else if (e.target.checked === false){

		document.querySelector('#page_2 #sect2').classList.toggle('sect2_2_active')
	}
    
} 
// 
// 
// 

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
var navtop = document.querySelector('#navbarid')
var logoBorder = document.querySelector('#navbarid span#shelfL')

var navWhite = function(){
	navtop.classList.remove('navbar-light')
	navtop.classList.add('navbar-dark')
	logoBorder.classList.add('logoBordWhite')
}

var navBlack = function(){
	navtop.classList.remove('navbar-dark')
	navtop.classList.add('navbar-light')
	logoBorder.classList.remove('logoBordWhite')
}

function doWork() {
	$('#more').load('exp1.php');
	repeater = setTimeout(doWork, 100);
	// console.log(fullpage_api.getActiveSection()['anchor']);
	if (fullpage_api.getActiveSection()['anchor'] != "page1"){
		navtop.classList.add('transparent')
	} else {navtop.classList.remove('transparent')}
	
	if (fullpage_api.getActiveSection()['anchor'] === "page8"){
		navWhite()
	} else {navBlack()}


}

doWork();