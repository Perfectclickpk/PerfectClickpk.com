import React from "react";

export const VisionSection = () => {
  return (
    <div>
      <section className="vision mt-5">
        <div className="row w-100 mx-aut0 ">
          <h1 className="f-bebas f-sm-108 f-108 f-bold text-center mb-md-4 mb-0 mt-md-4 px-0 ">
            Mission & Vission
          </h1>
        </div>
        <div className="container">
          <div className="row w-100 mx-auto ">
          <div className=" col-md-6 col-4 d-md-none d-block w-100 py-5 ">
              <img src="images/vision.png"  className="h-auto w-100" />
            </div>

            <div className=" col-md-6 col-sm-8">
              <p className="px-md-4 f-bolo f-22 f-sm-22">
                There are many different routes to go down when it comes to
                creating product and still-life imagery. Our mission is that we
                can work together to decide which style of photography is best
                for your product and brand message and help your product to be
                the center of attention with minimal settings and beautiful
                lighting.
              </p>
              <p className="px-md-4 f-bolo f-22 f-sm-22 mt-4 mb-5 mb-md-0 ">
                Our vision is to revolutionize the photography industry, we are
                the first self-serve content creation platform and home of the
                virtual shoot. We are here to tell the story of your brand with
                top-notch quality and the fastest delivery .Just a few clicks
                and see what you don’t even imagine!
              </p>
            </div>
            <div className=" col-6  d-none d-md-block ">
              <img src="images/vision.png"  className="h-auto w-100" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
