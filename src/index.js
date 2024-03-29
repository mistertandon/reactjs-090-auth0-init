import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { RouterProvider } from "react-router-dom";
import routes from './RoutesConfiguration';
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
      <Auth0Provider
        domain={"dev-i4bzwtj2d2aulowd.us.auth0.com"}
        clientId={"UAe9ItrNjt3lx3xX9tXwvnsO3bLEJ3is"}
        redirectUri={"http://localhost:3000"}
      >
        <RouterProvider router={routes} />
      </Auth0Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
