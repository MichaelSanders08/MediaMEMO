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
      movie.inList = true;
      state.value.myList.push(movie);
    }
  },
  removeFromMyList: (movie: Movie) => {
    if (state.value.myList.some((m) => m.id === movie.id)) {
      movie.inList = false;
      state.value.myList.pop();
    }
  },
};

export const useStore = () => {
  return {
    ...getters,
    ...mutations,
  };
};
