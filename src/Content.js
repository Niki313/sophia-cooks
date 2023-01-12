import React from "react";


import './styles.css';



export default function Content() {
    return (
        <div class="content">
            <div>
                <a href="index.html #categories" title="Let's start cooking yummy" className="button">Get started</a>
                <div className="slider">
                    <img src="../images/slider.jpg" alt="Slider"/>
                </div>
            </div>

            <div id="categories">
                <div className="row ">

                    <div className="category col-2 ">
                        <div className="circle">
                            <img src="../images/salad.jpg" alt="Salad"/>
                        </div>
                            <p>Salad</p>
                    </div>

                    <div className="category col-2 ">
                        <div className="circle">
                            <img src="../images/soup.jpg" alt="Soup"/>
                        </div>
                            <p>Soup</p>
                    </div>

                    <div className="category col-2">
                        <div className="circle">
                            <img src="../images/main dishes.jpg" alt="Main Dishes"/>
                        </div>
                            <p>Main Dishes</p>
                    </div>
                    
                </div>

                <div className="row ">

                    <div className="category col-2">
                        <div className="circle">
                            <img src="../images/appetizer.jpg" alt="Appetizer"/>
                        </div>
                            <p>Appetizer</p>
                    </div>

                    <div className="category col-2">
                        <div className="circle">
                            <img src="../images/desert.jpg" alt="Deserts"/>
                        </div>
                            <p>Deserts</p>
                    </div>

                    <div className="category col-2">
                        <div className="circle">
                            <img src="../images/drinks.jpg" alt="Drinks"/>
                        </div>
                        <p>Drinks</p>
                    </div>
                </div>
                   
            </div>

            {/* <div id="categories">
                <div className="row ">

                    <div className="category col-2">
                        <div className="circle">
                            <p>Salad</p>
                        </div>
                    </div>

                    <div className="category col-2">
                        <div className="circle">

                            <p>Soup</p>
                        </div>
                    </div>

                    <div className="category col-2">
                        <div className="circle">
                            <p>Main Dishes</p>
                        </div>
                    </div>
                    
                </div>

                <div className="row ">

                    <div className="category col-2">
                        <div className="circle">
                            <p>Appetizer</p>
                        </div>
                    </div>

                    <div className="category col-2">
                        <div className="circle">
                            <p>Deserts</p>
                        </div>
                    </div>

                    <div className="category col-2">
                        <div className="circle">
                            <p>Drinks</p>
                        </div>
                    </div>

                </div>
            </div> */}
    </div>
  );
  }