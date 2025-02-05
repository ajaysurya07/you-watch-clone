import axios from "axios";


const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  params: {
    relatedToVideoId: "7ghhRHRP6t4",
    part: "id,snippet",
    type: "video",
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPi = async (url , params ={}) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, { ...options, params});
  return data;
};
