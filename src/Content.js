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
                            <img src="../images/salad.png" id="salad" alt="Salad" width={130}/>
                        </div>
                            <p>Salad</p>
                    </div>

                    <div className="category col-2 ">
                        <div className="circle">
                            <img src="../images/soup.png" id="soup" alt="Soup" width={120}/>
                        </div>
                            <p>Soup</p>
                    </div>

                    <div className="category col-2">
                        <div className="circle">
                            <img src="../images/main dishes.png" id="main-dishes" alt="Main Dishes" width={140}/>
                        </div>
                            <p>Main Dishes</p>
                    </div>
                    
                </div>

                <div className="row ">

                    <div className="category col-2">
                        <div className="circle">
                            <img src="../images/appetizer.png" id="appetizer" alt="Appetizer" width={160} />
                        </div>
                            <p>Appetizer</p>
                    </div>

                    <div className="category col-2">
                        <div className="circle">
                            <img src="../images/desert.png" id="desert" alt="Deserts" width={130}/>
                        </div>
                            <p>Desert</p>
                    </div>

                    <div className="category col-2">
                        <div className="circle">
                            <img src="../images/drinks.png" id="drink" alt="Drinks" height={160}/>
                        </div>
                        <p>Drink</p>
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