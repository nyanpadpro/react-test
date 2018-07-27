import React from "react";
import ReactDOM from "react-dom";

// ボタン追加
import Mybutton from "./Mybutton";

const form = document.getElementById("form");
form ? ReactDOM.render(<Mybutton />, form) : null;
