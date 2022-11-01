//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

// ReactDOM.render(<Home />, document.querySelector("#app"));

import { ContextWrapper } from "./component/AppContext.jsx";
const MyView = () => {
    return (
        <ContextWrapper>
            <Home />
        </ContextWrapper>
    );
};

ReactDOM.render(<MyView />, document.querySelector("#app"));