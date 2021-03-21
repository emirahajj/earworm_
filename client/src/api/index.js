import axios from 'axios';

const url = 'http://localhost:5000/';

//returns all the albums and artists, respecively --can specify how many in actual call
export const fetchAlbums = () => { 
    return axios.get(url + 'albums')
  };
export const fetchArtists = () => { 
    return axios.get(url + 'artists')
  };

//returns a single album or artist object with id param
export const fetchAlbum = (id) => { 
    return axios.get(url + 'albums' + id)
  };
export const fetchArtist = (id) => { 
    return axios.get(url + 'artists' + id)
  };

//returns whole chart collection, can specify which in actual call
export const fetchChart = () => { 
    return axios.get(url + 'charts')
  };
