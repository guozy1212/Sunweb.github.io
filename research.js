// language.js

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
    footerEmail: "Email: magus (AT) nju.edu.cn (AT)=@",

    home: {
      title: "Exploring Matter at Extremes, Decoding Tomorrow's Materials",
      welcome:
        "Welcome to Jian Sun Research Group in Computational Material Science",
      intro:
        "We pioneer machine learning-enhanced frameworks bridging ab initio calculations and extreme-condition experiments, decoding matter's behavior under high-pressure/temperature regimes to advance planetary science and strategic material design. Our proprietary tools—powering discoveries from Earth's core phase transitions to superhard superconductors—drive an innovation pipeline integrating atomic simulations, AI-driven property prediction, and experimental validation. Collaborating with 20+ global labs, we empower next-gen technologies in energy storage and extreme-environment sensing while redefining computational materials discovery. Join our interdisciplinary team at the forefront of high-pressure physics and AI for Science, where algorithmic revolutions illuminate uncharted territories of matter.",
      highlightTitles: [
        "Latest Achievements",
        "Recent News",
        "Code Development",
      ],
      highlightDescriptions: [
        "Efficient crystal structure prediction based on the symmetry principle",
        "Prediction of quasi-two-dimensional spin-Peierls transition in potassium ammonium compounds",
        "Magus2.0 achieving up to fourfold enhancement in structural search efficiency",
      ],
      swiperText: "Research Group Members",
    },

    research: {
      title: "Research Overview",
      directions: [
        "Research Direction 1: Development of Computational Methods (",
        "Research Direction 2: Dynamical Simulations of Novel States of Matter and Phase Transitions",
        "Research Direction 3: Prediction and Design of High-Pressure Materials",
      ],
      overview: [
        "Prof. Jian Sun's research group has long been dedicated to developing and applying machine learning-driven computational methods for material simulations, providing fundamental frameworks and tools for condensed matter physics and materials science research. In recent years, we have particularly focused on interdisciplinary fields including high-pressure physics, materials design, and planetary science, investigating material behaviors and properties under extreme conditions. Our work aims to design novel materials with superior performance while expanding the boundaries of human understanding of matter under extreme environments.",
      ],
      paragraphs: [
        "As the foundation of theoretical research in condensed matter physics and materials science, we focus on advancing computational methodologies including structure prediction, graph theory, machine learning force fields, and machine-learned Hamiltonians, striving to provide comprehensive solutions spanning crystal structures, dynamics, and electronic properties. Recent achievements include:",
        "While static calculations typically study zero-temperature properties, dynamical simulations form the basis for investigating finite-temperature states and phase transitions. Leveraging first-principles and machine learning molecular dynamics, we have made significant progress in characterizing exotic states (superionic, plastic crystal, and cooperative diffusion states, etc) and phase transition pathways. Key contributions include:",
        "High pressure serves as a crucial means to modulate material properties and synthesize novel materials. Our recent work spans predictions of geologically relevant materials under planetary interior conditions, nitrogen-rich ultrahard/energetic materials, superconductors, and topological quantum materials. Notable achievements include:",
      ],
      listItems: [
        "Development of MAGUS, a machine learning and graph theory-enhanced crystal structure prediction method demonstrating over 10-fold acceleration compared to conventional first-principles searches",
        "Creation of HotPP, a higher-order tensor message-passing machine learning force field achieving accuracy comparable to the world's most precise ML force fields",
        "Collaborative development of GPUMD, a GPU-accelerated machine learning molecular dynamics engine capable of simulating systems with tens of millions of atoms using a single graphics card",
        "Predicting high-pressure helium-water/ammonia/methane compounds and Si-O-H, Mg-O-H compounds, that reshape understanding of planetary interior structures",
        "Revealing one-dimensional cooperative diffusion in compressed calcium with its electronic origin, discovering an elemental analog to superionic states",
        "Elucidating high-pressure phase transition mechanisms in carbon and carbon dioxide systems that have guided experimental investigations",
        "Identifying mixed-coordination SiO2 phases under Neptune's core conditions",
        "Designing superhard nitrogen-rich materials later experimentally synthesized",
        "Proposing strategies for high-pressure synthesis of novel quantum materials",
      ],
      captions: [
        "The workflow of MAGUS",
        "The network architecture of HotPP",
        "Simulation of phase transitions under extreme conditions",
        "Cover of National Science Review, Volume 7, Issue 10, October(2020)",
        "High-pressure material structure prediction",
        "Cover of Science Bulletin, Volume 63, Number 13, July(2018)",
      ],
      publicationsTitle: "Representative Publications:",
    },
  },

  zh: {
    nav: ["主页", "研究", "论文", "代码", "团队", "新闻", "联系我们"],
    footerLocation: "中国江苏省南京市",
    footerTel: "电话：+86-(0)25-83687822",
    footerFax: "传真：+86-(0)25-83595535",
    footerEmail: "邮箱： magus (AT) nju.edu.cn (AT)=@",

    research: {
      title: "研究概况",
      directions: [
        "研究方向一：计算方法的发展 (",
        "研究方向二：新奇物质态与相变的动力学模拟",
        "研究方向三：高压材料的预测与设计",
      ],
      overview: [
        "孙健教授课题组长期致力于开发和应用机器学习驱动的材料模拟计算方法，为凝聚态物理与材料科学研究提供基础框架与工具。近年来，团队特别关注包括高压物理、材料设计、行星科学等交叉领域，研究极端条件下物质的行为与性质。我们的工作旨在设计具有卓越性能的新型材料，同时拓展人类对极端环境下物质本质的理解。",
      ],
      paragraphs: [
        "作为凝聚态物理与材料科学理论研究的基石，我们专注于推动计算方法的发展，包括结构预测、图论方法、机器学习力场及机器学习哈密顿量等领域，力求提供覆盖晶体结构、动力学及电子性质的全方位解决方案。近期成果包括：",
        "静态计算通常用于研究零温性质，而动力学模拟则是探索有限温度状态与相变行为的基础。基于第一性原理与机器学习分子动力学，我们在表征超离子态、塑性晶体态、协同扩散态等新奇状态及相变路径方面取得了重要进展。主要贡献包括：",
        "高压是调控材料性质、合成新型材料的重要手段。我们近期的研究涵盖了行星内部条件下相关材料的预测、富氮超硬/能量材料、超导材料及拓扑量子材料的探索。主要成果包括：",
      ],
      listItems: [
        "开发了MAGUS，一种结合机器学习与图论加速的晶体结构预测方法，相比传统第一性原理搜索方法实现了10倍以上加速",
        "创建了HotPP，高阶张量信息传递机器学习力场，精度达到全球顶尖水平",
        "协同开发了GPUMD，GPU加速的机器学习分子动力学引擎，单张显卡可模拟上千万原子体系",
        "预测了高压下氦-水/氨/甲烷化合物及Si-O-H、Mg-O-H体系，重塑了对行星内部结构的理解",
        "揭示了压缩钙中一维协同扩散现象及其电子起源，发现了元素级超离子态类似物",
        "阐明了碳与二氧化碳系统中高压相变机制，为实验研究提供了指导",
        "识别了海王星核心条件下的混合配位SiO₂相",
        "设计了超硬富氮材料，并实现了实验合成",
        "提出了高压合成新型量子材料的策略",
      ],
      captions: [
        "MAGUS工作流",
        "HotPP网络结构",
        "极端条件下的相变模拟",
        "《国家科学评论》2020年第7卷第10期封面",
        "高压材料结构预测",
        "《科学通报》2018年第63卷第13期封面",
      ],
      publicationsTitle: "代表性论文：",
    },
  },
};

// 语言切换功能
const langEnBtn = document.getElementById("lang-en");
const langZhBtn = document.getElementById("lang-zh");

// 核心切换逻辑
function setLanguage(lang) {
  const data = translations[lang];
  const path = window.location.pathname;

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

  document.querySelector("#research h2").textContent = data.research.title;
  document.querySelector("#research > p").textContent = data.research.overview;
  document.querySelectorAll(".research-direction h3").forEach((h3, idx) => {
    if (idx == 0) {
      h3.textContent = data.research.directions[idx];
      const a = document.createElement("a");
      a.href = "code.html";
      a.textContent = lang === "zh" ? "代码仓库" : "Code Repository";
      a.style = "text-decoration: underline";
      h3.appendChild(a);
      h3.innerHTML += ")";
    } else {
      h3.textContent = data.research.directions[idx];
    }
  });

  const paragraphs = document.querySelectorAll(".research-direction > p");
  paragraphs.forEach((p, idx) => {
    if (idx < data.research.paragraphs.length) {
      p.textContent = data.research.paragraphs[idx];
    }
  });

  document.querySelectorAll(".research-direction ul").forEach((ul, ulIdx) => {
    const lis = ul.querySelectorAll("li");
    lis.forEach((li, liIdx) => {
      const globalIdx = ulIdx * 3 + liIdx;
      if (data.research.listItems[globalIdx])
        li.textContent = data.research.listItems[globalIdx];
    });
  });
  document
    .querySelectorAll(".research-image + p, .research-image p")
    .forEach((p, idx) => {
      if (data.research.captions[idx])
        p.textContent = data.research.captions[idx];
    });
  document.querySelectorAll(".research-publications h4").forEach((h4) => {
    h4.textContent = data.research.publicationsTitle;
  });
}
