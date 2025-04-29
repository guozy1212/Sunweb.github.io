langEnBtn.addEventListener("click", () => {
  localStorage.setItem("lang", "en");
  setLanguage("en");
});

langZhBtn.addEventListener("click", () => {
  localStorage.setItem("lang", "zh");
  setLanguage("zh");
});

window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en"; // 如果没保存过默认中文
  setLanguage(savedLang);
});
