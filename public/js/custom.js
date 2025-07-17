/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Date Picker
5. Init Time Picker


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
			if(hamburgerBar.length)
			{
				hamburgerBar.addClass('scrolled');
			}
		}
		else
		{
			header.removeClass('scrolled');
			if(hamburgerBar.length)
			{
				hamburgerBar.removeClass('scrolled');
			}
		}
	}

	/* 

	3. Init Menu - Updated to work with the new mobile menu structure

	*/

	function initMenu()
	{
		console.log("Initializing mobile menu");
		
		// Modern mobile menu (from header.html)
		if($('#hamburgerBtn').length)
		{
			console.log("Found hamburger button");
			
			// Handle hamburger button click
			$('#hamburgerBtn').on('click', function(e) {
				console.log("Hamburger clicked");
				e.preventDefault();
				$(this).toggleClass('active');
				$('#mobileMenuOverlay').toggleClass('active');
			});
			
			// Handle close button click
			$('#mobileMenuClose').on('click', function() {
				console.log("Close button clicked");
				$('#hamburgerBtn').removeClass('active');
				$('#mobileMenuOverlay').removeClass('active');
			});
			
			// Handle dropdown toggles
			$('.mobile-dropdown-title').on('click', function() {
				console.log("Mobile dropdown clicked");
				$(this).toggleClass('active');
				$(this).next('.mobile-dropdown-menu').toggleClass('show');
			});
		}
		
		// Legacy menu (if it exists)
		if($('.menu').length && $('.hamburger').length)
		{
			console.log("Found legacy menu");
			hamburger.on('click', function()
			{
				hamburger.toggleClass('active');
				$('.menu').toggleClass('active');
			});
		}
	}

	/* 

	4. Init Date Picker

	*/

	function initDatePicker()
	{
		if($('.datepicker').length)
		{
			var datePickers = $('.datepicker');
			datePickers.each(function()
			{
				var dp = $(this);
				var date = new Date();
				var dateM = date.getMonth() + 1;
				var dateD = date.getDate();
				var dateY = date.getFullYear();
				var dateFinal = dateM + '/' + dateD + '/' + dateY;
				dp.val(dateFinal);
				dp.datepicker();
			});
		}
	}

	/* 

	5. Init Time Picker

	*/

	function initTimePicker()
	{
		if($('.timepicker').length)
		{
			$('.timepicker').timepicker(
			{
			    interval: 60,
			    minTime: '10',
			    maxTime: '6:00pm',
			    defaultTime: '11',
			    startTime: '10:00',
			    dynamic: true,
			    dropdown: true,
			    scrollbar: true
			});
		}
	}

});