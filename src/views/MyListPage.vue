<template>
  <ion-page>
    <ion-content class="ion-content" :fullscreen="true">
      <h2 id="section-header" class="centered-header">My List</h2>
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content class="ion-content"></ion-refresher-content>
      </ion-refresher>

      <ion-list class="ion-content">
        <MovieListItem
          v-for="movie in movies"
          :key="movie.id"
          :movie="movie"
          @toggleListStatus="toggleListStatus"
        />
        <VideoGameListItem
          v-for="videoGame in videoGames"
          :key="videoGame.id"
          :videoGame="videoGame"
          @toggleListStatus="toggleListStatus"
        />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import MovieListItem from "@/components/MovieListItem.vue";
import VideoGameListItem from "@/components/VideoGameListItem.vue";
import { ref, onMounted, watch } from "vue";
import { cog } from "ionicons/icons";
import { useStore } from "@/store/store";
import { VideoGame, getGamesList } from "@/data/videoGames";
import { Movie } from "@/data/movies";  // Import the Movie type here

const { getMyList, removeFromMyList, addToMyList } = useStore();
const movies = ref(getMyList());
const videoGames = ref<VideoGame[]>(getGamesList());

onMounted(() => {
  // Watch for changes in the store's myList and update the component's movies
  watch(getMyList, (newList) => {
    movies.value = newList;
  });
});

const refresh = (ev: CustomEvent) => {
  setTimeout(() => {
    ev.detail.complete();
  }, 3000);
};

const toggleListStatus = (item: Movie | VideoGame) => {
  if (item.inList) {
    removeFromMyList(item);
  } else {
    addToMyList(item);
  }
};
</script>

<style>
.header-title {
  font-size: 1.5rem; /* Adjust the font size as needed */
  text-align: center; /* Center the text within the title area */
  background-color: navy;
}

.centered-header {
  text-align: center; /* Center the "Recommended" text horizontally */
}
</style>
