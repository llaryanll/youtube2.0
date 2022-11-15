import axios from 'axios';

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '078d857707msh8b9955937c01621p181ef6jsn5e0c74933306',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) =>{
    const { data } = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}