import React from "react";
function Optionslogo({ Icon, text }) {
  return (
    <div className="icon-position">
      <Icon className="icon" />
      <h2 className="">{text}</h2>
    </div>
  );
}

export default Optionslogo;
