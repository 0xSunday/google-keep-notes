import React from "react";
import Note from "./Note";
const Main = () => {
  const [notes, setNotes] = React.useState([]);
  const Addnote = (note) => {
    setNotes((prev) => {
      return [...prev, note];
    });
  };
  return (
    <div className="main">
      
      <Note onAdd={Addnote} />
    </div>
  );
};

export default Main;
