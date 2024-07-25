document.addEventListener("DOMContentLoaded", function () {
    const accordionButtons = document.querySelectorAll(".cmp-accordion__button");
    const toggleButton = document.getElementById("toggleAccordion");
  
    if (toggleButton) {
      toggleButton.addEventListener("click", function () {
        const isExpanded = this.getAttribute("aria-expanded") === "true";
  
        accordionButtons.forEach((button) => {
          const item = button.closest(".cmp-accordion__item");
          const panel = item.querySelector(".cmp-accordion__panel");
  
          if (panel) {
            if (isExpanded) {
              button.setAttribute("aria-expanded", "false");
              button.classList.remove("cmp-accordion__button--expanded");
              panel.classList.remove("cmp-accordion__panel--expanded");
              panel.classList.add("cmp-accordion__panel--hidden");
              panel.setAttribute("aria-hidden", "true");
              /*panel.style.maxHeight = "0";*/
              item.removeAttribute("data-cmp-expanded");
            } else {
              button.setAttribute("aria-expanded", "true");
              button.classList.add("cmp-accordion__button--expanded");
              panel.classList.add("cmp-accordion__panel--expanded");
              panel.classList.remove("cmp-accordion__panel--hidden");
              panel.setAttribute("aria-hidden", "false");
              /*panel.style.maxHeight = panel.scrollHeight + "px";*/
              item.setAttribute("data-cmp-expanded", "");
            }
          }
        });
  
        this.setAttribute("aria-expanded", !isExpanded);
        this.textContent = isExpanded ? "Expand All" : "Collapse All";
      });
    }
  });