langBtn.addEventListener("click", (e) => {
  e.preventDefault(); // 阻止默认跳转
  const lang = localStorage.getItem("lang");
  if (lang === "zh") {
    localStorage.setItem("lang", "en");
    setLanguage("en");
  } else if (lang === "en") {
    localStorage.setItem("lang", "zh");
    setLanguage("zh");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  localStorage.setItem("lang", savedLang);
  setLanguage(savedLang);
});
