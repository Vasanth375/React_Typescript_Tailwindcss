import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppContainer from "./components/AppContainer";
import Form from "./components/Form";
import Home from "./components/Home";

function App() {
  const data = [
    { id: 1, name: "Vasanth" },
    { id: 2, name: "Lenovo" },
    { id: 3, name: "Dell" },
    { id: 4, name: "SpaceX" },
    { id: 5, name: "HP" },
  ];
  const [formVis, setVis] = useState(true);

  return (
    <AppContainer>
      <div className="p-4 mx-auto bg-white shadow-lg rounded-2xl">
        <div className="flex justify-evenly">
          <img
            src={logo}
            alt="logo"
            className="animate-spin duration-300 w-14 h-14"
          ></img>
          <h1 className="py-3.5 flex-1 text-center text-base shrink-0 ">
            Typeform using #react-typescript with #tailwindcss{" "}
          </h1>
        </div>

        {formVis ? (
          <Home data={data} setvis={setVis} formVis></Home>
        ) : (
          <Form formVis={formVis} setvis={setVis}></Form>
        )}
      </div>
    </AppContainer>
  );
}

export default App;
