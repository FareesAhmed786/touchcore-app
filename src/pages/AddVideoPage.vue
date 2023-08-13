<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>Add Video</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-card max-width="500">
          <v-card-item>
            <video id="video" width="480" height="240" ref="videoPlayer" controls="controls" v-if="file!==''">
              <source
                  src={{file}}
                  type="video/mp4"
              />
            </video>
            <v-file-input
                label="Video input"
                id="video_file"
                variant="outlined"
                show-size
                prepend-icon=""
                style="margin-top: 10px"
                ref="videoFileInput"
                @change="previewFiles"
            ></v-file-input>
            <v-btn variant="outlined" @click="uploadVideos">
              Upload
            </v-btn>
          </v-card-item>
        </v-card>

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "AddVideoPage",
  data() {
    return {
      file: ''
    }
  },
  methods: {
    previewFiles() {
      let v_file = this.$refs.videoFileInput.files[0];
      console.log(v_file)
      let path = URL.createObjectURL(v_file);
      console.log(path);
      this.file = path.toString() ?? ""
    },
    uploadVideos() {
      let formData = new FormData();
      let videoFile = document.querySelector('#video_file');
      this.file = videoFile.files[0];
      console.log(videoFile.files)
      formData.append('video_file', this.file);
      console.log(formData);

      axios.post('http://localhost:5000/upload',
          formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
      ).then(function () {
        console.log('SUCCESS!!');
        this.$router.push({name: "HomePage", replace: true});
      }).catch(function () {
        console.log('FAILURE!!');
      });
    },
  },
}
</script>

<style scoped>

</style>