
import { ProfileData, NewsItem, Publication, Education, Award } from './types';

export const PROFILE: ProfileData = {
  name: "Qinggang Wang",
  title: "Associate Professor",
  institution: "Huazhong University of Science and Technology (HUST)",
  email: "qgwang@hust.edu.cn",
  bio: "I am an Associate Professor in the School of Computer Science and Technology at Huazhong University of Science and Technology (HUST). I received my Ph.D. degree from HUST under the supervision of Prof. Xiaofei Liao. From March 2023 to March 2025, I worked as a Postdoctoral Researcher at Zhejiang Lab, advised by Prof. Hai Jin. My research interests focus on hardware–software co-design for energy-efficient sparse computing, with particular emphasis on graph processing and large language model (LLM) inference. I have published approximately 30 academic papers in top-tier international conferences and journals, including MICRO, HPCA, SC, DAC, ICDE, FPGA, ACM TACO, and IEEE TCAD.\n\nI am now looking for perspective Undergraduate Students and Master Students. If you are passionate about the above research areas and interested in working with me, please feel free to contact me via email.",
  interests: ["Accelerator", "Hardware-Software Co-design", "Graph Processing", "LLM Inference"],
  googleScholar: "https://scholar.google.com/citations?user=TbomW9sAAAAJ&hl=zh-CN",
  github: "https://github.com/qgwang-hust",
  dblp: "https://dblp.org/pid/15/457.html",
  chineseUrl: "https://qgwang-hust.github.io/zh/"
};

export const NEWS: NewsItem[] = [
  { date: "Nov 2025", content: "Our paper “Accelerating Out-of-Core Random Walk Processing via Locality-Aware Algorithm-Hardware Co-Design” is accepted by ACM TACO!" },
  { date: "Nov 2025", content: "Our paper “Adaptive Draft Sequence Length: Enhancing Speculative Decoding Throughput on PIM-Enabled Systems” is accepted by HPCA 2026!" },
  { date: "Jun 2025", content: "Our paper “Diff-MoE: Efficient Batched MoE Inference with Priority-Driven Differential Expert Caching” is accepted by SC 2025!" },
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
    url: "https://doi.org/10.1145/3779123",
    selected: true
  },
  {
    title: "Diff-MoE: Efficient Batched MoE Inference with Priority-Driven Differential Expert Caching",
    authors: "Kexin Li, Wenkan Huang, Qinggang Wang*, Long Zheng, Xiaofei Liao, Hai Jin, Jingling Xue",
    venue: "SC",
    year: 2025,
    tags: ["CCF-A"],
    url: "https://doi.org/10.1145/3712285.3759903",
    selected: true
  },
  {
    title: "Geans: A GPU-accelerated Framework for Efficient End-to-End Anonymized Network Sensing",
    authors: "Jun Mai, Qinggang Wang*, Yu Huang, Pengcheng Yao, Long Zheng, Xiaofei Liao, Hai Jin",
    venue: "HPEC",
    year: 2025,
    tags: ["IEEE/MIT/Amazon GraphChallenge"],
    url: "https://doi.org/10.1109/HPCA61900.2025.00073",
    selected: false
  },
  {
    title: "MeHyper: Accelerating Hypergraph Neural Networks by Exploring Implicit Dataflows",
    authors: "Wenju Zhao, Pengcheng Yao, Dan Chen, Long Zheng, Xiaofei Liao, Qinggang Wang, Shaobo Ma, Yu Li, Haifeng Liu, Wenjing Xiao, Yufei Sun, Bin Zhu, Hai Jin, Jingling Xue",
    venue: "HPCA",
    year: 2025,
    tags: ["CCF-A"],
    url: "https://doi.org/10.1109/HPCA61900.2025.00073",
    selected: false
  },
  {
    title: "A Scalable, Efficient, and Robust Dynamic Memory Management Library for HLS-based FPGAs",
    authors: "Qinggang Wang, Long Zheng*, Zhaozeng An, Shuyi Xiong, Runze Wang, Yu Huang, Pengcheng Yao, Xiaofei Liao, Hai Jin, Jingling Xue",
    venue: "MICRO",
    year: 2024,
    tags: ["CCF-A"],
    url: "https://doi.org/10.1109/MICRO61859.2024.00040",
    selected: true
  },
  {
    title: "High-Performance and Resource-Efficient Dynamic Memory Management in High-Level Synthesis",
    authors: "Qinggang Wang, Long Zheng*, Zhaozeng An, Haoqin Huang, Haoran Zhu, Yu Huang, Pengcheng Yao, Xiaofei Liao, Hai Jin",
    venue: "DAC",
    year: 2024,
    tags: ["CCF-A"],
    url: "https://doi.org/10.1145/3649329.3655945",
    selected: true
  },
  {
    title: "PhGraph: A High-Performance ReRAM-Based Accelerator for Hypergraph Applications",
    authors: "Long Zheng, Ao Hu, Qinggang Wang*, Yu Huang, Haoqin Huang, Pengcheng Yao, Shuyi Xiong, Xiaofei Liao, Hai Jin",
    venue: "IEEE TCAD",
    year: 2024,
    tags: ["CCF-A"],
    url: "https://doi.org/10.1109/TCAD.2023.3343228",
    selected: true
  },
  {
    title: "An Efficient GCNs Accelerator Using 3D-Stacked Processing-In-Memory Architectures",
    authors: "Runze Wang, Ao Hu, Long Zheng, Qinggang Wang, Jingrui Yuan, Haifeng Liu, Linchen Yu, Xiaofei Liao, Hai Jin",
    venue: "IEEE TCAD",
    year: 2024,
    tags: ["CCF-A"],
    url: "https://doi.org/10.1109/TCAD.2023.3341753",
    selected: false
  },
  {
    title: "AFaVS: Accurate Yet Fast Version Switching for Graph Processing Systems",
    authors: "Long Zheng, Xiangyu Ye, Haifeng Liu, Qinggang Wang, Yu Huang, Chuangyi Gui, Pengcheng Yao, Xiaofei Liao, Hai Jin, Jingling Xue",
    venue: "ICDE",
    year: 2023,
    tags: ["CCF-A"],
    url: "https://doi.org/10.1109/ICDE55515.2023.00012",
    selected: false
  },
  {
    title: "MeG2: In-Memory Acceleration for Genome Graphs Analysis",
    authors: "Yu Huang, Long Zheng, Haifeng Liu, Zhuoran Zhou, Dan Chen, Pengcheng Yao, Qinggang Wang, Xiaofei Liao, Hai Jin",
    venue: "DAC",
    year: 2023,
    tags: ["CCF-A"],
    url: "https://doi.org/10.1109/DAC56929.2023.10247956",
    selected: false
  },
  {
    title: "A Data-Centric Accelerator for High-Performance Hypergraph Processing",
    authors: "Qinggang Wang, Long Zheng*, Ao Hu, Yu Huang, Pengcheng Yao, Chuangyi Gui, Xiaofei Liao, Hai Jin, Jingling Xue",
    venue: "MICRO",
    year: 2022,
    tags: ["CCF-A"],
    url: "https://doi.org/10.1109/MICRO56248.2022.00088",
    selected: true
  },
  {
    title: "Hardware-Accelerated Hypergraph Processing with Chain-Driven Scheduling",
    authors: "Qinggang Wang, Long Zheng*, Jingrui Yuan, Yu Huang, Pengcheng Yao, Chuangyi Gui, Ao Hu, Xiaofei Liao, Hai Jin",
    venue: "HPCA",
    year: 2022,
    tags: ["CCF-A"],
    url: "https://doi.org/10.1109/HPCA53966.2022.00022",
    selected: true
  },
  {
    title: "ScalaGraph: A Scalable Accelerator for Massively Parallel Graph Processing",
    authors: "Pengcheng Yao, Long Zheng, Yu Huang, Qinggang Wang, Chuangyi Gui, Zheng Zeng, Xiaofei Liao, Hai Jin, Jingling Xue",
    venue: "HPCA",
    year: 2022,
    tags: ["CCF-A"],
    url: "https://doi.org/10.1109/HPCA53966.2022.00023",
    selected: false
  },
  {
    title: "Accelerating Graph Convolutional Networks Using Crossbar-based Processing-In-Memory Architectures",
    authors: "Yu Huang, Long Zheng, Pengcheng Yao, Qinggang Wang, Xiaofei Liao, Hai Jin, Jingling Xue",
    venue: "HPCA",
    year: 2022,
    tags: ["CCF-A"],
    url: "https://doi.org/10.1109/HPCA53966.2022.00079",
    selected: false
  },
  {
    title: "ReaDy: A ReRAM-based Processing-In-Memory Accelerator for Dynamic Graph Convolution Networks",
    authors: "YYu Huang, Long Zheng, Pengcheng Yao, Qinggang Wang, Haifeng Liu, Xiaofei Liao, Hai Jin, Jingling Xue",
    venue: "IEEE TCAD",
    year: 2022,
    tags: ["CCF-A"],
    url: "https://doi.org/10.1109/TCAD.2022.3199152",
    selected: false
  },
  {
    title: "A General Offloading Approach for Processing-In-Memory Architectures",
    authors: "Dan Chen, Hai Jin, Long Zheng, Yu Huang, Pengcheng Yao, Chuangyi Gui, Qinggang Wang, Haifeng Liu, Haiheng He, Xiaofei Liao, Ran Zheng",
    venue: "IPDPS",
    year: 2022,
    tags: ["CCF-B"],
    url: "https://doi.org/10.1109/IPDPS53621.2022.00032",
    selected: false
  },
  {
    title: "Accelerating Sparse Deep Neural Network Inference Using GPU Tensor Cores",
    authors: "Xufei Sun, Long Zheng, Qinggang Wang, Xiangyu Ye, Yu Huang, Pengcheng Yao, Xiaofei Liao, Hai Jin",
    venue: "HPEC",
    year: 2022,
    tags: ["IEEE/MIT/Amazon Graph Challenge 2022 Champion"],
    url: "https://doi.org/10.1109/HPEC55821.2022.9926300",
    selected: true
  },
  {
    title: "GraSU: A Fast Graph Update Library for FPGA-based Dynamic Graph Processing",
    authors: "Qinggang Wang, Long Zheng, Yu Huang, Pengcheng Yao, Chuangyi Gui, Xiaofei Liao, Hai Jin, Wenbin Jiang, Fubing Mao",
    venue: "FPGA",
    year: 2021,
    tags: ["CCF-B"],
    url: "https://doi.org/10.1145/3431920.343928",
    selected: true
  },
  {
    title: "FDGLib: A Communication Library for Efficient Large-Scale Graph Processing in FPGA-Accelerated Data Centers",
    authors: "Yuwei Wu, Qinggang Wang, Long Zheng, Xiaofei Liao, Hai Jin, Wenbin Jiang, Ran Zheng, Kan Hu",
    venue: "JCST",
    year: 2021,
    tags: ["APPT 2021 Best Paper Award, CCF-B"],
    url: "https://link.springer.com/article/10.1007/s11390-021-1242-y",
    selected: true
  },
  {
    title: "SumPA: Efficient Pattern-Centric Graph Mining with Pattern Abstraction",
    authors: "Chuangyi Gui, Xiaofei Liao, Long Zheng, Pengcheng Yao, Qinggang Wang, Hai Jin",
    venue: "PACT",
    year: 2021,
    tags: ["CCF-B"],
    url: "https://doi.org/10.1109/PACT52795.2021.00030",
    selected: false
  },
  {
    title: "Fast Sparse Deep Neural Network Inference with Flexible SpMM Optimization Space Exploration",
    authors: "Jie Xin, Xianqi Ye, Long Zheng, Qinggang Wang, Yu Huang, Pengcheng Yao, Linchen Yu, Xiaofei Liao, Hai Jin",
    venue: "HPEC",
    year: 2021,
    tags: ["IEEE/MIT/Amazon Graph Challenge 2021 Champion"],
    url: "https://doi.org/10.1109/HPEC49654.2021.9622791",
    selected: true
  },
  {
    title: "Productive High-Performance k-Truss Decomposition on GPU Using Linear Algebra",
    authors: "Runze Wang, Linchen Yu, Qinggang Wang, Jie Xin, Long Zheng",
    venue: "HPEC",
    year: 2021,
    tags: ["IEEE/MIT/Amazon Graph Challenge 2021 Innovation Award"],
    url: "https://doi.org/10.1109/HPEC49654.2021.9622792",
    selected: false
  },
  {
    title: "A Conflict-free Scheduler for High-performance Graph Processing on Multi-pipeline FPGAs",
    authors: "Qinggang Wang, Long Zheng, Jieshan Zhao, Xiaofei Liao, Hai Jin, Jingling Xue",
    venue: "ACM TACO",
    year: 2020,
    tags: ["CCF-A"],
    url: "https://doi.org/10.1145/3390523",
    selected: true
  },
  {
    title: "Spara: An Energy-Efficient ReRAM-Based Accelerator for Sparse Graph Analytics Applications",
    authors: "Long Zheng, Jieshan Zhao, Yu Huang, Qinggang Wang, Zhen Zeng, Jingling Xue, Xiaofei Liao, Hai Jin",
    venue: "IPDPS",
    year: 2020,
    tags: ["CCF-B"],
    url: "https://doi.org/10.1109/IPDPS47924.2020.00077",
    selected: false
  },
  {
    title: "Scalable Concurrency Debugging with Distributed Graph Processing",
    authors: "Long Zheng, Xiaofei Liao, Hai Jin, Jieshan Zhao, Qinggang Wang",
    venue: "CGO",
    year: 2018,
    tags: ["CCF-B"],
    url: "https://doi.org/10.1145/3168817",
    selected: false
  },
];

export const AWARDS: Award[] = [
  { date: "2025", title: "Outstanding Doctoral Dissertation Award of CCF TCARCH"},
  { date: "2023", title: "ACM ChinaSys Doctoral Dissertation Award", institution: "(only 3 students)" },
  { date: "2023", title: "International Open Benchmark Council Top 100 Chips Achievement Award" },
  { date: "2023", title: "Won the Gold Award at the 3rd National Postdoctoral Innovation & Entrepreneurship Competition" },
  { date: "2021", title: "IEEE/MIT/Amazon GraphChallenge Champion", institution: "First time in China" },
  { date: "2021", title: "APPT 2021 Best Paper Award" }
];

export const EDUCATIONS: Education[] = [
  {
    school: "Huazhong University of Science and Technology (HUST)",
    degree: "Ph.D. in Computer Software and Theory",
    period: "2017.9 - 2023.3",
    description: "Advisor: Prof. Xiaofei Liao"
  },
  {
    school: "Huazhong Agricultural University (HZAU)",
    degree: "B.Eng. in Computer Science and Technology",
    period: "2013.9 - 2017.6",
    description: "Honors Graduate."
  }
];
