<template>
  <ion-item
    v-if="movie"
    :routerLink="'/movie/' + movie.id"
    :detail="false"
    class="list-item"
  >
    <div slot="start">
      <!-- <ion-img src="file://resources/placeholder.png"></ion-img> -->
      <img v-if="movie.image" :src="movie.image" alt="Movie Image" class="movie-image">
    </div>
    <ion-label class="ion-text-wrap">
      <h2>
        {{ movie.title }}
        <span class="date">
          <ion-note>{{ movie.date }}</ion-note>
          <ion-icon
            aria-hidden="true"
            :icon="chevronForward"
            size="small"
            v-if="isIos()"
          ></ion-icon>
        </span>
      </h2>
      <ion-button @click.stop="addToMyList(movie)" class="add-to-list-button">
        Add to List
      </ion-button>
      <h3>{{ movie.genres }}</h3>
      <p>
        {{ movie.description }}
      </p>
    </ion-label>
  </ion-item>
</template>

<script setup lang="ts">
import { IonIcon, IonItem, IonLabel, IonNote, IonButtons } from "@ionic/vue";
import { chevronForward } from "ionicons/icons";

const addToMyList = (movie) => {
  // Add your logic here to handle the "Add to List" button click
  console.log(movie.inList);
  console.log('Movie added to list!');
};
defineProps({
  movie: Object,
});

const isIos = () => {
  const win = window as any;
  return win && win.Ionic && win.Ionic.mode === "ios";
};
</script>

<style scoped>
.list-item {
  --padding-start: 10px;
  --inner-padding-end: 0;
}

.list-item ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

.list-item h2 {
  font-weight: 600;
  margin: 0;
}

.list-item p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 95%;
}

.list-item .date {
  float: right;
  align-items: center;
  display: flex;
}

.list-item ion-icon {
  color: #c9c9ca;
}

.list-item ion-note {
  font-size: 15px;
  margin-right: 8px;
  font-weight: normal;
}

.list-item ion-note.md {
  margin-right: 14px;
}

.list-item .movie-image {
  max-width: 50px; /* Set the maximum width for the image */
  margin-left: 5px;
}

</style>

