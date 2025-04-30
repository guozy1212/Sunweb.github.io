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
      eeh: ["Education", "Employment", "Honors/Awards"],
      postdocTitle: "Postdoctoral Fellows",
      phdTitle: "Ph.D Candidates",
      undergradTitle: "Undergraduate Fellows",
      alumniTitle: "Alumni",
      name: [
        "Junjie Wang",
        "Chi ding",
        "Yu Han",
        "Tianheng Huang",
        "Jiuyang Shi",
        "Shuning Pan",
        "Qing Lu",
        "Yunlong Wang",
        "Zhixin Liang",
        "Quihan Jia",
        "Yijie Zhu",
        "Zhongwei Zhang",
        "Shaobo Yu",
        "Ziyang Yang",
        "Yujian Pan",
        "Haoting Zhang",
        "Zhennan Zhang",
        "Zhiyue Guo",
        "Shengzhao Xu",
        "Xiaomeng Wang",
        "Zhaopeng Guo",
        "Juefei Wu",
      ],
      institution: [
        "Nanjing University",
        "Nanjing University",
        "Nanjing University",
        "Nanjing University",
        "Hohai University",
        "Nanjing University",
        "Nanjing University",
        "Nanchang University",
        "Nanjing University",
        "Nanjing University",
        "China University of Mining and Technology",
        "Xi'an Jiaotong University",
        "Southeast University",
        "Nanjing University",
        "Nanjing University",
        "Nanjing University",
        "Hunan University",
        "Nanjing University",
        "Nanjing University",
        "Hangzhou Normal University",
        "ShanghaiTech University",
      ],
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
      eeh: ["教育经历", "学术经历", "荣誉奖项"],
      postdocTitle: "博士后成员",
      phdTitle: "博士研究生成员",
      undergradTitle: "本科生成员",
      alumniTitle: "毕业生成员",
      name: [
        "王俊杰",
        "丁驰",
        "韩瑜",
        "黄天衡",
        "施九洋",
        "潘书宁",
        "鲁清",
        "王云龙",
        "梁智新",
        "贾秋涵",
        "朱怡杰",
        "张仲伟",
        "于少薄",
        "杨子洋",
        "潘宇箭",
        "张皓庭",
        "张圳南",
        "郭智岳",
        "许晟钊",
        "王晓梦",
        "郭照芃",
        "吴珏霏",
      ],
      institution: [
        "南京大学",
        "南京大学",
        "南京大学",
        "南京大学",
        "河海大学",
        "南京大学",
        "南京大学",
        "南昌大学",
        "南京大学",
        "南京大学",
        "中国矿业大学",
        "西安交通大学",
        "东南大学",
        "南京大学",
        "南京大学",
        "南京大学",
        "湖南大学",
        "南京大学",
        "南京大学",
        "杭州师范大学",
        "上海科技大学",
      ],
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
  const conn = document.querySelector(".professor-info-l h3");
  if (conn) conn.textContent = data.members.connection;
  const eeh = document.querySelectorAll(".professor-info-r h3");
  eeh.forEach((e, idx) => {
    e.textContent = data.members.eeh[idx];
  });

  // 各类成员小标题
  const headers = document.querySelectorAll(".fellows h3");
  if (headers.length >= 4) {
    headers[0].textContent = data.members.postdocTitle;
    headers[1].textContent = data.members.phdTitle;
    headers[2].textContent = data.members.undergradTitle;
    headers[3].textContent = data.members.alumniTitle;
  }

  // 姓名，所属单位
  const names = document.querySelectorAll(".fellow .name");
  names.forEach((name, idx) => {
    name.innerHTML = "&#x26B2; " + data.members.name[idx];
  });
  const institutions = document.querySelectorAll(".affiliation");
  institutions.forEach((institution, idx) => {
    institution.innerHTML = "&#x1F3DB; " + data.members.institution[idx];
  });
}
