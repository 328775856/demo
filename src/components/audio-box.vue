<template>
  <div class="audio">
    <slot></slot>
    <!--<video-player class="video-player vjs-custom-skin"-->
    <!--ref="videoPlayer"-->
    <!--:playsinline="true"-->
    <!--:options="playerOptions"-->
    <!--&gt;</video-player>-->
    <audio controls>
      <source src="viper.mp3" type="audio/mp3">
      <source src="viper.ogg" type="audio/ogg">
      <p>Your browser doesn't support HTML5 audio. Here is a <a href="viper.mp3">link to the audio</a> instead.</p>
    </audio>
    <button @click="hc">触发</button>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "audio",
    data() {
      return {
        playerOptions: {
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          autoplay: false,
          muted: false,
          loop: false,
          preload: 'auto',
          language: 'zh-CN',
          aspectRatio: '16:9',
          fluid: true,
          sources: [{
            type: 'video/mp4'
            // src: 'rabbit320.webm'
            // src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
          }],
          poster: '../../static/images/test.jpg',
          notSupportedMessage: '此视频暂无法播放，请稍后再试',
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: true
          }
        }
      }
    },
    created() {
    },
    computed: {
      ...mapState([
        'ss'
      ])
    },
    methods: {
      hc() {
        alert(this.ss)
        this.$store.commit('switch')
      }
    }
  }
</script>

<style scoped>
  .audio {
  }

  .video-js .vjs-big-play-button {
  }
</style>
