<template>
  <div>
    <input v-model="username" placeholder="Ismingizni kiriting" />
    <p v-if="isTooLong" style="color: red">
      Ism 10 tadan oshmasligi kerak!
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ''
    }
  },
  computed: {
    // computed bu ekrandagi qiymatlarni aniq bir o'zgarish qilinganida ishga tushruriladigan funksiya hisoblanib odatda buda faqat summalar yoki qiymatlarning uzunligiga yoki qiymatiga oid funksiyalar yoziladi.
    // computed orqali uzunlikni tekshiramiz
    isTooLong() {
      return this.username.length > 10
    }
  },
  watch: {
    // watch orqali o'zgarishni kuzatamiz
    username(newVal, oldVal) {
      if (newVal.length > 10) {
        alert("Ism juda uzun:", newVal)
       this.username= newVal.slice(0,10)
        // Istasangiz avtomatik kesishingiz ham mumkin:
        // this.username = newVal.slice(0, 10)
      }
    }
  }
}
</script>
