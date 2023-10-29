import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppContainer from "./components/AppContainer";
import Form from "./components/Form";

function App() {
  const data = [
    { id: 1, name: "Vasanth" },
    { id: 2, name: "Lenovo" },
    { id: 3, name: "Dell" },
    { id: 4, name: "HP" },
  ];
  const [formVis, setVis] = useState(true);
  return (
    <AppContainer>
      <div className="w-3/5 p-4 mx-auto bg-white shadow-lg rounded-2xl">
        <div className="flex justify-evenly">
          <img
            src={logo}
            alt="logo"
            className="animate-spin duration-300 w-15 h-14"
          ></img>
          <h1 className="py-2.5 flex-1 text-center text-lg shrink-0 ">
            Welcome to #react-typescript with #tailwindcss{" "}
          </h1>
        </div>
        {formVis ? (
          <>
            <div className="">
              {data.map((val) => (
                <p
                  className="bg-slate-500 text-center text-xl l-h"
                  id={val.id.toString()}
                >
                  {val.name}
                </p>
              ))}
            </div>
            <button
              className="bg-blue-600 text-white ml-3 rounded-lg p-1 mt-2"
              onClick={() => {
                //   props.formVis = !props.formVis;
                setVis(!formVis);
              }}
            >
              Open Form
            </button>
          </>
        ) : (
          <Form formVis={formVis} setvis={setVis}></Form>
        )}
      </div>
    </AppContainer>
  );
}

export default App;
