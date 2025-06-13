<template>
  <div class="home">
    <div class="navbar" style="display: flex; gap: 20px; flex-wrap: wrap;">
      <h2 style="text-transform: capitalize;" v-for="category in uniqueCategories" :key="category"
        @click="createCategory(category)">{{ category }}  |   </h2>
    </div>
    <div class="product-list" style="display: flex; flex-wrap: wrap; gap: 30px;">
      <div class="product" v-for="item in products" v-show="item.categories==defaultCategory" style="width: 300px; display: flex; flex-direction: column; gap: 20px;">
        <div class="imgbox">
          <img :src="item.image" :alt="item.title">
        </div>
        <div class="textbox">
          <h2>{{item.title}}</h2>
          <p>{{item.description}}</p>
          <div class="pricebox" style="display: flex; flex-direction: column; gap: 10px; ">
            <del>{{item.oldPrice}} $</del>
            <b>{{item.salePrice}} $</b>
          </div>
          <div class="buttonbox">
            <button>Add to cart</button>
            <button>Buy now</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      defaultCategory: "phone",
      products: [
        {
          id: 1,
          title: "iPhone 16 Pro Max",
          image: "https://picsum.photos/id/290/300/300",
          description:
            "Yangi iPhone 16 Pro Max, kuchli chip va professional kamera bilan jihozlangan.",
          oldPrice: 1540,
          salePrice: 999,
          rate: 4.9,
          categories: "phone",
        },
        {
          id: 2,
          title: "Samsung Galaxy S24 Ultra",
          image: "https://picsum.photos/id/291/300/300",
          description:
            "Eng ilg‘or Android telefon, 200MP kamera va AI funksiyalari bilan.",
          oldPrice: 1400,
          salePrice: 1100,
          rate: 4.8,
          categories: "phone",
        },
        {
          id: 3,
          title: "Dell XPS 15",
          image: "https://picsum.photos/id/292/300/300",
          description:
            "Ishonchli va kuchli laptop dizaynerlar va dasturchilar uchun.",
          oldPrice: 2200,
          salePrice: 1800,
          rate: 4.7,
          categories: "laptop",
        },
        {
          id: 4,
          title: "Sony WH-1000XM5",
          image: "https://picsum.photos/id/293/300/300",
          description:
            "Faol shovqinni bostirish texnologiyasi bilan zamonaviy quloqchinlar.",
          oldPrice: 500,
          salePrice: 420,
          rate: 4.9,
          categories: "headphones",
        },
        {
          id: 5,
          title: "Canon EOS R8",
          image: "https://picsum.photos/id/294/300/300",
          description:
            "Professional darajadagi mirrorless kamera, 4K video va 24MP suratga olish.",
          oldPrice: 1800,
          salePrice: 1500,
          rate: 4.6,
          categories: "camera",
        },
        {
          id: 6,
          title: "Apple Watch Ultra 2",
          image: "https://picsum.photos/id/295/300/300",
          description:
            "Sportchilar uchun maxsus mo‘ljallangan bardoshli aqlli soat.",
          oldPrice: 899,
          salePrice: 799,
          rate: 4.8,
          categories: "smartwatch",
        },
        {
          id: 7,
          title: "iPad Pro M2",
          image: "https://picsum.photos/id/296/300/300",
          description:
            "Grafik ishlar va notetaking uchun ideal planshet, kuchli M2 chip bilan.",
          oldPrice: 1300,
          salePrice: 1150,
          rate: 4.7,
          categories: "tablet",
        },
        {
          id: 8,
          title: "DJI Mini 3 Pro",
          image: "https://picsum.photos/id/297/300/300",
          description:
            "Yengil va portativ dron, yuqori sifatli video olish imkoniyati bilan.",
          oldPrice: 800,
          salePrice: 699,
          rate: 4.8,
          categories: "drone",
        },
        {
          id: 9,
          title: "Logitech MX Master 3S",
          image: "https://picsum.photos/id/298/300/300",
          description: "Ergonomik dizayn va aniqligi bilan mashhur sichqoncha.",
          oldPrice: 120,
          salePrice: 99,
          rate: 4.9,
          categories: "accessory",
        },
        {
          id: 10,
          title: "Bose SoundLink Flex",
          image: "https://picsum.photos/id/299/300/300",
          description:
            "Portativ va suvga chidamli bluetooth karnay, tiniq ovoz sifati bilan.",
          oldPrice: 180,
          salePrice: 150,
          rate: 4.6,
          categories: "speaker",
        },
        {
          id: 11,
          title: "Razer Blade 16",
          image: "https://picsum.photos/id/300/300/300",
          description: "Gamerlar uchun kuchli va yuqori tezlikka ega noutbuk.",
          oldPrice: 2700,
          salePrice: 2400,
          rate: 4.7,
          categories: "laptop",
        },
        {
          id: 12,
          title: "Samsung Galaxy Tab S9",
          image: "https://picsum.photos/id/301/300/300",
          description:
            "Yirik ekran va S Pen bilan qulay ishlash uchun planshet.",
          oldPrice: 999,
          salePrice: 849,
          rate: 4.6,
          categories: "tablet",
        },
        {
          id: 13,
          title: "GoPro Hero12 Black",
          image: "https://picsum.photos/id/302/300/300",
          description:
            "Ekstremal sharoitlar uchun mo‘ljallangan action kamera.",
          oldPrice: 500,
          salePrice: 429,
          rate: 4.8,
          categories: "camera",
        },
        {
          id: 14,
          title: "Asus ROG Phone 7",
          image: "https://picsum.photos/id/303/300/300",
          description: "Gamerlar uchun ishlab chiqilgan kuchli mobil telefon.",
          oldPrice: 1300,
          salePrice: 1149,
          rate: 4.7,
          categories: "phone",
        },
        {
          id: 15,
          title: "Beats Studio Buds+",
          image: "https://picsum.photos/id/304/300/300",
          description: "Apple ekotizimi uchun mos, kompak va sifatli naushnik.",
          oldPrice: 200,
          salePrice: 159,
          rate: 4.5,
          categories: "headphones",
        },
        {
          id: 16,
          title: "Garmin Fenix 7",
          image: "https://picsum.photos/id/305/300/300",
          description:
            "Professional sportchilar uchun GPS soat, uzoq batareya bilan.",
          oldPrice: 950,
          salePrice: 879,
          rate: 4.9,
          categories: "smartwatch",
        },
        {
          id: 17,
          title: "Lenovo Legion 5 Pro",
          image: "https://picsum.photos/id/306/300/300",
          description: "O‘yinlar va og‘ir dasturlar uchun kuchli notebook.",
          oldPrice: 1900,
          salePrice: 1600,
          rate: 4.6,
          categories: "laptop",
        },
        {
          id: 18,
          title: "Kindle Paperwhite",
          image: "https://picsum.photos/id/307/300/300",
          description:
            "Elektron kitob o‘quvchi, ko‘zga zarar yetkazmaydigan ekran bilan.",
          oldPrice: 150,
          salePrice: 119,
          rate: 4.8,
          categories: "ebook",
        },
        {
          id: 19,
          title: "Anker PowerCore 20000",
          image: "https://picsum.photos/id/308/300/300",
          description:
            "Ko‘p marta zaryadlash imkonini beruvchi kuchli powerbank.",
          oldPrice: 80,
          salePrice: 65,
          rate: 4.7,
          categories: "accessory",
        },
        {
          id: 20,
          title: "LG UltraFine 5K Monitor",
          image: "https://picsum.photos/id/309/300/300",
          description:
            "Grafik dizayn uchun yuqori aniqlikdagi professional monitor.",
          oldPrice: 1400,
          salePrice: 1200,
          rate: 4.9,
          categories: "monitor",
        },
        {
          id: 1,
          title: "LG Inverter Refrigerator",
          image: "https://picsum.photos/id/310/300/300",
          description: "Energy-efficient modern fridge with large capacity.",
          oldPrice: 950,
          salePrice: 799,
          rate: 4.8,
          categories: "refrigerator"
        },
        {
          id: 2,
          title: "Samsung Air Conditioner 2HP",
          image: "https://picsum.photos/id/311/300/300",
          description: "Fast cooling and heating functions with smart control.",
          oldPrice: 1200,
          salePrice: 999,
          rate: 4.7,
          categories: "air conditioner"
        },
        {
          id: 3,
          title: "Bosch Washing Machine",
          image: "https://picsum.photos/id/312/300/300",
          description: "Silent and energy-saving automatic washing machine.",
          oldPrice: 1100,
          salePrice: 930,
          rate: 4.6,
          categories: "washing machine"
        },
        {
          id: 4,
          title: "Philips ProMix Blender",
          image: "https://picsum.photos/id/313/300/300",
          description: "Powerful motor with multi-function crushing options.",
          oldPrice: 150,
          salePrice: 120,
          rate: 4.5,
          categories: "blender"
        },
        {
          id: 5,
          title: "Xiaomi Robot Vacuum Cleaner",
          image: "https://picsum.photos/id/314/300/300",
          description: "Smart mapping, auto-cleaning, and Wi-Fi control.",
          oldPrice: 450,
          salePrice: 379,
          rate: 4.9,
          categories: "robot vacuum"
        },
        {
          id: 6,
          title: "Panasonic Microwave Oven",
          image: "https://picsum.photos/id/315/300/300",
          description: "Inverter technology for even heating and defrosting.",
          oldPrice: 300,
          salePrice: 259,
          rate: 4.7,
          categories: "microwave"
        },
        {
          id: 7,
          title: "Tefal Electric Kettle",
          image: "https://picsum.photos/id/316/300/300",
          description: "Modern design with fast heating and auto shut-off.",
          oldPrice: 70,
          salePrice: 55,
          rate: 4.6,
          categories: "electric kettle"
        },
        {
          id: 8,
          title: "Delonghi Coffee Machine",
          image: "https://picsum.photos/id/317/300/300",
          description: "Perfect for espresso and cappuccino lovers.",
          oldPrice: 400,
          salePrice: 350,
          rate: 4.8,
          categories: "coffee machine"
        },
        {
          id: 9,
          title: "Midea 4-Burner Gas Stove",
          image: "https://picsum.photos/id/318/300/300",
          description: "Modern gas stove for efficient cooking.",
          oldPrice: 600,
          salePrice: 520,
          rate: 4.5,
          categories: "gas stove"
        },
        {
          id: 10,
          title: "Philips OptimalTEMP Iron",
          image: "https://picsum.photos/id/319/300/300",
          description: "Safe ironing with automatic temperature control.",
          oldPrice: 160,
          salePrice: 130,
          rate: 4.7,
          categories: "iron"
        },
        {
          id: 11,
          title: "Ariston Water Heater 50L",
          image: "https://picsum.photos/id/320/300/300",
          description: "Ideal for winter with reliable hot water supply.",
          oldPrice: 250,
          salePrice: 199,
          rate: 4.6,
          categories: "water heater"
        },
        {
          id: 12,
          title: "Vitek Electric Oven",
          image: "https://picsum.photos/id/321/300/300",
          description: "Multifunction oven for baking and roasting.",
          oldPrice: 210,
          salePrice: 180,
          rate: 4.5,
          categories: "electric oven"
        },
        {
          id: 13,
          title: "Rowenta Hair Dryer",
          image: "https://picsum.photos/id/322/300/300",
          description: "Ionic technology for soft and shiny hair.",
          oldPrice: 90,
          salePrice: 75,
          rate: 4.6,
          categories: "hair dryer"
        },
      ],
    };


  },
  computed: {
    uniqueCategories() {
      const categories = this.products.map(p => p.categories);
      return [...new Set(categories)];
    }
  },
  methods: {
    createCategory(item) {
      this.defaultCategory = item
      console.log(this.defaultCategory);

    }
  },
};
</script>
<style></style>
