var typed = new Typed(".text", {
    strings:["Front-End Developer" , "UI/UX Designer", "Cyber Security"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

const lines = document.querySelectorAll('.progress-line');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target); // animasi hanya sekali
    }
  });
}, {
  threshold: 0.5 // saat 50% terlihat
});

lines.forEach(line => {
  observer.observe(line);
});
