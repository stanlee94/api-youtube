import axios from "axios";

const KEY = "AIzaSyDl59amikvUjwE7532KDGH9DWszU8g_09I";

const getVideos = async term => {
  const videos = await axios.get(
    "https://www.googleapis.com/youtube/v3/search",
    {
      params: {
        part: "snippet",
        maxResults: 5,
        q: term,
        key: KEY
      }
    }
  );

  return videos;
};

export default getVideos;
