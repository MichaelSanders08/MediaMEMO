export interface VideoGame {
  title: string;
  genres: string;
  date: string;
  description: string;
  id: number;
  link: string;
  image: string;
}

const videoGames: VideoGame[] = [
  {
    title: "Alien Hominid HD",
    genres: "Action | Indie | Shooter",
    date: "11/1/2023",
    description:
      "The 2D side-scrolling shooter from The Behemoth is back! With your mighty blaster and a group of mysterious kids by your side, destroy the agency and reclaim your spaceship!",
    id: 0,
    link: "https://www.ign.com/games/alien-hominid-hd",
    image: "https://assets-prd.ignimgs.com/2023/11/01/alien-hominid-hd-button-1698878240358.jpg?width=300&crop=1%3A1%2Csmart&auto=webp"
  },
];

export const getGames = () => videoGames;

export const getGame = (id: number) => videoGames.find((m) => m.id === id);
