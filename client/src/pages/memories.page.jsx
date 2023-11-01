import React from "react";

import '../res/css/bootstrap.min.css';
import '../res/css/materialdesignicons.min.css';
import '../res/css/style.min.css';

import Memory from "../components/memory.component.jsx";




export default function Landing() {
    const [entries, setEntries] = React.useState([]);
    async function getEntries() {
        const response = await fetch('http://localhost:2003/memory/view-memory', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        if (response.status === 200) {
            const data = await response.json();
            setEntries(data);
        } else {
            alert('Invalid email or password');
        }
    }

    async function entriesList() {
        
        return entries.forEach(currententry => {       
            return <Memory 
                        key={currententry._id}
                        title={currententry.title}
                        data={currententry.data} 
                        location={currententry.location}
                    />;
        });
    }

    React.useEffect(() => {
        getEntries();
    }, []);

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
                                <li><a href="/addMemory">Add Memory</a></li>
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
                        <Memory title="Memory #1" data="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." location="Chennai"></Memory>
                        <Memory title="Memory #2" data="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." location="Chennai"></Memory>

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


    </div>



</div>
    );
}

