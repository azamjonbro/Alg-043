<template >
 <div>
  <router-link to="/datatype">Salom</router-link>
 </div>
</template>
<script>
export default {
 mounted(){
  console.log(this.$route?.params?.id); //optional chaining
 }
}
</script>
<style >
 
</style>