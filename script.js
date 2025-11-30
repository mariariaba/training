document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("myBtn");
  const status = document.getElementById("status");
  btn.addEventListener("click", function() {
    status.textContent = "Дякую за натиск!";
    alert("Ви натиснули кнопку!");
  });
});
