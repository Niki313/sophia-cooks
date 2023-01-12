import React from "react";
import Menu from "./Menu";
import Content from "./Content";
import Footer from "./Footer";

import './styles.css';

export default function App() {
  return (
    <div className="wrapper">
    <Menu />
    <Content />
    <Footer />
    </div>
    
);
}