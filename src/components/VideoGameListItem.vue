<template>
    <ion-item
      v-if="videoGame"
      :routerLink="'/videoGame/' + videoGame.id"
      :detail="false"
      class="list-item"
    >
      <div slot="start">
        <!-- <ion-img src="file://resources/placeholder.png"></ion-img> -->
        <img v-if="videoGame.image" :src="videoGame.image" alt="VideoGame Image" class="videoGame-image">
      </div>
      <ion-label class="ion-text-wrap">
        <h2>
          {{ videoGame.title }}
          <span class="date">
          <ion-note>{{ videoGame.date }}</ion-note>
          <ion-icon
            aria-hidden="true"
            :icon="chevronForward"
            size="small"
          ></ion-icon>
        </span>
        </h2>
        <ion-button
          @click.stop="toggleListStatus()"
          class="add-to-list-button"
          v-if="!videoGame.inList"
        >
          Add to List
        </ion-button>
        <ion-button
          @click.stop="toggleListStatus()"
          class="add-to-list-button"
          v-if="videoGame.inList"
        >
          Remove from List
        </ion-button>
        <h3>{{ videoGame.genres }}</h3>
        <p>
          {{ videoGame.description }}
        </p>
      </ion-label>
    </ion-item>
  </template>
  
  <script setup lang="ts">
  import { IonIcon, IonItem, IonLabel, IonNote } from "@ionic/vue";
  import { chevronForward } from "ionicons/icons";
  import { defineProps } from "vue";
  import { useStore } from "@/store/store";
  
  const { addVideoGameToMyList, removeVideoGameFromMyList } = useStore();
  const { videoGame } = defineProps(["videoGame"]);

  const toggleListStatus = () => {
  if (videoGame.inList) {
    removeVideoGameFromMyList(videoGame);
  } else {
    addVideoGameToMyList(videoGame);
  }
};
};

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
  
  .list-item .videoGame-image {
    max-width: 50px; /* Set the maximum width for the image */
    margin-left: 5px;
  }
  
  </style>