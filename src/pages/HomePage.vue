<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>Home Page</v-app-bar-title>
      <v-btn variant="outlined" @click="goToVideos">
        Add
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <h3>Videos</h3>
        <v-row>
          <v-col v-for="video in videos" :key="video.id" cols="3">
            <v-sheet
                color="grey-lighten-2"
                height="96"
            >
              <a :href="video.video_path" target="_blank">
                {{ video.video_filename }}
              </a>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: "HomePage",
  components: {},
  data() {
    return {
      videos: []
    };
  },
  mounted() {
    this.getVideos();
  },
  methods: {
    getVideos() {
      axios.get('http://127.0.0.1:5000/videos').then(response => {
        this.videos = response.data;
      });
    },
    goToVideos() {
      this.$router.push({name: "AddVideoPage", replace: true});
    },
  },
};
</script>

<style scoped>

</style>