import axios from "axios";
const KEY='AIzaSyAiIl9aHZewmlNKN8Nf7LfOY8LnOVGjtpM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params:{
    part: 'snippet',
    maxResults: 5,
    
  }
})