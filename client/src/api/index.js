import axios from 'axios';

const url = 'http://localhost:5000/albums';


const fetchAlbums = () => { 
    return axios.get(url)
  };
  //
//console.log(boo)

export default fetchAlbums;

//export default albums_10;