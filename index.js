// 初始化轮播图
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoHeight: true,
  // watchSlidesProgress: true,
});

// 语言切换功能
const langEnBtn = document.getElementById("lang-en");
const langZhBtn = document.getElementById("lang-zh");

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
    swiperText: "Research Group Members",
    homeTitle: "Exploring Matter at Extremes, Decoding Tomorrow's Materials",
    welcome:
      "Welcome to Jian Sun Research Group in Computational Material Science!",
    intro:
      "We pioneer machine learning-enhanced frameworks bridging ab initio calculations and extreme-condition experiments, decoding matter's behavior under high-pressure/temperature regimes to advance planetary science and strategic material design. Our proprietary tools—powering discoveries from Earth's core phase transitions to superhard superconductors—drive an innovation pipeline integrating atomic simulations, AI-driven property prediction, and experimental validation. Collaborating with 20+ global labs, we empower next-gen technologies in energy storage and extreme-environment sensing while redefining computational materials discovery. Join our interdisciplinary team at the forefront of high-pressure physics and AI for Science, where algorithmic revolutions illuminate uncharted territories of matter.",
    latestAchievements: "Latest Achievements",
    recentNews: "Recent News",
    codeDevelopment: "Code Development",
    achievementDesc:
      "Efficient crystal structure prediction based on the symmetry principle",
    newsDesc:
      "Prediction of quasi-two-dimensional spin-Peierls transition in potassium ammonium compounds",
    codeDesc:
      "Magus2.0 achieving up to fourfold enhancement in structural search efficiency",
    footerLocation: "Nanjing, Jiangsu Province, China",
    footerTel: "Tel: +86-(0)25-83687822",
    footerFax: "Fax: +86-(0)25-83595535",
    footerEmail: "Email: magus (AT) nju.edu.cn (AT)=@",
  },
  zh: {
    nav: ["主页", "研究", "论文", "代码", "团队", "新闻", "联系我们"],
    swiperText: "课题组成员",
    homeTitle: "探索极端环境下的物质，解码未来材料",
    welcome: "欢迎来到南京大学孙建教授计算材料科学课题组！",
    intro:
      "我们致力于发展机器学习增强框架，桥接第一性原理计算与极端条件实验，解码高压高温下物质行为，推动行星科学与战略材料设计。我们的自主开发工具已应用于地核相变、超硬超导体等领域，构建了集原子模拟、AI性质预测与实验验证为一体的创新平台。与全球20余家实验室合作，助力能源存储和极端环境探测等前沿技术，开创高压物理与科学智能交叉研究新纪元。欢迎加入我们，携手探索未知物质世界！",
    latestAchievements: "最新成果",
    recentNews: "最新新闻",
    codeDevelopment: "代码开发",
    achievementDesc: "基于对称性原则的高效晶体结构预测",
    newsDesc: "钾铵化合物中准二维自旋-皮尔斯转变的预测",
    codeDesc: "Magus2.0实现结构搜索效率最高四倍提升",
    footerLocation: "中国江苏省南京市",
    footerTel: "电话：+86-(0)25-83687822",
    footerFax: "传真：+86-(0)25-83595535",
    footerEmail: "邮箱： magus (AT) nju.edu.cn (AT)=@",
  },
};

// 绑定切换事件

function setLanguage(lang) {
  const data = translations[lang];

  // 更新导航栏
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link, idx) => {
    link.textContent = data.nav[idx];
  });

  // 更新轮播图文字
  const swiperTexts = document.querySelectorAll(".swiper-text");
  swiperTexts.forEach((text) => {
    text.textContent = data.swiperText;
  });

  // 更新主页标题、副标题、介绍
  document.querySelector("#home h2").textContent = data.homeTitle;
  const homeParagraphs = document.querySelectorAll("#home p");
  if (homeParagraphs.length >= 2) {
    homeParagraphs[0].textContent = data.welcome;
    homeParagraphs[1].textContent = data.intro;
  }

  // 更新亮点部分
  const highlightTitles = document.querySelectorAll(".highlight-item h3");
  const highlightDescs = document.querySelectorAll(".highlight-item p");
  if (highlightTitles.length >= 3 && highlightDescs.length >= 3) {
    highlightTitles[0].textContent = data.latestAchievements;
    highlightDescs[0].textContent = data.achievementDesc;
    highlightTitles[1].textContent = data.recentNews;
    highlightDescs[1].textContent = data.newsDesc;
    highlightTitles[2].textContent = data.codeDevelopment;
    highlightDescs[2].textContent = data.codeDesc;
  }

  // 更新页脚
  const contactInfo = document.querySelectorAll("footer .contact-info p");
  if (contactInfo.length >= 4) {
    contactInfo[0].textContent = data.footerLocation;
    contactInfo[1].textContent = data.footerTel;
    contactInfo[2].textContent = data.footerFax;
    contactInfo[3].innerHTML = data.footerEmail;
  }
}
