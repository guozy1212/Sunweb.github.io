// code.js

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

    code: {
      title:
        "Computational Methods & Softwares developed/co-developed in our group",
      directions: [
        "MAGUS: Machine learning and graph theory assisted crystal structure prediction method",
        "HotPP: High order tensor Passing Potential",
        "GPUMD: Graphics Processing Units Molecular Dynamics",
      ],
      introTitles: ["Introduction", "Introduction", "Introduction"],
      paragraphs: [
        "MAGUS is a machine learning and graph theory assisted crystal structure prediction method developed by Prof. Jian Sun's group at the School of Physics at Nanjing University. The programming languages are mainly Python and C++ and it is built as a pip installable package. Users can use just a few commands to install the package. MAGUS has also the advantage of high modularity and extensibility. All source codes are transparent to users after installation, and users can modify particular parts according to their needs. MAGUS has been used to study many systems. Several designed new materials have been synthesized experimentally, and a number of high-profile academic papers have been published.",
        "For more details and access to the MAGUS, visit the ",

        "The higher-order tensor message-passing interatomic potential function, HotPP, is an E(n)-equivariant message-passing neural network capable of extending Cartesian tensor embeddings and messages to arbitrary orders. It supports the calculation of potential energy surfaces, electric dipole moments, and polarizabilities. Additionally, it provides interfaces with commonly used software such as ASE and LAMMPS, making it applicable for computing phonon spectra, infrared spectra, and Raman spectra.",
        "For more details and access to the HotPP, visit the ",

        "GPUMD (Graphics Processing Units Molecular Dynamics) is a high-performance molecular dynamics simulation software package initially developed and maintained by Professor Zheyong Fan and his team. In recent years, members from Prof. Jian Sun's group, such as Shuning Pan, Yong Wang, Junjie Wang, Qiuhan Jia, Haoting Zhang, Jiuyang Shi, Zhixing Liang, et al.,  made a lot of efforts to contribute. Designed to leverage GPU acceleration, it enables efficient simulations of large-scale systems while maintaining high computational accuracy. A key feature is the integration of the Neuroevolution Potential (NEP), achieving exceptional speed and precision. The software supports diverse functionalities such as NVE, NVT, NPT ensembles, thermal transport, phonon dispersion, and elastic constant determination, requiring NVIDIA GPUs and CUDA environments.",
        "For more details and access to the GPUMD, visit the ",
      ],
    },
  },

  zh: {
    nav: ["主页", "研究", "论文", "代码", "团队", "新闻", "联系我们"],
    footerLocation: "中国江苏省南京市",
    footerTel: "电话：+86-(0)25-83687822",
    footerFax: "传真：+86-(0)25-83595535",
    footerEmail: "邮箱：jiansun@nju.edu.cn",

    code: {
      title: "本课题组开发/协作开发的计算方法与软件",
      directions: [
        "MAGUS：机器学习与图论辅助的晶体结构预测方法",
        "HotPP：高阶张量信息传递势能函数",
        "GPUMD：GPU加速分子动力学模拟程序",
      ],
      introTitles: ["简介", "简介", "简介"],
      paragraphs: [
        "MAGUS 是南京大学物理学院孙健教授课题组开发的一种结合机器学习与图论的晶体结构预测方法。主要使用 Python 和 C++ 编写，打包为 pip 安装包，用户可以轻松安装。MAGUS 拥有高度模块化和可扩展性，安装后所有源代码对用户开放，便于根据需要修改。MAGUS 已应用于多种体系研究，设计的新材料部分已被实验合成，发表了多篇高水平论文。",
        "了解更多详情及访问 MAGUS，请查看",

        "HotPP 是一种 E(n) 等变性的高阶张量消息传递神经网络，能够扩展笛卡尔张量嵌入和消息至任意阶数，支持计算势能面、电偶极矩与极化率。同时，它与 ASE、LAMMPS 软件兼容，可应用于声子谱、红外光谱和拉曼光谱的计算。",
        "了解更多详情及访问 HotPP，请查看",

        "GPUMD（图形处理单元分子动力学）是由樊哲勇教授及其团队开发维护的高性能分子动力学模拟软件，设计目标是充分利用 GPU 加速。近年来，孙建教授课题组成员潘书宁、王勇、王俊杰、贾秋涵、张皓庭、施九洋、梁智新等人作出了重要贡献。它能高效地模拟大规模体系，保持高计算精度。其集成的 NEP 势场实现了超高的计算速度与准确性。GPUMD 支持多种功能如 NVE、NVT、NPT 系综、热传导、声子色散及弹性常数计算，需要 NVIDIA GPU 与 CUDA 环境。",
        "了解更多详情及访问 GPUMD，请查看",
      ],
    },
  },
};

// 语言切换按钮
const langEnBtn = document.getElementById("lang-en");
const langZhBtn = document.getElementById("lang-zh");

// 切换语言核心逻辑
function setLanguage(lang) {
  const data = translations[lang];

  // 通用部分
  document.querySelectorAll("nav ul li a").forEach((link, idx) => {
    link.textContent = data.nav[idx];
  });
  const contactInfo = document.querySelectorAll("footer .contact-info p");
  if (contactInfo.length >= 4) {
    contactInfo[0].textContent = data.footerLocation;
    contactInfo[1].textContent = data.footerTel;
    contactInfo[2].textContent = data.footerFax;
    contactInfo[3].innerHTML = data.footerEmail;
  }

  // 标题
  const mainTitle = document.querySelector("#research h2");
  if (mainTitle) mainTitle.textContent = data.code.title;

  // 研究方向标题
  document.querySelectorAll(".research-direction h3").forEach((h3, idx) => {
    if (data.code.directions[idx]) {
      h3.textContent = data.code.directions[idx];
    }
  });

  // 修改 Introduction 小标题
  //   document
  //     .querySelectorAll(".research-direction strong")
  //     .forEach((strong, idx) => {
  //       if (data.code.introTitles[idx]) {
  //         strong.textContent = data.code.introTitles[idx];
  //       }
  //     });

  // 修改各段文字
  const directions = document.querySelectorAll(".research-direction");
  const paragraphs = data.code.paragraphs;
  directions.forEach((direction, idx) => {
    const ps = direction.querySelectorAll("div > p");

    // 第一段
    ps[0].innerHTML =
      `<strong>${data.code.introTitles[idx]}</strong><br/>` +
      paragraphs[idx * 2];

    // 第二段（带超链接）
    const p2 = ps[1];
    const a = p2.querySelector("a");
    if (a) {
      const href = a.getAttribute("href");
      const target = a.getAttribute("target");
      const translatedLinkText = lang === "zh" ? "代码仓库" : "code repository";

      // 重新组装
      p2.innerHTML = paragraphs[idx * 2 + 1];
      const newA = document.createElement("a");
      newA.href = href;
      if (target) newA.target = target;
      newA.textContent = translatedLinkText;
      p2.appendChild(newA);

      if (lang === "zh") p2.innerHTML += "。";
      else p2.innerHTML += ".";
    }
  });
}
