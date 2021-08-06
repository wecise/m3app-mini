<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>App List From M³</h3>
    <ul style="display:flex;flex-wrap:wrap;">
      <li :key="index" v-for="(app,index) in appList" style="margin:5px;">
          <el-button type="default">{{ app.cnname }}</el-button>
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
      this.m3.callFS("/matrix/m3app-mini/appList.js",null).then(res=>{
        this.appList = res.message.list;
      })
      /* let param = encodeURIComponent( JSON.stringify({action:'r',param:null}) );
      this.m3.callFS("/chenq/userApi.js",param).then(res=>{
        console.log(res);
        this.appList = res.message.data;
      }) */
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
