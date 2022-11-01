import React from "react";
import Optionslogo from "./Optionslogo";
import { MdLightbulbOutline } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdOutlineArchive } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const Options = () => {
  return (
    <div className="left-side">
      <Optionslogo Icon={MdLightbulbOutline}  text="Notes" />
      <Optionslogo Icon={MdNotificationsNone} text="Reminders" />
      <Optionslogo Icon={MdOutlineModeEditOutline} text="Edit labels" />
      <Optionslogo Icon={MdOutlineArchive} text="Archive" />
      <Optionslogo Icon={RiDeleteBin6Line} text="Bin" />
      <footer>
        <p>Open-source licences</p>
      </footer>
    </div>
  );
};

export default Options;
