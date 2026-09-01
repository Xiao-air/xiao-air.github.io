import type { Locale } from "./routes";

export type LocalizedText = Record<Locale, string>;

export interface SkillCredential {
  id: string;
  label: LocalizedText;
  description: LocalizedText;
  credential?: LocalizedText;
}

export interface SkillCredentialCategory {
  id: string;
  title: LocalizedText;
  items: SkillCredential[];
}

export interface CurrentFocusTheme {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface ExtracurricularTimelineGroup {
  year: string;
  items: Array<{
    id: string;
    title: LocalizedText;
    role: LocalizedText;
  }>;
}

export interface HonorAward {
  id: string;
  date: string;
  title: LocalizedText;
}

export interface HonorAwardYearGroup {
  year: string;
  items: HonorAward[];
}

export const extracurricularTimeline: ExtracurricularTimelineGroup[] = [
  {
    year: "2026",
    items: [
      {
        id: "hsy-lc-shenzhen-tf-manager-assistant",
        title: {
          zh: "哈佛 HSYLC 峰会-深圳",
          en: "Harvard HSYLC Summit Shenzhen"
        },
        role: {
          zh: "TF Manager Assistant",
          en: "TF Manager Assistant"
        }
      },
      {
        id: "ctb-shanghai-volunteer",
        title: {
          zh: "CTB 全球青年研究创新论坛-上海",
          en: "CTB Global Youth Research and Innovation Forum Shanghai"
        },
        role: {
          zh: "志愿者",
          en: "Volunteer"
        }
      }
    ]
  },
  {
    year: "2025",
    items: [
      {
        id: "hsy-lc-shenzhen-tf-volunteer",
        title: {
          zh: "哈佛 HSYLC 峰会-深圳",
          en: "Harvard HSYLC Summit Shenzhen"
        },
        role: {
          zh: "TF 志愿者",
          en: "TF Volunteer"
        }
      },
      {
        id: "ctb-global-fellow",
        title: {
          zh: "CTB 全球青年研究创新论坛",
          en: "CTB Global Youth Research and Innovation Forum"
        },
        role: {
          zh: "CTB Fellow",
          en: "CTB Fellow"
        }
      }
    ]
  },
  {
    year: "2024",
    items: [
      {
        id: "iees-student-union-president",
        title: {
          zh: "华东理工大学国际卓越工程师学院学生会主席团",
          en: "Student Union Presidium, International Elite Engineering School, ECUST"
        },
        role: {
          zh: "主席",
          en: "President"
        }
      },
      {
        id: "english-speech-debate-association",
        title: {
          zh: "English Speech and Debate Association",
          en: "English Speech and Debate Association"
        },
        role: {
          zh: "Speaker & Debater",
          en: "Speaker & Debater"
        }
      },
      {
        id: "olympic-qualifier-series-shanghai",
        title: {
          zh: "奥运会资格系列赛·上海",
          en: "Olympic Qualifier Series Shanghai"
        },
        role: {
          zh: "志愿者",
          en: "Volunteer"
        }
      }
    ]
  },
  {
    year: "2023",
    items: [
      {
        id: "ecust-yva-external-communications-lead",
        title: {
          zh: "华东理工大学青年志愿者协会 对外传讯中心",
          en: "ECUST Youth Volunteers Association, External Communications Center"
        },
        role: {
          zh: "组长",
          en: "Team Lead"
        }
      },
      {
        id: "iees-student-union-academic-head",
        title: {
          zh: "华东理工大学国际卓越工程师学院学生会 学术部",
          en: "Student Union Academic Department, International Elite Engineering School, ECUST"
        },
        role: {
          zh: "部门负责人",
          en: "Department Head"
        }
      },
      {
        id: "iees-freshman-supervisor",
        title: {
          zh: "华东理工大学国际卓越工程师学院",
          en: "International Elite Engineering School, ECUST"
        },
        role: {
          zh: "新生督导",
          en: "Freshman Supervisor"
        }
      }
    ]
  },
  {
    year: "2022",
    items: [
      {
        id: "ecust-yva-new-media-member",
        title: {
          zh: "华东理工大学青年志愿者协会 新媒体部",
          en: "ECUST Youth Volunteers Association, New Media Department"
        },
        role: {
          zh: "部员",
          en: "Member"
        }
      }
    ]
  }
];

export const honorsAwards: HonorAward[] = [
  {
    id: "shuoling-cup-grand-prize",
    date: "2026.07",
    title: {
      zh: '"烁灵杯"第二十届上海大学生化学实验竞赛暨实验创新设计竞赛 特等奖',
      en: '"Shuoling Cup" 20th Shanghai Undergraduate Chemistry Experiment and Innovation Design Competition, Grand Prize'
    }
  },
  {
    id: "outstanding-undergraduate-thesis",
    date: "2026.06",
    title: {
      zh: "本科优秀毕业论文（设计）",
      en: "Outstanding Undergraduate Thesis (Design)"
    }
  },
  {
    id: "ecust-student-of-year-nominee",
    date: "2026.05",
    title: {
      zh: "华东理工大学大学生年度人物 提名",
      en: "ECUST Student of the Year, Nominee"
    }
  },
  {
    id: "shanghai-outstanding-graduate",
    date: "2026.05",
    title: {
      zh: "上海市优秀毕业生",
      en: "Shanghai Outstanding Graduate"
    }
  },
  {
    id: "cheng-siwei-scholarship-first-prize",
    date: "2026.03",
    title: {
      zh: "成思危名誉校长奖学金 一等奖",
      en: "Cheng Siwei Honorary President Scholarship, First Prize"
    }
  },
  {
    id: "national-scholarship",
    date: "2025.12",
    title: {
      zh: "国家奖学金",
      en: "National Scholarship"
    }
  },
  {
    id: "ecust-excellent-scholarship-special-prize",
    date: "2025.12",
    title: {
      zh: "校优秀奖学金 特等奖",
      en: "University Excellent Scholarship, Special Prize"
    }
  },
  {
    id: "cicsc-shanghai-gold-higher-education",
    date: "2025.11",
    title: {
      zh: "中国国际大学生创新创业大赛上海市金奖（高教主赛道）",
      en: "China International College Students' Innovation Competition, Shanghai Gold Award (Higher Education Track)"
    }
  },
  {
    id: "ecust-outstanding-league-member-2025",
    date: "2025.05",
    title: {
      zh: "校优秀共青团员",
      en: "University Outstanding Communist Youth League Member"
    }
  },
  {
    id: "challenge-cup-school-special-shanghai-bronze",
    date: "2025.05",
    title: {
      zh: "“挑战杯”全国大学生课外学术科技作品竞赛校赛特等奖、上海市铜奖",
      en: "Challenge Cup National Undergraduate Extracurricular Academic Science and Technology Works Competition, University Special Prize and Shanghai Bronze Award"
    }
  },
  {
    id: "chemistry-changes-life-2024-first-prize",
    date: "2024.12",
    title: {
      zh: "2024 化学改变生活暨实验创新大赛校一等奖",
      en: "2024 Chemistry Changes Life and Experimental Innovation Competition, University First Prize"
    }
  },
  {
    id: "ecust-excellent-scholarship-third-prize-2024",
    date: "2024.12",
    title: {
      zh: "校优秀奖学金 三等奖",
      en: "University Excellent Scholarship, Third Prize"
    }
  },
  {
    id: "ecust-outstanding-student-cadre",
    date: "2024.12",
    title: {
      zh: "校优秀学生干部",
      en: "University Outstanding Student Cadre"
    }
  },
  {
    id: "cicsc-school-special-shanghai-silver-higher-education",
    date: "2024.11",
    title: {
      zh: "中国国际大学生创新创业大赛校赛特等奖、上海市银奖（高教主赛道）",
      en: "China International College Students' Innovation Competition, University Special Prize and Shanghai Silver Award (Higher Education Track)"
    }
  },
  {
    id: "cicsc-shanghai-silver-red-journey",
    date: "2024.11",
    title: {
      zh: "中国国际大学生创新创业大赛上海市银奖（红旅赛道）",
      en: "China International College Students' Innovation Competition, Shanghai Silver Award (Red Journey Track)"
    }
  },
  {
    id: "arkema-scholarship",
    date: "2024.11",
    title: {
      zh: "阿科玛奖学金",
      en: "Arkema Scholarship"
    }
  },
  {
    id: "twenty-first-century-cup-second-prize",
    date: "2024.05",
    title: {
      zh: "“21世纪杯”英语演讲比赛校二等奖",
      en: "21st Century Cup English Speaking Competition, University Second Prize"
    }
  },
  {
    id: "social-work-award-a",
    date: "2024.05",
    title: {
      zh: "社会工作奖 A 类",
      en: "Social Work Award, Category A"
    }
  },
  {
    id: "ecust-outstanding-league-member-2024",
    date: "2024.05",
    title: {
      zh: "校优秀共青团员",
      en: "University Outstanding Communist Youth League Member"
    }
  },
  {
    id: "ecust-outstanding-volunteer",
    date: "2024.05",
    title: {
      zh: "校优秀志愿者",
      en: "University Outstanding Volunteer"
    }
  },
  {
    id: "chemistry-changes-life-2023-second-prize",
    date: "2024.01",
    title: {
      zh: "2023 化学改变生活暨实验创新大赛校二等奖",
      en: "2023 Chemistry Changes Life and Experimental Innovation Competition, University Second Prize"
    }
  },
  {
    id: "social-work-award-c",
    date: "2023.12",
    title: {
      zh: "社会工作奖 C 类",
      en: "Social Work Award, Category C"
    }
  },
  {
    id: "ecust-excellent-scholarship-third-prize-2023",
    date: "2023.11",
    title: {
      zh: "校优秀奖学金 三等奖",
      en: "University Excellent Scholarship, Third Prize"
    }
  }
];

export const skillCredentialCategories: SkillCredentialCategory[] = [
  {
    id: "languages",
    title: {
      zh: "语言",
      en: "Languages"
    },
    items: [
      {
        id: "english-cet6",
        label: {
          zh: "英语",
          en: "English"
        },
        credential: {
          zh: "大学英语六级",
          en: "CET-6"
        },
        description: {
          zh: "支持英文资料阅读、跨语境表达和双语内容整理。",
          en: "Supports English reading, cross-context communication, and bilingual content work."
        }
      },
      {
        id: "french-delf-b2",
        label: {
          zh: "法语",
          en: "French"
        },
        credential: {
          zh: "DELF B2",
          en: "DELF B2"
        },
        description: {
          zh: "具备独立使用法语进行学习、交流和材料理解的基础。",
          en: "Provides a foundation for independent French study, communication, and material review."
        }
      }
    ]
  },
  {
    id: "research-methods",
    title: {
      zh: "科研方法",
      en: "Research Methods"
    },
    items: [
      {
        id: "dft-td-dft",
        label: {
          zh: "DFT / TD-DFT",
          en: "DFT / TD-DFT"
        },
        description: {
          zh: "用于分子构型、反应路径、能垒和光物理性质的理论研究。",
          en: "Used for theoretical studies of molecular geometries, reaction pathways, energy barriers, and photophysical properties."
        }
      },
      {
        id: "materials-characterization",
        label: {
          zh: "材料合成与表征",
          en: "Materials Synthesis and Characterization"
        },
        description: {
          zh: "参与水凝胶、钠电前驱体、动态共价材料和涂层路线相关实验设计与数据分析。",
          en: "Supports experiment design and data analysis across hydrogel, sodium-ion precursor, dynamic covalent material, and coating-route projects."
        }
      },
      {
        id: "literature-data-workflow",
        label: {
          zh: "文献与数据工作流",
          en: "Literature and Data Workflows"
        },
        description: {
          zh: "围绕文献检索、PDF 预处理、AI 数据提取、标准化质控和候选筛选组织研究流程。",
          en: "Organizes research through literature review, PDF preprocessing, AI-assisted extraction, standardized quality review, and candidate screening."
        }
      }
    ]
  },
  {
    id: "project-practice",
    title: {
      zh: "项目实践",
      en: "Project Practice"
    },
    items: [
      {
        id: "project-leadership",
        label: {
          zh: "项目负责与推进",
          en: "Project Leadership"
        },
        description: {
          zh: "在 AI4S 教学设计、理论计算研究和科普实践中负责目标拆解、节奏安排与阶段性交付。",
          en: "Leads goal breakdown, cadence planning, and staged delivery across AI4S teaching design, theoretical computation, and outreach projects."
        }
      },
      {
        id: "scientific-communication",
        label: {
          zh: "科研表达与汇报",
          en: "Scientific Communication"
        },
        description: {
          zh: "将文献理解、实验路线和研究结果整理成汇报、竞赛材料与教学转化文本。",
          en: "Turns literature understanding, experimental routes, and research results into presentations, competition materials, and teaching-oriented writing."
        }
      },
      {
        id: "science-outreach",
        label: {
          zh: "科普与组织协作",
          en: "Outreach and Coordination"
        },
        description: {
          zh: "参与公益化学课程设计，并组织多校志愿者开展跨地区科普实践。",
          en: "Supports public-interest chemistry course design and coordinates multi-university volunteers across regions."
        }
      }
    ]
  }
];

export const currentFocusThemes: CurrentFocusTheme[] = [
  {
    id: "computational-chemistry",
    title: {
      zh: "计算化学与光响应机制",
      en: "Computational Chemistry and Photoresponse Mechanisms"
    },
    description: {
      zh: "聚焦偶氮材料 Z/E 异构化路径、能垒、构象耦合与光物理性质之间的关系。",
      en: "Focusing on relationships among Z/E isomerization pathways, energy barriers, conformational coupling, and photophysical properties in azo materials."
    }
  },
  {
    id: "ai4s-research-workflow",
    title: {
      zh: "AI4S 与 Data-ML-DFT 工作流",
      en: "AI4S and Data-ML-DFT Workflows"
    },
    description: {
      zh: "探索从文献数据到机器学习筛选和 DFT 验证的可追溯研究流程与教学转化。",
      en: "Exploring traceable research and teaching workflows from literature data to machine-learning screening and DFT validation."
    }
  },
  {
    id: "materials-and-education",
    title: {
      zh: "材料化学与实验教学创新",
      en: "Materials Chemistry and Experimental Teaching Innovation"
    },
    description: {
      zh: "关注材料体系的实验路线设计、性能表征，以及科研前沿向本科教学与科普实践的转化。",
      en: "Connecting experimental route design and characterization in materials systems with undergraduate teaching and science outreach."
    }
  }
];

export function localize(text: LocalizedText, locale: Locale) {
  return text[locale];
}

export function groupHonorsByYear(awards: HonorAward[] = honorsAwards): HonorAwardYearGroup[] {
  const grouped = new Map<string, HonorAward[]>();

  for (const award of awards) {
    const year = award.date.split(".")[0];
    grouped.set(year, [...(grouped.get(year) ?? []), award]);
  }

  return Array.from(grouped, ([year, items]) => ({ year, items }));
}
