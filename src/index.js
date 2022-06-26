import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Art from "./routes/Art";
import Poem from "./routes/Poem";
import LitReview from "./routes/LitReview";
import reportWebVitals from "./reportWebVitals";
import About from "./routes/About";
import LitReviews from "./routes/LitReviews";
import Poetry from "./routes/Poetry";
import VisualArt from "./routes/VisualArt";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="literature-reviews">
          <Route path="" element={<LitReviews />} />
          <Route path=":id" element={<LitReview />} />
        </Route>
        <Route path="poetry">
          <Route path="" element={<Poetry />} />
          <Route path=":id" element={<Poem />} />
        </Route>
        <Route path="visual-art">
          <Route path="" element={<VisualArt />} />
          <Route path=":id" element={<Art />} />
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
