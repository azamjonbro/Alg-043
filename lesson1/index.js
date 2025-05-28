// js data types:

// 1: String  => bu oddiy text matnlarni qabul qiluvchi data type hisoblanib
// "" , '', `` shu qo'shtirnoqlarga o'ralgan qiymat "1" => bu ham string

// 2: Number bu raqamlarni elon qiluvchi data type hisoblanib uni chgarasi
// 2ni 53 darajasini -1 ga teng undan uyog'i BigIntiger yani (BigInt) hisoblanadi

// new BigInt() kelayotgan dinamik raqamlarni ustida amal bajarish uchun big intga orab olamiz qachonki raqamlar 16 honadan kattaroq bo'lib ketsa

// 3: BigInt bu 16 honadan va 2ni 53chi darajasini -1 dan katta sonlar uchun ishlab chiqarilgan data type hisoblanadi

// 4: Boolean bu har qanday truethy yoki falthy qiymatlarni asosi hisoblanadi va u rost yoki yolg'onligini bildirib turadi

// 5: Null => bo'sh object bo'lib uni  typeof ham object uni key valuesi yani qiymati bo'lmagani uchun null hisoblanadi

// 6: undefined => bo'sh qiymat  har qanday o'zgaruvchiga qiymat berilmasa bo'sh qiymat yani (undefined hisoblanadi)

// 7: Symbol bu Heap hotiraga saqlanadigan  malumot turi hisoblanib uni manzili boshqa joy bolgani uchun unique malumot turi hisoblanadi


// non-primitive data type:
// 8: Object -> bu o'ziga key va valuni saqlab oluvchi data type

// jsda  malumotlarni import qilishni ikki hil usuli bor

// commonJs -> bu es5 gacha ishlatilgan ammo back end da haligacha ishlatilayotgan js type

// module bu esa es6 da qo'shilgan type hisoblanadi

// import fileName from "" // bu module orqali yuklash
// commonjs esa bizda
require("dotenv").config()

console.log(process.env.API_URL)


