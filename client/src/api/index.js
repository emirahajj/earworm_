import axios from 'axios';

const url = 'http://localhost:5000';

//returns all the albums and artists, respecively --can specify how many in actual call
export const fetchAlbums = () => { 
    return axios.get(`${url}/albums`)
  };
export const fetchArtists = () => { 
    return axios.get(`${url}/artists`)
  };
export const fetchGenres = () => { 
    return axios.get(`${url}/genres`)
  };
export const fetchChart = () => { 
    return axios.get(`${url}/charts`)
  };


//returns a single album or artist object with id param
export const fetchAlbum = (id) => { 
    return axios.get(`${url}/albums/${id}`)
  };
export const fetchArtist = (id) => { 
    return axios.get(`${url}/artists/${id}`)
  };
export const fetchChartYear = (year) => { 
    return axios.get(`${url}/charts/${year}`)
  };
export const fetchGenre = (genre) => { 
    return axios.get(`${url}/genres/${genre}`)
  };
export const fetchAllAlbumsInGenre = (genre) => { 
    return axios.get(`${url}/albums/all/${genre}`)
  };


  export const fetsGenreHistory = (genre) => { 
    return axios.get(`${url}/genres/all/${genre}`)
  };
  export const fetchChartYearByGenre = (genre, year) => { 
    return axios.get(`${url}/charts/${year}/${genre}`)
  };
