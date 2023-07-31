// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav ul li a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        const target = document.querySelector(link.getAttribute('href'));
        const headerOffset = 100; // Adjust this value to control the scroll offset
  
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition - headerOffset;
  
        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
        });
      });
    });
  });
  
  // Your other custom JavaScript code can go here
  
  // For example, you can add event listeners and functions for any interactive elements on your website.
  // You can also fetch data, create animations, or integrate other third-party libraries as needed.
  
  // Sample code for a "Contact Me" form submission using Fetch API:
  const contactForm = document.getElementById('contact-form');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
  
    const formData = new FormData(contactForm);
  
    fetch('contact.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message. Please try again later.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
  });