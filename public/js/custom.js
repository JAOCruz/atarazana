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

	3. Init Menu

	*/

	function initMenu()
	{
		// The main mobile menu (#hamburgerBtn) is wired up inside partials/header.html.
		// Legacy template menu, only if a page still has one
		if($('.menu').length && $('.hamburger').not('#hamburgerBtn').length)
		{
			var legacyHamburger = $('.hamburger').not('#hamburgerBtn');
			legacyHamburger.on('click', function()
			{
				legacyHamburger.toggleClass('active');
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