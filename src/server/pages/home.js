import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Navigation from '../components/navigation';
import '../css/pages/home.css'
import logo_svg from '../images/ieeeualbany.svg'
import MemberInfoCard from '../components/memberinfocard'

export default function Home() {
    const [animation, setAnimation] = useState("animation-on");
    const [users, setUsers] = useState([]);

    const toggleAnimation = () => {
        if (animation === "animation-on") {
            window.localStorage.setItem("animation", "animation-off");
            setAnimation("animation-off");
        }
        else {
            window.localStorage.setItem("animation", "animation-on");
            setAnimation("animation-on");
        }
    };

    useEffect(()=> {
        if (window.localStorage.getItem("animation") === null)
            setAnimation("animation-on");
        else
            setAnimation(window.localStorage.getItem("animation"));
        const check_btn = document.getElementsByClassName("form-check-input")[0];
        if (window.localStorage.getItem("animation") === "animation-on") 
            check_btn.checked = false;
        else if (window.localStorage.getItem("animation") === null)
            check_btn.checked = false;
        else 
            check_btn.checked = true;
        axios.get("https://ieeeualbany-be.herokuapp.com/users/recentmembers", {params: {accesskey: 'sUfdfJJDfdBejHHdfUFAdJiwNNkl'}}).then(response => {
            setUsers(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])
    
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

    window.addEventListener("scroll", reveal);

    return (
        <div className='s-body'>
            <div className="App">
            <header className="App-header">
                <Navigation></Navigation>
                <div className="offset">
                    <section id="home">
                        <div className={animation}>
                            <div className="home-div flex-container">
                                <div className="home-description-div frosted-container container">
                                    <div className="center">
                                        <p className="title">UAlbany IEEE Server</p>
                                        <p className="description">A free cloud hosting service for UAlbany IEEE club members.</p>
                                        <div className="home-buttons">
                                            <button className="btn btn-outline-light btn-parent-site" type="submit" onClick={(e) => {e.preventDefault(); window.location.href = '/'}}>Parent Site</button>
                                            <button className="btn btn-primary btn-get-started" type="submit" onClick={(e) => {e.preventDefault(); window.location.href = 'https://ieeeualbany.herokuapp.com/login'}}>Get Started</button>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={toggleAnimation}></input>
                                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Disable animation</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-image-div container">
                                    <div className="center">
                                        <img className="logo-svg" src={logo_svg} alt="server-header-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="about">
                        <div className="text-center">
                            <div className="container-anim reveal">
                                <div className="text-container">
                                    <div className="text-box">
                                        <p className="title">All your side projects, in one convenient location</p>
                                        <p className="description">Host or upload your websites, discord bots, apps and more without being limited to a single linux container.</p>
                                    </div>
                                </div>                                
                            </div>
                            <div className="small-icons">
                                <i className="font-awesome fas fa-mobile-alt"></i>
                                <i className="font-awesome fas fa-server"></i>
                                <i className="font-awesome fas fa-desktop"></i>
                            </div>
                        </div>
                    </section>
                    <section id="discord-integration">
                       <div className="row">
                           <div className="col-md-6"> 
                                <div className="container-anim reveal">
                                    <div className="text-container">
                                        <div className="text-box">
                                            <p className="title">Side-by-side Discord integration</p>
                                            <p className="description">Being a Discord-oriented organization, users must interface with the IEEE Server Discord bot to communicate with the server.</p>
                                            <p className="disclaimer">(Disclaimer: By tying your Discord account to the server, only your Discord profile name, avatar, ID, and email will be logged,
                                            which most Discord bots have access to already. You can remove this information any time by contacting the server administrator.)</p>  
                                        </div>
                                    </div>                                
                                </div>                                                        
                           </div>
                           <div className="col-md-6">                          
                                <i className="large-icon font-awesome fab fa-discord"></i>                              
                           </div>
                       </div>
                   </section>
                   <div className={animation}>
                        <section id="members">
                            <p className="title">Recent Members (Member Count:&nbsp;{users.length})</p>
                            { users.map(member => 
                                <MemberInfoCard key={member._id} avatar={member.avatar} nickname={member.nickname} date={member.createdAt}/>
                            )}
                        </section>
                        <section id="portfolio">
                            <div className="row">
                                <div className="col-md-6">
                                        <i className="large-icon fas fa-folder-open"></i>                              
                                </div>
                                <div className="col-md-6">                  
                                        <div className="container-anim reveal">
                                            <div className="text-container">
                                                <div className="text-box frosted-container">
                                                    <p className="title">Build and compare your portfolio</p>
                                                    <ul>
                                                        <li>Have your projects easily accessible to show off</li>
                                                        <li>See what projects your peers are working on by searching their Discord name</li>
                                                        <li>Members who upload a project to the server get the "Server Contributor" role to distinguish themself</li>
                                                    </ul> 
                                                </div>
                                            </div>                                
                                        </div>                  
                                </div>
                            </div>
                        </section>
                   </div>
                   <section id="support">
                       <div className="faq">
                           <p className="title">Q and A</p>
                           <p><b>I created an account over a week ago, and I still don't have access. How come?</b></p>
                           <p><em>Only members in the IEEE Discord server with the "Club Member" role are allowed access to SSH into the server. If you are a club member, please reach out!</em></p>
                           <p><b>How is this service different from Github?</b></p>
                           <p><em>Aside from hosting, it makes it easier to see what everyone in the club is working on.</em></p>
                           <p><b>I found a bug, flaw, or I have a suggestion</b></p>
                           <p><em>Please reach out via the socials below!</em></p>
                       </div> 
                       <div className="questions text-center">
                           <p className="title">Questions?</p>
                           <p className="description">Feel free to reach out via any of these socials for any questions you might have.</p>
                           <div className="small-icons">
                               <a href="https://discord.gg/ieee"><i className="fab fa-discord"></i></a>
                               <a href="https://www.instagram.com/ieee.ualbany/?hl=en"><i className="fab fa-instagram"></i></a>
                               <a href="https://www.youtube.com/channel/UCJMvuEO6dZcyzTsWfh7cXTA"><i className="fab fa-youtube"></i></a>
                               <a href="https://twitter.com/IeeeUalbany"><i className="fab fa-twitter"></i></a>
                               <a href="https://www.linkedin.com/company/ieeeualbany"><i className="fab fa-linkedin"></i></a>
                           </div>
                       </div>
                   </section>
                </div>
            </header>
        </div>
        </div>
    )
}