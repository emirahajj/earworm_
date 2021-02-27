import entries from "./entries";
//function returns the oldest album on the chart as an object
export function getOldestAlbum(chartentries) {
  //min1 contains the minimum year for that year (int)
  var min1 = Math.min.apply(Math, chartentries.map(a => parseInt(a.release_year)));

  // array of the oldest entries (will return all albums released in that year),
  // lets just return the first one
  const theOldest = chartentries.filter(entry => parseInt(entry.release_year) === min1);
  var element = theOldest[0];
  return element;
}

//function returns an array of objects like:
// var array = [{_year: "2019", Rap: 45}, {_year: "2018", Rap: 58}, {_year: "2017", Rap: 76}, ...]
// to get a genre breakdown across a number of years. Used in the OverTime function to render the Line Graph
export function getGenreTrend(genre){
  
  var GenreObjectArray = [];

  //loop over all years to then get the specific genre breakdown for that year
  for (var i = 2001; i < 2020; i++){

    const w = i.toString();
    const thatYear = entries.filter(entry => entry.chart_year === w && entry.genre === genre);
    //create object with the year field
    var d = {
      _year: w,
      //genre: genreStats[genre]
    }
    d[genre] = thatYear.length;
    GenreObjectArray.push(d);
  }
  return GenreObjectArray;
}


//function that returtns an object representing the artist with the most entries for that chart year
export function getMostOccuringArtist(chartentries)
{
  //object that will contain an key-value pairs like {Lady Gaga : 6, Drake : 5, ...}
  const artistMost = {};

  // loops through the array of objects for that chart year and keeps track of the artist count
  chartentries.forEach((d) => {
    if (!artistMost[d["artist"]]) {
      artistMost[d["artist"]] = 1;
    } else {
      artistMost[d["artist"]] += 1;
    }
  });

  // converts the object to an array and then sorts it by numerical value
  var SortedArtist = Object.entries(artistMost).sort((a, b) => b[1] - a[1]);

  //we don't care about Soundtracks or albums with Various Artists, get the first entry in this
  //array that isn't one of these.
  for (var i=0; i<SortedArtist.length; i++){
    if (SortedArtist[i][0] === "Soundtrack" || SortedArtist[i][0] === "Various Artists"){
      continue;
    }
      return SortedArtist[i];
  }
}

export function getTop10ArtistsDecade(chartentries)
{

  //want to return top 10 object that will contain an key-value pairs like {Lady Gaga : 6, Drake : 5}
  const topArtists = {};
  const top10 = [];
  var count = 0;

  // loops through the array of objects for that chart year and keeps track of the artist count
  chartentries.forEach((d) => {
    if (!topArtists[d["artist"]]) {
      topArtists[d["artist"]] = 1;
    } else {
      topArtists[d["artist"]] += 1;
    }
  });

  // converts the object to an array and then sorts them by value for genre and for artist
  var SortedArtist = Object.entries(topArtists).sort((a, b) => b[1] - a[1]);
  
  //checking if its a soundtrack or compilation album
  for (var i=0; i<SortedArtist.length; i++){
    if (SortedArtist[i][0] === "Soundtrack" || SortedArtist[i][0] === "Various Artists"){
      continue;
    }
    if (count <10){
      count++;
      var d = {
        artist: SortedArtist[i][0],
        count: SortedArtist[i][1],
      }
      top10.push(d);
    }
    else if (count===10){
      break;
    }
  }
  return top10;
}

export function getTheirHighestAlbum(chartyear, artistName){
    var found = chartyear.find(entry => entry.artist === artistName);
    return found;
}

export function getTop100GenreBreakdown(chartyear){
    const top100 = chartyear.filter(entry => entry.rank < 101);
    const genreStats = [];

    //this is just one object with a bunch of properties...we don't want that
    top100.forEach((d) => {
      if (!genreStats[d["genre"]]) {
        genreStats[d["genre"]] = 1;
      } else {
        genreStats[d["genre"]] += 1;
      }
    });

    //so we create an array of objects
    var GenreObjectArray = [];

    //creating a dummy "Other" variable to stuff in all the genres that had just 1 entry
    //in the top 100 since they waste real estate on the screen
    var c = {
      genre: "Other",
      number: 0
    }
  
    for (const property in genreStats) {
      var d = {
        genre: property,
        number: genreStats[property]
      };
      if (d.number !== 1){
        GenreObjectArray.push(d);
      } else {
        c.number++;
      }
    }

    //once we're done pushing all genres, push the last dummy one
    GenreObjectArray.push(c);

    GenreObjectArray.sort((a, b) => b.number - a.number);
    return GenreObjectArray;
}

export function dropdownYears(){
    var years =[];
    for (var i = 2019; i>=2000; i--){
        years.push(i);
    }
    return years;
}