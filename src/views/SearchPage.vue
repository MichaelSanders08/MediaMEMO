<style scoped>
.example-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Search</ion-title>
        <ion-button color="transparent" slot="end">
          <ion-icon
            slot="icon-only"
            :icon="cog"
            style="color: black"
          ></ion-icon> </ion-button></ion-toolbar
    ></ion-header>
    <ion-toolbar>
      <ion-searchbar
        style="padding-top: 15px"
        v-model="query"
        @ionInput="() => {}"
        placeholder="Enter Media"
      ></ion-searchbar>
    </ion-toolbar>

    <ion-content>
      <ion-list>
        <ion-item v-for="movie in filteredMovies" :key="movie.id"
          :routerLink="'/movie/' + movie.id"
          :detail="false"
          class="list-item"
        >
          {{ movie.title }}
        </ion-item>
        <ion-item v-for="videoGame in filteredVideoGames" :key="videoGame.id"
          :routerLink="'/videoGame/' + videoGame.id"
          :detail="false"
          class="list-item"
        >
          {{ videoGame.title }}
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonList,
  IonItem,
  IonSearchbar,
} from "@ionic/vue";
import { cog } from "ionicons/icons";
import { Movie, getMovies } from "@/data/movies";
import { VideoGame, getGames } from "@/data/videoGames";

export default {
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonList,
    IonItem,
    IonSearchbar,
  },
  data() {
    return {
      query: "",
      movies: getMovies(),
      games: getGames(),
    };
  },
  computed: {
    filteredMovies(): Movie[] {
      // This will recompute whenever `query` changes
      if (!this.query) {
        return []; // Start with an empty list if there is no query
      }
      const result = this.movies.filter((movie) =>
        movie.title.toLowerCase().includes(this.query.toLowerCase())
      );
      console.log(result);
      return result;
    },
    filteredVideoGames(): VideoGame[] {
      // This will recompute whenever `query` changes
      if (!this.query) {
        return []; // Start with an empty list if there is no query
      }
      const result = this.games.filter((game) =>
        game.title.toLowerCase().includes(this.query.toLowerCase())
      );
      console.log(result);
      return result;
    },
  },
  setup() {
    return {
      cog,
    };
  },
  methods: {
    handleSearch() {
      // Your search logic here
      console.log("Searching for:", this.query);
    },
  },
};
</script>
