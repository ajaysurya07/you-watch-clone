import React from "react";
import "./LeftvideoPanel.css";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
const LeftVideoPanel = ({ id, data , handleLiked }) => {
 /*  console.log(data); */
  if (!data?.snippet) {
    return (
      <>
        <p>no data found</p>
      </>
    );
  }
/*   console.log(data); */
  const {
    snippet: { title, channelId, channelTitle, description, publishedAt },
    statistics: { viewCount, likeCount },
  } = data;
  return (
    <div className=" w-[500px] z-10 flex  flex-col LeftvideoPanel min-w-[800px] ">
      <h1 className="mb-3">{title}</h1>
      <div className="flex flex-row items-center justify-between gap-10 ">
        <div className="flex flex-row items-center gap-4 justify-around">
          <div className=" ">
            <div className="flex flex-row items-center gap-2">
              {channelTitle}
              <FaRegCheckCircle />
            </div>
            {viewCount}
          </div>
          <div>
            <button className="rounded-xl bg-slate-100 text-gray-600 w-[60px] h-7">
              join
            </button>
          </div>
          <div className="flex flex-row bg-shade h-10 w-[170px] justify-around p-2 items-center gap-2 rounded-3xl">
            <IoMdNotificationsOutline className="panelIcon" />
            Subscirbed
            <IoMdDownload className="panelIcon" />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-6 ">
          <div className="flex flex-row items-center  h-10 w-[130px]  bg-shade  likeDiv">
            <span className="bg-shade flex flex-row items-center likeButton hover:bg-gray-400 h-10 mr-1 cursor-pointer justify-start left">
              <AiOutlineLike className="panelIcon" onClick={() => {handleLiked(id)}} /> {likeCount}
            </span>
            <span className="bg-shade flex items-center h-10  hover:bg-gray-400 cursor-pointer right ">
              <AiOutlineDislike className="panelIcon " />
            </span>
          </div>
          <div className="flex flex-row items-center justify-between gap-2 bg-shade h-10 p-3 rounded-3xl  hover:bg-gray-400 cursor-pointer">
            <IoIosShareAlt className="panelIcon" /> Share
          </div>
          <div className="flex flex-row items-center justify-between gap-2 bg-shade h-10 p-3 rounded-3xl  hover:bg-gray-400 cursor-pointer">
            <IoMdDownload className="panelIcon" /> Download
          </div>
          <div className="h-10 w-10 rounded-3xl bg-shade flex items-center justify-center cursor-pointer hover:bg-gray-400">
            <HiDotsHorizontal className="panelIcon  " />
          </div>
        </div>
      </div>
      <div className="bg-shade min-w-[800px]  rounded-md p-5 mt-7">
        <div className="flex items-center gap-4 mb-4">
          <h3>{viewCount} views</h3>
          <h3>{publishedAt}</h3>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default LeftVideoPanel;
