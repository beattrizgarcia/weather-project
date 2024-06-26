import React from "react";
import ReactDOM from "react-dom/client";
import "./weather.css";
import Weather from "./Weather";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Weather App</h1>
    <Weather />
    <footer>
      <p>
        This project was coded by{" "}
        <a
          href="https://github.com/beattrizgarcia"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Beatriz Garcia{" "}
        </a>{" "}
        and is
        <a
          href="https://github.com/beattrizgarcia/weather-project"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on GitHub{" "}
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://master--gleaming-travesseiro-c4b352.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Netlify{" "}
        </a>
      </p>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
