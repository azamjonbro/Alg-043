<template >
 <img :src="src" @click="click"  :alt="alt" loading="lazy" :aria-label="alt" :width="width" :height="height" >
 <!-- `${}` -> : -->
 <!-- let atr = event.target.domAttribute  -->
 <!-- atr.indexOf(0)==":" -->
 <!-- `${dynamic qiymat}` -->
</template>
<script>
export default {
 components:{

 },
 props:{
  // tekshiruv yozib qoyishimiz kerak sababi bu yerda bizga kelgan qiymat qanday korinishdaligini bilib olishimiz uchun 
  src:{
   type:String, // typy bu bizga keladigan qiymatlarni qaysi data typedaligini korsatib beradi
   default:"https://picsum.photos/id/320/290/290" // default esa bizga kelgan rasm mabodo nullish yani qiymat bo'lmay qolsa ishlatiladi


  },
  width:{
   type:String,
   // required:true, //  bu mabodo qiymat kelmay qolsa tasdiqlashni kutadi
  },
  height:{
   type:String, //typeof Math.abs(-1).indexOf(0).toUpperCase()
  },
  alt:{
   type:String, //typeof "".indexOf(0).toUpperCase() -> String
   default:"Hello world !"
  }
 },
 methods:{
  click(){
   this.$emit("rasmbosish",{
    message:"Bosildi",
    status:201,
    summa:5000
   })
   // emit ham oziga ikkita qiymat oladi 
   //1: bu kutilayotgan nom
   //2: bu value
   
  }
 }
}
</script>
<style>
 
</style>