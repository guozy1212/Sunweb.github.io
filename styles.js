// 汉堡菜单功能
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menu-toggle");
  const navMenu = document.querySelector("#menu-nav");

  toggleBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});

//回到顶部
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
