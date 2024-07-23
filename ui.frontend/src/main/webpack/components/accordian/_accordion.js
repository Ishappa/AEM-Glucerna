// document.addEventListener("DOMContentLoaded", function () {
//   const accordionButtons = document.querySelectorAll(".cmp-accordion__button");
//   const toggleButton = document.getElementById("toggleAccordion");

//   if (accordionButtons.length > 0) {
//     accordionButtons.forEach((button) => {
//       button.addEventListener("click", function () {
//         const panel = this.closest(".cmp-accordion__item").querySelector(
//           ".cmp-accordion__panel"
//         );
//         const isExpanded = this.getAttribute("aria-expanded") === "true";

//         this.setAttribute("aria-expanded", !isExpanded);

//         if (isExpanded) {
//           panel.classList.remove("cmp-accordion__panel--expanded");
//           panel.style.maxHeight = "0";
//         } else {
//           panel.classList.add("cmp-accordion__panel--expanded");
//           panel.style.maxHeight = panel.scrollHeight + "px";
//         }
//       });
//     });
//   }

//   if (toggleButton) {
//     toggleButton.addEventListener("click", function () {
//       const isExpanded = this.getAttribute("aria-expanded") === "true";

//       accordionButtons.forEach((button) => {
//         const panel = button
//           .closest(".cmp-accordion__item")
//           .querySelector(".cmp-accordion__panel");

//         if (panel) {
//           if (isExpanded) {
//             button.setAttribute("aria-expanded", "false");
//             panel.classList.remove("cmp-accordion__panel--expanded");
//             panel.style.maxHeight = "0";
//           } else {
//             button.setAttribute("aria-expanded", "true");
//             panel.classList.add("cmp-accordion__panel--expanded");
//             panel.style.maxHeight = panel.scrollHeight + "px";
//           }
//         }
//       });

//       this.setAttribute("aria-expanded", !isExpanded);
//       this.textContent = isExpanded ? "Expand All" : "Collapse All";
//     });
//   }
// });






document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleAccordion");

  initializeAccordion();

  // if toggele button is not added to the accordion it will not call mutation api

  if (!toggleButton) {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          initializeAccordion(); // Reinitialize the accordion
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  } else {
    toggleButton.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true";
      const accordionButtons = document.querySelectorAll(".cmp-accordion__button");

      accordionButtons.forEach((button) => {
        const panel = button.closest(".cmp-accordion__item").querySelector(".cmp-accordion__panel");

        if (panel) {
          if (isExpanded) {
            button.setAttribute("aria-expanded", "false");
            panel.classList.remove("cmp-accordion__panel--expanded");
            panel.style.maxHeight = "0";
          } else {
            button.setAttribute("aria-expanded", "true");
            panel.classList.add("cmp-accordion__panel--expanded");
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        }
      });

      this.setAttribute("aria-expanded", !isExpanded);
      this.textContent = isExpanded ? "Expand All" : "Collapse All";
    });
  }
});

function initializeAccordion() {
  const accordionButtons = document.querySelectorAll(".cmp-accordion__button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const panel = this.closest(".cmp-accordion__item").querySelector(".cmp-accordion__panel");
      const isExpanded = this.getAttribute("aria-expanded") === "true";

      this.setAttribute("aria-expanded", !isExpanded);

      if (isExpanded) {
        panel.classList.remove("cmp-accordion__panel--expanded");
        panel.style.maxHeight = "0";
      } else {
        panel.classList.add("cmp-accordion__panel--expanded");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
}
