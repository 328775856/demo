<template>
  <div class="container flex-col">
    <div class="input">
      <input type="text" placeholder="查询天气" v-model="city" @focus='focus'>
      <div>
        <button  @click="show">确定</button>
      </div>
    </div>
    <table>
        <tr>
          <td>城市</td>
          <td id="date">日期</td>
          <td>星期</td>
          <td>天气</td>
          <td>平均温度</td>
          <td>最高温度</td>
          <td>最低温度</td>
        </tr>
        <tr>
          <td>{{data.city}}</td>
          <td>{{data.date}}</td>
          <td>{{data.week}}</td>
          <td>{{data.weather}}</td>
          <td>{{data.temp}}</td>
          <td>{{data.temphigh}}</td>
          <td>{{data.templow}}</td>
        </tr>
    </table>
  </div>
</template>

<script>
    export default {
        name: "App",
      data () {
          return {
            city: '',
            data: ''
          }
      },
      methods: {
          show() {
            this.axios.get(`https://bird.ioliu.cn/weather`, {
                params: {
                  city: this.city
                }
            }
            ).then((res) => {
              if (res.data.status === '0') {
                this.data = res.data.result
              }
            })
          },
        focus(e) {
            e.currentTarget.className = 'active'
        }
      }
    }
</script>

<style scoped>
  #date{
    padding: 10px 80px;
  }
  .active{
    border: 1px solid lightblue;
  }
  .container{
    width: 100%;
    height:auto;
  }
  .input{
  }
  .flex-row{
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }
  .flex-col{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  button{
    margin: 0 auto;
    border:0;
    background: lightblue
  }
  table{
    text-align: center;
  }
  td{
    padding: 10px 20px;
  }
</style>
