import axios from 'axios';
//BASE DA URL: https://api.themoviedb.org/3/
// https://api.themoviedb.org/3/movie/now_playing?api_key=cb35b229f134f593da02fa9ded6da8ca&language=en-US&page=1

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export default api;
