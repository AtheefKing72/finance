function subscribeNewsletter() {
  let email = prompt("Enter your email to subscribe:");
  if (email) {
      alert("Thank you for subscribing! You'll receive financial tips and updates.");
  } else {
      alert("Subscription canceled.");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
      button.addEventListener("mouseover", function() {
          button.style.transform = "scale(1.1)";
          button.style.transition = "transform 0.3s ease";
      });
      button.addEventListener("mouseout", function() {
          button.style.transform = "scale(1)";
      });
  });
  
  let links = document.querySelectorAll("nav ul li a");
  links.forEach(link => {
      link.addEventListener("click", function(event) {
          event.preventDefault();
          let section = document.querySelector(this.getAttribute("href"));
          if (section) {
              section.scrollIntoView({ behavior: "smooth" });
          }
      });
  });
});
