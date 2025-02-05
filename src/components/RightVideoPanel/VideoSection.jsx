import React from 'react'
import {
  demoVideoUrl,
} from  "../../context/constants"
import { HiDotsVertical } from "react-icons/hi";
import defThumb from "../../assets/defaultThumbnail.jpg"
import WordsSplit from '../WordsSplit/WordsSplit';
import { Link } from 'react-router-dom';
const VideoSection = ({data ,handleVideoDetail , handleHistory}) => {
  if(!data?.snippet){
         return <p>...</p>
  }
  const snippet = data.snippet;
  const thumbnail = (!data?.snippet?.thumbnails.default?.url) ?defThumb : data.snippet.thumbnails.default.url;
 /*  console.log("data -=>" ,snippet); */
  return (
    <div className='flex items-center  w-[500px] gap-4'>
      <Link to={data.videoId ? `/video/${data.videoId}` :demoVideoUrl}>
      <img src= {thumbnail} alt="thumbnail" className='h-[140px] w-[250px]' onClick={()=>{handleVideoDetail(data.videoId) , handleHistory(data.videoId) }  } />
      </Link>
          <div className='flex h-[105px] w-[200px] justify-between place-items-start '>
            <div >
              <WordsSplit 
              text =  {snippet.title}
              wordsPerLine = {4}
              />
              {snippet.channelTitle}    
            </div>
            <div><HiDotsVertical className='text-1xl' /></div>
          </div>
    </div>
  )
}

export default VideoSection