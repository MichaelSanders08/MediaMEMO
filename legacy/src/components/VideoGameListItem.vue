<template>
  <ion-item
    v-if="videoGame"
    :routerLink="'/videoGame/' + videoGame.id"
    :detail="false"
    class="list-item"
  >
    <div slot="start">
      <!-- <ion-img src="file://resources/placeholder.png"></ion-img> -->
      <img
        v-if="videoGame.image"
        :src="videoGame.image"
        alt="VideoGame Image"
        class="videoGame-image"
      />
    </div>
    <ion-label class="ion-text-wrap">
      <h2>
        {{ videoGame.title }}
        <ion-button
          @click.stop="addToMyList()"
          class="add-to-list-button"
          v-if="!videoGame.inList"
        >
          Add to List
        </ion-button>
        <ion-button
          @click.stop="removeFromMyList()"
          class="add-to-list-button"
          v-if="videoGame.inList"
        >
          Remove from List
        </ion-button>
        <span class="date">
          <ion-note>{{ videoGame.date }}</ion-note>

          <ion-icon
            aria-hidden="true"
            :icon="chevronForward"
            size="small"
            v-if="isIos()"
          ></ion-icon>
        </span>
      </h2>
      <h3>{{ videoGame.genres }}</h3>
      <p>
        {{ videoGame.description }}
      </p>
    </ion-label>
  </ion-item>
</template>

<script setup lang="ts">
import { VideoGame, getGames } from "@/data/videoGames";
import { IonIcon, IonItem, IonLabel, IonNote } from "@ionic/vue";
import { chevronForward } from "ionicons/icons";
import { ref } from "vue";

const games = ref<VideoGame[]>(getGames());

const addToMyList = () => {
  // Add your logic here to handle the "Add to List" button click
  games.value = games.value.map((g) => {
    if (g.id === videoGame.id) {
      g.inList = true;
    }
    return g;
  });
  console.log(videoGame.inList);
  console.log("Movie added to list!");
};

const removeFromMyList = () => {
  // Add your logic here to handle the "Add to List" button click
  games.value = games.value.map((g) => {
    if (g.id === videoGame.id) {
      g.inList = false;
    }
    return g;
  });
  console.log(videoGame.inList);
  console.log("Movie added to list!");
};

const { videoGame } = defineProps(["videoGame"]);

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

.list-item .videoGame-image {
  max-width: 50px; /* Set the maximum width for the image */
  margin-left: 5px;
}
.add-to-list-button {
  float: right;
  margin-right: 10px;
}
</style>
