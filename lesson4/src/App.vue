<template >
  <div>
      <h2>{{ counter }}</h2>
      <button @click="click">Add</button>

      <form >
        <input type="text"  v-model="name" placeholder="Ismingizni kiriting">
        <button type="button" @click="SaveName">Send</button>
      </form>
  </div>
</template>
<script>
export default {
  data(){
    return{
      counter:0,
      name:""
    }
  },
  methods:{
    click(){
      this.counter++
      localStorage.setItem("counter",JSON.stringify(this.counter))
    },
    SaveName(){
      localStorage.setItem("name",JSON.stringify(this.name))
    }
    
  },
  mounted(){
    this.counter=JSON.parse(localStorage.getItem('counter'))
    this.name=JSON.parse(localStorage.getItem("name")??"")
  }
}
</script>
<style >
  
</style>