let albums = [
  {
    "id": 1,
    "title": "Nazenk Dohol",
    "artist": "Abdul Rahman Surizehi",
    "genre": "Traditional",
    "year": 2020,
    "cover": "/singers/01.jpg",
    "plays" : "1.2M"
  },
  {
    "id": 2,
    "title": "Brahui Saaz",
    "artist": "Hameed Sabzoi",
    "genre": "Folk Fusion",
    "year": 2021,
    "cover": "/singers/02.jpg",
    "plays" : "2.2M"
  },
  {
    "id": 3,
    "title": "Zahri Lahoor",
    "artist": "Faiz Mohammad Faizok",
    "genre": "Folk",
    "year": 2018,
    "cover": "/singers/03.jpg",
    "plays" : "2.2M"
  },
  {
    "id": 4,
    "title": "Chaghi Beats",
    "artist": "Noor Khan Bezanjo",
    "genre": "Folk Pop",
    "year": 2022,
    "cover": "/singers/04.jpg",
    "plays" : "3.2M"
  },
  {
    "id": 5,
    "title": "Sorah Jaan",
    "artist": "Naseer Khoso",
    "genre": "Romantic Folk",
    "year": 2019,
    "cover": "/singers/05.jpg",
    "plays" : "2.2M"
  },
  {
    "id": 6,
    "title": "Dambh Waaj",
    "artist": "Abdullah Jan",
    "genre": "Traditional",
    "year": 2017,
    "cover": "/singers/06.jpg",
    "plays" : "4.2M"
  },
  {
    "id": 7,
    "title": "Brahui Roots",
    "artist": "Fida Hussain Mastoi",
    "genre": "Folk Roots",
    "year": 2023,
    "cover": "/singers/07.jpg",
    "plays" : "5.2M"
  },
  {
    "id": 8,
    "title": "Nok Jo Dastan",
    "artist": "Saddam Sabzal",
    "genre": "Folk",
    "year": 2021,
    "cover": "/singers/01.jpg",
    "plays" : "2.2M"
  },
  {
    "id": 9,
    "title": "Sheh Mureed",
    "artist": "Sanaullah Zehri",
    "genre": "Folk Storytelling",
    "year": 2016,
    "cover": "/singers/01.jpg",
    "plays" : "2.2M"
  },
  {
    "id": 10,
    "title": "Kalat Malhaar",
    "artist": "Muhammad Anwar",
    "genre": "Classical Folk",
    "year": 2020,
    "cover": "/singers/01.jpg",
    "plays" : "2.2M"
  },
  ]


let playlists = [
  {
    "id": 1,
    "title": "Brahui Folk Essentials",
    "description": "Iconic Brahui folk songs everyone must hear.",
    "cover": "covers/playlist_folk_essentials.jpg",
    "songs": [
      "Dohol Rhythm",
      "Brahui Echo",
      "Lahoor Melody",
      "Bezanjo Pop"
    ]
  },
  {
    "id": 2,
    "title": "Romantic Brahui Hits",
    "description": "Soft, emotional and heart-touching Brahui songs.",
    "cover": "covers/playlist_romantic.jpg",
    "songs": [
      "Sorah Love",
      "Brahui Heart",
      "Dashti Love",
      "Dilbar Brahvi"
    ]
  },
  {
    "id": 3,
    "title": "Brahui Pop Mix",
    "description": "Modern Brahui pop fusion with energetic beats.",
    "cover": "covers/playlist_pop_mix.jpg",
    "songs": [
      "Mengal Beats",
      "Pop Intro",
      "Brahvi Pop",
      "Electro Folk"
    ]
  },
  {
    "id": 4,
    "title": "Traditional Dambura Vibes",
    "description": "Classic Brahui damar & folk instrumentals.",
    "cover": "covers/playlist_traditional.jpg",
    "songs": [
      "Dambh Rhythm",
      "Waaj Intro",
      "Roots Melody",
      "Gulistan Rhythm"
    ]
  },
  {
    "id": 5,
    "title": "Brahui Storytelling Classics",
    "description": "Legendary storytelling tracks from Brahui culture.",
    "cover": "covers/playlist_stories.jpg",
    "songs": [
      "Sheh Intro",
      "Mureed Journey",
      "Dastaan Brahui",
      "Zehri Folk"
    ]
  },
  {
    "id": 6,
    "title": "Mountain & Valley Tunes",
    "description": "Melodies inspired by Chaghi, Kalat, and Bolan landscapes.",
    "cover": "covers/playlist_valley.jpg",
    "songs": [
      "Kalat Echo",
      "Valley Intro",
      "Chaghi Heart",
      "Bolan Vibes"
    ]
  },
  {
    "id": 7,
    "title": "Brahui Fusion Reloaded",
    "description": "Folk meets electronic fusion for modern listeners.",
    "cover": "covers/playlist_fusion.jpg",
    "songs": [
      "Fusion Storm",
      "Wali Flow",
      "Sabzoi Vibes",
      "Electro Folk"
    ]
  },
  {
    "id": 8,
    "title": "Weekly Brahui Trending",
    "description": "Most played Brahui songs of the week.",
    "cover": "covers/playlist_trending.jpg",
    "songs": [
      "Bezanjo Pop",
      "Sorah Love",
      "Nok Melody",
      "Mastung Nights"
    ]
  },
  {
    "id": 9,
    "title": "Chill Brahui Nights",
    "description": "Smooth chill tracks for nighttime listening.",
    "cover": "covers/playlist_chill.jpg",
    "songs": [
      "Night Breeze",
      "Baloch Strings",
      "Noshki Rhythm",
      "Rang Melody"
    ]
  },
  {
    "id": 10,
    "title": "Best of Brahui Legends",
    "description": "Golden era Brahui classics by legendary artists.",
    "cover": "covers/playlist_legends.jpg",
    "songs": [
      "Legend One",
      "Noorullah Anthem",
      "Classic Brahui",
      "Purana Folk"
    ]
  }
]



const genres = [
  { id: 1, name: "Brahui Folk" },
  { id: 2, name: "Balochi Folk" },
  { id: 3, name: "Sindhi Folk" },
  { id: 4, name: "Pashto Pop" },
  { id: 5, name: "Punjabi Pop" },
  { id: 6, name: "Classical" },
  { id: 7, name: "Sufi" },
  { id: 8, name: "Hip Hop" },
  { id: 9, name: "Electronic" },
  { id: 10, name: "Acoustic" }
];

export { genres,   albums, playlists}