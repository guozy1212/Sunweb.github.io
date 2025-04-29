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
      fgs;
      // 强制重绘确保布局正确
      void activeSection.offsetHeight;
    });
  });
});
