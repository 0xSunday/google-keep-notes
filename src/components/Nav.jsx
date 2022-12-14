import React from "react";
import logo from "./logo.png";

import { BiMenu } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { MdRefresh } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { IoApps } from "react-icons/io5";

const Nav = () => {
  return (
    <nav>
      <div className="nav-left">
        <BiMenu className="icons"/>
        <img className="logo" src={logo} alt="" />
        <h1>Keep</h1>
      </div>
      <div className="nav-middle">
        <AiOutlineSearch className="search-icon"/>
        <input type="text" placeholder="Search" className="search"/>
      </div>
      <div className="nav-right">
        <MdRefresh className="icons"/>
        <BiMenu className="icons" />I
       
        <AiOutlineSetting className="icons"/>
        <IoApps className="icons"/>
      <img className="profile" src="data:image/jpeg;base64,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" alt="" />
        
      </div>
    </nav>
  );
};

export default Nav;
