/**
 * HTML Include Helper
 * This script handles the HTML includes and menu initialization for all pages.
 */

// Function to handle HTML includes
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, starting includes");
    
    // First include all HTML components
    includeHTML(function() {
        console.log("All HTML includes loaded");
        
        // Initialize the mobile menu
        initializeMobileMenu();
        
        // Trigger a window resize event to fix any layout issues
        setTimeout(function() {
            window.dispatchEvent(new Event('resize'));
        }, 100);
    });
});

function includeHTML(callback) {
    console.log("Starting includeHTML");
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    var remainingIncludes = 0;
    
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain attribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            remainingIncludes++;
        }
    }
    
    if (remainingIncludes === 0) {
        if (callback) callback();
        return;
    }
    
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain attribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    remainingIncludes--;
                    if (remainingIncludes === 0 && callback) {
                        setTimeout(callback, 100); // Small delay to ensure DOM is updated
                    } else {
                        includeHTML(callback);
                    }
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
    
    if (callback) callback();
}

function initializeMobileMenu() {
    console.log("Initializing mobile menu from include-helper.js");
    
    // Modern mobile menu (from header.html)
    if($('#hamburgerBtn').length) {
        console.log("Found hamburger button");
        
        // Remove any existing click handlers to prevent duplicates
        $('#hamburgerBtn').off('click');
        
        // Handle hamburger button click
        $('#hamburgerBtn').on('click', function(e) {
            console.log("Hamburger clicked");
            e.preventDefault();
            $(this).toggleClass('active');
            $('#mobileMenuOverlay').toggleClass('active');
        });
        
        // Handle close button click
        $('#mobileMenuClose').off('click');
        $('#mobileMenuClose').on('click', function() {
            console.log("Close button clicked");
            $('#hamburgerBtn').removeClass('active');
            $('#mobileMenuOverlay').removeClass('active');
        });
        
        // Handle dropdown toggles
        $('.mobile-dropdown-title').off('click');
        $('.mobile-dropdown-title').on('click', function() {
            console.log("Mobile dropdown clicked");
            $(this).toggleClass('active');
            $(this).next('.mobile-dropdown-menu').toggleClass('show');
        });
    } else {
        console.log("Hamburger button not found, will retry");
        // Retry after a short delay
        setTimeout(initializeMobileMenu, 500);
    }
} 