<template>
  <div>
    <TopBar></TopBar>
  </div>
  <div>
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  </div>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import Tabs from './components/Tabs.vue';

export default defineComponent({
  name: 'App',
  components: { IonApp, IonRouterOutlet },
});
</script>

