import React from "react";

export const Videohelp = () => {
  return (
    <div className=" bg-abstaract2">
      <div className=" mt-5">
        <h1 className="f-bebas f-sm-108 f-108 f-bold text-center  ">
          How Its Work IN Just A Minute
        </h1>
      </div>
      <div className="">
        <div className="container mt-3">
          <div className="row  ">
            <div className="col-md-6 col-12 px-5 ">
              <h1 className="f-bebas f-77 f-sm-77 f-bold text-center text-info mb-md-4 mb-2 ">
                Click and Watch
              </h1>
              <div className="embed-responsive embed-responsive-16by9">
                <div className="videoWrapper">
                  <iframe className="rounded-3 shadow-lg"
                    width="560"
                    height="349"

                    src="https://www.youtube.com/embed/pH37pK7kalA"
                   
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 px-5 d-flex justify-content-center position-relative">
              <img src="../images/video.png" className=" w-75 mt-md-0 mt-4 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
