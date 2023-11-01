import React from 'react';

import '../res/css/bootstrap.min.css';
import '../res/css/materialdesignicons.min.css';
import '../res/css/style.min.css';
import profile from '../res/images/album/7.jpg'


export default function Memory(props) {
  
  return (
    <div class="row table">
                            <div class="padding40">
                                <div class="post-text">
                                    <h3><a href="news-single.html">Memory #1</a></h3>
                                    <p style={{color: "white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat.
                                    </p>

                                    <span class="post-date">January 1, 2019</span>

                                </div>
                            </div>
                            <div class="col-md-6 text-middle">
                                <img src={profile} class="img-responsive" alt=""/>
                            </div>
                        </div>
  );
}