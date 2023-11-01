import React from "react";

import '../res/css/bootstrap.min.css';
import '../res/css/materialdesignicons.min.css';
import '../res/css/style.min.css';


export default function Landing() {
    

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
                                <li><a href="/add-memory">Add Memory<span></span></a></li>
                                <li><a href="/logout">Logout<span></span></a></li>
                            </ul>
                        </nav>

                    </div>

                </div>
            </div>
        </header>


        <div id="content" class="no-top no-bottom" data-bgimage="url(images/background/2.jpg)" data-stellar-background-ratio=".2">
            <div class="overlay-bg t50 no-bottom">
                <section id="subheader" class="dark no-top no-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h1>Memories</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section aria-label="section-services">
                    <div class="container">
                        <div class="row table">
                            <div class="padding40">
                                <div class="post-text">
                                    <h3><a href="news-single.html">Make Better User Interface</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat.
                                    </p>

                                    <span class="post-date">January 1, 2019</span>

                                </div>
                            </div>
                            <div class="col-md-6 text-middle">
                                <img src="images/album/7.jpg" class="img-responsive" alt=""/>
                            </div>
                        </div>

                       

                       

                        <div class="spacer-double"></div>

                        <div class="text-center">
                            <ul class="pagination">
                                <li><a href="#">Prev</a></li>
                                <li class="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">Next</a></li>
                            </ul>
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



</div>
    );
}

