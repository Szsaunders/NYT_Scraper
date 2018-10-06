import React from "react";

const Jumbotron = ({ children }) => (
  <div
  style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", backgroundColor: "#20315A" , color: "white" }}
  className="jumbotron"
  >
  <h1 className="text-center">
  <strong>
  <i className="fa fa-newspaper-o"></i>
  {children}
  </strong>
  </h1>
  </div>
  );
  
  export default Jumbotron;
  