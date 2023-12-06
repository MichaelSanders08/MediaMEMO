// store.ts

import { ref } from 'vue';
import { Movie } from '@/data/movies';

const state = ref({
  myList: [] as Movie[],
});

const getters = {
  getMyList: () => state.value.myList,
};

const mutations = {
  addToMyList: (movie: Movie) => {
    if (!state.value.myList.some((m) => m.id === movie.id)) {
      state.value.myList.push(movie);
    }
  },
  removeFromMyList: (movie: Movie) => {
    state.value.myList = state.value.myList.filter((m) => m.id !== movie.id);
  },
};

export const useStore = () => {
  return {
    ...getters,
    ...mutations,
  };
};
