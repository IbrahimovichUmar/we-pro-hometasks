let img = document.getElementById("phoneImg");
let btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.onclick = () => {
    if (btn.innerText === "mid") {
      img.setAttribute("src", "./midnight.png");
    } else if (btn.innerText === "pink") {
      img.setAttribute("src", "./pink.png");
    } else if (btn.innerText === "aqua") {
      img.setAttribute("src", "./aqua.png");
    } else {
      img.setAttribute("src", "./grey.png");
    }
  };
});
