document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("myModal");
    const closeicon = document.getElementsByClassName("modal-popup-content-close")[0];
    let popupClose = localStorage.getItem('popupclose') === 'true';
    let alreadyMem = localStorage.getItem('alreadymem') === 'true';

    // Only display the modal if the conditions are met
    if (!popupClose && !alreadyMem) {
        modal.style.display = "block";
    }

    closeicon.onclick = function() {
        modal.style.display = "none";
    }

    const btnDsn = document.querySelector("#btn-design");
    const thanks = document.querySelector("#thanks");

    btnDsn.addEventListener('click', function() {
        localStorage.setItem('popupclose', 'true');
        modal.style.display = "none";
    });

    thanks.addEventListener('click', function() {
        localStorage.setItem('alreadymem', 'true');
        modal.style.display = "none";
    });
});
