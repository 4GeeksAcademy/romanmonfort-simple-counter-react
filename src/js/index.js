//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Secoundcounter from "./component/home.jsx";

//render your react application
let Seconds = 0;



function startCounter() {
    setInterval(() => {
      ReactDOM.render(<Secoundcounter seconds={Seconds} />, document.querySelector("#app"));
      Seconds++;
    }, 1000);
  }


 startCounter();

 