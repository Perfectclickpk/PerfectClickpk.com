import React from "react";
import { Header } from "./Header";

//Writting text js

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 1000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span className="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 150 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 5;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 100;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

//Writting text js

export const MainPage = (props) => {
  return (
    <div>
      <section className="mb-5 z-indextop">
        <div className="d-flex display-none position-relative">
          <img
            src="images/cosmetic.png"
            className="h-auto position-absolute main-cosmetic "
          />
        </div>

        <h1 className="f-barel f-bold f-sm-55 f-55  pt-md-3 px-5 l-height h-175 ">
          A Smarter Way to Do <br />
          <span
            className="txt-rotate col-yellow  "
            data-period="1000"
            data-rotate='[ "Virtual Photography.", "Ecomm Shoot.", "Pet Photography.",
           "Amazon Shoot.", "Model Shoot.", "Head Shot .","Product Video.",
           "Model Video.","Unboxing Video.", "Story Telling."]'
          ></span>
        </h1>

        <div className=" responsive">
          <h1 className="f-bebas f-sm-108 f-77 f-bold px-5 mt-xl-4 mt-md-3  mb-md-4 col-blue h-18vh">
            WE <span className="co-green">CREATE</span> TOP{" "}
            <span className="col-lyellow">NOTCH</span> <br />
            <span className="col-purple">PHOTOS </span>
            <span className="co-lpurple">ON THE</span>
            <span className="co-green"> INTERNET.</span>
          </h1>
          <div>
          <h1 className="f-ubun f-sm-30 f-22  px-5 mt-3 mt-md-0 pe-md-5 px-4  mb-md-0 mb-4 l-height">
            Ship us your first product for free <br />
            and we do it virtually.{" "}
          </h1>
          <div className="van">
          <img
            src="images/van.png"
            className=" wvv-34 wvv-sm-34 "
          />
          </div>
          </div>
          <div className="ms-5 mt-3">
            <button
              type="button"
              className="btn btn-orange fw-bold py-3 px-3 btn-lg mx-5 mt-2">
              Create a Package
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
