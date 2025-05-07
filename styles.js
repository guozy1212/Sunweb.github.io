// 汉堡菜单功能
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menu-toggle");
  const navMenu = document.querySelector("#menu-nav");

  toggleBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});
