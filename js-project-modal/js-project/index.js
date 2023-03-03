let doc = document;

let btn1 = doc.querySelector(".first");
let btn2 = doc.querySelector(".second");
let img = doc.querySelector(".laptop");
let changable_text = doc.querySelector(".changable_text");

let img2 = "./imgs/gray.png";
let img1 = "./imgs/white.png";

let change_img1 = () => {
  img.src = img1;
  changable_text.textContent = "White";
};

let change_img2 = () => {
  img.src = img2;
  changable_text.textContent = "Space Gray";
};

btn1.addEventListener("click", change_img1);
btn2.addEventListener("click", change_img2);

let body = doc.body;
let modal_open = doc.querySelector(".modal_open");
let modal_window = doc.querySelector(".modal_background");
let modal_close = doc.querySelector(".modal_close");

let modal = () => {
  modal_window.classList.toggle("not_active");
  body.style.overflow = "hidden";
};

modal_open.addEventListener("dblclick", modal);
let modal2 = () => {
  modal_window.classList.toggle("not_active");
  body.style.overflow = "auto";
};

modal_close.addEventListener("click", () => {
  modal_window.style.display = "none";
});
