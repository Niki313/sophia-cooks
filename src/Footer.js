import React from "react";

import './styles.css';



export default function Footer() {
    return (
    <footer>
            <div className="footer-container">
                <div className="contact">
                    <a href="mailto:sophiek2011@gmail.com"  title="Send message to Sophia" target="_blank" rel="noreferrer" id="contact">
                        Contact the author
                    </a>
                </div>
                <div className="row">
                    <div className="social-links col-11">
                        <a href="https://www.instagram.com/" title="Instagram" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-square-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/" title="Facebook" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-square-facebook"></i>
                        </a>
                        <a href="https://twitter.com/" title="Twitter" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-square-twitter"></i>
                        </a>
                    </div>
                    <div className="arrow col-1"  >
                        <a href="#logo" title="UP">
                            <i className="fa-solid fa-arrow-up"></i>
                        </a>
                    </div>
                    
                </div>
                <div className="copyright">
                    <p>
                        COPYRIGHT © 2022 {" "}
                        <a href="mailto:sophiek2011@gmail.com" title="Send message to Sophia" target="_blank" rel="noreferrer">
                            Sophia Cooks
                        </a>
                    </p>
                </div>
            </div>

        <div className="decoration">
            <img src="../images/decoration-1.png" alt="Parsley"/>
        </div>
            {/* <img src="../images/bg-footer.jpg" alt="background footer" className="background-footer"/> */}
    </footer>
  );
  }