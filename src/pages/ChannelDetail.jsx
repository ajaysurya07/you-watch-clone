import React, { useContext , useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import DataContext from '../context/DataContext';
import profile  from "../assets/profile.jpeg";
import ChannelVideo from '../components/ChannelVideo/ChannelVideo';
const ChannelDetail = () => {
  const [channelDetails, setChannelDetails] = useState();
  const [relatedChannelVideos, setRelatedChannelVideos] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:3500/videos`)
    .then((res)=>res.json())
    .then((data)=>setRelatedChannelVideos(data))
    .catch((e)=> {console.log(e.message)});
} , [])
 /* console.log(relatedChannelVideos); */
  const {id} = useParams();
  const {/* channelDetails, relatedChannelVideos, */ handleVideoDetail , handleChannelDetail ,handleHistory} = useContext(DataContext);
 /* if(!channelDetails?.snippet){
      return( <p>no data</p> )
 } */
// console.log(channelDetails.snippet);
 const thummbnail = (!channelDetails?.snippet?.thumbnails?.high.url) ?profile : channelDetails.snippet.thumbnails.high.url; 
 //console.log(thummbnail);
 const title = (!channelDetails?.snippet?.title)? 'title' : channelDetails.snippet.title;
 //console.log(title);
 const description = (!channelDetails?.snippet?.description)? "description" : channelDetails.snippet.description;
  return (
    <div className='h-[100vh] absolute top-[200px] left-[200px]'>
         <div className='flex items-center gap-6 w-[900px] '>
               {/* top div */}
               <img src={thummbnail} alt="channelLogo" className='h-[200px] w-[200px] rounded-full '/>
               <div>
                <h1 className='text-5xl'>{title}</h1>
                <p className='text-[13px] text-gray-400'>@{title}</p>
                <p>{description}</p>
               </div>
         </div>
         <hr  className='text-2xl w-[1000px] text-gray-400 mt-7'/>
         <h1 className='text-3xl m-[25px]'>Channel Videos</h1>
         <div className='m-[33px]'>
           {/* channel related videos */}
           <ChannelVideo  relatedChannelVideos = {relatedChannelVideos} handleHistory = {handleHistory}/>
         </div>
    </div>
  )
}

export default ChannelDetail;