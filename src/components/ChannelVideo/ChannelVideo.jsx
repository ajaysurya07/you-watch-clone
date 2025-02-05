import React from 'react'
import HomeFeed from '../HomeFeed/HomeFeed'
const ChannelVideo = ({relatedChannelVideos , handleVideoDetail , handleChannelDetail}) => {
  console.log("vid de  => ",relatedChannelVideos);
  return (
   <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-4 gap-16'>
      {relatedChannelVideos.map((feed , id ,handleHistory)=>{
           return(  <HomeFeed
            handleVideoDetail = {handleVideoDetail}
            handleChannelDetail={handleChannelDetail}
            handleHistory ={handleHistory}
            /* feed= {feed.snippet} */ feed= {feed} videoId ={(!feed?.video_id)?'NOgnlTXidSs&t=1018s': feed.videoId } key ={id} />)
      })}
   </div>
  )
}

export default ChannelVideo;

/* 
handleVideoDetail = {props.handleVideoDetail}
handleChannelDetail={props.handleChannelDetail}
*/