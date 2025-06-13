<template>
  <div id="app">
    <Navbar :logo="logo" :count="count" title="Bu bizning birinchi web sahifamiz"/>
    <h1>My Vue App</h1>
    <p>This is a simple Vue.js application.</p>

    <p>Count {{count}}</p>

    <button @click="add">Add</button>
    <button @click="remove">Remove</button>
    <button>Reset</button>
  </div>
</template>

<script>
  // bu yerda biz boshqa componentlarimizni import qilib ulardan foydalanamiz
  import Navbar from './components/Navbar.vue';
  export default {
    name:"AppPage",
    components:{
      Navbar
    },
    data(){
      return{
        logo:"My first Vue App",
        count:0
      }
    },
    methods:{
      add(){
        this.count++
      },
      remove(){
        this.count--
      }
    }
  }
</script>