import React from "react";
import "./App.css";
import Form from "./Components/Form/Form";

function App() {
  return (
    <div className="App">
      <div className="form-box">
        <h3>Product form</h3>
        <br />
        <Form />
      </div>
      <div className="products-box">
        <h3>Products list</h3>
      </div>
    </div>
  );
}

export default App;
