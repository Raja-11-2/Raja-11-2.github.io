// Basic GSAP intro animations + clock widget
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // Intro
  gsap.from('.hero-title',{y:30,opacity:0,duration:1.0,ease:'power3.out'});
  gsap.from('.hero-sub',{y:20,opacity:0,duration:1,delay:0.12});
  gsap.from('.cards-grid .card',{y:20,opacity:0,stagger:0.12,duration:0.7,scrollTrigger:{trigger:'.cards-grid',start:'top 85%'}});

  // subtle parallax for hero glow on mouse move (desktop)
  const glow = document.querySelector('.hero-glow');
  if (glow && window.innerWidth > 720) {
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      glow.style.transform = `translate(${x}px, ${y}px) scale(1)`;
    });
  }

  // Live clock widget (local time)
  const clockEl = document.getElementById('clock');
  if (clockEl) {
    function updateClock(){
      const d = new Date();
      const hh = String(d.getHours()).padStart(2,'0');
      const mm = String(d.getMinutes()).padStart(2,'0');
      clockEl.textContent = `${hh}:${mm}`;
    }
    updateClock();
    setInterval(updateClock, 1000*30);
  }
});
