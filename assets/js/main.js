//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


document.addEventListener("DOMContentLoaded", function() {
  const rows = document.querySelectorAll('.row'); // Select all rows

  rows.forEach(row => {
      const headers = row.querySelectorAll('.gallery-card-header'); // Select all headers in the row
      let maxHeight = 0;

      // Calculate the maximum height
      headers.forEach(header => {
          const height = header.offsetHeight;
          if (height > maxHeight) {
              maxHeight = height;
          }
      });

      // Set the maximum height for all headers in the row
      headers.forEach(header => {
          header.style.height = maxHeight + 'px';
      });
  });
});