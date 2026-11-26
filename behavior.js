// Step 1: check that the file is running
console.log("behavior.js is running");

// Listener 1: make the page react
var title = document.querySelector(".page-title");
var shoutButton = document.querySelector(".shout-button");

function sayHello() {
  title.textContent = "Hello!";
}

shoutButton.addEventListener("click", sayHello);

// Listener 2: a copy button that actually helps
var email = document.querySelector(".email");
var copyButton = document.querySelector(".copy-email");

function copyEmail() {
  // READ from the page, hand it to the clipboard
  navigator.clipboard.writeText(email.textContent);

  // Feedback for the user
  copyButton.textContent = "Copied!";

  // Bonus: put the label back after 2 seconds
  setTimeout(function () {
    copyButton.textContent = "Copy my email";
  }, 2000);
}

copyButton.addEventListener("click", copyEmail);