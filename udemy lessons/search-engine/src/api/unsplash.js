import axios from 'axios';

export default axios.create({
  baseURL:"https://api.unsplash.com",
  headers:{
    Authorization: "Client-ID 3WYriJxuV-v5uzkKP5ClR5Tfn64vccKrrblUU6OTwrg",
  }
})