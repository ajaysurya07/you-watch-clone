import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../context/DataContext";
import VideoPanel from "../components/VideoPanel/VideoPanel";
import LeftVideoPanel from "../components/LeftVideoPanel/LeftVideoPanel";
import RightVideoPanel from "../components/RightVideoPanel/RightVideoPanel";
const VideoDetail = () => {
  const { videoDetail, relatedVideos ,handleVideoDetail , handleHistory , handleLiked } = useContext(DataContext);
  const { id } = useParams();
  useEffect(()=>{
    console.log("after the reload");
    handleVideoDetail(id);
  },[id])
  /*  console.log(videoDetail); */
  /*   console.log(videoDetail.snippet); */
  return (
    <>
      <div className="h-[100px]">
        <div className="absolute t-[400px] l-[100px] ml-[100px] mt-[170px]">
          <VideoPanel id={id} data={videoDetail} />
        </div>
        <div className="grid grid-cols-2 absolute left-[100px] top-[700px]">
          <div className="">
            {/* left */}
            <LeftVideoPanel id={id} data={videoDetail} handleLiked = {() =>handleLiked(id)} />
          </div>
          <div className="">{/* right */}
            <RightVideoPanel
            relatedVideos = {relatedVideos}
            handleVideoDetail  ={handleVideoDetail}
            handleHistory = {handleHistory}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoDetail;
