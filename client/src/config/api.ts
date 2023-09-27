import axios from "axios";
// const axios = require('axios');
// import dotenv from 'dotenv';

// require('dotenv').config();


const fetchAPI = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const headers = {
    accept: "application/json",
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDlmMzEzNzI1NTY1MDlmMmVmYjMzNGUwNmFkODYwNSIsInN1YiI6IjYxMWE2NDJjOWYwZTE5MDA1YzM5MjVmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-BwNEf3hU0IFiaSz9xPYNVeDNuTnvHj-2JeJ64YxG5o',
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