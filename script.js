

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


function page1(){
  window.addEventListener("load", () => {

  gsap.registerPlugin(SplitText);

  const tl = gsap.timeline({
    defaults:{ ease:"power4.out" }
  });

  /* ===== TITLE ===== */
  tl.to(".about_us_sec",{
    opacity:1,
    y:0,
    duration:1
  });

  /* ===== SPLIT HERO TEXT ===== */
  const split = new SplitText(".para1", {
    type:"lines",
    linesClass:"split-line"
  });

  split.lines.forEach(line=>{
    const mask = document.createElement("div");
    mask.classList.add("line-mask");
    line.parentNode.insertBefore(mask, line);
    mask.appendChild(line);
  });

  tl.to(".para1",{ opacity:1, duration:0.2 });

  tl.from(split.lines,{
    yPercent:120,
    duration:1.25,
    stagger:0.12
  },"-=0.4");

  /* ===== MUTED WORDS ===== */
  tl.from(".muted",{
    opacity:0,
    duration:1.1,
    stagger:0.08
  },"-=0.8");

  /* ===== BOTTOM TEXT ===== */
  tl.to(".bottom p",{
    opacity:1,
    y:0,
    duration:1.2,
    stagger:0.25
  },"-=0.5");

});
}

page1()