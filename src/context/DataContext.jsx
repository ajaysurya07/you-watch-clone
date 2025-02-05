import React, { createContext, useEffect, useState, useRef } from "react";
import axios from 'axios';
import { fetchFromAPi } from "../context/fetchFromAPI";
import VideoDetail from "../pages/VideoDetail";
import { Search } from "@mui/icons-material";
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const [homeFeeds, setHomeFeeds] = useState([]);
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const [channelDetails, setChannelDetails] = useState();
  const [relatedChannelVideos, setRelatedChannelVideos] = useState(null);
  const [history , setHistory] = useState([]);
  const [liked , setLiked] = useState();
  /* for nav  */
  const HandleNavBar = () => {
    setShowNav((nav) => !nav);
  };
 
  /* highligjht swiper */
  const swiperRef = useRef(null);
  const leftSwiper = () => {
    if (swiperRef) {
      console.log("left");
      swiperRef.current.scrollLeft -= 200;
    }
  };

  const rightSwiper = () => {
    if (swiperRef) {
      console.log("right");
      swiperRef.current.scrollLeft += 200;
    }
  };
 /*  console.log(selectedCategory );  */
    useEffect(()=>{
     fetchFromAPi(`search?part=snippet&q=${selectedCategory}`)
     .then((data)=> {setVideos(data.items)})
     .catch((e)=>{console.log(e.message)})
 },[selectedCategory]); 

  /* for video deteail panel */
  const handleVideoDetail = (id) => {
      fetchFromAPi(`videos?part=snippet,statistics&id=${id}`)
           .then((data) => {setVideoDetail(data.items[0])} );

           fetchFromAPi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
           .then((data) => {setRelatedVideos(data.items)})
  };
  /* for channel detail panel */
 
  const handleChannelDetail = async (id) => {
      const data = await fetchFromAPi(`channels?part=snippet&id=${id}`);

    setChannelDetails(data?.items[0]);

    const videosData = await fetchFromAPi(`search?channelId=${id}&part=snippet%2Cid&order=date`);

    setRelatedChannelVideos(videosData?.items);
  };

  /* 
  handle history
  */
  /* inital fetch */
  useEffect(() => {
    const fetchInitialData = async() =>{
       try {
            const respnse =  await axios.get(`http://localhost:3500/history`);
            setHistory((respnse).data)
       } catch (error) {
           console.log(error.message)
       }
    }
    fetchInitialData();
  } , []);
 const handleHistory = async(id) => {
      /* setHistory(...history  , id ); */
     const data =await fetchFromAPi(`search?part=snippet,statistics&id=${id}`);
      const videoData = data?.items[0];
      /* const updatedHistory= [...history , videoData]; */
      /* setHistory(updatedHistory) */;

     const response = await axios.post('http://localhost:3500/history' , videoData);
     const newPost = [...history , response.data];
     setHistory(newPost);
      console.log('History updated and posted successfully');
   
 }
  /*  console.log("his =>" ,history); */
   /* 
  handle like
  */
  /* inital fetch */
  useEffect(() => {
    const fetchInitialData = async() =>{
       try {
            const respnse =  await axios.get(`http://localhost:3500/liked`);
            setLiked((respnse).data)
       } catch (error) {
           console.log(error.message)
       }
    }
    fetchInitialData();
  } , []);
 const handleLiked = async(id) => {
      /* setHistory(...history  , id ); */
     const data =await fetchFromAPi(`search?part=snippet,statistics&id=${id}`);
      const videoData = data?.items[0];
      /* const updatedHistory= [...history , videoData]; */
      /* setHistory(updatedHistory) */;

     const response = await axios.post('http://localhost:3500/liked' , videoData);
     const newPost = [...liked , response.data];
     setHistory(newPost);
      console.log('liked updated and posted successfully');
   
 }
  /*  console.log("his =>" ,history); */

  /* search*/
  
  return (
    <DataContext.Provider
      value={{
        showNav,
        setShowNav,
        HandleNavBar,
        homeFeeds,
        setHomeFeeds,
        videos,
        setVideos,
        selectedCategory,
        setSelectedCategory,
        swiperRef,
        leftSwiper,
        rightSwiper,
        handleVideoDetail,
        videoDetail,
        relatedVideos,
        handleChannelDetail,
        channelDetails,
        relatedChannelVideos,
        handleHistory,
        history,
        liked,
        handleLiked,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
