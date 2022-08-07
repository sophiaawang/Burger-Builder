"use strict";

const toppings = document.querySelectorAll(".topping");
const checkoutButton = document.querySelector("#checkout");
const totalDiv = document.querySelector("#total");
const navToppings = document.querySelectorAll("#nav .topping");
const orderDiv = document.querySelector(".order");
const orderedToppings = document.querySelectorAll(".order .topping");

toppings.forEach((topping) => {
  topping.addEventListener("click", () => {
    console.log(topping.dataset);
  });
});

checkoutButton.addEventListener("click", (e) => {
  const toppingDivs = document.querySelectorAll(".order .topping");
  let total = 0.00;
  for (let toppingDiv of toppingDivs) {
    let price = toppingDiv.dataset.price;
    total += Number(price);
  }
  totalDiv.innerHTML = `The total is: $${total}`;
  totalDiv.classList.remove("hidden");
});

for (let topping of navToppings) {
  let toppingName = topping.dataset.ingredient;
  let name = toppingName.charAt(0).toUpperCase() + toppingName.slice(1);
  topping.addEventListener("click", (e) => {
    let toppingPrice = topping.dataset.price;
    let newToppingDiv = `<div id="${toppingName}" class="topping ${toppingName}" data-ingredient="${toppingName}" data-price="${toppingPrice}">
        ${name} $${toppingPrice} </div>`;
    orderDiv.innerHTML += newToppingDiv;
    remove();
  });
}

remove();
function remove() {
  const orderedToppings = document.querySelectorAll(".order .topping");
  for (let topping of orderedToppings) {
    topping.addEventListener("click", (e) => {
      topping.remove();
    });
  }
}