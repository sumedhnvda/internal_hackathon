
document.addEventListener("DOMContentLoaded", function () {
    // Display loader
    const loaderContainer = document.querySelector('.loader-container');
    loaderContainer.style.display = 'flex';
  
    // Simulate some asynchronous task (e.g., API call) that takes time
    setTimeout(function () {
      // Hide loader after the task is completed
      loaderContainer.style.display = 'none';
  
      // Display the main content
      const content = document.getElementById('content');
      content.style.display = 'block';
    }, 1500); // Simulating a 3-second delay, you can replace this with your actual task time
  });
 

  