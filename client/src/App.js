import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.min.css";
import Home from "./pages/Home";
import JobInfo from "./pages/JobInfo";

function App() {
  return (
    <div className="App">
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
