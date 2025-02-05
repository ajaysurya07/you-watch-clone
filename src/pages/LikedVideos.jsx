import React, { useContext, useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import ChannelVideo from '../components/ChannelVideo/ChannelVideo';
import HomeFeed from "../components/HomeFeed/HomeFeed";
import DataContext from "../context/DataContext";
const LikedVideos = () => {
  const {handleHistory, liked ,handleChannelDetail,handleVideoDetail ,showNav}  = useContext(DataContext);
  console.log("likes  => ",liked);
  if(!liked){
       return <h2>No liked videos</h2>
  }
  return (
    <div className="absolute top-[200px] left-[250px]">
    <div className="flex justify-around items-center ">
      {/* top div */}
    <h1 className="text-5xl">Liked Videos</h1>
    <RiDeleteBin5Line  className="text-3xl"/>
    </div>
    <hr className="text-shade w-[900px] m-4"/>
    <div
        className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 h-auto gap-24"
        style={showNav ? { marginLeft: "200px" ,  } : { marginLeft: "81px" }}
        >
            {/* video section */}
            {liked.map((feed , id)=>(
               <HomeFeed
               handleVideoDetail = {handleVideoDetail}
               feed= {feed.snippet} videoId ={feed.id} key ={id} handleChannelDetail={handleChannelDetail} handleHistory={handleHistory} />
              ))}
          
         </div>
  </div>
  )
}

export default LikedVideos;

