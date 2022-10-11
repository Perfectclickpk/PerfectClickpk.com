import React from "react";

export const Confusechat = () => {
  return (
    <div>
      <div className="position-realative pb-5">
        <img
          src="../images/bluebar.png"
          className="h-auto w-25 w-c50 position-absolute"
        />
      </div>
      <div className="container mb-5 ">
        <div className="shadow-lg rounded-3 z-indextop bg-trans">
        <div className=" ">
          <h1 className="f-bebas f-sm-108 f-108 f-bold text-center pt-5 px-md-5  ">
            Still curious? get a free creative{" "}
            <span className="col-purpleshade">consultation!</span>
          </h1>
        </div>
        <div className=" row pb-5 mx-auto  ">
          <div className="col-md-6 col-10 py-3 py-md-0 ">
            <h1 className="f-vigo f-32 f-sm-32 text-center my-md-5 mb-5 mt-3 px-5 position-relative ">
              Our Creative team guide you in mintues and become a rope between
              your idea.
            </h1>
            <img
              src="../images/thinkgirl.png"
              className=" w-25 me-md-0  thinkgirl"
            />
            <div className="w-100 text-center">
              <button
                type="button"
                className="btn btn-orange fw-bold py-md-3 py-2 btn-lg mx-5"
              >
                CHAT WITH US
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
