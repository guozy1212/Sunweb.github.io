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
    contact: {
      title: "Contact Us",
      address: "Address: No.22 Hankou Road, Nanjing 210093, China.",
      phone: "Phone: +86-(0)25-83687822",
      email: "Email: jiansun@nju.edu.cn",
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
    contact: {
      title: "联系我们",
      address: "地址：南京市汉口路22号，邮编：210093",
      phone: "电话：+86-(0)25-83687822",
      email: "邮箱：jiansun@nju.edu.cn",
    },
  },
};

// 语言切换按钮（可选）
const langEnBtn = document.getElementById("lang-en");
const langZhBtn = document.getElementById("lang-zh");

// 切换语言函数
function setLanguage(lang) {
  const data = translations[lang];

  // 顶部导航
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link, idx) => {
    link.textContent = data.nav[idx];
  });

  // 页脚信息
  const contactInfo = document.querySelectorAll("footer .contact-info p");
  if (contactInfo.length >= 4) {
    contactInfo[0].textContent = data.footerLocation;
    contactInfo[1].textContent = data.footerTel;
    contactInfo[2].textContent = data.footerFax;
    contactInfo[3].innerHTML = data.footerEmail;
  }

  // 页面主内容
  const contactSection = document.querySelector("#contact1111");
  if (contactSection) {
    const h2 = contactSection.querySelector("h2");
    const ps = contactSection.querySelectorAll("p");
    h2.textContent = data.contact.title;
    ps[0].textContent = data.contact.address;
    ps[1].textContent = data.contact.phone;
    ps[2].innerHTML = data.contact.email;
  }
}
