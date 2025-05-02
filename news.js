const translations = {
  en: {
    nav: [
      "Home",
      "Research",
      "Publications",
      "Codes",
      "Team",
      "News",
      "Contact",
    ],
    footerLocation: "Nanjing, Jiangsu Province, China",
    footerTel: "Tel: +86-(0)25-83687822",
    footerFax: "Fax: +86-(0)25-83595535",
    footerEmail: "Email: jiansun@nju.edu.cn",
    news: {
      title: "Group News",
      date: ["December 13, 2024", "September 30, 2024", "September 6, 2024"],
      items: [
        "Professor Sun Jian's team predicts quasi-two-dimensional spin Pells phase transition in potassium ammonium compounds.",
        "Professor Sun Jian's team used MAGUS to predict novelty two-dimensional materials of M4XY2 family.",
        "Professor Sun Jian's team released high-precision message transmission machine learning force field HotPP.",
      ],
    },
  },

  zh: {
    nav: ["主页", "研究", "论文", "代码", "团队", "新闻", "联系我们"],
    footerLocation: "中国江苏省南京市",
    footerTel: "电话：+86-(0)25-83687822",
    footerFax: "传真：+86-(0)25-83595535",
    footerEmail: "邮箱：jiansun@nju.edu.cn",
    news: {
      title: "课题组新闻",
      date: ["2024.12.13", "2024.11.30", "2024.11.6"],
      items: [
        "孙建教授团队预言钾铵化合物中的准二维自旋佩尔斯相变。",
        "孙建教授团队用MAGUS预测具有新奇物性的M4XY2家族二维材料。",
        "孙建教授等人发布高精度消息传递机器学习力场HotPP。",
      ],
    },
  },
};

// 切换语言按钮
const langEnBtn = document.getElementById("lang-en");
const langZhBtn = document.getElementById("lang-zh");

// 主切换函数
function setLanguage(lang) {
  const data = translations[lang];

  // 导航栏
  document.querySelectorAll("nav ul li a").forEach((link, idx) => {
    if (data.nav[idx]) link.textContent = data.nav[idx];
  });

  // 页脚
  const contactInfo = document.querySelectorAll("footer .contact-info p");
  if (contactInfo.length >= 4) {
    contactInfo[0].textContent = data.footerLocation;
    contactInfo[1].textContent = data.footerTel;
    contactInfo[2].textContent = data.footerFax;
    contactInfo[3].innerHTML = data.footerEmail;
  }

  // 页面标题
  const title = document.querySelector("#news h2");
  if (title) title.textContent = data.news.title;

  // 日期
  const date = document.querySelectorAll("#news time");
  date.forEach((t, idx) => {
    t.textContent = data.news.date[idx];
  });

  // 新闻内容翻译（仅翻译文本，保留 link）
  const newsItems = document.querySelectorAll(".news-item p");
  newsItems.forEach((p, idx) => {
    const a = p.querySelector("a");
    if (a && data.news.items[idx]) {
      // 替换 p 内容为：翻译后的文本 + 原 a 标签
      const newText = data.news.items[idx];
      const href = a.getAttribute("href");
      const target = a.getAttribute("target");

      p.innerHTML = newText + " ";
      const newA = document.createElement("a");
      newA.href = href;
      if (target) newA.target = target;
      newA.textContent = lang === "zh" ? "Link" : "Link";
      p.appendChild(newA);
    }
  });
}
