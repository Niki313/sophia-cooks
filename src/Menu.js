import React from "react";

import './styles.css';




export default function Menu() {
    return (
<div className="menu">
        <div className="row">
            <div className=" col-7" id="logo">
                <a href="index.html" title="Home page" rel="noreferrer">
                    <img src="../images/logo.svg" alt="Home page" className="logo"/>
                </a>
            </div>
            <div className="menu-item col">
                <a href="/" title="Home Page"  rel="noreferrer" id="active-link">
                    Home
                </a>
            </div>
            <div className="menu-item col">
                <a href="index.html #categories" title="Categories of dishes"  rel="noreferrer">
                Categories of dishes
                </a>
            </div>
            <div className="menu-item col">
                <a href="index.html #contact" title="Contacts"  rel="noreferrer">
                Contacts
                </a>
            </div>
            
        </div>
    
    </div>
  );
  }