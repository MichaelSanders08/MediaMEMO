export interface VideoGames {
  title: string;
  genres: string;
  date: string;
  description: string;
  id: number;
  link: string;
}

const videogames: VideoGames[] = [
  {
    title: "The Domino Revival",
    genres: "Documentary",
    date: "10/24/2023",
    description:
      "The Domino Revival takes moviegoers on an extraordinary journey with Mike Signorelli and a group of revivalists during a pivotal period in our nation's history. As society's fascination with the supernatural intensifies, this film unveils the awe-inspiring power of Jesus Christ. Through compelling Gospel preaching, documented miracles, triumph over despair, and liberation from demons, The Domino Revival captures the essence of spiritual hunger and delivers a profound cinematic experience.",
    id: 0,
    link: "https://www.imdb.com/title/tt28088015/?ref_=nv_sr_srsg_0_tt_4_nm_0_q_The%2520Domino%2520Revival",
  },
];

export const getGames = () => videogames;

export const getGame = (id: number) => videogames.find((m) => m.id === id);
