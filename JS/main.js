console.log('hello');

//2.যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। 
const allH2 = document.querySelectorAll('h2');
for (const h2 of allH2) {
    h2.style.color = 'lightblue';
}

//3.ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 

const backpackColor = document.getElementById('backpack');
backpackColor.style.backgroundColor = 'tomato';