/* Simple local scroll-animation system (AOS-like) */
(function(){
  function onEntry(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
      }
    });
  }
  var observer = new IntersectionObserver(onEntry, {threshold: 0.12});
  document.querySelectorAll('[data-animate]').forEach(function(el){
    // allow custom delay
    var delay = el.getAttribute('data-delay');
    if(delay){
      el.style.transitionDelay = delay + 'ms';
    }
    observer.observe(el);
  });
})();

/* Optional: simple form submit UX (Formspree friendly) */
document.addEventListener('DOMContentLoaded', function(){
  var form = document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit', function(e){
    // let Formspree handle submission; show simple feedback
    var submit = form.querySelector('button[type="submit"]');
    if(submit){ submit.disabled = true; submit.textContent = 'Sending...' }
    // allow normal submit to proceed; cannot fetch cross-origin easily without endpoint
    setTimeout(function(){
      if(submit){ submit.disabled = false; submit.textContent = 'Send Message' }
    }, 2000);
  });
});
