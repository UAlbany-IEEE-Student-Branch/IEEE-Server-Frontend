import React from 'react'
import '../css/components/navigation.css'
import logo from '../images/transparent logo.png'
import UserPicture from '../components/userpicture';

// {"nickname":"Jun Won","name":"Jun Won","picture":"https://cdn.discordapp.com/avatars/227577632265469952/88de9a39c6ce38a7d818c47df56fa817.png","updated_at":"2022-03-18T02:33:43.624Z","email":"junwon669@gmail.com","email_verified":true,"sub":"oauth2|discord|227577632265469952"}

// function signIn(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
//     // e.preventDefault();
//     // axios.get('/login')
//     //     .then(response => {
//     //         console.log(JSON.stringify(response));
//     //     })
//     //     .catch((error) => {
//     //         console.log(error);
//     //     })
//     window.location.href = '/login';
// }

export default function Navigation() {
    return (
            <div id="App-navigation">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="nav-link navbar-brand" href="/server"><img src={logo} className="App-logo" alt="logo" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/server/documentation">Documentation<span className="blink">_</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/server/#support">Support<span className="blink">_</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/server/#about">About<span className="blink">_</span></a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <UserPicture/>
                        </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    
}