export interface VideoGame {
  title: string;
  genres: string;
  date: string;
  description: string;
  id: number;
  link: string;
  image: string;
  inList: boolean;
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
    image: "https://assets-prd.ignimgs.com/2023/11/01/alien-hominid-hd-button-1698878240358.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
    inList: false
  },
  {
    title: "RollerCoaster Tycoon Adventures",
    genres: "Simulation",
    date: "11/1/2023",
    description:
      "Based on the original Switch release, RCT Adventures Deluxe provides a streamlined and massively improved version, with added controller support for precise theme park building and management. Enjoy 80+ new rides and attractions, plus the ability to customize and modify your parks like never before.",
    id: 1,
    link: "https://www.ign.com/games/rollercoaster-tycoon-adventures-deluxe",
    image: "https://assets1.ignimgs.com/2018/08/13/rollercoaster-tycoon-adventures-button-0000-1534204044126.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
    inList: false
  },
  {
    title: "Song of Nunu: A League of Legends Story",
    genres: "Action | Adventure",
    date: "11/1/2023",
    description:
      "In the single-player action adventure game Song of Nunu: A League of Legends Story, explore the rich world of the Freljord, from its complete frozen tundra, to the warmth of the adventure found within.",
    id: 2,
    link: "https://www.ign.com/games/song-of-nunu-a-league-of-legends-story",
    image: "https://assets-prd.ignimgs.com/2021/11/23/song-of-nunu-button-01-1637632440659.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
    inList: false
  },
  {
    title: "Achilles: Legends Untold",
    genres: "Action | RPG | Soulslike",
    date: "11/2/2023",
    description:
      "Take part in the journey of Achilles, who stands in the middle of the centuries-long conflict between Hades and Ares. With powerful artifacts he obtains along the way and weapons forged by Hephaestus the god of blacksmiths, Achilles will take on all challenges and take control of his own myth.",
    id: 3,
    link: "https://www.ign.com/games/achilles-legends-untold",
    image: "https://assets-prd.ignimgs.com/2022/01/20/achilles-legend-untold-button-1642714696227.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
    inList: false
  },
  {
    title: "Cactus Cowboy - Desert Warfare",
    genres: "Action | Adventure",
    date: "11/2/2023",
    description:
      "Step into the role of Cactus Cowboy and push back against the Bug Army and reveal the sinister plans of their leaders.",
    id: 4,
    link: "https://www.ign.com/games/cactus-cowboy-desert-warfare",
    image: "https://assets-prd.ignimgs.com/2023/10/24/cactuscow-1698182843252.jpeg?width=300&crop=1%3A1%2Csmart&auto=webp",
    inList: false
  },
  {
    title: "Dead Island 2: Haus",
    genres: "Action | RPG | DLC/Expansion",
    date: "11/2/2023",
    description:
      "How does a billionaire prepare for the zompocalypse? With a techno-death cult and a healthy splash of debauchery and gore.",
    id: 5,
    link: "https://www.ign.com/games/dead-island-2-haus",
    image: "https://assets-prd.ignimgs.com/2023/10/12/dead-island-2-haus-button1-1697121771460.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
    inList: false
  },
  {
    title: "For the King 2",
    genres: "Adventure | RPG | Strategy",
    date: "11/2/2023",
    description:
      "Battle against Fahrul's tyrannical Queen alone or as a party of 4 players in the sequel to For The King, the massively popular turn-based roguelike tabletop RPG. Level up and explore as you unravel the once beloved Queen's terrible secret.",
    id: 6,
    link: "https://www.ign.com/games/for-the-king-2",
    image: "https://assets-prd.ignimgs.com/2023/02/17/for-the-king2-button-1676659726276.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
    inList: false
  },
  {
    title: "Gangs of Sherwood",
    genres: "Action | Fantasy",
    date: "11/2/2023",
    description:
      "Gangs of Sherwood is a cooperative action game for 1 to 4 players set in the reimagined world of Robin Hood. Play as Robin, Marian, Friar Tuck or Little John, four heroes with unique, fully customizable gameplay styles, and set out in search of riches to plunder so you can give them to the poor.",
    id: 7,
    link: "https://www.ign.com/games/gangs-of-sherwood",
    image: "https://assets-prd.ignimgs.com/2023/09/21/sherwood-1695325711051.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
    inList: false
  },
  {
    title: "My Time at Sandrock",
    genres: "RPG",
    date: "11/2/2023",
    description:
      "In My Time at Sandrock, the follow-up to award-winning simulation RPG, My Time at Portia, you will build up a brand new workshop and help out a struggling, rugged mining town in the most epic and legendary ways imaginable!",
    id: 8,
    link: "https://www.ign.com/games/my-time-at-sandrock",
    image: "https://assets-prd.ignimgs.com/2020/10/26/my-time-at-sandrock-button-001-1603734546825.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
    inList: false
  },
  {
    title: "Phantom Blade: Executioners",
    genres: "Action | Adventure | RPG | Free-to-Play | Indie",
    date: "11/2/2023",
    description:
      "Phantom Blade: Executioners is a fast-paced action-RPG. Players journey down a bloody path of love and vengeance between the characters. The game uses a high-speed move action system. You must be able to solve the darkest mysteries.",
    id: 9,
    link: "https://www.ign.com/games/phantom-blade-executioners",
    image: "https://assets-prd.ignimgs.com/2023/05/27/phantombladex-1685209452674.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
    inList: false
  },
];

export const getGames = () => videoGames;

export const getGamesList = () => videoGames.filter((v) => v.inList === true);

export const getGame = (id: number) => videoGames.find((m) => m.id === id);
