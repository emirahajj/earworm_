import axios from 'axios';

const url = 'http://localhost:5000/';


export const fetchAlbums = () => { 
    return axios.get(url + 'albums')
  };
export const fetchArtists = () => { 
    return axios.get(url + 'artists')
  };
export const fetchChart = () => { 
    return axios.get(url + 'charts')
  };
