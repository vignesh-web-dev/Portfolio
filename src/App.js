import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
// import About from "./Sections/About";
import Social from "./Components/Social";

function App() {
  return (
    <>
      <Social />
      <Navbar></Navbar>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
