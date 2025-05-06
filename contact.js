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
      "中文",
    ],
    footerLocation: "Nanjing, Jiangsu Province, China",
    footerTel: "Tel: +86-(0)25-83687822",
    footerFax: "Fax: +86-(0)25-83595535",
    footerEmail: "Email: magus (AT) nju.edu.cn (AT)=@",
    contact: {
      title: ["Contact Us", "Opening"],
      members: "Name: Prof. Jian Sun",
      address: [
        "Address: School of Physics, Nanjing University, ",
        "No. 22 Hankou Road, Nanjing 210093, China.",
      ],
      phone: "Phone: +86-(0)25-83687822",
      email: "Email: jiansun(AT)nju.edu.cn (AT)=@",
      welcome:
        "Our group have openings from time to time. We are looking for motivated students, postdocs and researchers to join us. Please feel free to contact us if you are interested.",
    },
  },

  zh: {
    nav: [
      "主页",
      "研究",
      "论文",
      "代码",
      "团队",
      "新闻",
      "联系我们",
      "English",
    ],
    footerLocation: "中国江苏省南京市",
    footerTel: "电话：+86-(0)25-83687822",
    footerFax: "传真：+86-(0)25-83595535",
    footerEmail: "邮箱： magus (AT) nju.edu.cn (AT)=@",
    contact: {
      title: ["联系我们", "欢迎加入"],
      members: "成员：孙建教授",
      address: ["地址：南京大学物理学院", "江苏省南京市汉口路22号"],
      phone: "电话：+86-(0)25-83687822",
      email: "邮箱：jiansun(AT)nju.edu.cn (AT)=@",
      welcome:
        "本课题组长期招聘博士后、研究生及科研人员，诚邀有志之士加入。欢迎感兴趣者随时联系！",
    },
  },
};

// 语言切换按钮（可选）
const langBtn = document.getElementById("language-switch");

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
    const h2 = contactSection.querySelectorAll("h2");
    const ps = contactSection.querySelectorAll("p");
    h2[0].textContent = data.contact.title[0];
    h2[1].textContent = data.contact.title[1];
    ps[0].textContent = data.contact.members;
    ps[1].textContent = data.contact.address[0];
    ps[2].textContent = data.contact.address[1];
    if (lang === "en") {
      ps[2].style = "margin-left: 4em;";
    } else if (lang === "zh") {
      ps[2].style = "margin-left: 3em;";
    }
    ps[3].textContent = data.contact.phone;
    ps[4].innerHTML = data.contact.email;
    ps[5].textContent = data.contact.welcome;
  }
}
