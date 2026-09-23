import type { Locale } from "./routes";

interface CareerFigure {
  src: string;
  alt: Record<Locale, string>;
  caption: Record<Locale, string>;
}

export const careerFigures: Record<string, CareerFigure[]> = {
  "ai4s-data-ml-dft-cuzn-catalyst": [{
    src: "/images/career/01-ai4s-data-ml-dft-unified-v4.png",
    alt: {
      zh: "Data–ML–DFT 教学框架：文献数据治理、按 DOI 分组的五折验证与 DFT 界面研究任务。",
      en: "Data–ML–DFT teaching framework: literature data curation, DOI-grouped five-fold validation and DFT interface studies."
    },
    caption: {
      zh: "通过文献数据治理、分组模型评价与候选复核，衔接 DFT 界面、吸附和活化研究任务。数据量依据项目论文，原子界面为模型示意。",
      en: "Literature data curation, grouped model evaluation and candidate review lead to DFT tasks on interfaces, adsorption and activation. Dataset counts come from the project manuscript; the atomic interface is schematic."
    }
  }],
  "supramolecular-hydrogel-assembly": [{
    src: "/images/career/02-hydrogel-enzyme-unified-v4.png",
    alt: {
      zh: "CES 酯酶触发凝胶前体转化，基元通过非共价作用组装成纤维，并开展胞内组装研究。",
      en: "CES esterase converts gelator precursors into assembling units, followed by noncovalent fiber assembly and intracellular studies."
    },
    caption: {
      zh: "酯酶响应前体转化为凝胶基元，通过非共价相互作用形成纤维网络，并结合细胞实验研究胞内组装行为。三臂模块为结构设计示意。",
      en: "Esterase-responsive precursors form gelator units that assemble into noncovalent fiber networks. Cell experiments investigate intracellular assembly; the three-arm modules represent the molecular design schematically."
    }
  }, {
    src: "/images/career/03-hydrogel-light-unified-v4.png",
    alt: {
      zh: "光照产酸催化腙凝胶基元形成及自组装，通过掩模控制凝胶形成区域。",
      en: "Light-induced acid generation catalyzes hydrazone gelator formation and self-assembly, with a mask controlling the gelled region."
    },
    caption: {
      zh: "光照触发产酸，酸催化腙凝胶基元形成及超分子组装；选择性照射实现凝胶形成区域的空间控制。此图与酯酶响应体系分别表达。",
      en: "Photoacid generation catalyzes hydrazone gelator formation and supramolecular assembly. Selective irradiation controls where gelation occurs. This light-triggered system is distinct from the esterase-responsive system above."
    }
  }],
  "dynamic-covalent-memory-plastics": [{
    src: "/images/career/04-dynamic-covalent-plastic-unified-v4.png",
    alt: {
      zh: "PU 共价自适应网络的临时形状恢复、永久重塑和热压再加工三个过程。",
      en: "Three processes in polyurethane adaptable networks: temporary shape recovery, permanent reshaping and hot-press reprocessing."
    },
    caption: {
      zh: "PU 共价自适应网络的热触发形状恢复、高温永久重塑与热压再加工。临时形状恢复与动态键交换引起的网络重构分别呈现。",
      en: "Thermally triggered shape recovery, permanent reshaping at elevated temperature and hot-press reprocessing in PU adaptable networks. Temporary shape recovery is distinguished from network reconfiguration through dynamic bond exchange."
    }
  }],
  "sodium-cathode-precursor-process": [{
    src: "/images/career/05-sodium-precursor-unified-v4.png",
    alt: {
      zh: "镍铁锰共沉淀、前驱体制备、补钠煅烧与独立的废液资源化支线。",
      en: "Ni–Fe–Mn coprecipitation, precursor preparation, sodium addition and calcination, with a separate wastewater resource-recovery branch."
    },
    caption: {
      zh: "通过共沉淀条件调控镍铁锰前驱体的颗粒生长，衔接补钠煅烧与正极材料制备，并探索废液副产物回收和母液回用。图为简化工艺示意。",
      en: "Coprecipitation conditions control Ni–Fe–Mn precursor growth before sodium addition and calcination. A separate route explores byproduct recovery and mother-liquor reuse. The process is shown schematically."
    }
  }],
  "saint-gobain-minhang-crl-ppc-internship": [{
    src: "/images/career/06-pva-abrasive-coating-unified-v4.png",
    alt: {
      zh: "氧化铝磨料的 PVA 包覆探索、桥联团聚与分散包覆目标，以及水稳定性评价。",
      en: "PVA coating trials on alumina abrasive grains, bridging agglomeration, the dispersed-coating target and water-stability evaluation."
    },
    caption: {
      zh: "氧化铝磨料表面 PVA 包覆探索，关注表面结合、水稳定性和桥联团聚之间的平衡。分散包覆作为工艺优化目标表达。",
      en: "PVA coating trials examine the balance between surface binding, water stability and polymer-bridging agglomeration. Dispersed coating is presented as a process-development target."
    }
  }, {
    src: "/images/career/07-tio2-sol-gel-unified-v4.png",
    alt: {
      zh: "TiO₂ 的溶胶形成、Sn 辅助路线、旋涂与固化，以及结构和光学表征。",
      en: "TiO₂ sol formation with an Sn-assisted route, spin coating, curing, and structural and optical characterization."
    },
    caption: {
      zh: "围绕 TiO₂ 涂层的溶胶凝胶制备，探索 Sn 辅助路线、分散成膜和后处理条件。改进样品的最终光学性能仍需测定。",
      en: "Sol–gel preparation of TiO₂ coatings explores an Sn-assisted route, film formation and post-treatment conditions. The final optical performance of the improved samples remains to be measured."
    }
  }],
  "chemistry-station-science-outreach": [{
    src: "/images/career/08-chemistry-outreach-unified-v4.png",
    alt: {
      zh: "紫甘蓝指示剂的定性变色、Cu/Zn 水果电池教学装置、实验课程与志愿教学。",
      en: "Qualitative red-cabbage indicator colors, a Cu/Zn fruit-cell teaching apparatus, experimental courses and volunteer teaching."
    },
    caption: {
      zh: "以紫甘蓝指示剂和水果电池为例，将趣味实验转化为课程和实验包，通过志愿教学传播化学知识。器材与颜色变化为定性示意。",
      en: "Red-cabbage indicators and fruit cells illustrate how hands-on experiments become courses and experiment kits for volunteer teaching. Apparatus and color changes are qualitative schematics."
    }
  }],
  "photochromic-azo-isomerization-dft": [{
    src: "/images/career/09-azo-isomerization-unified-v4.png",
    alt: {
      zh: "偶氮分子的 E/Z 构型，以及异构化路径、前线轨道和 TD-DFT/NTO 两条理论研究线。",
      en: "Azo E/Z configurations and two theoretical research branches: isomerization pathways and frontier-orbital/TD-DFT/NTO analysis."
    },
    caption: {
      zh: "围绕五种偶氮分子的 E/Z 构型，结合路径搜索与验证、前线轨道和 TD-DFT/NTO 分析，研究构型变化与光物理性质之间的联系。项目进行中，结构与轨道均为概念示意。",
      en: "An ongoing study of five azo molecules links E/Z configuration changes with photophysical properties using pathway validation, frontier orbitals and TD-DFT/NTO analysis. Structures and orbital symbols are conceptual."
    }
  }]
};
