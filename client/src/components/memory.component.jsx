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
                                    <h3><a href="news-single.html">{props.title}</a></h3>
                                    <p style={{color: "white"}}>{props.data}
                                    </p>

                                    <span class="post-date">{props.location}</span>

                                </div>
                            </div>
                            <div class="col-md-6 text-middle">
                                <img src={profile} class="img-responsive" alt=""/>
                            </div>
                        </div>
  );
}