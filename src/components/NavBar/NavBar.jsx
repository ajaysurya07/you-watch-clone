import React, { useContext } from "react";
import { BiLike, BiSolidUserAccount } from "react-icons/bi";
import { CgPlayList } from "react-icons/cg";
import { FaHistory } from "react-icons/fa";
import { GoDownload, GoHomeFill } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import {
  MdOndemandVideo,
  MdOutlineWatchLater,
  MdSubscriptions,
} from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import "./nav.css";
import DataContext from "../../context/DataContext";
import { categories } from "../../context/constants";
import { Link } from "react-router-dom";
const NavBar = () => {
  /*  console.log(categories); */
  const props = useContext(DataContext);
  return (
    <div className="fixed mt-[100px] z-10">
      {!props.showNav && (
        <ul className="mt-2 w-[80px] flex flex-col gap-4">
          <Link>
            <li className="h-17">
              <GoHomeFill className="icons text-3xl " />
            </li>
          </Link>
          <Link>
            
            <li className="h-17">
              <SiYoutubeshorts className="icons text-3xl  h-13" />
            </li>
          </Link>
          <Link>
            
            <li className="h-17">
              <MdSubscriptions className="icons text-3xl h-13" />
            </li>
          </Link>
        </ul>
      )}
      {props.showNav && (
        <div
          className="backdrop-blur  w-[200px] mt-2
      hidden sm:inline-block
      "
        >
          <ul>
            <Link to='/'><li className="links">
              <GoHomeFill className="icons" />
              <h3 className="title">Home</h3>
            </li></Link>
            
            <Link to= '/shorts'><li>
              <SiYoutubeshorts className="icons" />
              <h3>Shorts</h3>
            </li></Link>
            
            <Link to= '/subscriptions'><li>
              <MdSubscriptions className="icons" />
              <h3>Subscriptions</h3>
            </li></Link>
            
            <hr />
          </ul>
          <ul>
            <div className="flex items-center gap-5 h-[30px] m-[10px]">
              <h2 className="text-2xl  ml-[20px]">You</h2>
              <IoIosArrowForward className="text-2xl h-10" />
            </div>
            <Link to='/@ajaysurya9817'> <li>
              <BiSolidUserAccount className="icons" />
              <h3>Your Channel</h3>
            </li></Link>
           
            <Link to='/history'>  <li>
              <FaHistory className="icons" />
              <h3>History</h3>
            </li></Link>
          
            <Link to='/playlist'><li>
              <CgPlayList className="icons" />
              <h3>Playlists</h3>
            </li></Link>
            
            <Link to=''> <li>
              <MdOndemandVideo className="icons" />
              <h3>Your Video</h3>
            </li></Link>
           
            <Link to= '/watchLater'> <li>
              <MdOutlineWatchLater className="icons" />
              <h3>Watch Later</h3>
            </li></Link>
           
            <Link to='/likes'> <li>
              <BiLike className="icons" />
              <h3>Liked Videos</h3>
            </li></Link>
           
            <Link to='/download'> <li>
              <GoDownload className="icons" />
              <h3>Downloads</h3>
            </li></Link>
           
            <hr />
          </ul>
          <div className="flex flex-col gap-2 items-start">
            <h2 className="text-2xl mt-[20px] ml-[20px]">Explore</h2>
            {categories.map((category, id) => (
              <button
                key={id}
                className="flex gap-7 h-[35px] items-center w-[200px] m-2 rounded-md
                 hover:bg-shade
                 "
              >
                <span className="ml-[20px]">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
