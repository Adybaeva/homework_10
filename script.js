const accordion = document.getElementsByClassName("contentBox");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

// accordion.forEach((item) => {
//   item.addEventListener("click", () => {
//     this.classList.toggle("active");
//   });
// });
