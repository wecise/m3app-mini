<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>App List From M³</h3>
    <ul>
      <li :key="index" v-for="(app,index) in appList">
          <a href="https://router.vuejs.org" target="_blank" rel="noopener">{{ app.cnname }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      appList: null
    }
  },
  created(){
    this.callAppList();
  },
  methods:{
    callAppList(){
      this.m3.callFS("/matrix/apps/appList.js",null).then(res=>{
        this.appList = res.message.list;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
