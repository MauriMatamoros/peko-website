import React from 'react';

import NavBar from './NavBar';
import Header from './Header';
import About from './About';
import Download from './Download';
import Contact from './Contact';
import CommingSoon from './CommingSoon';
import Footer from './Footer';
import '../js/jquery.easing.min.js';

export default class App extends React.Component {
  componentDidMount() {
    /*!
     * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
     * Code licensed under the Apache License v2.0.
     * For details, see http://www.apache.org/licenses/LICENSE-2.0.
     */

    // jQuery to collapse the navbar on scroll
    function collapseNavbar() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    }

    $(window).scroll(collapseNavbar);
    $(document).ready(collapseNavbar);

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $(this).closest('.collapse').collapse('toggle');
    });
  }
  render() {
    return (
      <div>
        <NavBar/>
        <Header/>
        <About/>
        <Download/>
        <Contact/>
        <CommingSoon/>
        <Footer/>
      </div>
    );
  };
};
