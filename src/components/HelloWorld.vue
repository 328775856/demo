<template>
  <div class="hello">
    <!--<input v-model="item" @keyup.enter="enterin"/>-->
    <!--<div v-for="son in list" :key="son.id">-->
    <!--{{son}}-->
    <!--</div>-->
    <!--<a href="javascript:" @click="$store.dispatch('switchm')">点击</a>-->
    <!--<edialog></edialog>-->
    <audio-box>asdsa
    </audio-box>
    <button @click="sad">点击</button>
  </div>
</template>

<script>
  import Dialog from './edialog.vue'
  import AudioBox from './audio-box.vue'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        item: '',
        list: ['请输入第一个todo']
      }
    },
    components: {
      'edialog': Dialog,
      'audio-box': AudioBox
    },
    created() {
      // let data= '{ "msg": "success"}'
      let promise = new Promise(function (resolve, reject) {
        // resolve(JSON.parse(data).msg)
      })
      promise.then(function (data) {
        console.log(data)
        //  return 'asd'
      }, function (err) {
        console.log(err)
      }).then(function (data) {
        console.log('11' + data)
      }, function (err) {
        console.log(err)
      }).then(function (data) {
        console.log(data)
      }, function (err) {
        console.log(err)
      })
    },
    methods: {
      a() {
        this.$store.state.show = !this.$store.state.show
        // alert(this.$store.state.show)
      },
      enterin() {
        this.list.push(this.item)
        this.item = ''
      },
      sad() {
        // this.$store.commit('switch')
        this.$store.dispatch('switchm')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
