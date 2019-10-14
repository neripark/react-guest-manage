import React from "react";
import { render } from "react-dom";
import TestButton from "./components/TestButton";

// function logger() {
//   console.log("logger!!!");
// }

render(
  // <TestButton handleClick={logger} />,
  <TestButton />,
  document.getElementById("tgt")
);
