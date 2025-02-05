import React, { useContext, useState } from "react";
import Logo from "../assets/YouTube_Logo.png";
import profile from "../assets/profile.jpeg";
import { FaBars } from "react-icons/fa";
import { RiVideoUploadFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import "./CSS/header.css";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import SearchBar from "../components/SearchBar/SearchBar";

import Highlights from "../components/Highlights/Highligths";
const Header = () => {
  const props = useContext(DataContext);
  return (
    <div className="fixed z-10 bg-black w-[1539px]">
      <Stack
        direction="row"
        alignItems="center"
        className="container  justify-between p-4"
      >
        <div className="subContainer gap-10">
          <FaBars className="text-1xl" onClick={props.HandleNavBar} />
          <Link to="/">
            <img src={Logo} alt="" className="h-[20px] w-[90px] " />
          </Link>
        </div>
        <SearchBar />
        <div className="subContainer gap-5 right">
          <RiVideoUploadFill className="icon" />
          <div className="relative">
            <p
              className="  bg-red-700 absolute top-[-6px] text-[10px]
            right-[-3px] h-[17px] w-[17px] rounded-[30px] flex justify-center items-center
            "
            >
              5
            </p>
            <IoIosNotifications className="icon" />
          </div>
          <div>
            <img
              src={profile}
              alt="proflie"
              className="h-[25px] rounded-[40px]"
            />
          </div>
        </div>
      </Stack>
      <Highlights
        showNav={props.showNav}
        selectedCategory={props.selectedCategory}
        setSelectedCategory={props.setSelectedCategory}
        leftSwiper={props.leftSwiper}
        rightSwiper={props.rightSwiper}
        swiperRef={props.swiperRef}
      />
    </div>
  );
};

export default Header;
