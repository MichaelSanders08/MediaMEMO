<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title class="header-title">
          <h1>MediaMEMO</h1>
        </ion-title>
      </ion-toolbar>
    </ion-header>

      <ion-content class="ion-content" :fullscreen="true">
        <h2 id="section-header" class="centered-header">Recommended</h2>
        <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
          <ion-refresher-content class="ion-content"></ion-refresher-content>
        </ion-refresher>

        <ion-header class="ion-content" collapse="condense">
          <ion-toolbar>
            <!-- <ion-title size="large">Recommended</ion-title> -->
          </ion-toolbar>
        </ion-header>

        <ion-list class="ion-content">
          <MessageListItem v-for="message in messages" :key="message.id" :message="message" />
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
} from '@ionic/vue';
import MessageListItem from '@/components/MessageListItem.vue';
import { getMessages, Message } from '@/data/messages';
import { ref } from 'vue';

const messages = ref<Message[]>(getMessages());

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