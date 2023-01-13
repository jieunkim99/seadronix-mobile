//let num = undefined;
//const pi = 10;

const btnAll = document.querySelector(".btn--all");
const header = document.querySelector(".header");
btnAll.addEventListener("click", function () {
  //console.log("btnAll 클릭");
  //header.classList.add("on");
  if (header.classList.contains("on")) {
    header.classList.remove("on");
  } else {
    header.classList.add("on");
  }
});
