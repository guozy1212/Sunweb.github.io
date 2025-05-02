// 定义英文和中文的内容
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
    navTitle: "Quick Navigator",
    navLinks: ["Top", "Representative Publications", "Full List"],
    browseYear: "Browse by Year ▼",
    before2013: "Before 2013",
    mainTitle: "Publications",
    repTitle: "Representative Publications",
    fulist: "Full List",
    footerLocation: "Nanjing, Jiangsu Province, China",
    footerTel: "Tel: +86-(0)25-83687822",
    footerFax: "Fax: +86-(0)25-83595535",
    footerEmail: "Email: jiansun@nju.edu.cn",
  },
  zh: {
    nav: ["主页", "研究", "论文", "代码", "团队", "新闻", "联系我们"],
    navTitle: "快速导航",
    navLinks: ["顶部", "代表性论文", "完整列表"],
    browseYear: "按年份浏览 ▼",
    before2013: "2013年前",
    mainTitle: "发表论文",
    repTitle: "代表性论文",
    fulist: "完整列表",
    footerLocation: "中国江苏省南京市",
    footerTel: "电话：+86-(0)25-83687822",
    footerFax: "传真：+86-(0)25-83595535",
    footerEmail: "邮箱：jiansun@nju.edu.cn",
  },
};

// 语言切换功能
const langEnBtn = document.getElementById("lang-en");
const langZhBtn = document.getElementById("lang-zh");

// 绑定切换事件

function setLanguage(lang) {
  const langData = translations[lang];

  // 更新导航栏
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link, idx) => {
    link.textContent = langData.nav[idx];
  });

  // 修改左侧导航标题
  const navTitle = document.querySelector(".publication-nav .nav-title");
  if (navTitle) navTitle.textContent = langData.navTitle;

  // 修改左侧导航链接
  const navLinksl = document.querySelectorAll(".publication-nav > ul > li a");
  if (navLinksl.length >= 3) {
    navLinksl[0].textContent = langData.navLinks[0];
    navLinksl[1].textContent = langData.navLinks[1];
    navLinksl[2].textContent = langData.navLinks[2];
  }

  // 修改“Browse by Year ▼”
  const browseByYear = document.querySelector(".year-nav span");
  if (browseByYear) browseByYear.textContent = langData.browseYear;

  // 修改 "Before 2013" 链接文字
  const beforeLink1 = document.querySelector(".year-nav ul .before");
  if (beforeLink1) beforeLink1.textContent = langData.before2013;
  const beforeLink2 = document.querySelector(".publication-section .before");
  if (beforeLink2) beforeLink2.textContent = langData.before2013;

  const mainTitle = document.querySelector("h2");
  if (mainTitle) mainTitle.textContent = langData.mainTitle;
  const repTitle = document.querySelector("#representative");
  if (repTitle) repTitle.textContent = langData.repTitle;
  const fulist = document.querySelector("#full-list");
  if (fulist) fulist.textContent = langData.fulist;

  // 更新页脚
  const contactInfo = document.querySelectorAll("footer .contact-info p");
  if (contactInfo.length >= 4) {
    contactInfo[0].textContent = langData.footerLocation;
    contactInfo[1].textContent = langData.footerTel;
    contactInfo[2].textContent = langData.footerFax;
    contactInfo[3].innerHTML = langData.footerEmail;
  }
}
