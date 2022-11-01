import React from "react";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BiImageAlt } from "react-icons/bi";
import { BiArchiveIn } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
import { BiUndo } from "react-icons/bi";
import { BiRedo } from "react-icons/bi";
import { GrAddCircle } from "react-icons/gr";

const Note = (props) => {
  const [note, setNote] = React.useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const updateNote = () => {
    props.onAdd(note);
  };

  return (
    <div className="note-flex">
      <div className="note">
        <input
          type="text"
          className="input-title"
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <input
          className="input-description"
          type="text"
          name="content"
          placeholder="Take a note...."
          value={note.content}
          onChange={handleChange}
        />
        <div className="GrAddCircle-div">
          <GrAddCircle onClick={updateNote} className="GrAddCircle" />
        </div>

        <div className="note-options">
          <div className="note-ions">
            <MdOutlineNotificationAdd />
            <MdOutlinePersonAddAlt />
            <IoColorPaletteOutline />
            <BiImageAlt />
            <BiArchiveIn />
            <FiMoreVertical />
            <BiUndo />
            <BiRedo />
          </div>
          <div className="note-options-close">
            <h3>close</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
