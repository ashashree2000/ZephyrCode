import "./App.css";
import { useState, CSSProperties } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.min.css";
import Home from "./pages/Home";
import JobInfo from "./pages/JobInfo";
import HashLoader from "react-spinners/HashLoader";
import { useSelector } from "react-redux";

function App() {
  const { loader } = useSelector((state) => state.loaderReducer);
  return (
    <div className="App">
      {loader && (
        <div className="sweet-loading text-center">
          <HashLoader color={"#001529"} size={150} />
        </div>
      )}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/jobinfo" element={<JobInfo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
