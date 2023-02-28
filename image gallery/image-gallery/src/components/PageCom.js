import React, { useState } from "react";
import backgroundImage from "../image/bg.jpg";

function PageCom() {
  const [value, setValue] = useState("");

  const [results, setResults] = useState([]);

  const fetchImages = () => {
    fetch(
      `https://api.unsplash.com/search/photos/?client_id=ZnHSRY-UGzrH5Dk-blCZZuWTFuakB6svvU7QsU9NfK4&query=${value}&orientation=squarish`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setResults(data.results);
      });
  };
  return (
    <div className="App">
      <div
        className="mydiv"
        style={{
          backgroundImage: "url(" + backgroundImage + ")",
          backgroundSize: "cover",
          height: "50vh",
          color: "#f5f5f5",
        }}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn btn-success" onClick={() => fetchImages()}>search</button>
      </div>
      <div className="gallery">
        {results.map((item) => {
          return (
            <img
              className="item"
              key={item.id}
              src={item.urls.regular}
              alt="images"
            />
          );
        })}
      </div>
    </div>
  );
}

export default PageCom;
