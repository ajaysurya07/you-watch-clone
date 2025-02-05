import React from 'react'
import "./rightVideoPanel.css"
import "./VideoSection";
import VideoSection from './VideoSection';
const rightVideoPanel = ({relatedVideos , handleVideoDetail ,handleHistory}) => {
 /*  console.log(relatedVideos); */
  if(relatedVideos === null){
       return(
        <div>
          <p>....</p>
        </div>
       )
  }
  return (
    <div className='flex flex-col flex-1 items-center ml-[290px] gap-4'>
          {relatedVideos.map((data , id)=>(
              <VideoSection 
              data = {data}
              key = {id}
              handleVideoDetail ={handleVideoDetail}
              handleHistory = {handleHistory}
              />
          ))}
    </div>
  )
}

export default rightVideoPanel