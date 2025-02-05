import React from "react";
import "./homefeed.css";
import DefaultThumbnail from "../../assets/defaultThumbnail.jpg";
import WordsSplit from "../WordsSplit/WordsSplit";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../../context/constants";

const HomeFeed = ({ feed, videoId ,handleVideoDetail, handleChannelDetail ,handleHistory}) => {
/*   console.log(" HomeFeed",feed);
  console.log(" HomeFeed",videoId); */
  const thumbnail =
    !feed || !feed.thumbnails || !feed.thumbnails.high
      ? DefaultThumbnail
      : feed.thumbnails.high.url;
  const thumbnail2 =
    !feed || !feed.thumbnails || !feed.thumbnails[1]
      ? DefaultThumbnail
      : feed.thumbnails[1].url;

  return (
    <>
      <div className="container flex flex-col items-center  w-[286px] h-auto gap-3 ">
        <Link to={videoId.videoId ? `/video/${videoId.videoId}` : demoVideoUrl}>
          <div className="thumbnail">
            <img src={thumbnail} alt="thumbnail" onClick={()=>{handleVideoDetail(videoId.videoId), handleHistory(videoId.videoId)}} />
            {/*   <h3>{feed.video_length}</h3> */}
          </div>
        </Link>
        <div className="channel">
          <div className="flex items-center gap-2">
            <Link
              to={
                feed.channelId ? `/channel/${feed.channelId}` : demoChannelUrl
              }
            >
              <img src={thumbnail2} alt="thumbnail" onClick={()=>{handleChannelDetail(feed.channelId)}} />
            </Link>
            <WordsSplit text={feed.title} wordsPerLine={6} />
          </div>
          <HiOutlineDotsVertical className="dot text-3xl" />
        </div>
        <div className="channel-name-detials">
          <Link
            to={feed.channelId ? `/channel/${feed.channelId}` : demoChannelUrl}
          >
            <p>{feed.channelTitle}</p>
          </Link>
          <div className="detials">
            <p>{feed.number_of_view}</p>
            <p>{feed.published_time}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFeed;
