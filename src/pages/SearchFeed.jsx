import DataContext from "../context/DataContext";
import React, { useContext, useEffect, useState } from "react";
import HomeFeed from "../components/HomeFeed/HomeFeed";
import { useParams } from "react-router-dom";
import { fetchFromAPi } from "../context/fetchFromAPI";

const SearchFeed = () => {
          
  const props = useContext(DataContext);
  const [sVideos , setSVideos] = useState([]);
  const {searchTerm} = useParams();
  useEffect(() => {
    fetchFromAPi(`search`, { part: "snippet", q: searchTerm, maxResults: "50" })
      .then((data) => setSVideos(data.items))
  }, [searchTerm]);
      console.log(sVideos);
  return (
    <div className="relative">
     
      <div
        className="absolute top-[200px] 
       grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 h-auto"
        style={props.showNav ? { marginLeft: "200px" ,  } : { marginLeft: "81px" }}
        >     <h1 className="top-[1000px] left-4">{searchTerm}</h1>
              {sVideos.map((feed , id)=>(
               <HomeFeed
               handleVideoDetail = {props.handleVideoDetail}
               feed= {feed.snippet} videoId ={feed.id} key ={id} handleChannelDetail={props.handleChannelDetail} handleHistory={props.handleHistory} />
              ))}
        </div>
    </div> )
};

export default SearchFeed;
