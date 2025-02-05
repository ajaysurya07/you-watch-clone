import React from 'react'
import "./videoPanel.css";
import ReactPlayer from "react-player";
const VideoPanel = ({id , data}) => {
  return (
      <div>
         <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls width={1390} height={500} className="react-player"/>
      </div>
  )
}

export default VideoPanel