import React from "react";

import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <div>
        <div className=" pt-md-5">
          <footer className="text-center text-lg-start  footerbg text-white">
            <section className="d-flex justify-content-between p-4 footerbg2">
              <div className="me-5">
                <span className="f-vigo f-22 f-sm-22 text-center  ">
                  ship us your first product for free!
                </span>
              </div>
              <div>
                <link href className="text-white " />
                <i className="fab fa-facebook-f" />
                <link href className="text-white " />
                <i className="fab fa-twitter mx-3" />
                <link href className="text-white " />
                <i className="fab fa-google" />
                <link href className="text-white " />
                <i className="fab fa-instagram mx-3" />
                <link href className="text-white " />
                <i className="fab fa-linkedin " />
                <link href className="text-white " />
                <i className="fab fa-github mx-3" />
              </div>
            </section>
            <section className="position-relative">
              <div className="container text-center text-md-start ">
                <div className="row mt-3">
                  <div className="col-md-3 col-6  mb-4  mt-4 mt-md-0">
                    <img src="../images/photographer.png" className=" w-50 " />
                    <h6 className="text-uppercase  ">
                      {" "}
                      <a className="navbar-brand px-4" to="#">
                        {/* <img src="images/Perfect-Click.png" className="w-250" /> */}
                      </a>
                    </h6>
                  </div>
                  <div className="col-6 d-md-none ">
                    <img
                      src="../images/girlmodel2.png"
                      className=" w-35 supergirl z-index-0"
                    />
                  </div>
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto col-12  mb-4 z-index-5 align-self-center">
                    <h6 className="text-uppercase  f-22 f-vigo ">
                      Contact
                    </h6>
                    <p className="f-jost   ">
                      <i className="fas fa-home mr-3" /> DHA PHASE 3 LAHORE
                    </p>
                    <p className="f-jost  ">
                      <i className="fas fa-envelope mr-3" />{" "}
                      perfectclickpk@gmail.com
                    </p>
                    <p className="f-jost  ">
                      <i className="fas fa-phone mr-3" /> +92 3091876728
                    </p>
                    <p className="f-jost  ">
                      <i className="fas fa-print mr-3" /> +92 3091876728
                    </p>
                  </div>

                  <div className="col-md-3 col-lg-2 col-xl-3 mx-auto mb-4 z-index-5 col-12 align-self-center ">
                    <h6 className="text-uppercase    f-22 f-vigo">
                      Videos
                    </h6>

                    <p className="f-jost  ">
                      <link href="#!" className="text-white" />
                      unboxing
                    </p>
                    <p className="f-jost  ">
                      <link href="#!" className="text-white" />
                      Product Video
                    </p>
                    <p className="f-jost  ">
                      <link href="#!" className="text-white" />
                      Social Promotion
                    </p>
                    <p className="f-jost  ">
                      <link href="#!" className="text-white" />
                      Amazon Video
                    </p>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mb-4 col-12  align-self-center">
                    <h6 className="text-uppercase f-vigo f-22   ">
                      PHOTOS
                    </h6>

                    <p className="f-jost   ">
                      <link href="#!" className="text-white " />
                      Life Style
                    </p>
                    <p className="f-jost  ">
                      <link href="#!" className="text-white" />
                      Ecommerce
                    </p>
                    <p className="f-jost  ">
                      <link href="#!" className="text-white" />
                      Group photos
                    </p>
                    <p className="f-jost  ">
                      <link href="#!" className="text-white" />
                      Head shots
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-md-flex justify-content-center d-none ">
              <img
                src="../images/girlmodel2.png"
                className=" w-229 supergirl z-index-0"
              />
              </div>
            </section>
            <div className="text-center p-3 footerbg2 f-jost   ">
              <link className="text-white " href />
              Perfectclickpk.com
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
