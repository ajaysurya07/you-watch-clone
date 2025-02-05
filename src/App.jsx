import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import VideoDetail from "./pages/VideoDetail";
import ChannelDetail from "./pages/ChannelDetail";
import History from "./pages/History";
import LikedVideos from "./pages/LikedVideos";
import SearchFeed from "./pages/SearchFeed";
const App = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/history" element={<History />} />
        <Route path="/likes" element={<LikedVideos />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </div>
  );
};

export default App;
