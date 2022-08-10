import React, { useEffect } from 'react'
import '../css/pages/home.css'
import '../css/pages/dashboard.css'
import Navigation from '../components/navigation'
import celebration from '../images/celebration.gif'

export default function Dashboard() {
    useEffect(()=>{
        document.title = "My Dashboard | UAlbany IEEE Server";
    })

    const reveal = () => {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            } else {
            reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("load", reveal);

    return (
        <div className="s-body">
            <Navigation></Navigation>
            <div className="offset">
                <section id="instructions">
                    <div className="success flex-container">
                        <div className="container text reveal">
                            <div className="center">
                                <h1>Almost there!</h1>
                                <p>Visit <b>#bot-spam</b> in the UAlbany IEEE Discord server and type <b>!verify.</b> 
                                    The "IEEE Server" bot will message you with further instructions 
                                    to SSH into the server. After that, you can refresh this page to 
                                    access your dashboard.</p>
                            </div>
                        </div>
                        <div className="container image">
                            <div className="center">
                                <div className="frame-celeb">
                                    <img src={celebration} alt="celebration.gif"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}