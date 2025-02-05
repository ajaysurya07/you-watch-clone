import React, { useContext, useEffect, useState } from "react";
import DataContext from "../context/DataContext";
import HomeFeed from "../components/HomeFeed/HomeFeed";

const Home = () => {
   

  const props = useContext(DataContext);
  return (
    <div className="relative">
    
      <div
        className="absolute top-[200px] 
       grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 h-auto"
        style={props.showNav ? { marginLeft: "200px" ,  } : { marginLeft: "81px" }}
        >
          {props.videos.map((feed , id)=>(
               <HomeFeed
               handleVideoDetail = {props.handleVideoDetail}
               feed= {feed.snippet} videoId ={feed.id} key ={id} handleChannelDetail={props.handleChannelDetail} handleHistory={props.handleHistory} />
              ))}
        </div>
    </div>
  );
};

export default Home;
 