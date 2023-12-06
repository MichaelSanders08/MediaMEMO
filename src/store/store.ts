// store.ts

import { ref } from 'vue';
import { Movie } from '@/data/movies';
import { VideoGame } from '@/data/videoGames';

type MyListType = (Movie | VideoGame)[];

const state = ref({
  myList: [] as MyListType,
});

const getters = {
  getMyList: () => state.value.myList,
};

const mutations = {
  addMovieToMyList: (movie: Movie) => {
    if (!state.value.myList.some((m) => m.id === movie.id)) {
      movie.inList = true;
      state.value.myList.push(movie);
    }
  },
  removeMovieFromMyList: (movie: Movie) => {
    const indexToRemove = state.value.myList.findIndex((m) => m.id === movie.id);
    if (indexToRemove !== -1) {
      movie.inList = false;
      state.value.myList.splice(indexToRemove, 1); // Remove 1 element at the found index
    }
  },addVideoGameToMyList: (videoGame: VideoGame) => {
    if (!state.value.myList.some((v) => v.id === videoGame.id)) {
      videoGame.inList = true;
      state.value.myList.push(videoGame);
    }
  },
  removeVideoGameFromMyList: (videoGame: VideoGame) => {
    const indexToRemove = state.value.myList.findIndex((v) => v.id === videoGame.id);
    if (indexToRemove !== -1) {
      videoGame.inList = false;
      state.value.myList.splice(indexToRemove, 1); // Remove 1 element at the found index
    }
  },
};

export const useStore = () => {
  return {
    ...getters,
    ...mutations,
  };
};
