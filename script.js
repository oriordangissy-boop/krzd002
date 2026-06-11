const menuButtons = document.querySelectorAll("[data-menu]");
const megaMenus = document.querySelectorAll(".mega-menu");
const searchToggle = document.querySelector(".search-toggle");
const searchPanel = document.querySelector(".search-panel");
const mobileMenu = document.querySelector(".mobile-menu");
const mainNav = document.querySelector(".main-nav");

function closePanels() {
  menuButtons.forEach((button) => button.classList.remove("open"));
  megaMenus.forEach((menu) => menu.classList.remove("open"));
  searchPanel.classList.remove("open");
}

menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const menu = document.getElementById(`${button.dataset.menu}-menu`);
    const shouldOpen = !menu.classList.contains("open");
    closePanels();
    if (shouldOpen) {
      button.classList.add("open");
      menu.classList.add("open");
    }
  });
});

searchToggle?.addEventListener("click", () => {
  const shouldOpen = !searchPanel.classList.contains("open");
  closePanels();
  if (shouldOpen) {
    searchPanel.classList.add("open");
    document.getElementById("site-search").focus();
  }
});

mobileMenu?.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  mobileMenu.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".finder-tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".finder-tabs button").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".finder-grid").forEach((panel) => panel.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`[data-panel="${button.dataset.tab}"]`).classList.add("active");
  });
});

const industries = {
  military: {
    image: "assets/industries/01-military-hd.png",
    alt: "中国军警服饰",
    kicker: "安全 · 保暖 · 抑菌",
    title: "为中国军警服饰构建全天候防护能力",
    description: "聚酰亚胺纤维兼具永久阻燃、离火自熄、不熔滴、轻量保暖与长效抑菌性能，适用于军用防护服、特战服、寒区作训服及配套用品。",
    tags: ["军用防护服", "特战作训服", "寒区服装", "军用用品"],
  },
  fire: {
    image: "assets/industries/02-fire-hd.png",
    alt: "消防与工业防护",
    kicker: "阻燃 · 隔热 · 不熔滴",
    title: "危急时刻的生命屏障",
    description: "极限氧指数达到38，高温下无明显形变，离火自熄且不产生熔滴，为消防、石化、电力、赛车及装甲作业人员提供可靠保护。",
    tags: ["消防防火服", "石化防护服", "飞行服", "赛车防燃服"],
  },
  aerospace: {
    image: "assets/industries/03-aerospace-hd.png",
    alt: "航空航天",
    kicker: "耐高低温 · 耐辐射 · 高绝缘",
    title: "经受航空航天极端环境考验",
    description: "聚酰亚胺具备耐高低温、耐辐射、高强度与高绝缘等综合性能，可服务于航天器、航空装备、宇航服及高可靠部件。",
    tags: ["航天器", "航空装备", "宇航服", "高可靠绝缘"],
  },
  warm: {
    image: "assets/industries/04-warm-hd.png",
    alt: "高端保暖服饰",
    kicker: "轻薄 · 保暖 · 舒适",
    title: "用更轻的材料，获得超越羊绒的暖度",
    description: "聚酰亚胺絮片克罗值达1.41，同等克重下兼顾轻薄和高保温表现，可用于防寒服、保暖内衣、围巾及服饰填充。",
    tags: ["保暖絮片", "防寒服", "保暖内衣", "围巾"],
  },
  medical: {
    image: "assets/industries/05-medical-hd.png",
    alt: "医疗健康",
    kicker: "生物亲和 · 抑菌 · 安全",
    title: "面向医疗与护理场景的安全纤维",
    description: "聚酰亚胺拥有良好的生物亲和性与原生抑菌能力，可拓展至医护人员服装、医院床单以及对安全性要求更高的健康材料。",
    tags: ["医护服装", "医院床单", "健康材料", "长效抑菌"],
  },
  health: {
    image: "assets/industries/06-health-gear-hd.png",
    alt: "保健护具",
    kicker: "远红外 · 均匀升温 · 微循环",
    title: "让保健护具获得原生远红外能力",
    description: "材料法向发射率达到0.88，可用于护腰、护肩、护腕等产品，实现均匀保暖并支持日常健康管理场景。",
    tags: ["护腰", "护肩", "护腕", "暖宫产品"],
  },
  maternal: {
    image: "assets/industries/07-maternal-hd.png",
    alt: "妇婴童用品",
    kicker: "亲肤 · 无毒 · 婴儿级安全",
    title: "为妇婴童用品提供第二肌肤般的安全",
    description: "通过Oeko-Tex Standard 100婴儿级别检测，结合无毒亲肤、轻暖与抗菌特性，适用于妇婴童服饰和贴身用品。",
    tags: ["婴童服饰", "贴身用品", "孕产用品", "亲肤材料"],
  },
  home: {
    image: "assets/industries/08-home-hd.png",
    alt: "家居睡眠",
    kicker: "轻暖 · 抑菌 · 睡眠环境",
    title: "把高性能纤维带入家居睡眠",
    description: "聚酰亚胺床品可结合轻薄保暖、远红外与抑菌特性，开发床单、床垫、被芯及其他高端功能家居产品。",
    tags: ["床单", "床垫", "被芯", "功能家纺"],
  },
  footwear: {
    image: "assets/industries/09-footwear-hd.png",
    alt: "功能鞋袜",
    kicker: "保暖 · 除臭 · 快速排汗",
    title: "为足部提供干爽、温暖与长效抑菌",
    description: "利用吸湿排汗、抗菌抑菌、远红外与保暖防寒性能，开发特勤袜、保健袜、鞋垫及寒区功能鞋靴。",
    tags: ["特勤袜", "保健袜", "功能鞋垫", "寒区鞋靴"],
  },
  electronics: {
    image: "assets/industries/10-electronics-hd.png",
    alt: "电子电气",
    kicker: "高绝缘 · 耐温 · 柔性",
    title: "支撑高可靠电子电气设备",
    description: "聚酰亚胺的高绝缘、耐温和柔性能力，可服务于精密电子线路板、柔性显示、移动设备与高可靠电气绝缘应用。",
    tags: ["柔性线路板", "柔性显示", "精密电子", "电气绝缘"],
  },
};

const industryImage = document.getElementById("industry-image");
const industryKicker = document.getElementById("industry-kicker");
const industryTitle = document.getElementById("industry-title");
const industryDescription = document.getElementById("industry-description");
const industryTags = document.getElementById("industry-tags");
let currentLanguage = "zh-CN";

function renderIndustry(key, animate = false) {
  const industry = industries[key];
  if (!industry) return;
  if (animate) industryImage.classList.add("switching");
  window.setTimeout(() => {
    industryImage.src = industry.image;
    industryImage.alt = translateText(industry.alt);
    industryKicker.textContent = translateText(industry.kicker);
    industryTitle.textContent = translateText(industry.title);
    industryDescription.textContent = translateText(industry.description);
    industryTags.innerHTML = industry.tags.map((tag) => `<span>${translateText(tag)}</span>`).join("");
    industryImage.classList.remove("switching");
  }, animate ? 130 : 0);
}

document.querySelectorAll("[data-industry]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!industries[button.dataset.industry]) return;
    document.querySelectorAll("[data-industry]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderIndustry(button.dataset.industry, true);
  });
});

const translations = {
  en: {
    "看人之大国际": "KRZD International",
    "关于我们": "About Us",
    "科研与检测": "Research & Testing",
    "联系我们": "Contact Us",
    "材料科技": "Materials Science",
    "国防科技材料池": "Defense Technology Materials Pool",
    "全球标准交付": "Global Standards Delivery",
    "产品": "Products",
    "行业": "Industries",
    "技术平台": "Technology Platform",
    "高科材料池": "Advanced Materials Pool",
    "检测与标准": "Testing & Standards",
    "看人之大": "KRZD",
    "语言": "Language",
    "菜单": "Menu",
    "联系专家": "Contact an Expert",
    "按产品浏览": "Browse by Product",
    "从代表材料开始": "Start With Representative Materials",
    "国防科技高科材料池": "Defense Technology Advanced Materials Pool",
    "查看全部材料": "View All Materials",
    "探索材料池": "Explore the Materials Pool",
    "聚酰亚胺 PI": "Polyimide PI",
    "本质阻燃、极致轻暖、亲肤抑菌": "Inherent flame resistance, lightweight warmth and antibacterial comfort",
    "纳米纤维膜 NANO": "Nanofiber Membrane NANO",
    "防水透湿、轻薄无感、物理微孔": "Waterproof, breathable, ultralight physical micropores",
    "玄武岩 BASALT": "Basalt Fiber BASALT",
    "轻量高强、耐温耐腐蚀、绿色不燃": "Lightweight strength, heat and corrosion resistance, non-combustible",
    "按行业浏览": "Browse by Industry",
    "解决真正困难的问题": "Solve the Problems That Matter",
    "查看全部行业": "View All Industries",
    "军警与应急防护": "Military, Police & Emergency Protection",
    "极端环境下的全维度生命防护": "Comprehensive protection in extreme environments",
    "汽车与先进制造": "Automotive & Advanced Manufacturing",
    "轻量化、耐久与关键材料国产化": "Lightweight durability and dependable material supply",
    "户外与功能服饰": "Outdoor & Performance Apparel",
    "防水、透气、保暖与舒适体验": "Waterproof, breathable, warm and comfortable",
    "搜索材料、行业或解决方案": "Search materials, industries or solutions",
    "例如：阻燃、防水透湿、汽车轻量化": "e.g. flame resistance, waterproof breathability, lightweighting",
    "搜索": "Search",
    "材料科学 · 全球交付": "MATERIAL SCIENCE · GLOBAL DELIVERY",
    "军工航天 · 国防科技高科材料池": "DEFENSE & AEROSPACE · ADVANCED MATERIALS POOL",
    "军工航天（国防科技）高科材料池": "DEFENSE & AEROSPACE ADVANCED MATERIALS POOL",
    "汇聚高科材料，": "Bringing Advanced Materials Together,",
    "服务极限场景。": "Built for Extreme Environments.",
    "以军工航天与国防科技需求为牵引，持续汇聚、验证并产业化高科材料。PI、NANO、BASALT 是当前重点，不是能力边界。": "Driven by defense and aerospace needs, we continuously discover, validate and industrialize advanced materials. PI, NANO and BASALT are current priorities, not the limits of our capabilities.",
    "探索高科材料池": "Explore the Advanced Materials Pool",
    "材料科技，": "Materials technology,",
    "应用于极限场景。": "built for extreme environments.",
    "材料科技，\n应用于极限场景。": "Materials technology,\nbuilt for extreme environments.",
    "将聚酰亚胺、纳米纤维膜与玄武岩复合技术组合起来，为产业创造下一代高性能解决方案。": "We combine polyimide, nanofiber membranes and basalt composite technologies to create the next generation of high-performance industrial solutions.",
    "探索技术平台": "Explore Technology Platform",
    "联系材料专家": "Contact a Materials Expert",
    "找到适合您的解决方案": "FIND THE RIGHT SOLUTION",
    "从产品、行业或技术开始": "Start With a Product, Industry or Technology",
    "像搭积木一样组合材料、工艺与应用经验，解决具体的产业挑战。": "Combine materials, processes and application expertise to solve specific industrial challenges.",
    "按产品": "By Product",
    "按行业": "By Industry",
    "按性能需求": "By Performance Need",
    "火与暖": "Fire & Warmth",
    "水与气": "Water & Air",
    "强与久": "Strength & Durability",
    "复合材料方案": "Composite Material Solutions",
    "探索更多高科材料": "Explore More Advanced Materials",
    "持续发现 · 引入 · 验证": "DISCOVER · INTRODUCE · VALIDATE",
    "军警防护": "Military & Police Protection",
    "安全与机动": "Safety & Mobility",
    "先进制造": "Advanced Manufacturing",
    "轻量与耐久": "Lightweight & Durable",
    "户外服饰": "Outdoor Apparel",
    "舒适与防护": "Comfort & Protection",
    "基建与海工": "Infrastructure & Marine",
    "耐腐蚀与寿命": "Corrosion Resistance & Service Life",
    "阻燃与保暖": "Flame Resistance & Warmth",
    "防水与透湿": "Waterproof & Breathable",
    "抗水压5级": "Grade 5 Hydrostatic Resistance",
    "轻量与高强": "Lightweight & High Strength",
    "强度为钢铝3–4倍": "3–4× the strength of steel or aluminum",
    "检测与合规": "Testing & Compliance",
    "科学，为真实世界服务": "SCIENCE FOR THE REAL WORLD",
    "军工航天科技，为真实世界服务": "DEFENSE & AEROSPACE TECHNOLOGY FOR THE REAL WORLD",
    "从航天级技术源头，走向可规模交付的产业方案。": "From aerospace-grade technology to scalable industrial delivery.",
    "从军工航天技术源头，构建持续扩展的高科材料池。": "Building a Continuously Expanding Advanced Materials Pool From Defense and Aerospace Technology.",
    "源于军工航天底层机理，构建极限场景材料谱系。": "Rooted in the Fundamental Science of Defense and Aerospace, Building a Materials Spectrum for Extreme Environments.",
    "我们持续连接国防科技成果、材料制造、检测标准与终端应用，发现更多材料，并将复杂技术转化为可获得、可验证、可规模交付的产业方案。": "We continuously connect defense technology, material manufacturing, testing standards and end applications to discover more materials and transform complex technologies into accessible, verifiable and scalable industrial solutions.",
    "了解我们的材料池能力": "Discover Our Materials Pool",
    "我们连接科研成果、材料制造、检测标准与终端应用，将复杂技术封装为合作伙伴能够获得、验证和持续迭代的解决方案。": "We connect research, manufacturing, testing standards and end applications, turning complex technology into solutions partners can obtain, verify and continuously improve.",
    "了解我们的科技平台": "Discover Our Technology Platform",
    "核心技术平台": "CORE TECHNOLOGY PLATFORM",
    "当前重点材料": "CURRENT PRIORITY MATERIALS",
    "三种材料，无数种可能。": "Three Materials. Endless Possibilities.",
    "不止三种材料，探索更多可能。": "Beyond Three Materials. Explore More Possibilities.",
    "材料不是孤立的产品。通过复合、验证与场景定制，它们共同构成面向极端环境的性能工具箱。": "Materials are not isolated products. Through compounding, validation and scenario customization, they form a performance toolkit for extreme environments.",
    "PI、NANO、BASALT 是高科材料池的当前重点入口。我们持续发现、引入、验证并组合更多军工航天与国防科技材料。": "PI, NANO and BASALT are current gateways into our advanced materials pool. We continuously discover, introduce, validate and combine more defense and aerospace materials.",
    "PI · 火与暖": "PI · FIRE & WARMTH",
    "聚酰亚胺": "Polyimide",
    "本质阻燃、极致轻暖、耐洗抑菌，为安全防护与高性能穿戴提供底层能力。": "Inherently flame-resistant, exceptionally light and warm, with durable antibacterial performance for protective and high-performance wearables.",
    "探索聚酰亚胺方案": "Explore Polyimide Solutions",
    "LOI 值 38%": "LOI 38%",
    "保暖克罗值 1.41": "Thermal insulation: 1.41 clo",
    "300次洗涤抑菌率仍 >99%": ">99% antibacterial rate after 300 washes",
    "NANO · 水与气": "NANO · WATER & AIR",
    "纳米纤维膜": "Nanofiber Membrane",
    "通过可控三维微孔，同时实现暴雨级防水与高效透湿，保持轻薄舒适。": "Controlled 3D micropores deliver storm-level waterproofing and efficient moisture transmission in a light, comfortable form.",
    "探索纳米膜方案": "Explore Nanofiber Solutions",
    "静水压 10000 mmH₂O": "Hydrostatic pressure: 10,000 mmH₂O",
    "透湿率 6500–8000 g/㎡·24h": "Moisture transmission: 6,500–8,000 g/㎡·24h",
    "单膜厚度约 10 微米": "Membrane thickness: approximately 10 μm",
    "BASALT · 强与久": "BASALT · STRENGTH & DURABILITY",
    "玄武岩纤维": "Basalt Fiber",
    "源于天然矿物的绿色高性能增强材料，为制造、交通和基础设施降低重量并延长寿命。": "A green, high-performance reinforcement from natural minerals that reduces weight and extends service life.",
    "探索玄武岩方案": "Explore Basalt Solutions",
    "-260℃ 至 650℃ 全域耐受": "Performance range: -260°C to 650°C",
    "抗拉强度为钢铝 3–4 倍": "Tensile strength: 3–4× steel or aluminum",
    "耐腐蚀、绝缘、绿色不燃": "Corrosion resistant, insulating and non-combustible",
    "聚酰亚胺 PI 应用领域": "POLYIMIDE PI APPLICATIONS",
    "高科材料池应用领域": "ADVANCED MATERIALS POOL APPLICATIONS",
    "我们做什么": "What We Do",
    "从中国军警服饰到医疗健康，聚酰亚胺以阻燃、轻暖、抑菌和远红外能力拓展应用可能性。": "From Chinese military and police apparel to healthcare, polyimide expands possibilities through flame resistance, lightweight warmth, antibacterial and far-infrared performance.",
    "从军警防护、航空航天到医疗健康，我们从持续扩展的材料池中按需匹配、组合并验证高性能解决方案。": "From military and police protection to aerospace and healthcare, we select, combine and validate high-performance solutions from a continuously expanding materials pool.",
    "中国军警服饰": "Chinese Military & Police Apparel",
    "消防与工业防护": "Fire & Industrial Protection",
    "航空航天": "Aerospace",
    "高端保暖服饰": "Premium Thermal Apparel",
    "医疗健康": "Medical & Healthcare",
    "保健护具": "Health Support Gear",
    "妇婴童用品": "Maternal, Infant & Children's Products",
    "家居睡眠": "Home & Sleep",
    "功能鞋袜": "Performance Footwear & Socks",
    "电子电气": "Electronics & Electrical",
    "咨询行业解决方案": "Discuss an Industry Solution",
    "安全 · 保暖 · 抑菌": "SAFETY · WARMTH · ANTIBACTERIAL",
    "为中国军警服饰构建全天候防护能力": "All-Weather Protection for Chinese Military and Police Apparel",
    "聚酰亚胺纤维兼具永久阻燃、离火自熄、不熔滴、轻量保暖与长效抑菌性能，适用于军用防护服、特战服、寒区作训服及配套用品。": "Polyimide fiber combines permanent flame resistance, self-extinguishing behavior, no melting or dripping, lightweight warmth and lasting antibacterial performance for protective uniforms, tactical apparel and cold-region equipment.",
    "军用防护服": "Protective Uniforms",
    "特战作训服": "Tactical Training Apparel",
    "寒区服装": "Cold-Region Apparel",
    "军用用品": "Military Equipment",
    "阻燃 · 隔热 · 不熔滴": "FLAME RESISTANT · HEAT INSULATING · NON-DRIPPING",
    "危急时刻的生命屏障": "A Life-Saving Barrier at Critical Moments",
    "极限氧指数达到38，高温下无明显形变，离火自熄且不产生熔滴，为消防、石化、电力、赛车及装甲作业人员提供可靠保护。": "With an LOI of 38, dimensional stability at high temperature, self-extinguishing behavior and no molten droplets, the material protects firefighters and industrial personnel.",
    "耐高低温 · 耐辐射 · 高绝缘": "EXTREME TEMPERATURE · RADIATION RESISTANT · INSULATING",
    "经受航空航天极端环境考验": "Engineered for Extreme Aerospace Environments",
    "聚酰亚胺具备耐高低温、耐辐射、高强度与高绝缘等综合性能，可服务于航天器、航空装备、宇航服及高可靠部件。": "Polyimide combines extreme-temperature and radiation resistance, high strength and electrical insulation for spacecraft, aerospace equipment and high-reliability components.",
    "轻薄 · 保暖 · 舒适": "LIGHTWEIGHT · WARM · COMFORTABLE",
    "用更轻的材料，获得超越羊绒的暖度": "More Warmth With Less Weight",
    "聚酰亚胺絮片克罗值达1.41，同等克重下兼顾轻薄和高保温表现，可用于防寒服、保暖内衣、围巾及服饰填充。": "Polyimide batting reaches a clo value of 1.41, combining low weight with outstanding thermal insulation for winter apparel and textile filling.",
    "生物亲和 · 抑菌 · 安全": "BIOCOMPATIBLE · ANTIBACTERIAL · SAFE",
    "面向医疗与护理场景的安全纤维": "A Safe Fiber for Medical and Care Environments",
    "聚酰亚胺拥有良好的生物亲和性与原生抑菌能力，可拓展至医护人员服装、医院床单以及对安全性要求更高的健康材料。": "Polyimide offers biocompatibility and inherent antibacterial performance for medical uniforms, hospital bedding and safety-focused healthcare materials.",
    "远红外 · 均匀升温 · 微循环": "FAR INFRARED · EVEN WARMTH · COMFORT",
    "让保健护具获得原生远红外能力": "Inherent Far-Infrared Performance for Support Gear",
    "材料法向发射率达到0.88，可用于护腰、护肩、护腕等产品，实现均匀保暖并支持日常健康管理场景。": "With normal emissivity reaching 0.88, the material supports even warmth in lumbar, shoulder and wrist support products.",
    "亲肤 · 无毒 · 婴儿级安全": "SKIN FRIENDLY · NON-TOXIC · INFANT SAFE",
    "为妇婴童用品提供第二肌肤般的安全": "Second-Skin Safety for Families",
    "通过Oeko-Tex Standard 100婴儿级别检测，结合无毒亲肤、轻暖与抗菌特性，适用于妇婴童服饰和贴身用品。": "Tested to Oeko-Tex Standard 100 infant level, combining skin-friendly comfort, light warmth and antibacterial performance.",
    "轻暖 · 抑菌 · 睡眠环境": "LIGHT WARMTH · ANTIBACTERIAL · SLEEP COMFORT",
    "把高性能纤维带入家居睡眠": "Bringing High-Performance Fiber Into the Home",
    "聚酰亚胺床品可结合轻薄保暖、远红外与抑菌特性，开发床单、床垫、被芯及其他高端功能家居产品。": "Polyimide bedding combines lightweight warmth, far-infrared and antibacterial properties for premium functional home textiles.",
    "保暖 · 除臭 · 快速排汗": "WARM · ODOR CONTROL · MOISTURE WICKING",
    "为足部提供干爽、温暖与长效抑菌": "Dry, Warm and Lastingly Fresh",
    "利用吸湿排汗、抗菌抑菌、远红外与保暖防寒性能，开发特勤袜、保健袜、鞋垫及寒区功能鞋靴。": "Moisture management, antibacterial, far-infrared and thermal performance enable functional socks, insoles and cold-region footwear.",
    "高绝缘 · 耐温 · 柔性": "HIGH INSULATION · HEAT RESISTANT · FLEXIBLE",
    "支撑高可靠电子电气设备": "Supporting High-Reliability Electronics",
    "聚酰亚胺的高绝缘、耐温和柔性能力，可服务于精密电子线路板、柔性显示、移动设备与高可靠电气绝缘应用。": "Polyimide's insulation, temperature resistance and flexibility support precision circuits, flexible displays and reliable electrical insulation.",
    "性能可测，价值可证": "MEASURABLE PERFORMANCE · PROVEN VALUE",
    "数据不只是报告，还是交付标准。": "Data Is More Than a Report. It Is a Delivery Standard.",
    "所有核心性能由权威实验室验证，并转化为材料选择、产品开发与质量交付过程中的共同语言。": "Core performance is verified by accredited laboratories and translated into shared standards for material selection, development and quality delivery.",
    "核心材料技术平台": "Core material technology platforms",
    "持续扩展": "EXPANDING",
    "军工航天与国防科技高科材料池": "Defense & aerospace advanced materials pool",
    "核心发明专利布局": "Core invention patent portfolio",
    "双重实验室认证体系": "Dual laboratory accreditation system",
    "重点产业应用领域": "Priority industrial application areas",
    "标准封装与全球交付": "STANDARDIZATION & GLOBAL DELIVERY",
    "材料可得，功能可测，应用可落地。": "Materials Available. Performance Measurable. Applications Deliverable.",
    "从技术授权、场景匹配、复合开发到供应链质量控制，为合作伙伴构建完整的材料商业化路径。": "From technology licensing and application matching to composite development and supply-chain quality control, we build a complete commercialization path.",
    "获取技术资料": "Request Technical Information",
    "我们不只提供材料。\n我们交付一套解决问题的方法。": "We Deliver More Than Materials.\nWe Deliver a Way to Solve Problems.",
    "我们不只提供材料。": "We Deliver More Than Materials.",
    "我们交付一套解决问题的方法。": "We Deliver a Way to Solve Problems.",
    "通过技术资源、资质标准、产业协同与供应链管理，看人之大将前沿材料科技转化为稳定、可验证、可规模化的产业能力。": "Through technology resources, qualification standards, industrial collaboration and supply-chain management, KRZD turns advanced materials into stable, verifiable and scalable capability.",
    "看人之大以军工航天与国防科技高科材料池为核心，通过材料发现、技术验证、资质标准、产业协同与供应链管理，将前沿科技转化为稳定、可验证、可规模化的产业能力。": "Centered on a defense and aerospace advanced materials pool, KRZD transforms frontier technologies into stable, verifiable and scalable industrial capabilities through material discovery, validation, standards, collaboration and supply-chain management.",
    "了解看人之大": "About KRZD",
    "材料与复合研发": "Materials & Composite R&D",
    "高科材料发现与验证": "Advanced Materials Discovery & Validation",
    "持续发现、筛选并验证军工航天与国防科技材料。": "Continuously discover, screen and validate defense and aerospace materials.",
    "材料复合与场景研发": "Material Integration & Application R&D",
    "围绕任务目标组合材料性能、结构与工艺。": "Combine material performance, structures and processes around mission goals.",
    "标准封装与供应链交付": "Standards Packaging & Supply-Chain Delivery",
    "围绕场景目标组合材料性能与工艺。": "Combine material performance and processes around application goals.",
    "检测与标准封装": "Testing & Standards Packaging",
    "把复杂技术变成可验证的产品指标。": "Turn complex technology into verifiable product metrics.",
    "产业与供应链交付": "Industrial & Supply-Chain Delivery",
    "连接原料、制造、质检与全球交付。": "Connect raw materials, manufacturing, quality control and global delivery.",
    "应用与商业支持": "Application & Commercial Support",
    "帮助合作伙伴完成从材料到市场的转化。": "Help partners move from materials to market.",
    "与材料专家交流": "TALK TO A MATERIALS EXPERT",
    "告诉我们您想解决的问题。": "Tell Us What You Need to Solve.",
    "从一个具体场景开始，我们将协助您完成材料选择、性能验证与应用方案设计。": "Start with a specific application. We will help with material selection, performance validation and solution design.",
    "深圳市看人之大科技有限公司": "Shenzhen Kanrenzhida Technology Co., Ltd.",
    "电话": "TEL",
    "邮箱": "EMAIL",
    "地址": "ADDRESS",
    "广东省东莞市东城街道莞长路东城段143号6栋兴华智慧城1101、1102室": "Rooms 1101 & 1102, Building 6, Xinghua Smart City, No. 143 Guanchang Road, Dongcheng, Dongguan, Guangdong, China",
    "姓名": "Name",
    "您的姓名": "Your name",
    "公司": "Company",
    "公司或机构名称": "Company or organization",
    "联系邮箱": "Email",
    "关注领域": "Area of Interest",
    "请选择": "Please select",
    "复合材料解决方案": "Composite Material Solutions",
    "更多高科材料合作": "More Advanced Materials Partnerships",
    "需要解决的问题": "Your Challenge",
    "请简要描述应用场景与性能需求": "Briefly describe your application and performance requirements",
    "提交需求": "Submit Inquiry",
    "能力": "Capabilities",
    "代表材料": "Representative Materials",
    "探索更多材料": "Explore More Materials",
    "行业方案": "Industry Solutions",
    "关于看人之大": "About KRZD",
    "全球许可合作": "Global Licensing",
    "材料科技，应用于极限场景。": "Materials technology for extreme environments.",
    "军工航天与国防科技高科材料池。": "Defense and aerospace advanced materials pool.",
    "军工航天（国防科技）高科材料池。": "Defense and aerospace advanced materials pool.",
    "© 2026 深圳市看人之大科技有限公司": "© 2026 Shenzhen Kanrenzhida Technology Co., Ltd.",
    "中国军工科技 · 全球标准交付": "Advanced Materials Technology · Global Standards Delivery"
  },
  ja: {
    "看人之大国际": "KRZDインターナショナル", "关于我们": "会社情報", "科研与检测": "研究・試験", "联系我们": "お問い合わせ",
    "产品": "製品", "行业": "産業分野", "技术平台": "技術プラットフォーム", "高科材料池": "先端材料プール", "检测与标准": "試験・規格", "看人之大": "KRZD", "语言": "言語", "菜单": "メニュー",
    "联系专家": "専門家に相談", "材料科技": "材料科学", "国防科技材料池": "防衛技術材料プール", "全球标准交付": "グローバル規格で提供",
    "材料科技，": "材料テクノロジー、", "应用于极限场景。": "極限環境へ。", "材料科技，\n应用于极限场景。": "極限環境のための\n材料テクノロジー。", "探索技术平台": "技術プラットフォームを見る", "联系材料专家": "材料専門家に相談",
    "从产品、行业或技术开始": "製品・産業・技術から探す", "按产品": "製品別", "按行业": "産業別", "按性能需求": "性能別",
    "军工航天 · 国防科技高科材料池": "防衛・航空宇宙 · 先端材料プール", "汇聚高科材料，": "先端材料を集め、", "服务极限场景。": "極限環境に応える。", "探索高科材料池": "先端材料プールを見る",
    "探索更多高科材料": "さらに先端材料を探る", "持续发现 · 引入 · 验证": "発見 · 導入 · 検証", "军工航天科技，为真实世界服务": "防衛・航空宇宙技術を実社会へ",
    "从军工航天技术源头，构建持续扩展的高科材料池。": "防衛・航空宇宙技術から、拡張し続ける先端材料プールへ。", "源于军工航天底层机理，构建极限场景材料谱系。": "防衛・航空宇宙の基礎原理に根ざし、極限環境の材料体系を構築する。", "当前重点材料": "現在の重点材料",
    "不止三种材料，探索更多可能。": "3つに限定せず、さらなる可能性へ。", "持续扩展": "継続拡張", "军工航天与国防科技高科材料池": "防衛・航空宇宙先端材料プール",
    "三种材料，无数种可能。": "3つの材料、無限の可能性。", "高科材料池应用领域": "先端材料プールの応用分野", "我们做什么": "事業分野",
    "中国军警服饰": "中国軍・警察向けウェア", "消防与工业防护": "消防・産業防護", "航空航天": "航空宇宙", "高端保暖服饰": "高機能防寒ウェア",
    "医疗健康": "医療・ヘルスケア", "保健护具": "健康サポート用品", "妇婴童用品": "マタニティ・ベビー用品", "家居睡眠": "ホーム・睡眠",
    "功能鞋袜": "機能性フットウェア", "电子电气": "電子・電気", "数据不只是报告，还是交付标准。": "データは報告書ではなく、納品基準です。",
    "我们不只提供材料。": "材料だけではありません。", "我们交付一套解决问题的方法。": "課題解決の方法を提供します。", "告诉我们您想解决的问题。": "解決したい課題をお聞かせください。", "与材料专家交流": "材料専門家に相談", "电话": "電話", "邮箱": "メール", "地址": "住所",
    "深圳市看人之大科技有限公司": "深圳市看人之大科技有限公司", "姓名": "お名前", "公司": "会社名", "联系邮箱": "メール", "关注领域": "関心分野",
    "请选择": "選択してください", "需要解决的问题": "解決したい課題", "提交需求": "送信", "语言": "言語"
  },
  ko: {
    "看人之大国际": "KRZD 인터내셔널", "关于我们": "회사 소개", "科研与检测": "연구 및 시험", "联系我们": "문의하기",
    "产品": "제품", "行业": "산업", "技术平台": "기술 플랫폼", "高科材料池": "첨단 소재 풀", "检测与标准": "시험 및 표준", "看人之大": "KRZD", "语言": "언어", "菜单": "메뉴",
    "联系专家": "전문가 문의", "材料科技": "소재 과학", "国防科技材料池": "국방 기술 소재 풀", "全球标准交付": "글로벌 표준 공급",
    "材料科技，": "소재 기술,", "应用于极限场景。": "극한 환경을 위해.", "材料科技，\n应用于极限场景。": "극한 환경을 위한\n소재 기술.", "探索技术平台": "기술 플랫폼 보기", "联系材料专家": "소재 전문가 문의",
    "从产品、行业或技术开始": "제품, 산업 또는 기술로 시작", "按产品": "제품별", "按行业": "산업별", "按性能需求": "성능별",
    "军工航天 · 国防科技高科材料池": "방산·항공우주 · 첨단 소재 풀", "汇聚高科材料，": "첨단 소재를 모아,", "服务极限场景。": "극한 환경에 제공합니다.", "探索高科材料池": "첨단 소재 풀 살펴보기",
    "探索更多高科材料": "더 많은 첨단 소재 탐색", "持续发现 · 引入 · 验证": "발굴 · 도입 · 검증", "军工航天科技，为真实世界服务": "방산·항공우주 기술을 현실 세계로",
    "从军工航天技术源头，构建持续扩展的高科材料池。": "방산·항공우주 기술에서 지속 확장되는 첨단 소재 풀로.", "源于军工航天底层机理，构建极限场景材料谱系。": "방산·항공우주의 기초 원리에서 출발해 극한 환경을 위한 소재 체계를 구축합니다.", "当前重点材料": "현재 핵심 소재",
    "不止三种材料，探索更多可能。": "세 가지를 넘어 더 많은 가능성을 탐색합니다.", "持续扩展": "지속 확장", "军工航天与国防科技高科材料池": "방산·항공우주 첨단 소재 풀",
    "三种材料，无数种可能。": "세 가지 소재, 무한한 가능성.", "高科材料池应用领域": "첨단 소재 풀 응용 분야", "我们做什么": "사업 분야",
    "中国军警服饰": "중국 군경 의류", "消防与工业防护": "소방 및 산업 보호", "航空航天": "항공우주", "高端保暖服饰": "프리미엄 보온 의류",
    "医疗健康": "의료 및 헬스케어", "保健护具": "헬스 서포트 기어", "妇婴童用品": "산모·유아 제품", "家居睡眠": "홈 및 수면",
    "功能鞋袜": "기능성 신발·양말", "电子电气": "전자 및 전기", "数据不只是报告，还是交付标准。": "데이터는 보고서를 넘어 납품 기준입니다.",
    "我们不只提供材料。": "소재만 제공하지 않습니다.", "我们交付一套解决问题的方法。": "문제를 해결하는 방법을 제공합니다.", "告诉我们您想解决的问题。": "해결하고 싶은 과제를 알려주세요.", "与材料专家交流": "소재 전문가와 상담", "电话": "전화", "邮箱": "이메일", "地址": "주소",
    "深圳市看人之大科技有限公司": "선전 칸런즈다 테크놀로지 유한회사", "姓名": "이름", "公司": "회사", "联系邮箱": "이메일", "关注领域": "관심 분야",
    "请选择": "선택하세요", "需要解决的问题": "해결 과제", "提交需求": "문의 제출", "语言": "언어"
  }
};

const languageNames = {
  "zh-CN": "中国 - 中文",
  en: "Global - English",
  ja: "日本 - 日本語",
  ko: "대한민국 - 한국어",
};

function translateText(source) {
  if (currentLanguage === "zh-CN") return source;
  return translations[currentLanguage]?.[source] ?? translations.en[source] ?? source;
}

const translatableNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let textNode;
while ((textNode = walker.nextNode())) {
  const source = textNode.nodeValue.trim();
  if (!source || textNode.parentElement?.closest("#industry-kicker, #industry-title, #industry-description, #industry-tags, .language-switcher")) continue;
  translatableNodes.push({ node: textNode, source, original: textNode.nodeValue });
}

const translatableAttributes = [];
document.querySelectorAll("[placeholder], [aria-label]").forEach((element) => {
  ["placeholder", "aria-label"].forEach((attribute) => {
    if (element.hasAttribute(attribute)) translatableAttributes.push({ element, attribute, source: element.getAttribute(attribute) });
  });
});

function applyLanguage(language) {
  currentLanguage = languageNames[language] ? language : "zh-CN";
  document.documentElement.lang = currentLanguage;
  translatableNodes.forEach(({ node, source, original }) => {
    node.nodeValue = original.replace(source, translateText(source));
  });
  translatableAttributes.forEach(({ element, attribute, source }) => element.setAttribute(attribute, translateText(source)));
  document.querySelectorAll(".language-label").forEach((label) => { label.textContent = languageNames[currentLanguage]; });
  document.querySelectorAll("[data-lang]").forEach((button) => button.classList.toggle("active", button.dataset.lang === currentLanguage));
  document.querySelectorAll(".mobile-language select").forEach((select) => { select.value = currentLanguage; });
  const activeIndustry = document.querySelector("[data-industry].active")?.dataset.industry || "military";
  renderIndustry(activeIndustry);
  document.title = currentLanguage === "zh-CN" ? "看人之大 | 军工航天（国防科技）高科材料池" : `KRZD | ${translateText("军工航天（国防科技）高科材料池")}`;
  try { localStorage.setItem("krzd-language", currentLanguage); } catch {}
}

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const switcher = button.closest(".language-switcher");
    const open = switcher.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });
});

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
    button.closest(".language-switcher").classList.remove("open");
  });
});

document.querySelectorAll(".mobile-language select").forEach((select) => {
  select.addEventListener("change", () => applyLanguage(select.value));
});

let initialLanguage = new URLSearchParams(window.location.search).get("lang");
if (!languageNames[initialLanguage]) {
  try { initialLanguage = localStorage.getItem("krzd-language"); } catch {}
}
applyLanguage(initialLanguage || "zh-CN");

document.addEventListener("click", (event) => {
  if (!event.target.closest(".main-bar")) closePanels();
  if (!event.target.closest(".language-switcher")) document.querySelectorAll(".language-switcher").forEach((switcher) => switcher.classList.remove("open"));
});

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});
