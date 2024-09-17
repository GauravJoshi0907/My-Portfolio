// Script.js


  document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the list item by its ID
    var resumeLink = document.getElementById("resume-link");

    // Add a click event listener to the list item
    resumeLink.addEventListener("click", function () {
      // Specify the URL of your resume
      var resumeURL = "https://drive.google.com/file/d/1oQMB9dDBdhGp76rpPYjDIh95XTn-u0ZB/view?usp=sharing";

      // Open the URL in a new tab or window
      window.open(resumeURL, "_blank");
    });
  });
