// script.js
document.getElementById("aboutUsButton")?.addEventListener("click", function() {
  document.getElementById("aboutUs")?.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contactButton")?.addEventListener("click", function() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("portfolioButton")?.addEventListener("click", function() {
  document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("servicesButton")?.addEventListener("click", function() {
  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("pricingButton")?.addEventListener("click", function() {
  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
});