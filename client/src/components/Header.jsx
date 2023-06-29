import React from 'react';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import '../styles/Header.scss'
export default function Header() {
  return (
    // <div className='navbar'>
    //     <div className='gmail'>
    //         <div >
    //             <a className='Gmail' href="
    //             /">Home</a>
    //         </div>
    //         <div >
    //             <a className='Images' href="https://www.google.co.in/imghp?hl=en&amp;tab=ri&amp;ogbl" target="_top">Images</a>
    //         </div>
    //     </div>
    //     <div className='prof'>
    //         <svg className='dot' focusable="true" viewBox="0 0 24 24">
    //             <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
    //         </svg>
    //         <div >
    //             <a className='SignIn' href="/" target="_top">Sign in</a>
    //         </div>
    //     </div>
    // </div>
    <nav>
        <h1>SpamDetector</h1>
        <main>
            <HashLink to={"/"}>Home</HashLink>
            <HashLink to={"/"}>About us</HashLink>
            <HashLink to={"/"} className='SignIn'>Sign in</HashLink>
        </main>
    </nav>
  );
}