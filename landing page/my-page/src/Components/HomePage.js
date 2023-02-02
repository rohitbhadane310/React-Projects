import React from "react";
import dev from '../assets/image.gif';

const HomePage = () => {
  return (
    <>
      <div className="parent-container">
        <div className="row h-100 align-items-center">
          <div className="col-md-6">
            <img src= {dev} alt="loading....." />
          </div>
          <div className="col-md-6">
            <h1>
                <b>champion programmer</b>
            </h1>

            <p>
                Fullstack <b>Developer</b> and Youtuber
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
