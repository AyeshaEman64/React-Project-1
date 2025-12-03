import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import './index.css'

// import Profile from "./components/Profile.jsx";
//  import { Practice } from "./Practice.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <Practice /> */}
    {/* <Profile /> */}
  </React.StrictMode>
);
