const categoriesList = document.querySelector(".categories");
const items = categories.querySelectorAll(".item");

   console.log(`Number of categories: ${items.length}`);


   items.forEach(name => {
    console.log(`Category: ${name.querySelector('h2').textContent}`);
    console.log(`Elements: ${name.querySelectorAll('li').length}`);

   })
   