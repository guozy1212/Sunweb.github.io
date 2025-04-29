document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".code-btn");
  const sections = document.querySelectorAll(".code-section");

  // 默认显示第一个部分
  const defaultSection = "magus";
  document
    .querySelector(`[data-code="${defaultSection}"]`)
    .classList.add("active");
  document.getElementById(defaultSection).classList.add("active");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      sections.forEach((section) => section.classList.remove("active"));

      button.classList.add("active");
      const codeId = button.getAttribute("data-code");
      const activeSection = document.getElementById(codeId);
      activeSection.classList.add("active");

      // 强制重绘确保布局正确
      void activeSection.offsetHeight;
    });
  });
});

// // 在code.js末尾添加图片点击事件
// document.querySelectorAll(".code-section img").forEach((img) => {
//   img.style.cursor = "zoom-in";
//   img.addEventListener("click", function () {
//     const modal = document.getElementById("imageModal");
//     const modalImg = document.getElementById("expandedImg");

//     modal.style.display = "block";
//     modalImg.src = this.src;
//     modalImg.alt = this.alt;

//     // 关闭功能
//     document.querySelector(".close").onclick = function () {
//       modal.style.display = "none";
//     };

//     // 点击背景关闭
//     modal.onclick = function (e) {
//       if (e.target === modal) {
//         modal.style.display = "none";
//       }
//     };

//     // ESC键关闭
//     document.addEventListener("keydown", function (e) {
//       if (e.key === "Escape" && modal.style.display === "block") {
//         modal.style.display = "none";
//       }
//     });
//   });
// });
