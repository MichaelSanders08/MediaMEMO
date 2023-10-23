export interface Message {
  title: string;
  genres: string;
  date: string;
  description: string;
  id: number;
}

const messages: Message[] = [
  {
    title: 'The Domino Revival',
    genres: 'Documentary',
    date: '10/24/2023',
    description: "The Domino Revival takes moviegoers on an extraordinary journey with Mike Signorelli and a group of revivalists during a pivotal period in our nation's history. As society's fascination with the supernatural intensifies, this film unveils the awe-inspiring power of Jesus Christ. Through compelling Gospel preaching, documented miracles, triumph over despair, and liberation from demons, The Domino Revival captures the essence of spiritual hunger and delivers a profound cinematic experience.",
    id: 0
  },
  {
    title: "Five Nights at Freddy's",
    genres: 'Horror | Mystery | Thriller',
    date: '10/27/2023',
    description: "A troubled security guard begins working at Freddy Fazbear's Pizza. During his first night on the job, he realizes that the night shift won't be so easy to get through. Pretty soon he will unveil what actually happened at Freddy's.",
    id: 1
  },
  {
    title: 'Freelance',
    genres: 'Action | Comedy',
    date: '10/27/2023',
    description: 'An ex-special forces operative takes a job to provide security for a journalist as she interviews a dictator, but, a military coup breaks out in the middle of the interview, they are forced to escape into the jungle where they must survive',
    id: 2

  },
  {
    title: 'After Death',
    genres: 'Documentary',
    date: '10/27/2023',
    description: 'Based on real near-death experiences, After Death explores the afterlife with the guidance of New York Times bestselling authors, medical experts, scientists, and survivors that shed a light on what awaits us.',
    id: 3
  },
  {
    title: 'Suitable Flesh',
    genres: 'Horror | Thriller',
    date: '10/27/2023',
    description: 'A psychiatrist becomes obsessed with one of her young clients with multiple personalities.',
    id: 4
  },
  {
    title: 'Inspector Sun',
    genres: 'Animation | Comedy | Family',
    date: '10/27/2023',
    description: "Inspector Sun boards a seemingly normal plane for a much-needed vacation, but when an enigmatic millionaire receives a threat on his life, Sun is back on the case. Trapped in a web of lies, Sun must find the culprit before it's too late.",
    id: 5
  }
];

export const getMessages = () => messages;

export const getMessage = (id: number) => messages.find(m => m.id === id);