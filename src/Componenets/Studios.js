import React from "react";
import { Link } from "react-router-dom";

export const Studios = () => {
  return (
    <div>
      <section>
        <div className="position-relative bigpadding mt-5 mb-5 pb-5">
          <img src="../images/bgblue.png" className="bgblue-img " />
          <img src="../images/money.png" className="money " />
          <div className="z-indextop d-block d-md-none  text-center  text-white h-100vh h-sm-100vh">
            <p className="f-bebas f-77 f-sm-77 f-bold mb-0 pt-5">
              sell more in your ecomm store.
            </p>
            <p className="f-ubun f-30 f-sm-30  mb-3 mt-3 pb-5 fw-normal">
              Grow your biz with better photo & video. we make it easy for brands{" "}
              <br />
              to get quality content at affordable prices.
            </p>
            <div className="d-flex justify-content-center pt-2">
              <div className="shadow-sm py-md-3 py-4 w-100 bgligtpurple cabin round round-sm  text-greenish ">
                <h4 className="f-24 px-2 f-bold">Best part? only pay for the assets you love. $25 photos & $85 videos.</h4>
                {" "}
                <button
                  type="button"
                  className="btn btn-primary bg-yellow outlinebtn ms-md-5 ms-1 py-3 mt-2 mt-md-0 px-3 "
                >
                  Create a Package
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="z-indextop d-none d-md-block text-center  text-white h-100vh h-sm-100vh">
          <p className="f-bebas f-77 f-sm-77 f-bold mb-0 ">
            sell more in your ecomm store.
          </p>
          <p className="f-ubun f-30 f-sm-30  mb-md-5 mb-3 fw-normal ">
            Grow your biz with better photo & video. we make it easy for brands{" "}
            <br />
            to get quality content at affordable prices.
          </p>
          <div className="d-flex justify-content-center ">
            <div className="shadow-sm py-md-3 py-4 w-75 bgligtpurple cabin f-24 f-bold round round-sm  text-greenish ">
              Best part? only pay for the assets you love. $25 photos & $85
              videos.{" "}
              <button
                type="button"
                className="btn btn-primary bg-yellow outlinebtn ms-md-5 ms-1 py-3 mt-2 mt-md-0 px-3 "
              >
                Create a Package
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="position-relative">
        <div className="text-dark z-indextop mt-5">
          <h1 className="f-bebas f-sm-108 f-108 f-bold text-center ">Virtual Shoot</h1>
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-4 col-12">
              <img src="../images/book.jpg" className=" method " />
              <div>
                <h1 className="f-bebas f-23 my-3 ">Booking.</h1>
                <p className="cabin mb-5 mb-md-0 f-bold text-muted ">
                  You can finish planning your shoot in minutes. Your product
                  ships for free and localy most shoots happen within 2 weeks.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <img src="../images/shoot.jpg" className=" method " />
              <div>
                <h1 className="f-bebas f-23 my-3 ">Joining.</h1>
                <p className="cabin mb-5 mb-md-0 f-bold text-muted ">
                  See live photos in our dashboard then give feedback and we’ll
                  make real-time adjustments.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <img src="../images/Final.jpg" className=" method " />
              <div>
                <h1 className="f-bebas f-23 my-3 ">Shop.</h1>
                <p className="cabin mb-5 mb-md-0 f-bold text-muted ">
                  Shop your photos & videos. Get your favorites and get
                  professional edited top notch content back in 24hrs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="f-bebas f-108 f-bold text-center my-4 ">Portfolio</h1>
        </div>
        <div className="container">
          <div className="row"></div>
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap"
            rel="stylesheet"
          />

          <div className="gallery row">
            <div className="col-md-3 align-self-end">
              <a
                href="../images/model2.jpg"
                target="_blank"
                className="gallery__link"
              >
                <figure className="gallery__thumb">
                  <img
                    src="../images/model2.jpg"
                    alt="Portrait by Jessica Felicio"
                    className="gallery__image rounded-3 shadow-c"
                  />
                </figure>
              </a>

              <a
                href="../images/cloth.jpg"
                target="_blank"
                className="gallery__link"
              >
                <figure className="gallery__thumb">
                  <img
                    src="../images/cloth.jpg"
                    alt="Portrait by Jessica Felicio"
                    className="gallery__image rounded-3 shadow-c"
                  />
                </figure>
              </a>
              <a
                href="../images/perfume2.gif"
                target="_blank"
                className="gallery__link"
              >
                <figure className="gallery__thumb">
                  <img
                    src="../images/perfume2.gif"
                    alt="Portrait by Oladimeji Odunsi"
                    className="gallery__image rounded-3 shadow-c"
                  />
                </figure>
              </a>
              <a
                href="../images/model4.jpg"
                target="_blank"
                className="gallery__link"
              >
                <figure className="gallery__thumb">
                  <img
                    src="../images/model4.jpg"
                    alt="Portrait by Alex Perez"
                    className="gallery__image rounded-3 shadow-c"
                  />
                </figure>
              </a>
            </div>

            <div className="col-md-3 align-self-end">
              <a
                href="../images/jew2.jpg"
                target="_blank"
                className="gallery__link"
              >
                <figure className="gallery__thumb mb-2">
                  <img
                    src="../images/jew2.jpg"
                    alt="Portrait by Noah Buscher"
                    className="gallery__image rounded-3 shadow-c"
                  />
                </figure>
              </a>
              <a
                href="../images/beauty1.jpg"
                target="_blank"
                className="gallery__link"
              >
                <figure className="gallery__thumb">
                  <img
                    src="../images/beauty1.jpg"
                    alt="Portrait by Noah Buscher"
                    className="gallery__image rounded-3 shadow-c"
                  />
                </figure>
              </a>
              <a
                href="../images/beauty4.gif"
                target="_blank"
                className="gallery__link"
              >
                <figure className="gallery__thumb">
                  <img
                    src="../images/beauty4.gif"
                    alt="Portrait by Sam Burriss"
                    className="gallery__image rounded-3 shadow-c"
                  />
                </figure>
              </a>
              <a
                href="../images/juice.gif"
                target="_blank"
                className="gallery__link"
              >
                <figure className="gallery__thumb">
                  <img
                    src="../images/juice.gif"
                    alt="Portrait by Sam Burriss"
                    className="gallery__image rounded-3 shadow-c"
                  />
                </figure>
              </a>
              <a
                href="../images/can.jpg"
                target="_blank"
                className="gallery__link"
              >
                <figure className="gallery__thumb">
                  <img
                    src="../images/can.jpg"
                    alt="Portrait by Oladimeji Odunsi"
                    className="gallery__image rounded-3 shadow-c"
                  />
                </figure>
              </a>
            </div>
            <div className="col-md-3 align-self-end">
              <a
                href="../images/bag2.jpg"
                target="_blank"
                className="gallery__link"
              >
                <figure className="gallery__thumb">
                  <img
                    src="../images/bag2.jpg"
                    alt="Portrait by Sam Burriss"
                    className="gallery__image rounded-3 shadow-c"
                  />
                </figure>
              </a>
              <a
                href="../images/photocomo.jpg"
                target="_blank"
                className="gallery__link"
              >
                <figure className="gallery__thumb">
                  <img
                    src="../images/photocomo.jpg"
                    alt="Portrait by Mari Lezhava"
                    className="gallery__image rounded-3 shadow-c"
                  />
                </figure>
              </a>
              <a
                href="../images/bag1.jpg"
                target="_blank"
                className="gallery__link"
              >
                <figure className="gallery__thumb">
                  <img
                    src="../images/bag1.jpg"
                    alt="Portrait by Ethan Haddox"
                    className="gallery__image rounded-3 shadow-c"
                  />
                </figure>
              </a>

              <a
                href="../images/dry.jpg"
                target="_blank"
                className="gallery__link"
              >
                <figure className="gallery__thumb">
                  <img
                    src="../images/shoesboy2.jpg"
                    alt="Portrait by Ethan Haddox"
                    className="gallery__image rounded-3 shadow-c"
                  />
                </figure>
              </a>
            </div>
            <div className="col-md-3 align-self-end">
              <a
                href="../images/pet1.jpg"
                target="_blank"
                className="gallery__link "
              >
                <figure className="gallery__thumb">
                  <img
                    src="../images/pet1.jpg"
                    alt="Portrait by Amir Geshani"
                    className="gallery__image rounded-3 shadow-c"
                  />
                </figure>
              </a>
              <a
                href="../images/watch3.jpg"
                target="_blank"
                className="gallery__link"
              >
                <figure className="gallery__thumb">
                  <img
                    src="../images/watch3.jpg"
                    alt="Portrait by Jasmin Chew"
                    className="gallery__image rounded-3 shadow-c"
                  />
                </figure>
              </a>
              <a
                href="../images/toothpaste.gif"
                target="_blank"
                className="gallery__link"
              >
                <figure className="gallery__thumb">
                  <img
                    src="../images/toothpaste.gif"
                    alt="Portrait by Dima DallAcqua"
                    className="gallery__image rounded-3 shadow-c"
                  />
                </figure>
              </a>

              <a
                href="../images/shoesboy2.jpg"
                target="_blank"
                className="gallery__link"
              >
                <figure className="gallery__thumb">
                  <img
                    src="../images/dry.jpg"
                    alt="Portrait by Dima DallAcqua"
                    className="gallery__image rounded-3 shadow-c"
                  />
                </figure>
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg-abstarct my-md-5 my-0 pb-5">
            <div className="mt-5">
              <h1 className="fw-bold pt-5 text-center f-bebas f-sm-108 f-108  mb-0 text-info">
                Built Your Custom Package
              </h1>
              <p className="f-jost f-22 f-sm-22 text-center pb-md-3 pb-5 text-info">
                Choose every detail and build a photo & video that is right for
                your budget.
              </p>
            </div>
            <div className="row w-100 mx-auto">
              <div className="col-md-4 col-12 offset-md-2 px-4  ">
                <div className="f-jost mt-5 mt-md-0  f-23  bg-white shadow pb-5 rounded-3 p-3 text-center mb-5 ">
                  <h1 className="mt-4 text-info ">Photos Starting at </h1>
                  <h1 className="f-jost f-120 fw-bold d-flex align-items-end text-info justify-content-center">
                    $25{" "}
                    <sub className="f-jost fw-normal f-26 sub-text">
                      /image
                    </sub>
                  </h1>
                  <button className="fw-bold fs-4 mb-4 btn  btn-info text-white">
                    TRY NOW
                  </button>
                  <div className="">
                    <img
                      src="../images/girl.jpg"
                      alt=""
                      className="rounded-3 w-100 shadow-c image-size"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-12 px-4    ">
                <div className="f-jost f-23  bg-white shadow rounded-3 p-3 pb-5 text-center mb-5 ">
                  <h1 className="mt-4 text-info">Package Starting at </h1>
                  <h1 className="f-jost f-120 fw-bold d-flex align-items-end justify-content-center text-info">
                    $200{" "}
                  </h1>
                  <button className="fw-bold fs-4 mb-4 btn btn-info text-white ">
                    TRY NOW
                  </button>
                  <div className="">
                    <img
                      src="../images/packagegirl.jpg"
                      alt=""
                      className="rounded-3 w-100 shadow-c image-size"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
