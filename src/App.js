import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Initial from "./Components/Initial";
import { useState, useEffect, useRef } from "react";

function App() {
  const cursor = useRef(null);
  const changePosition = (e) => {
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  };
  return (
    <>
      <section onMouseMove={changePosition}>
        <Initial />
        <Navbar></Navbar>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
        <div className="cursor-style" ref={cursor}></div>
      </section>
    </>
  );
}

export default App;
