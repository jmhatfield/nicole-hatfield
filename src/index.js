import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import About from "./routes/About";
import LitReviews from "./routes/LitReviews";
import Nonfiction from "./routes/Nonfiction";
import Poetry from "./routes/Poetry";
import VisualArt from "./routes/VisualArt";
import VisualArtDetail from "./routes/VisualArtDetail";
import { routeDefs } from "./utils/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={routeDefs.home.route} element={<App />} />
        <Route path={routeDefs.about.route} element={<About />} />
        <Route path={routeDefs.litReviews.route} element={<LitReviews />} />
        <Route path={routeDefs.nonfiction.route} element={<Nonfiction />} />
        <Route path={routeDefs.poetry.route} element={<Poetry />} />
        <Route path={routeDefs.visualArt.route}>
          <Route path="" element={<VisualArt />} />
          <Route path=":id" element={<VisualArtDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Outlet />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
