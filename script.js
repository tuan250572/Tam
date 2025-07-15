
document.getElementById("menu").addEventListener("click", function () {
  document.getElementById("library").classList.remove("hidden");
  document.getElementById("mainContent").classList.add("hidden");
});

document.getElementById("backButton").addEventListener("click", function () {
  document.getElementById("library").classList.add("hidden");
  document.getElementById("mainContent").classList.remove("hidden");
});
