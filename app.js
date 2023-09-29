import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {
    "id": "heading"
}, "Hello world from React!");
            
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(heading);