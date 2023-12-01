export interface Movie {
  title: string;
  genres: string;
  date: string;
  description: string;
  id: number;
  link: string;
  image: string;
  inList: boolean;
}

const movies: Movie[] = [
  {
    title: "The Domino Revival",
    genres: "Documentary",
    date: "10/24/2023",
    description:
      "The Domino Revival takes moviegoers on an extraordinary journey with Mike Signorelli and a group of revivalists during a pivotal period in our nation's history. As society's fascination with the supernatural intensifies, this film unveils the awe-inspiring power of Jesus Christ. Through compelling Gospel preaching, documented miracles, triumph over despair, and liberation from demons, The Domino Revival captures the essence of spiritual hunger and delivers a profound cinematic experience.",
    id: 0,
    link: "https://www.imdb.com/title/tt28088015/?ref_=nv_sr_srsg_0_tt_4_nm_0_q_The%2520Domino%2520Revival",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffr.web.img5.acsta.net%2Fpictures%2F23%2F07%2F19%2F23%2F48%2F2518051.jpg%2Fr_5000_x&f=1&nofb=1&ipt=ba34cd37d781263f1fe45454b045cdbdf608624924226e9dc1c191e3003121ec&ipo=images",
    inList: true
  },
  {
    title: "Five Nights at Freddy's",
    genres: "Horror | Mystery | Thriller",
    date: "10/27/2023",
    description:
      "A troubled security guard begins working at Freddy Fazbear's Pizza. During his first night on the job, he realizes that the night shift won't be so easy to get through. Pretty soon he will unveil what actually happened at Freddy's.",
    id: 1,
    link: "https://www.imdb.com/title/tt4589218/?ref_=fn_al_tt_1",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMDM5NmQyNGYtZmRiMS00NDQwLTkzZGMtYWQyZjBkMmI3MGI2XkEyXkFqcGdeQXVyMTkxNjUyNQ%40%40._V1_.jpg&f=1&nofb=1&ipt=a8cd7446e523d38ca837ff6e7ff5143e25594551f844a518de8417eb4cefae93&ipo=images",
    inList: true
  },
  {
    title: "Freelance",
    genres: "Action | Comedy",
    date: "10/27/2023",
    description:
      "An ex-special forces operative takes a job to provide security for a journalist as she interviews a dictator, but, a military coup breaks out in the middle of the interview, they are forced to escape into the jungle where they must survive",
    id: 2,
    link: "https://www.imdb.com/title/tt15744298/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_Freelance",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Freelance_film_poster.png/220px-Freelance_film_poster.png",
    inList: false
  },
  {
    title: "After Death",
    genres: "Documentary",
    date: "10/27/2023",
    description:
      "Based on real near-death experiences, After Death explores the afterlife with the guidance of New York Times bestselling authors, medical experts, scientists, and survivors that shed a light on what awaits us.",
    id: 3,
    link: "https://www.imdb.com/title/tt21191906/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_After%2520Death",
    image: "https://duckduckgo.com/i/b1adad33.png",
    inList: false
  },
  {
    title: "Suitable Flesh",
    genres: "Horror | Thriller",
    date: "10/27/2023",
    description:
      "A psychiatrist becomes obsessed with one of her young clients with multiple personalities.",
    id: 4,
    link: "https://www.imdb.com/title/tt21397580/?ref_=fn_al_tt_1",
    image: "https://duckduckgo.com/i/195f0a89.jpg",
    inList: false
  },
  {
    title: "Inspector Sun",
    genres: "Animation | Comedy | Family",
    date: "10/27/2023",
    description:
      "Inspector Sun boards a seemingly normal plane for a much-needed vacation, but when an enigmatic millionaire receives a threat on his life, Sun is back on the case. Trapped in a web of lies, Sun must find the culprit before it's too late.",
    id: 5,
    link: "https://www.imdb.com/title/tt6661616/",
    image: "https://duckduckgo.com/i/ff8c1860.jpg",
    inList: false
  },
  {
    title: "Tiger 3",
    genres: "Action | Adventure | Thriller",
    date: "11/11/2023",
    description:
      "Plot under wraps",
    id: 6,
    link: "https://www.imdb.com/title/tt18411490/?ref_=rlm",
    image: "https://m.media-amazon.com/images/M/MV5BOWQyZGExNDMtNWVhYy00NjVlLWE4M2YtODlmM2EzMDkzMDY4XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg",
    inList: false
  },
  {
    title: "The Skull",
    genres: "Sci-Fi",
    date: "11/12/2023",
    description:
      "The Skulls is a dream come true. But Luke soon comes to realize just how powerful The Skulls organization really is -- and that the truth, like success, comes at a very high price.",
    id: 7,
    link: "https://www.imdb.com/title/tt13848506/?ref_=rlm",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BOTJhNmVlN2UtZGQzYS00MmFjLThjYmYtN2ZhOTI2NDVkOGYxXkEyXkFqcGdeQXVyOTI4NzcxNjY%40._V1_.jpg&f=1&nofb=1&ipt=e9efb3f573f4a63c9aa88bc5583ca70a2f32ad36b3d170eda283b8a42d6d1c12&ipo=images",
    inList: false
  },
  {
    title: "Billy Idol: State Line",
    genres: "Music",
    date: "11/15/2023",
    description:
      "A docu-concert feature film that starts with a mini-doc about HOOVER DAM and finishes with the first ever Rock and Roll show performed and filmed at the world famous landmark. The live event took place on 8th April 2023.",
    id: 8,
    link: "https://www.imdb.com/title/tt29609592/?ref_=rlm",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIF.4fsefrk2abrPyhkRhWGIfA%26pid%3DApi&f=1&ipt=9cc0bc57d6357a03db2c8756bb82e41536feb7d5b7c290f36fdd14045e53585b&ipo=images",
    inList: false
  },
  {
    title: "The Hunger Games: The Ballad of Songbirds & Snakes",
    genres: "Action | Adventure | Drama",
    date: "11/17/2023",
    description:
      "Coriolanus Snow mentors and develops feelings for the female District 12 tribute during the 10th Hunger Games.",
    id: 9,
    link: "https://www.imdb.com/title/tt10545296/?ref_=rlm",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wnypapers.com%2Fcontent%2Fimages%2F109-Ent%2FThe-Hunger-Games-the-Ballad-of-Songbirds-Snakes-key-art.jpg&f=1&nofb=1&ipt=531cd8c10855df2ae36b37f265353413babd7a2a0f4e4ac580d4c0f49ab886d7&ipo=images",
    inList: false
  },
];

export const getMovies = () => movies;

export const getMoviesList = () => movies.filter((m) => m.inList === true);

export const getMovie = (id: number) => movies.find((m) => m.id === id);
