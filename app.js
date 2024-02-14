let title = document.getElementById("title");
let btn1 = document.querySelector(".btn");
let name1 = document.getElementById("i1");
let name2 = document.getElementById("i2");
let text;
let x = Math.floor(Math.random() * 100 + 1);
btn1.addEventListener("click", () => {
  title.innerText = "Love-Percentage" + " " + (x + "%");
  btn1(disable);
 
  
});

