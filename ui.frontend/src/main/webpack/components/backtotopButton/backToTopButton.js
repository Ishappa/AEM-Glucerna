
const backtotop = document.getElementById('btn-link');
  
if(backtotop){
  backtotop.addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}