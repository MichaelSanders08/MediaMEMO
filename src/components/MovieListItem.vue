<template>
  <ion-item
    v-if="movie"
    :routerLink="'/movie/' + movie.id"
    :detail="false"
    class="list-item"
    @click.stop="openMoviePage"
  >
    <div slot="start">
      <!-- <ion-img src="file://resources/placeholder.png"></ion-img> -->
      <img
        v-if="movie.image"
        :src="movie.image"
        alt="Movie Image"
        class="movie-image"
      />
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
          ></ion-icon>
        </span>
      </h2>
      <h3>{{ movie.genres }}</h3>
      <p>
        {{ movie.description }}
      </p>
      <ion-button
        @click.stop="toggleListStatus($event)"
        class="add-to-list-button"
        v-if="!movie.inList"
      >
        Add to List
      </ion-button>
      <ion-button
        @click.stop="toggleListStatus($event)"
        class="add-to-list-button"
        v-if="movie.inList"
      >
        Remove from List
      </ion-button>
    </ion-label>
  </ion-item>
</template>

<script setup lang="ts">
import { Movie } from "@/data/movies";
import { IonIcon } from "@ionic/vue";
import { chevronForward as ionChevronForward } from "ionicons/icons";
// import { defineProps } from "vue";
import { useStore } from "@/store/store";
import { useRoute } from "vue-router";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
} from "@ionic/vue";
import { personCircle } from "ionicons/icons";
import { getMovie } from "../data/movies";

const { addToMyList, removeFromMyList } = useStore();
const { movie, isIos } = defineProps(["movie", "isIos"]);
const chevronForward = ionChevronForward;

const toggleListStatus = (event: MouseEvent | TouchEvent) => {
  event.stopPropagation();
  if (movie.inList) {
    removeFromMyList(movie);
  } else {
    addToMyList(movie);
  }
};

const openMoviePage = () => {
  const getBackButtonText = () => {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === "ios" ? "Inbox" : "";
  };

  const route = useRoute();
  const movie = getMovie(parseInt(route.params.id as string, 10));
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
