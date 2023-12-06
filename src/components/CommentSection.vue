<template>
  <div class="comment-section">
    <h2>Comments</h2>

    <ion-list>
      <ion-item v-for="comment in comments">
        <div class="header">
          <p class="author">{{ comment.author }}</p>
          <IonNote> {{ comment.timestamp }}</IonNote>
          <p class="comment-text">
            {{ comment.text }}
          </p>
        </div>
      </ion-item>
    </ion-list>

    <form class="textform" @submit.prevent="submitComment">
      <textarea
        placeholder="Leave a comment..."
        v-model="newComment"
      ></textarea>
      <ion-button type="submit">Submit</ion-button>
    </form>
  </div>
</template>

<script lang="ts">
import { IonNote, IonButton, IonDatetime } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      newComment: "",
      comments: [] as Array<{
        author: string;
        text: string;
        timestamp: string;
      }>, // Define the type for comments array
    };
  },
  methods: {
    submitComment() {
      if (this.newComment.trim()) {
        this.comments.push({
          author: "Current User",
          text: this.newComment,
          timestamp: new Date().toISOString(),
        });
        this.newComment = "";
        console.log("PRINTING A COMMENT");
      }
    },
  },
  components: { IonNote },
});
</script>

<style scoped>
.comment-section {
  padding: 16px;
  border-top: 1px solid #ddd;
}

.comment-section h2 {
  margin-bottom: 8px;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  margin-bottom: 8px;
}

strong {
  font-weight: bold;
}

.timestamp {
  color: gray;
  font-size: 12px;
}

textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
}

button {
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
}
.textform {
  margin-top: 20px;
}
.author {
  font-weight: bold;
}
</style>
