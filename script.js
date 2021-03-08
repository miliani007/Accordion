"use strict";

let accSelect = document.querySelectorAll(".accordion-button");

accSelect.forEach((acc) => {
  //console.log(acc);
  acc.addEventListener("click", function () {
    let self = this;
    if (!self.classList.contains("collapsed", "show")) {
      let oldTab = document.querySelector("button");
      let oldPane = document.querySelector(oldTab.dataset.bsTarget);
      let newPane = document.querySelector(self.dataset.bsTarget);

      oldTab.classList.add("collapsed");
      oldPane.classList.remove("show");
      newPane.classList.add("show");
      self.classList.add("collapsed");
    } else {
      let oldTab = document.querySelector("button");
      let oldPane = document.querySelector(oldTab.dataset.bsTarget);
      let newPane = document.querySelector(self.dataset.bsTarget);

      oldTab.classList.remove("collapsed");
      oldPane.classList.add("show");
      newPane.classList.remove("show");
      self.classList.remove("collapsed");
    }
  });
});
