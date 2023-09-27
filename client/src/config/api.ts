import axios from "axios";


const fetchAPI = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const headers = {
    accept: "application/json",
    Authorization:
      `Bearer ${process.env.API_KEY}`,
  };

  try {
    const response = await axios.get(url, {headers});
    return response.data;
  } catch (error){
    console.log(error);
    return error;
  }
};

export default fetchAPI;