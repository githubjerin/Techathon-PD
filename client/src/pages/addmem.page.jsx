import React from "react";
import axios from "axios";

import '../res/css/animate.css';
import '../res/css/bootstrap.css';
import '../res/css/magnific-popup.css';
import '../res/css/style.css';


export default function addMemory() {

    const [title, setTitle] = React.useState('');
        const [location, setLocation] = React.useState('');
        const [description, setDescription] = React.useState('');
        const [image, setImage] = React.useState('');

    async function handleChange(event) {
        console.log(event);
        if (event.target.id === 'title') {
            setTitle(event.target.value);
        } else if (event.target.id === 'location') {
            setLocation(event.target.value);
        } else if (event.target.id === 'data') {
            setDescription(event.target.value);
        } else if (event.target.id === 'memory_image') {
            setImage(event.target.value);
        }
    }

    async function submit() {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('data', description);
        formData.append('location', location);
        formData.append('memory_image', image);
        
        axios.post('http://localhost:2003/memory/add-memory', formData, {withCredentials: true})

        // const response = await fetch('http://localhost:2003/memory/add-memory', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         data: description,
        //         memory_image: image,
        //         location: location,
        //         title: title
        //     }),
        //     credentials: 'include'
        // });
    }
    

    return (    
        <div style={{backgroundColor: "black"}}>
            <div class="container" >
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
                                <li><a href="/memories" style={{color: "white"}}>Memories</a></li>
                                <li><a href="">Logout<span></span></a></li>
                            </ul>
                        </nav>
                        

                    </div>

                </div>
            </div>
           
            <div id="content" class="no-top no-bottom" data-bgimage="url(images/background/1.jpg)" data-stellar-background-ratio=".2">
                <div class="overlay-bg t50 no-bottom">
                  
                    <section id="subheader" class="dark no-top no-bottom">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <h1>Add Memory</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                 
    
                    <section aria-label="section-services">
                        <div class="container">
                            <div class="row">
                                
                                <div class="col-md-12">
                                    <form name="contactForm" id='contact_form' class="row form-s1"  onSubmit={submit}>
    
                                        <div class="field-set col-md-12">
                                            <input type='text' id='title' class="form-control" placeholder="Memory Title" onChange={handleChange}/>
                                        </div>
    
    
                                        <div class="field-set col-md-12">
                                            <input type='text' id='location' class="form-control" placeholder="Location" onChange={handleChange}/>
                                        </div>    
                                        <div class="field-set col-md-12">
                                            <textarea id='data' class="form-control" placeholder="Describe your memory" onChange={handleChange}></textarea>
                                        </div>
                                        <div class="field-set col-md-12">
                                            <input type='file' id='memory_image' accept=".png, .jpg, .jpeg" onChange={handleChange} class="form-control" placeholder="Memeory image"/>
                                        </div>
    
                                        <div class="spacer-half"></div>
    
                                        <div class="col-md-12">
                                            <div id='submit'>
                                                <input type='submit' id='submit' value='Upload Memory' class="btn btn-custom color-2"/>
                                            </div>
                                        </div>
                                    </form>
    
                                    <div class="spacer-double"></div>
    
    
                                </div>
    
                            </div>
                        </div>
                    </section>
                </div>
            </div>
           
    
            
        </div>
    
    );
}

