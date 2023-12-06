<template>
  <ion-page>
    <ion-header>
      <IonToolbar>
        <ion-title> MediaMEMO </ion-title>
        <ion-button color="transparent" slot="end">
          <ion-icon
            slot="icon-only"
            :icon="cog"
            style="color: white"
          ></ion-icon>
        </ion-button>
      </IonToolbar>
    </ion-header>

    <ion-content class="ion-content" :fullscreen="true">
      <h2 id="section-header" class="centered-header">Recommended</h2>

      <div class="filters">
        <ion-button color="primary" @click="filterByType('movie')" size="small"
          >Show Movies
        </ion-button>
        <ion-button
          color="primary"
          @click="filterByType('videoGame')"
          size="small"
          >Show Video Games
        </ion-button>
        <ion-button color="primary" @click="showAll" size="small"
          >Show All
        </ion-button>
      </div>

      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content class="ion-content"></ion-refresher-content>
      </ion-refresher>

      <ion-list class="ion-content">
        <MovieListItem
          v-for="movie in filteredMovies"
          :key="movie.id"
          :movie="movie"
        />
        <VideoGameListItem
          v-for="videoGame in filteredVideoGames"
          :key="videoGame.id"
          :videoGame="videoGame"
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
import { getMovies, Movie } from "@/data/movies";
import { getGames, VideoGame } from "@/data/videoGames";
import { ref, computed } from "vue";
import { cog } from "ionicons/icons";

const movies = ref<Movie[]>(getMovies());
const videoGames = ref<VideoGame[]>(getGames());
const currentFilter = ref<string>("all");

const refresh = (ev: CustomEvent) => {
  setTimeout(() => {
    ev.detail.complete();
  }, 3000);
};

const filteredMovies = computed(() => {
  return movies.value.filter(
    (movie) => currentFilter.value === "all" || currentFilter.value === "movie"
  );
});

const filteredVideoGames = computed(() => {
  return videoGames.value.filter(
    (videoGame) =>
      currentFilter.value === "all" || currentFilter.value === "videoGame"
  );
});

const filterByType = (type: string) => {
  currentFilter.value = type;
};

const showAll = () => {
  currentFilter.value = "all";
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
.filters {
  margin-left: 10px;
}
</style>
