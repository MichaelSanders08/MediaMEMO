<template>
    <ion-page>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="myList" href="/myList">
            <ion-icon :icon="heartOutline" />
            <ion-label>My Lists</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="home" href="/home">
            <ion-icon :icon="homeOutline" />
            <ion-label>Home</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="search" href="/search">
            <ion-icon :icon="searchOutline" />
            <ion-label>Search</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-page>
  </template>
  
  <script lang="ts">
    import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';
  
    import { heartOutline, homeOutline, searchOutline } from 'ionicons/icons';
  
    export default {
      components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
      data() {
        return {
          heartOutline,
          homeOutline,
          searchOutline,
        };
      },
    };
  </script>