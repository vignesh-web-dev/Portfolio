import { Route, Routes } from "react-router-dom";
import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Social from "./Components/Social";

function App() {
  return (
    <>
      <Social />
      <div className="App">
        <Navbar />
        <Home></Home>
        {/* <Card /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
