
import { ProfileData, NewsItem, Publication, Education, Award } from './types';

export const PROFILE: ProfileData = {
  name: "Qinggang Wang",
  title: "Associate Professor",
  institution: "Huazhong University of Science and Technology (HUST)",
  email: "qgwang@hust.edu.cn",
  bio: "I am an Associate Professor at the School of Computer Science and Technology, Huazhong University of Science and Technology (HUST). My research focuses on hardware-software co-design for high-performance sparse intelligent computing systems, spanning from high-level algorithms and compilers to underlying hardware architectures. I have published over 28 academic papers in top-tier venues including MICRO, HPCA, SC, DAC, and ICDE. My work has been applied in industry leaders such as State Grid, Ping An Tech, and Alibaba.",
  interests: ["Computer Architecture", "Hardware-Software Co-design", "Graph Computing", "FPGA Acceleration", "Sparse Computing"],
  googleScholar: "https://scholar.google.com/citations?user=your_id",
  github: "https://github.com/CGCL-codes",
  dblp: "https://dblp.org/pid/273/1944.html",
  chineseUrl: "https://qgwang-hust.github.io/zh/"
};

export const NEWS: NewsItem[] = [
  { date: "May 2025", content: "Promoted to Associate Professor at Huazhong University of Science and Technology." },
  { date: "Mar 2025", content: "Selected for the CCF Architecture Dissertation Incentive Plan." },
  { date: "Feb 2025", content: "One paper accepted by HPCA 2026 on speculative decoding throughput." },
  { date: "Oct 2024", content: "One paper accepted by MICRO 2024 on dynamic memory management for FPGAs." },
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "Adaptive Draft Sequence Length: Enhancing Speculative Decoding Throughput on PIM-Enabled Systems",
    authors: "Runze Wang, Qinggang Wang*, Haifeng Liu, Long Zheng, Xiaofei Liao, Hai Jin, Jingling Xue",
    venue: "HPCA",
    year: 2026,
    tags: ["CCF-A"],
    url: "#",
    selected: true
  },
  {
    title: "Accelerating Out-of-Core Random Walk Processing Via Locality-Aware Algorithm-Hardware Co-Design",
    authors: "Hai Huang, Qinggang Wang*, Huize Li, Long Zheng, Liwei Si, Xu Zhao, Xiaofei Liao, Hai Jin, Jingling Xue",
    venue: "ACM TACO",
    year: 2025,
    tags: ["CCF-A"],
    url: "#",
    selected: true
  },
  {
    title: "Diff-MoE: Efficient Batched MoE Inference with Priority-Driven Differential Expert Caching",
    authors: "Kexin Li, Wenkan Huang, Qinggang Wang*, Long Zheng, Xiaofei Liao, Hai Jin, Jingling Xue",
    venue: "SC",
    year: 2025,
    tags: ["CCF-A"],
    url: "#",
    selected: true
  },
  {
    title: "A Scalable, Efficient, and Robust Dynamic Memory Management Library for HLS-based FPGAs",
    authors: "Qinggang Wang, Long Zheng*, Zhaozeng An, Shuyi Xiong, Runze Wang, Yu Huang, Pengcheng Yao, Xiaofei Liao, Hai Jin, Jingling Xue",
    venue: "MICRO",
    year: 2024,
    tags: ["CCF-A"],
    url: "#",
    selected: true
  },
  {
    title: "High-Performance and Resource-Efficient Dynamic Memory Management in High-Level Synthesis",
    authors: "Qinggang Wang, Long Zheng*, Zhaozeng An, Haoqin Huang, Haoran Zhu, Yu Huang, Pengcheng Yao, Xiaofei Liao, Hai Jin",
    venue: "DAC",
    year: 2024,
    tags: ["CCF-A"],
    url: "#",
    selected: true
  },
  {
    title: "A Data-Centric Accelerator for High-Performance Hypergraph Processing",
    authors: "Qinggang Wang, Long Zheng*, Ao Hu, Yu Huang, Pengcheng Yao, Chuangyi Gui, Xiaofei Liao, Hai Jin, Jingling Xue",
    venue: "MICRO",
    year: 2022,
    tags: ["CCF-A"],
    url: "#",
    selected: true
  },
  {
    title: "Hardware-Accelerated Hypergraph Processing with Chain-Driven Scheduling",
    authors: "Qinggang Wang, Long Zheng*, Jingrui Yuan, Yu Huang, Pengcheng Yao, Chuangyi Gui, Ao Hu, Xiaofei Liao, Hai Jin",
    venue: "HPCA",
    year: 2022,
    tags: ["CCF-A"],
    url: "#",
    selected: true
  },
  {
    title: "GraSU: A Fast Graph Update Library for FPGA-based Dynamic Graph Processing",
    authors: "Qinggang Wang, Long Zheng*, Yu Huang, Pengcheng Yao, Chuangyi Gui, Xiaofei Liao, Hai Jin, Wenbin Jiang, Fubing Mao",
    venue: "FPGA",
    year: 2021,
    tags: ["CCF-B"],
    url: "#",
    selected: true
  },
  {
    title: "PhGraph: A High-Performance ReRAM-Based Accelerator for Hypergraph Applications",
    authors: "Long Zheng, Ao Hu, Qinggang Wang*, Yu Huang, Haoqin Huang, Pengcheng Yao, Shuyi Xiong, Xiaofei Liao, Hai Jin",
    venue: "IEEE TCAD",
    year: 2024,
    tags: ["CCF-A"],
    url: "#",
    selected: false
  },
  {
    title: "MeHyper: Accelerating Hypergraph Neural Networks by Exploring Implicit Dataflows",
    authors: "Wenju Zhao, Pengcheng Yao, Dan Chen, Long Zheng, Xiaofei Liao, Qinggang Wang, Shaobo Ma, Yu Li, Hai Jin, Jingling Xue",
    venue: "HPCA",
    year: 2025,
    tags: ["CCF-A"],
    url: "#",
    selected: false
  }
];

export const AWARDS: Award[] = [
  { date: "2025", title: "CCF Architecture Dissertation Incentive Plan", institution: "China Computer Federation" },
  { date: "2025", title: "Bronze Medal, 3rd National Postdoctoral Innovation & Entrepreneurship Competition", institution: "National Team Leader" },
  { date: "2023", title: "ACM ChinaSys Best Doctoral Dissertation Award", institution: "ACM ChinaSys" },
  { date: "2023", title: "Gold Medal, 2nd National Postdoctoral Innovation & Entrepreneurship Competition" },
  { date: "2022", title: "National Champion, IEEE/MIT/Amazon Graph Challenge", institution: "Global Winner" },
  { date: "2021", title: "National Champion, IEEE/MIT/Amazon Graph Challenge", institution: "First time for China" },
  { date: "2021", title: "Best Paper Award, APPT Conference" }
];

export const EDUCATIONS: Education[] = [
  {
    school: "Huazhong University of Science and Technology (HUST)",
    degree: "Ph.D. in Computer Software and Theory",
    period: "2017 - 2023",
    description: "Advisor: Prof. Xiaofei Liao. Thesis: Research on High-Efficiency Graph Computing Systems."
  },
  {
    school: "Huazhong Agricultural University",
    degree: "B.Eng. in Computer Science and Technology",
    period: "2013 - 2017",
    description: "Honors Graduate."
  }
];
