/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Video
5. Init Date Picker
6. Init Time Picker


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var hamburgerBar = $('.hamburger_bar');
	var hamburger = $('.hamburger');

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();

		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initVideo();
	initDatePicker();
	initTimePicker();
	initMenu();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
			hamburgerBar.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
			hamburgerBar.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		// Initialize the mobile menu from header.html
		var hamburgerBtn = $('#hamburgerBtn');
		var mobileMenuOverlay = $('#mobileMenuOverlay');
		
		if(hamburgerBtn.length && mobileMenuOverlay.length)
		{
			hamburgerBtn.on('click', function()
			{
				hamburgerBtn.toggleClass('active');
				mobileMenuOverlay.toggleClass('active');
				if(mobileMenuOverlay.hasClass('active')) {
					document.body.style.overflow = 'hidden';
				} else {
					document.body.style.overflow = '';
				}
			});
			
			// Close button functionality
			$('#mobileMenuClose').on('click', function() {
				hamburgerBtn.removeClass('active');
				mobileMenuOverlay.removeClass('active');
				document.body.style.overflow = '';
			});
			
			// Close when clicking menu links
			$('.mobile_menu_nav a').on('click', function() {
				setTimeout(function() {
					hamburgerBtn.removeClass('active');
					mobileMenuOverlay.removeClass('active');
					document.body.style.overflow = '';
				}, 100);
			});
			
			// Close when clicking outside menu content
			mobileMenuOverlay.on('click', function(e) {
				if(e.target === mobileMenuOverlay[0]) {
					hamburgerBtn.removeClass('active');
					mobileMenuOverlay.removeClass('active');
					document.body.style.overflow = '';
				}
			});
			
			// Mobile dropdown functionality for "Eventos"
			$('.mobile-dropdown-title').on('click', function(e) {
				e.preventDefault();
				e.stopPropagation();
				$(this).toggleClass('active');
				$(this).next('.mobile-dropdown-menu').toggleClass('show');
			});
		}
		// Legacy menu support for other pages if needed
		else if($('.menu').length && $('.hamburger').not('#hamburgerBtn').length)
		{
			var menu = $('.menu');
			var oldHamburger = $('.hamburger').not('#hamburgerBtn');
			
			oldHamburger.on('click', function()
			{
				oldHamburger.toggleClass('active');
				menu.toggleClass('active');
			});
		}
		
		// Desktop dropdown functionality
		$('.dropdown-toggle').on('click', function(e) {
			e.preventDefault();
			$(this).next('.dropdown-menu').toggleClass('show');
		});
		
		// Close desktop dropdown when clicking outside
		$(document).on('click', function(e) {
			var dropdownToggle = $('.dropdown-toggle');
			var dropdownMenu = $('.dropdown-menu');
			if (!dropdownToggle.is(e.target) && dropdownToggle.has(e.target).length === 0 && 
				!dropdownMenu.is(e.target) && dropdownMenu.has(e.target).length === 0) {
				dropdownMenu.removeClass('show');
			}
		});
	}

	/* 

	4. Init Video

	*/

	function initVideo()
	{
		$(".vimeo").colorbox(
		{
			iframe:true,
			innerWidth:640,
			innerHeight:409,
			maxWidth: '90%'
		});
	}

	/* 

	5. Init Date Picker

	*/

	function initDatePicker()
	{
		var dp = $('#datepicker');
		var date = new Date();
		var dateM = date.getMonth() + 1;
		var dateD = date.getDate();
		var dateY = date.getFullYear();
		var dateFinal = dateM + '/' + dateD + '/' + dateY;
		dp.val(dateFinal);
		dp.datepicker();
	}

	/* 

	6. Init Time Picker

	*/

	function initTimePicker()
	{
		$('.timepicker').timepicker(
		{
		    interval: 60,
		    minTime: '10',
		    maxTime: '6:00pm',
		    defaultTime: '11',
		    startTime: '10:00',
		    dynamic:  true,
		    dropdown: true,
		    scrollbar: true
		});
	}

});