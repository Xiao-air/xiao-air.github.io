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
    id: "technical-tools",
    title: {
      zh: "技术与工具",
      en: "Technical and Tool Skills"
    },
    items: [
      {
        id: "python",
        label: {
          zh: "Python",
          en: "Python"
        },
        description: {
          zh: "用于数据处理、自动化脚本和 AI 辅助工作流探索。",
          en: "Used for data processing, automation scripts, and AI-assisted workflow exploration."
        }
      },
      {
        id: "excel",
        label: {
          zh: "Excel",
          en: "Excel"
        },
        description: {
          zh: "用于结构化整理、分析和可复用工作表搭建。",
          en: "Used for structured organization, analysis, and reusable workbook setup."
        }
      },
      {
        id: "ai-tools",
        label: {
          zh: "AI 工具",
          en: "AI Tools"
        },
        description: {
          zh: "用于研究、写作、复盘和个人知识系统维护。",
          en: "Used for research, writing, retrospectives, and personal knowledge-system maintenance."
        }
      }
    ]
  },
  {
    id: "work-skills",
    title: {
      zh: "工作能力",
      en: "Work Skills"
    },
    items: [
      {
        id: "data-analysis",
        label: {
          zh: "数据分析",
          en: "Data Analysis"
        },
        description: {
          zh: "把问题拆成可观察指标，用事实支持判断和优先级排序。",
          en: "Turns problems into observable signals that support judgment and prioritization."
        }
      },
      {
        id: "project-delivery",
        label: {
          zh: "项目推进",
          en: "Project Delivery"
        },
        description: {
          zh: "围绕目标、节奏、协作边界和阶段性交付推进工作。",
          en: "Moves work through goals, cadence, collaboration boundaries, and staged delivery."
        }
      },
      {
        id: "knowledge-management",
        label: {
          zh: "知识管理",
          en: "Knowledge Management"
        },
        description: {
          zh: "把经验、材料和方法沉淀成可检索、可复用的长期资产。",
          en: "Turns experience, materials, and methods into searchable, reusable long-term assets."
        }
      }
    ]
  }
];

export const currentFocusThemes: CurrentFocusTheme[] = [
  {
    id: "ai-assisted-workflows",
    title: {
      zh: "AI 辅助研究与工作流",
      en: "AI-Assisted Research and Workflows"
    },
    description: {
      zh: "探索用 AI 帮助整理经历、研究问题、复盘项目，并减少重复性工作。",
      en: "Exploring AI support for organizing experience, researching questions, reviewing projects, and reducing repetitive work."
    }
  },
  {
    id: "personal-knowledge-management",
    title: {
      zh: "个人知识管理",
      en: "Personal Knowledge Management"
    },
    description: {
      zh: "把项目经验、学习材料和方法论沉淀成长期可检索的知识结构。",
      en: "Turning project experience, learning material, and working methods into a searchable long-term knowledge structure."
    }
  },
  {
    id: "portfolio-evidence-curation",
    title: {
      zh: "作品与证据整理",
      en: "Portfolio and Evidence Curation"
    },
    description: {
      zh: "把公开安全的成果、技能和项目复盘整理成可展示的职业材料。",
      en: "Curating public-safe outcomes, skills, and retrospectives into presentable career material."
    }
  }
];

export function localize(text: LocalizedText, locale: Locale) {
  return text[locale];
}
