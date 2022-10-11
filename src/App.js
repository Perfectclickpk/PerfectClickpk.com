import "./App.css";
import React from "react";
import { Header } from "./Componenets/Header";
import { MainPage } from "./Componenets/MainPage";
import { VisionSection } from "./Componenets/VisionSection";
import { Clients } from "./Componenets/Clients";
import { Studios } from "./Componenets/Studios";
import { Testimonial } from "./Componenets/Testimonial";
import {Videohelp} from "./Componenets/Videohelp"
import {Confusechat} from "./Componenets/Confusechat"
import {Footer} from "./Componenets/Footer"



function App() {
  return (
    <div>
      <div className="mainbackground">
        <img src="../images/sidedesign.png" className="bg-img"/>
      </div>
        <Header />
        <MainPage />
        <VisionSection/>
        <Clients/>
        <Studios/>
        <Testimonial/>
        <Videohelp/>
        <Confusechat/>
        <Footer/>

    </div>
  );
}

export default App;
