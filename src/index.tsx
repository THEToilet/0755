import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
import { ImageListProvider } from "./context/ImageListProvider";

ReactDOM.render(
  <React.StrictMode>
    <ImageListProvider>
      <App />
    </ImageListProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
