
document.addEventListener("DOMContentLoaded", function () {
  const listHeaders = document.querySelectorAll(".list h6");
  const lists = document.querySelectorAll(".list");

  listHeaders.forEach((header) => {
    const button = header.querySelector("button");
    if (button) {
      button.addEventListener("click", function () {
        // button.addEventListener("click", function() {
        //  event.stopPropagation();

        const parentList = this.closest(".list");

        if (parentList.classList.contains("active")) {
          parentList.classList.remove("active");
          this.classList.remove("rotated");
        } else {
          // lists.forEach(list => list.classList.remove("active"));
          //listHeaders.forEach(h => h.querySelector("button").classList.remove("rotated"));

          parentList.classList.add("active");
          this.classList.add("rotated");
        }
      });
    }
  });
});
