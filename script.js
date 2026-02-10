const btn = document.getElementById("menuBtn");
const overlay = document.getElementById("menuOverlay");

let isOpen = false;

function openMenu(){

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";

  gsap.fromTo(".nav-links li",
    { y:40, opacity:0 },
    {
      y:0,
      opacity:1,
      stagger:0.1,
      duration:0.6,
      ease:"power3.out"
    }
  );
}

function closeMenu(){

  overlay.classList.remove("active");
  document.body.style.overflow = "auto";
}


btn.addEventListener("click",()=>{

  isOpen = !isOpen;
  btn.classList.toggle("active");

  if(isOpen){
    openMenu();
  } else {
    closeMenu();
  }

});
