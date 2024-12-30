// Toggle class active untuk open first

/* const hro = document.querySelector('.hero');
const tombol = document.querySelector(".hero a");
const klikTombol = document.querySelector(".hero a");

consol.log(tombol.style);

klikTombol.addEventListener("click", () => {
  hro.style.animation = "slide-out-elliptic-top-bck 2s ease-in forwards";
});
*/

const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const hr = document.querySelector(".hero");
const bd = document.querySelector(".home");

console.log(box1.style);
console.log(box2.style);
console.log(hr.style);
console.log(bd.style);

box1.style.backgroundColor = "green";

console.log(box1.style);
console.log(box2.style);
console.log(hr.style);
console.log(bd.style);

box1.style.backgroundColor = "";

const selectBox1Btn = document.querySelector("#select-box1");
const selectBox2Btn = document.querySelector("#select-box2");
const selectHero = document.querySelector(".hero");
const selectBody = document.querySelector(".home");

selectBox1Btn.addEventListener("click", () => {
  box2.style.transform = "4px dashed pink";
  box2.style.border = "";
  box1.style.transform = "scale(1.05)";
  box1.style.border = "14px dashed pink";
  hr.style.transform = "translateY(-250px)";
  hr.style.animation = "slide-out-elliptic-top-bck 2s ease-in forwards";
  bd.style.float = "top";
});

selectBox2Btn.addEventListener("click", () => {
  box1.style.transform = "";
  box1.style.border = "";
  hr.style.transform = "";
  box2.style.transform = "scale(1.05)";
  box2.style.border = "14px dashed black";
});
