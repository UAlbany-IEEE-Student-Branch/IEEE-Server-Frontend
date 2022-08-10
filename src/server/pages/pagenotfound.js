import React, { useEffect } from 'react'
import '../css/pages/home.css'
import '../css/pages/dashboard.css'
import Navigation from '../../components/navigation'
import pnf from '../images/404.gif'

export default function PageNotFound() {
    useEffect(()=>{
        document.title = "Error 404 | UAlbany IEEE Server";
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
        <div className='s-body'>
            <Navigation></Navigation>
            <div className="offset">
                <section id="instructions">
                    <div className="success flex-container">
                        <div className="container text reveal">
                            <div className="center">
                                <h1 className="pnf">404</h1>
                                <p>The page you are looking for doesn't exist or it could be under development.</p>
                            </div>
                        </div>
                        <div className="container image">
                            <div className="center">
                                <div className="frame-celeb">
                                    <img src={pnf} alt="404.gif"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}