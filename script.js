"use strict";

const panes = document.querySelectorAll('.accordion-collapse');
const accBtns = document.querySelectorAll('.accordion-button');

accBtns.forEach((acc) => {
    acc.addEventListener("click", function () {
        const btn = this;
        const pane = document.getElementById(btn.dataset.bsTarget);

        panes.forEach(pane => {
            if (pane.id != btn.dataset.bsTarget) {
                pane.classList.remove("show");
            }
        });

        accBtns.forEach(button => {
            if (button.dataset.bsTarget != btn.dataset.bsTarget) {
                button.classList.remove("collapsed");
            }
        });

        if (pane.classList.contains('show')) {
            pane.classList.remove("show");
            btn.classList.remove('collapsed');
        }
        else {
            pane.classList.add("show");
            btn.classList.add('collapsed');
        }
    });
});
