
// Event listener to run code when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select the h1 element within the hero-section class
  const h1Element = document.querySelector('.hero-section .h1');

  // Create an IntersectionObserver instance
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // Check if the h1 element is intersecting the viewport
      if (entry.isIntersecting) {
        // Add the 'animate' class to trigger animation
        h1Element.classList.add('animate');
        // Stop observing the element after the animation is triggered
        observer.unobserve(h1Element);
      }
    });
  }, { threshold: 0.1 }); // Trigger the observer when 10% of the element is visible

  // Start observing the h1 element
  observer.observe(h1Element);
});

// Event listener to run code when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select the header element within the visionAndMission class
  const headerElement = document.querySelector('.visionAndMission .header');

  // Create an IntersectionObserver instance
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // Check if the header element is intersecting the viewport
      if (entry.isIntersecting) {
        // Add the 'animate' class to trigger animation
        headerElement.classList.add('animate');
        // Stop observing the element after the animation is triggered
        observer.unobserve(headerElement);
      }
    });
  }, { threshold: 0.1 }); // Trigger the observer when 10% of the element is visible

  // Start observing the header element
  observer.observe(headerElement);
});

// Event listener to run code when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select the header element within the Moments class
  const headerElement = document.querySelector('.Moments .header');

  // Create an IntersectionObserver instance
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // Check if the header element is intersecting the viewport
      if (entry.isIntersecting) {
        // Add the 'animate' class to trigger animation
        headerElement.classList.add('animate');
        // Stop observing the element after the animation is triggered
        observer.unobserve(headerElement);
      }
    });
  }, { threshold: 0.1 }); // Trigger the observer when 10% of the element is visible

  // Start observing the header element
  observer.observe(headerElement);
});

// Event listener to run code when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select the h1 element with the header-underline class
  const headerElement = document.querySelector('.header-underline');

  // Create an IntersectionObserver instance
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // Check if the header element is intersecting the viewport
      if (entry.isIntersecting) {
        // Add the 'animate' class to trigger animation
        headerElement.classList.add('animate');
        // Stop observing the element after the animation is triggered
        observer.unobserve(headerElement);
      }
    });
  }, { threshold: 0.1 }); // Trigger the observer when 10% of the element is visible

  // Start observing the header element
  observer.observe(headerElement);
});

// Function to smoothly scroll to the top of the page
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
