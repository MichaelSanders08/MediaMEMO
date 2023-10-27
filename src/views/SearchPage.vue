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
        @ionChange="handleSearch"
        placeholder="Enter Media"
        animated="true"
      ></ion-searchbar>
    </ion-toolbar>

    <ion-content> </ion-content>
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
  data() {
    return {
      query: "",
    };
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
