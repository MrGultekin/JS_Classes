/*
  WRITE YOUR SOLUTION HERE
*/
import {menu} from "./menu.js";


// const isVegetarian = (arg) => {
//   return menu.filter((dish) => dish.isVegetarian === arg);
//
// };
// console.log(isVegetarian(true));
// console.log(isVegetarian(false));


const isVegetarian = (arg) => {
    const portionWithOption = menu.filter((dish) => dish.isVegetarian === arg);
    const ulEl = document.querySelector("#menu");
    console.log(portionWithOption)
    portionWithOption.map((dish, i) =>{
        let dishLi = document.createElement('li')
        dishLi.textContent = dish.name;
        ulEl.appendChild(dishLi)
    })

};



isVegetarian(false)
// isVegetarian(true)

// console.log(menu)