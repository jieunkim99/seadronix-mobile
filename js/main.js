// function average(a, b) {
//   const avg = (a + b) / 2;
//   console.log(avg);
// }
//average(76, 56);
//average(90, 80);

const btnAll = document.querySelector(".btn--all");
const header = document.querySelector(".header");
const depth01 = document.querySelectorAll(".gnb > .list > li > a");
const depth02 = document.querySelectorAll(".gnb > .list > li .depth02");
console.log("π ~ file: main.js:12 ~ depth02", depth02);
console.log("π ~ file: main.js:11 ~ depth01", depth01);
const animals = ["κ°μμ§", "λ§μμ§", "μ‘μμ§", "λ³μλ¦¬", "κ³ μμ΄", "νΈλμ΄"];
const depth01Total = depth01.length;
const depth02Total = depth02.length;
for (let i = 0; i < depth01Total; i++) {
  depth01[i].addEventListener("click", function (e) {
    e.preventDefault();
    for (let j = 0; j < depth02Total; j++) {
      depth02[j].classList.remove("on");
    }
    depth02[i].classList.add("on");
  });
}

btnAll.addEventListener("click", function () {
  //console.log("btnAll ν΄λ¦­");
  //header.classList.add("on");
  if (header.classList.contains("on")) {
    header.classList.remove("on");
  } else {
    header.classList.add("on");
  }
  //header.classList.toggle("on");
});

new Swiper(".visual__list", {
  //slide,cube,fade,
  effect: "slide",
  pagination: {
    el: ".visual__list .pagination",
    type: "bullets",
  },
});
