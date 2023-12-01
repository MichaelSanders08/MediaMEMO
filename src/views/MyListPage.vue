<template>
    <ion-page>
      <ion-header>
        <IonToolbar>
          <ion-title> MediaMEMO </ion-title>
          <ion-button color="transparent" slot="end">
            <ion-icon
              slot="icon-only"
              :icon="cog"
              style="color: black"
            ></ion-icon>
          </ion-button>
        </IonToolbar>
      </ion-header>
  
      <ion-content class="ion-content" :fullscreen="true">
        <h2 id="section-header" class="centered-header">My List</h2>
        <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
          <ion-refresher-content class="ion-content"></ion-refresher-content>
        </ion-refresher>
  
        <ion-list class="ion-content">
          <MovieListItem v-for="movie in movies" :key="movie.id" :movie="movie" />
          <VideoGameListItem v-for="videoGame in videoGames" :key="videoGame.id" :videoGame="videoGame" />
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
  import { ref } from "vue";
  import { cog } from "ionicons/icons";
  
  const movies = ref<Movie[]>(getMovies());
  const videoGames = ref<VideoGame[]>(getGames());
  
  const refresh = (ev: CustomEvent) => {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
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
  