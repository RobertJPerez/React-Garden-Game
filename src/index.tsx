import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/globals.css";
import reportWebVitals from "./reportWebVitals";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

ReactDOM.render(
    <DndProvider backend={HTML5Backend}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </DndProvider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();