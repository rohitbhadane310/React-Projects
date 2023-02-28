import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "./components/TopNav";
import PageCom from "./components/PageCom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <TopNav title="ImageGallery" mode={mode} toggleMode={toggleMode} />
      <PageCom />
    </>
  );
}

export default App;
