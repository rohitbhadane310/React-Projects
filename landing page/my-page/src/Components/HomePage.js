import React from "react";
import dev from "../assets/image.gif";

const HomePage = () => {
  return (
    <>
      <div className="parent-container">
        <div className="row h-100 align-items-center gx-0">
          <div className="col-md-6">
            <img src={dev} alt="loading....." height={550}/>
          </div>
          <div className="col-md-6">
            <div className="brand-container">
              <h1>
                <b>champion programmer</b>
              </h1>
              <p>
                Fullstack <b>Developer</b> and Youtuber
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
