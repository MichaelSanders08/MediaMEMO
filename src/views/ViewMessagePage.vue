<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            :text="getBackButtonText()"
            default-href="/"
          ></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" v-if="message">
      <ion-item>
        <ion-icon
          aria-hidden="true"
          :icon="personCircle"
          color="primary"
        ></ion-icon>
        <ion-label class="ion-text-wrap">
          <h2>
            {{ message.title }}
            <span class="date">
              <ion-note>{{ message.date }}</ion-note>
            </span>
          </h2>
        </ion-label>
      </ion-item>

      <div class="ion-padding">
        <h1>{{ message.genres }}</h1>
        <p>
          {{ message.description }}
        </p>
        <p>
          <ion-button
            expand="full"
            :href="message.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit External Site
          </ion-button>
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
} from "@ionic/vue";
import { personCircle } from "ionicons/icons";
import { getMessage } from "../data/messages";

const getBackButtonText = () => {
  const win = window as any;
  const mode = win && win.Ionic && win.Ionic.mode;
  return mode === "ios" ? "Inbox" : "";
};

const route = useRoute();
const message = getMessage(parseInt(route.params.id as string, 10));
</script>

<style scoped>
ion-item {
  --inner-padding-end: 0;
  --background: transparent;
}

ion-label {
  margin-top: 12px;
  margin-bottom: 12px;
}

ion-item h2 {
  font-weight: 600;
}

ion-item .date {
  float: right;
  align-items: center;
  display: flex;
}

ion-item ion-icon {
  font-size: 42px;
  margin-right: 8px;
}

ion-item ion-note {
  font-size: 15px;
  margin-right: 12px;
  font-weight: normal;
}

h1 {
  margin: 0;
  font-weight: bold;
  font-size: 22px;
}

p {
  line-height: 22px;
}
</style>
