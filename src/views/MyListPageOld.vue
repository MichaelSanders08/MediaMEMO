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
        <ion-title>My Lists</ion-title>
        <ion-button color="transparent" slot="end">
          <ion-icon
            slot="icon-only"
            :icon="cog"
            style="color: black"
          ></ion-icon>
        </ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="example-content">My Lists Content</div>
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
} from "@ionic/vue";
import { cog } from "ionicons/icons";

export default {
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    return {
      cog,
    };
  },
};
</script>
