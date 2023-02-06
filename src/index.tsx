import SettingsProvider from "contexts/SettingsContext";
import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  DndProvider,
  MouseTransition,
  TouchTransition,
} from "react-dnd-multi-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
export const HTML5toTouchbackend = {
  backends: [
    {
      id: "html5",
      backend: HTML5Backend,
      transition: MouseTransition,
      preview: true,
    },
    {
      id: "touch",
      backend: TouchBackend,
      options: { enableMouseEvents: true, delayTouchStart: 500, delay: 500 },
      preview: true,
      transition: TouchTransition,
    },
  ],
};
root.render(
  <React.StrictMode>
    <DndProvider options={HTML5toTouchbackend}>
      <BrowserRouter>
        <SettingsProvider>
          <App />
        </SettingsProvider>
      </BrowserRouter>
    </DndProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
