document.querySelector("#toggler").addEventListener("click", function () {
    document.querySelector("#nav_link ul").classList.toggle('showList');
  });
  let nav_items = document.querySelector(".nav_items");
  
  toggler.addEventListener("click", listDisplay);
  
  function listDisplay() {
    nav_items.classList.toggle('showList');
  }