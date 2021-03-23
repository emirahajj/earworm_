// Used to store dummy artists in Artist.jsx

/* const Artists = [
    {
      id: 1,
      genre: "Rock",
      name: "AC/DC",
      artisturl: "https://static.dw.com/image/41436679_401.jpg"
    },
    {
      id: 2,
      genre: "Rock",
      name: "Adele",
      artisturl: "data:image/jpeg;base64,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"
    },
    {
        id: 3,
        genre: "Rock",
        name: "Ariana Grande",
        artisturl: "https://assets.teenvogue.com/photos/5f1084db76ed5572a80758b7/4:3/w_3531,h_2648,c_limit/GettyImages-1202179390.jpg"
    },
    {
        id: 4,
         genre: "Rock",
        name: "Avril Lavinge",
        artisturl: "https://i.pinimg.com/originals/7d/45/35/7d4535ff3b265e1d88f72c34a00b8ca0.jpg"
    },
    {
        id: 5,
         genre: "Rock",
        name: "Aaliyah",
        artisturl: "https://yt3.ggpht.com/ytc/AAUvwngkWEPLKYTZmcfMqNxzyWcg4bSiIH-InU75si6CXA=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        id: 6,
         genre: "Rock",
        name: "Adam Lambert",
        artisturl: "https://static.billboard.com/files/media/Adam-Lambert-press-by-Joseph-Sinclair-2019-billboard-1548-compressed.jpg"
    },
    {
        id: 7,
         genre: "Rock",
        name: "Avici",
        artisturl: "https://pbs.twimg.com/profile_images/893114729232703488/38XkoS0_.jpg"
    },
    {
        id: 8,
         genre: "Rock",
        name: "Adam Lavine",
        artisturl: "https://pbs.twimg.com/media/EF-H0FhU8AIlnV7.jpg"
    },
    {
        id: 9,
         genre: "Rock",
        name: "Aerosmith",
        artisturl: "https://pbs.twimg.com/profile_images/1095334210078830594/5R6X93ge.jpg"
    },
    {
        id: 10,
         genre: "Rock",
        name: "Alter-Bridge",
        artisturl: "https://cdn.mos.cms.futurecdn.net/7dMneGbJqFy8xBRDD24xpM.jpg"
    },
    {
        id: 11,
         genre: "Rock",
        name: "Akon",
        artisturl: "https://vz.cnwimg.com/wp-content/uploads/2009/10/akon-e1579462210126.jpg"
    },
    {
        id: 12,
         genre: "Rock",
        name: "Alan Walker",
        artisturl: "http://norwegianarts.org.uk/wp-content/uploads/2018/12/Alan-Walker-640x480.jpg"
    }
  ];

  export default Artists;
*/