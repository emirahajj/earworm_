import axios from 'axios';

const url = 'http://localhost:5000';

//-------ALBUMS ROUTES--------------//

//returns array of unique album objects
export const fetchAlbums = () => {
  return axios.get(`${url}/albums`)
};
//returns one unique album
export const fetchAlbum = (id) => {
  return axios.get(`${url}/albums/${id}`)
};
//returns number of unique albums of that genre
export const fetchAllAlbumsInGenre = (genre) => {
  return axios.get(`${url}/albums/all/${genre}`)
};
/************************************************ */
export const fetchAlbumsByTitle = (title) => {
  return axios.get(`${url}/albums/${title}`)/////
};

//returns array of album objects that begin with a certain letter
export const fetchAlbumsLetter = (firstCharacter) => {
  return axios.get(`${url}/albums/albumLetter/${firstCharacter}`)
}
/*************************************************** */
//-------ARTISTS ROUTES--------------//

//returns array of uniqe artist objects
export const fetchArtists = () => {
  return axios.get(`${url}/artists`)
};
//returns one unique artist
export const fetchArtist = (name) => {
  return axios.get(`${url}/artists/${name}`)
};

//returns array of artist objects that begin with a certain letter
export const fetchArtistsLetter = (firstLetter) => {
  return axios.get(`${url}/artists/artistLetter/${firstLetter}`)
};

//-------GENRES ROUTES--------------//

//returns array of genre objects (description, subgenres)
export const fetchGenres = () => {
  return axios.get(`${url}/genres`)
};
// returns a single genre object
export const fetchGenre = (genre) => {
  return axios.get(`${url}/genres/${genre}`)
};
//returns array of {year: 2020, genre: <genre>} objects
//allows us to enumerate how represented that genre was over time
export const fetsGenreHistory = (genre) => {
  return axios.get(`${url}/genres/all/${genre}`)
};

//-------CHARTS ROUTES--------------//

//returns the chart from 2020-1970 (7700 entries)
export const fetchChart = () => {
  return axios.get(`${url}/charts`)
};
//returns a single chart year
export const fetchChartYear = (year) => {
  return axios.get(`${url}/charts/${year}`)
};
//returns a chart year filtered by a genre. Preserves order.
export const fetchChartYearByGenre = (genre, year) => {
  return axios.get(`${url}/charts/${year}/${genre}`)
};
export const fetchToken = () => {
  return axios.get(`${url}/token`)
};


//-------AUDIODB ROUTE--------------//

export const fetchAudiodbArtist = (query) => {
  return axios.get(`${url}/audiodb/${query}`)
}
export const fetchAudiodbAlbum = (artist, album) => {
  return axios.get(`${url}/audiodb/album/${artist}/${album}`)
}

