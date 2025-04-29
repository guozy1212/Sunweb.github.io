const translations = {
  en: {
    nav: [
      "Home",
      "Research",
      "Publications",
      "Codes",
      "Members",
      "News",
      "Contact",
    ],
    footerLocation: "Nanjing, Jiangsu Province, China",
    footerTel: "Tel: +86-(0)25-83687822",
    footerFax: "Fax: +86-(0)25-83595535",
    footerEmail: "Email: jiansun@nju.edu.cn",
    members: {
      title: "Team Members",
      connection: "Connection",
      professorTitle:
        "University Professor, School of Physics, Nanjing University",
      honorsTitle: "Honors/Awards:",
      postdocTitle: "Postdoctoral Fellows",
      phdTitle: "Ph.D Candidates",
      undergradTitle: "Undergraduate Fellows",
    },
  },
  zh: {
    nav: [
      "主页",
      "研究方向",
      "发表论文",
      "开发代码",
      "团队成员",
      "新闻动态",
      "联系我们",
    ],
    footerLocation: "中国江苏省南京市",
    footerTel: "电话：+86-(0)25-83687822",
    footerFax: "传真：+86-(0)25-83595535",
    footerEmail: "邮箱：jiansun@nju.edu.cn",
    members: {
      title: "团队成员",
      connection: "联系方式",
      professorTitle: "南京大学物理学院 教授",
      honorsTitle: "荣誉奖项：",
      postdocTitle: "博士后成员",
      phdTitle: "博士研究生成员",
      undergradTitle: "本科生成员",
    },
  },
};

// 绑定语言按钮
const langEnBtn = document.getElementById("lang-en");
const langZhBtn = document.getElementById("lang-zh");

// 切换语言核心函数
function setLanguage(lang) {
  const data = translations[lang];

  // 导航栏
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link, idx) => {
    link.textContent = data.nav[idx];
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
  const title = document.querySelector("#team h2");
  if (title) title.textContent = data.members.title;

  // 教授信息
  const conn = document.querySelector(".professor-info h3");
  if (conn) conn.textContent = data.members.connection;

  const profTitle = document.querySelector(".professor-info p");
  if (profTitle) profTitle.textContent = data.members.professorTitle;

  const honorTitle = document.querySelector(".professor-info h4");
  if (honorTitle) honorTitle.textContent = data.members.honorsTitle;

  // 各类成员小标题
  const headers = document.querySelectorAll(".fellows h3");
  if (headers.length >= 3) {
    headers[0].textContent = data.members.postdocTitle;
    headers[1].textContent = data.members.phdTitle;
    headers[2].textContent = data.members.undergradTitle;
  }
}
