import React from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Options from "./components/Options";

function App() {
  return (
    <div className="App">
   <Nav/>
   <Options className="options"/>
   <Main/>
    </div>
  );
}
export default App;