import React from "react";

import '../res/css/bootstrap.min.css';
import '../res/css/materialdesignicons.min.css';
import '../res/css/style.min.css';


export default function addMemory() {
    

    return (
        <div id="homepage">

        <div id="wrapper">
    
    
            <header>
    
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                           
                            <div id="logo">
                                <a href="index.html">
                                    <img class="logo" src="images/logo-light.png" alt=""/>
                                </a>
                            </div>
                            
    
                        
                            <span id="menu-btn"></span>
                           
    
                          
                            <nav>
                                <ul id="mainmenu">
                                    <li><a href="index.html">Home<span></span></a>
                                        <ul>
                                            <li><a href="index-video.html">New: Home Video</a></li>
                                            <li><a href="index-custom-slider.html">New: Home Custom Slider</a></li>
                                            <li><a href="index.html">Home Default</a></li>
                                            <li><a href="index-carousel.html">Home Carousel</a></li>
                                            <li><a href="index-fullscreen.html">Home Fullscreen</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about.html">About<span></span></a></li>
                                    <li><a href="services.html">Services<span></span></a>
                                        <ul>
                                            <li><a href="services.html">List</a></li>
                                            <li><a href="service-details.html">Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Gallery<span></span></a>
                                        <ul>
                                            <li><a href="album.html">Album Default</a></li>
                                            <li><a href="album-carousel.html">Album Carousel</a></li>
                                            <li><a href="gallery.html">Gallery</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="blog.html">Blog<span></span></a></li>
                                    <li><a href="contact.html">Contact<span></span></a></li>
                                </ul>
                            </nav>
                            
    
                        </div>
    
                    </div>
                </div>
            </header>
          
    
    
           
            <div id="content" class="no-top no-bottom" data-bgimage="url(images/background/1.jpg)" data-stellar-background-ratio=".2">
                <div class="overlay-bg t50 no-bottom">
                  
                    <section id="subheader" class="dark no-top no-bottom">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <h1>Contact</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                 
    
                    <section aria-label="section-services">
                        <div class="container">
                            <div class="row">
                                
                                <div class="col-md-8">
                                    <form name="contactForm" id='contact_form' class="row form-s1" method="post" action='email.php'>
    
                                        <div class="field-set col-md-6">
                                            <input type='text' name='name' id='name' class="form-control" placeholder="Your Name"/>
                                        </div>
    
                                        <div class="field-set col-md-6">
                                            <input type='text' name='email' id='email' class="form-control" placeholder="Your Email"/>
                                        </div>
    
                                        <div class="field-set col-md-6">
                                            <input type='text' name='phone' id='phone' class="form-control" placeholder="Phone"/>
                                        </div>
    
                                        <div class="field-set col-md-6">
                                            <input type='text' name='phone' id='subject' class="form-control" placeholder="Subject"/>
                                        </div>
    
                                        <div class="field-set col-md-12">
                                            <textarea name='message' id='message' class="form-control" placeholder="Your Message"></textarea>
                                        </div>
    
                                        <div class="spacer-half"></div>
    
                                        <div class="col-md-12">
                                            <div id='submit'>
                                                <input type='submit' id='send_message' value='Submit Form' class="btn btn-custom color-2"/>
                                            </div>
                                            <div id='mail_success' class='success'>Your message has been sent successfully.</div>
                                            <div id='mail_fail' class='error'>Sorry, error occured this time sending your message.</div>
                                        </div>
                                    </form>
    
                                    <div class="spacer-double"></div>
    
    
                                </div>
    
                            </div>
                        </div>
                    </section>
                </div>
            </div>
    
    
          
            <footer class="s1">
                <div class="subfooter">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                &copy; Copyright 2023 - Photix by Designesia
                            </div>
    
                            <div class="col-md-6 text-right">
                                <div class="social-icons">
                                    <a href="#"><i class="fa fa-facebook fa-lg"></i></a>
                                    <a href="#"><i class="fa fa-twitter fa-lg"></i></a>
                                    <a href="#"><i class="fa fa-google-plus fa-lg"></i></a>
                                    <a href="#"><i class="fa fa-skype fa-lg"></i></a>
                                    <a href="#"><i class="fa fa-dribbble fa-lg"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
           
    
            <a href="#" id="back-to-top"></a>
            <div id="preloader">
                <div class="s1">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    
    
    
        
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.isotope.min.js"></script>
        <script src="js/easing.js"></script>
        <script src="js/owl.carousel.js"></script>
        <script src="js/jquery.countTo.js"></script>
        <script src="js/validation.js"></script>
        <script src="js/wow.min.js"></script>
        <script src="js/jquery.magnific-popup.min.js"></script>
        <script src="js/enquire.min.js"></script>
        <script src="js/jquery.stellar.min.js"></script>
        <script src="js/jquery.plugin.js"></script>
        <script src="js/typed.js"></script>
        <script src="js/typed-custom.js"></script>
        <script src="js/designesia.js"></script>
    </div>
    
    );
}

