import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import Test from "./Test";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
// import Counter from "./components/counter";

ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<Test />, document.getElementById("test"));
registerServiceWorker();

// const element = <h1>Hello World</h1>;
// ReactDOM.render(element, document.getElementById("root"));
