import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/5.19.4/reset.min.css" integrity="sha512-vw1Eh0YXwSfFcRPIxtAvonjwHTEqKqwq7ucziF/ZCMEzRlmECgzmGSIHecwetYQXMUE1AL4mlxI7OCt38WvOgw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
