// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'duypham2108', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Duy Pham profile',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'BiomedicalMachineLearning/stLearn',
          'BiomedicalMachineLearning/VGP',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: { title: 'Duy Pham Portfolio', description: '', imageURL: '' },
  social: {
    linkedin: 'duy-pham2108',
    x: 'DuyTruongPham',
    email: 'phamduychv94@gmail.com',
  },
  resume: {},
  skills: [
    'Computational biology',
    'Host-pathogen interaction',
    'AI in biology',
    'Spatial transcriptomics',
    'Single cell RNA-seq',
  ],
  experiences: [
    {
      company:
        'Teichmann Lab, Cambridge Stem Cell Institute - University of Cambridge',
      position: 'Senior Computational Biologist/Postdoctoral Researcher',
      from: 'September 2023',
      to: 'Present',
      companyLink: 'https://www.teichlab.org/',
    },
    {
      company:
        'Genomics and Machine Learning Lab, The University of Queensland',
      position: 'PhD Student',
      from: 'September 2019',
      to: 'July 2023',
      companyLink:
        'https://www.qimrb.edu.au/researchers-and-labs/genomics-and-machine-learning-lab',
    },
    {
      company: 'BigData Team, FPT Telecom Ho Chi Minh',
      position: 'Data Scientist',
      from: 'July 2017',
      to: 'May 2019',
      companyLink: 'https://fpt.vn',
    },
    {
      company: 'Computational Biology Center, FPT Telecom Ho Chi Minh',
      position: 'Research Assistant',
      from: 'Feb 2016',
      to: 'Oct 2019',
      companyLink: 'https://hcmiu.edu.vn/',
    },
  ],
  educations: [
    {
      institution:
        'Institute for Molecular Bioscience, University of Queensland',
      degree: 'PhD',
      from: '2019',
      to: '2023',
    },
    {
      institution: 'University of Science and Technology of Hanoi',
      degree: 'Bachelor of Biotechnology and Pharmacology',
      from: '2012',
      to: '2015',
    },
  ],
  publications: [
    {
      title:
        'Robust mapping of spatiotemporal trajectories and cell–cell interactions in healthy and diseased tissues',
      conferenceName: '',
      journalName: 'Nature Communications',
      authors:
        'Duy Pham, Xiao Tan, Brad Balderson, Jun Xu, Laura F Grice, Sohye Yoon, Emily F Willis, Minh Tran, Pui Yeng Lam, Arti Raghubar, Priyakshi Kalita-de Croft, Sunil Lakhani, Jana Vukovic, Marc J Ruitenberg, Quan H Nguyen',
      link: 'https://www.nature.com/articles/s41467-023-43120-6',
      description:
        'Spatial transcriptomics (ST) technologies generate multiple data types from biological samples, namely gene expression, physical distance between data points, and/or tissue morphology. Here we developed three computational-statistical algorithms that integrate all three data types to advance understanding of cellular processes. First, we present a spatial graph-based method, pseudo-time-space (PSTS), to model and uncover relationships between transcriptional states of cells across tissues undergoing dynamic change (e.g. neurodevelopment, brain injury and/or microglia activation, and cancer progression). We further developed a spatially-constrained two-level permutation (SCTP) test to study cell-cell interaction, finding highly interactive tissue regions across thousands of ligand-receptor pairs with markedly reduced false discovery rates. Finally, we present a spatial graph-based imputation method with neural network (stSME), to correct for technical noise/dropout and increase ST data coverage. Together, the algorithms that we developed, implemented in the comprehensive and fast stLearn software, allow for robust interrogation of biological processes within healthy and diseased tissues.',
    },
    {
      title:
        'Assessing polygenic risk score models for applications in populations with under-represented genomics data: an example of Vietnam',
      conferenceName: '',
      journalName: 'Briefings in Bioinformatics',
      authors:
        'Duy Pham, Buu Truong, Khai Tran, Guiyan Ni, Dat Nguyen, Trang TH Tran, Mai H Tran, Duong Nguyen Thuy, Nam S Vo, Quan Nguyen',
      link: 'https://academic.oup.com/bib/article/23/6/bbac459/6793778',
      description:
        'Most polygenic risk score (PRS)models have been based on data from populations of European origins (accounting for the majority of the large genomics datasets, e.g. >78% in the UK Biobank and >85% in the GTEx project). Although several large-scale Asian biobanks were initiated (e.g. Japanese, Korean, Han Chinese biobanks), most other Asian countries have little or near-zero genomics data. To implement PRS models for under-represented populations, we explored transfer learning approaches, assuming that information from existing large datasets can compensate for the small sample size that can be feasibly obtained in developing countries, like Vietnam. Here, we benchmark 13 common PRS methods in meta-population strategy (combining individual genotype data from multiple populations) and multi-population strategy (combining summary statistics from multiple populations). Our results highlight the complementarity of different populations and the choice of methods should depend on the target population. Based on these results, we discussed a set of guidelines to help users select the best method for their datasets. We developed a robust and comprehensive software to allow for benchmarking comparisons between methods and proposed a computational framework for improving PRS performance in a dataset with a small sample size. This work is expected to inform the development of genomics applications in under-represented populations.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
    // New blogs configuration
    display: true, // Display custom blog section
    topics: [
      {
        name: 'AI in Biology',
        icon: 'BiDna',
        entries: [
          {
            title:
              'AlphaGenome: Mô hình AI dựa trên chuỗi DNA mới từ Google DeepMind',
            link: 'https://duypham2108.substack.com/p/alphagenome-mo-hinh-ai-dua-tren-chuoi',
            icon: 'HiOutlineBookOpen',
          },
          {
            title:
              'Enformer: kiến trúc ưu việt trong AI model dựa trên chuỗi DNA',
            link: 'https://duypham2108.substack.com/p/enformer-kien-truc-uu-viet-trong',
            icon: 'HiOutlineBookOpen',
          },
          {
            title:
              'Perturbation modelling - mô hình hóa biến loạn trong scRNAseq',
            link: 'https://duypham2108.substack.com/p/perturbation-modelling-mo-hinh-hoa',
            icon: 'HiOutlineBookOpen',
          },
        ],
      },
      {
        name: 'Biology',
        icon: 'BiDna',
        entries: [
          {
            title:
              'ChIP-Seq: Kỹ thuật sinh học phân tử giúp xác định tương tác giữa protein và DNA trong tế bào',
            link: 'https://ibsgacademic.com/2016-12-13-chip-seq-ky-thuat-sinh-hoc-phan-tu-giup-xac-dinh-tuong-tac-giua-protein-va-dna-trong-te-bao/',
            icon: 'HiOutlineBookOpen',
          },
        ],
      },
      {
        name: 'Machine learning',
        icon: 'BiChip',
        entries: [
          {
            title: 'Genetic Algorithms - Giải Thuật Di Truyền - Python',
            link: 'https://duyphamdata.blogspot.com/2017/11/genetic-algorithm-giai-thuat-di-truyen.html',
            icon: 'HiOutlineBookOpen',
          },
        ],
      },
      {
        name: 'Tutorial',
        icon: 'BiArchive',
        entries: [
          {
            title: 'Phân tích dữ liệu single cell RNA-seq - R tutorial',
            link: 'https://rnaseqcoban.github.io/',
            icon: 'HiOutlineBookOpen',
          },
        ],
      },
    ],
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
