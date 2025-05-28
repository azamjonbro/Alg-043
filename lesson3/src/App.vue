// vueInit bu command barcha boshlang'ich 
// codelarni chiqairb berish uchun ishlatiladi
<template >
  <div>
    <Image v-for="data in 100" src="https://picsum.photos/id/220/290/290" alt="Bolalar hayolilarni bir joyga yigib otiriliar sizlar o'qish uchun dasturchi bolish uchun harakat qilyapsizlar" width="500" height="500" @menialdamelar="showEmits($event)"/>
    <!-- <Loading v-if="1=='1'"/>
    <Data v-else /> -->
    <!-- { data == true? <Script/> :<Loading/> } -->
    <div v-for="data in burgers">
      <h2>{{ data.name }}</h2>
    </div>
  </div>
</template>
<script>
// har doim codelar shu yerda chaqiriladi
import Image from "./Generic/Images/image.vue"

export default {
  data(){
    return{
      burgers:[
        {
          name:"burgername",
          img:"nimadir",
          alt:"nimadir",
          price:99,
          quantity:100
        }
      ]
    }
  },
  components:{
    Image,
  },
  methods: {
    showEmits(item){
      if(item.status==200){
        console.log(item.message);
        
      }
    }
  },
}
</script>
<style >
  
</style>