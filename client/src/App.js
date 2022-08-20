import "./App.css";
import React, { useEffect } from "react";
import { useState, CSSProperties } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "antd/dist/antd.min.css";
import Home from "./pages/Home";
import JobInfo from "./pages/JobInfo";
import HashLoader from "react-spinners/HashLoader";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "./redux/actions/jobActions";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  const { loader } = useSelector((state) => state.loaderReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
  }, []);
  return (
    <div className="App">
      {loader && (
        <div className="sweet-loading text-center">
          <HashLoader color={"#001529"} size={150} />
        </div>
      )}

      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/jobs/:id" exact component={JobInfo} />
        {/* <ProtectedRoute path="/appliedjobs" exact component={AppliedJobs} />
        <ProtectedRoute path="/postjob" exact component={PostJob} /> */}

        <Route path="/profile" exact component={Profile} />

        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;
