/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  ////////////////////////////////////////////////////////////////

  function typeWriter(element, text, speed) {
    let i = 0;
    const interval = setInterval(function() {
      element.innerHTML += text.charAt(i);
      i++;
      if (i === text.length) {
        clearInterval(interval);
      }
    }, speed);
  }
  
  const typewriterElement = document.getElementById('about');
  const text = typewriterElement.textContent;
  typewriterElement.textContent = '';
  typeWriter(typewriterElement, text, 50); // Adjust the speed as desired

  ////////////////////////////////////////////////////////////////

  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });
  
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });