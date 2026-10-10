export type Language = 'fr' | 'en';

export type Content = {
  nav: {
    name: string;
    subtitle: string;
    links: { work: string; experience: string; stack: string; about: string };
    talk: string;
  };
  hero: {
    label: string;
    headlinePrefix: string;
    headlineComplexity: string;
    headlineArrow: string;
    headlineSimplicity: string;
    headlineEn: string;
    tags: string;
    description: string;
    descriptionEn: string;
    projects: string;
    downloadCV: string;
  };
  work: {
    label: string;
    number: string;
    title: string;
    titleEn: string;
    freelanceLabel: string;
    academicLabel: string;
    illustrativeLabel: string;
    projects: {
      id: string;
      number: string;
      kind: 'freelance' | 'academic';
      category: string;
      name: string;
      subtitle: string;
      description: string;
      descriptionEn: string;
      tech: string[];
      features?: string[];
      url?: string;
    }[];
  };
  experience: {
    label: string;
    number: string;
    title: string;
    titleEn: string;
    items: {
      company: string;
      role: string;
      location: string;
      period: string;
      content: string;
      contentEn: string;
      tech: string[];
    }[];
  };
  about: {
    label: string;
    number: string;
    title: string;
    titleEn: string;
    timeline: { year: string; label: string; labelEn: string }[];
    description: string;
    descriptionEn: string;
    expandLabel: string;
  };
  stack: {
    label: string;
    number: string;
    title: string;
    titleEn: string;
    clickHint: string;
    clickHintEn: string;
    mobileHint: string;
    categories: {
      key: string;
      label: string;
      technologies: string[];
    }[];
  };
  education: {
    label: string;
    number: string;
    title: string;
    titleEn: string;
    items: {
      year: string;
      label: string;
      labelEn: string;
      institution: string;
      subjects: string[];
    }[];
  };
  cv: {
    label: string;
    number: string;
    title: string;
    subtitle: string;
    download: string;
    view: string;
  };
  contact: {
    label: string;
    number: string;
    title: string;
    titleEn: string;
    email: string;
    phone: string;
    emailBtn: string;
    linkedin: string;
    github: string;
    signature: string;
    signatureEn: string;
    clickHint: string;
  };
};

export const content: Record<Language, Content> = {
  fr: {
    nav: {
      name: 'ISMAIL OURDOU',
      subtitle: 'LOGICIEL · IA · FULL-STACK',
      links: { work: 'Projets', experience: 'Expérience', stack: 'Technologies', about: 'À propos' },
      talk: "Discutons ↗",
    },
    hero: {
      label: 'DÉVELOPPEUR LOGICIEL & IA JUNIOR',
      headlinePrefix: 'Je construis des systèmes qui transforment la',
      headlineComplexity: 'complexité',
      headlineArrow: 'en',
      headlineSimplicity: 'simplicité',
      headlineEn: 'I build systems that turn complexity into simplicity.',
      tags: 'ERP · IA · Automatisation · Web',
      description:
        'Je développe des solutions ERP, des applications IA, des automatisations et des produits web pour répondre à des besoins métier concrets.',
      descriptionEn:
        'I build ERP solutions, AI applications, automations and web products for real business needs.',
      projects: 'Voir mes projets ↗',
      downloadCV: 'Télécharger mon CV ',
    },
    work: {
      label: 'PROJETS SÉLECTIONNÉS',
      number: '01',
      title: 'Des projets, pas seulement des technologies.',
      titleEn: 'Projects, not just technologies.',
      freelanceLabel: 'PROJETS FREELANCE',
      academicLabel: 'PROJETS ACADÉMIQUES',
      illustrativeLabel: 'Interface illustrative',
      projects: [
        {
          id: 'documind',
          number: '01',
          kind: 'freelance',
          category: 'IA · Traitement documentaire · Application web',
          name: 'Documind.com',
          subtitle: 'Gestion documentaire intelligente',
          description:
            "Développement d'une application web d'analyse documentaire intégrant un pipeline RAG asynchrone pour ingérer des PDF, extraire automatiquement les données et automatiser les workflows de traitement.",
          descriptionEn:
            'Developed a web-based document analysis application featuring an asynchronous RAG pipeline to ingest PDFs, execute automatic data extraction, and automate processing workflows.',
          tech: ['Next.js', 'Python', 'MySQL', 'GCP', 'RAG'],
          url: 'https://documind.delrio-lawoffice.com/',
        },
        {
          id: 'callmegrowth',
          number: '02',
          kind: 'freelance',
          category: 'Développement web · Marketing digital',
          name: 'CallMeGrowth.com',
          subtitle: 'Site d’agence de croissance',
          description:
            "Développement d'un site professionnel pour une agence de marketing digital axée sur la croissance et l'image de marque.",
          descriptionEn:
            'Developed a professional website for a digital marketing agency focused on growth and branding.',
          tech: ['React'],
          url: 'https://callmegrowth.com/',
        },
        {
          id: 'ladybug',
          number: '03',
          kind: 'freelance',
          category: 'E-commerce · Produits artisanaux',
          name: 'Ladybug-Trading.com',
          subtitle: 'Boutique de décoration artisanale',
          description:
            "Développement et amélioration d'un site e-commerce dédié à la vente de produits artisanaux et décoratifs.",
          descriptionEn:
            'Developed and improved an e-commerce website dedicated to handcrafted and decorative products.',
          tech: ['HTML', 'CSS', 'JavaScript'],
          url: 'https://ladybugtrading.com/',
        },
        {
          id: 'montana',
          number: '07',
          kind: 'academic',
          category: 'Réservation hôtelière · Web',
          name: 'Montana',
          subtitle: 'Plateforme de réservation hôtelière',
          description: "Développement d'une plateforme web de réservation hôtelière.",
          descriptionEn: 'Developed a web-based hotel reservation platform.',
          tech: ['Laravel', 'MySQL'],
        },
        {
          id: 'cabinet',
          number: '08',
          kind: 'academic',
          category: 'Gestion médicale · Web',
          name: 'Gestion de Cabinet',
          subtitle: 'Gestion de cabinet médical',
          description: "Développement d'un système de gestion pour les cabinets médicaux.",
          descriptionEn: 'Developed a management system for medical practices.',
          tech: ['Spring Boot', 'MySQL', 'Hibernate'],
        },
        {
          id: 'e-sport',
          number: '04',
          kind: 'academic',
          category: 'E-commerce · IA · Prévision',
          name: 'E-Sport',
          subtitle: 'Plateforme e-commerce intelligente',
          description:
            "Développement d'une plateforme e-commerce intelligente intégrant une prévision des ventes pilotée par le machine learning, un chatbot de support automatisé et une messagerie bidirectionnelle en temps réel.",
          descriptionEn:
            'Developed an intelligent e-commerce platform integrating ML-driven sales forecasting, an automated support chatbot, and a live, bi-directional chat interface.',
          tech: ['React', 'FastAPI', 'MongoDB', 'JWT'],
          features: ['E-commerce', 'Chatbot de support IA', 'Prévision ML des ventes', 'Chat bidirectionnel en temps réel', 'Authentification JWT', 'Gestion des produits'],
        },
        {
          id: 'ai-resume',
          number: '05',
          kind: 'academic',
          category: 'IA · Analyse de candidatures',
          name: 'Analyse IA de CV',
          subtitle: 'Scoring intelligent de candidats',
          description: "Application d'analyse de CV et de scoring de candidats alimentée par l'IA.",
          descriptionEn: 'AI-powered CV screening and candidate scoring application.',
          tech: ['FastAPI', 'React', 'Docker'],
        },
        {
          id: 'redis-life',
          number: '06',
          kind: 'academic',
          category: 'Systèmes distribués · Simulation',
          name: 'Jeu de la Vie Redis',
          subtitle: 'Jeu de la vie distribué',
          description: "Implémentation d'un jeu de la vie distribué utilisant Redis.",
          descriptionEn: 'Implemented a distributed Game of Life using Redis.',
          tech: ['React', 'Redis', 'Docker'],
        },
      ],
    },
    experience: {
      label: 'EXPÉRIENCE',
      number: '03',
      title: 'Deux expériences, un même objectif.',
      titleEn: 'Two experiences, one focus.',
      items: [
        {
          company: 'DarbTech',
          role: 'Stage de fin d\'études · Projet de fin d\'études BUT',
          location: 'Rabat, Maroc · Avril 2026 — Septembre 2026',
          period: 'Avril 2026 — Septembre 2026',
          content:
            "Développement de modules Odoo personnalisés, d'un chatbot IA basé sur le RAG et de workflows d'automatisation n8n pour le traitement OCR des factures et la correspondance floue des contacts. Mise en place de pipelines ETL, migration de données vers Odoo SaaS et tableaux de bord Power BI avec prévisions par modèle saisonnier adaptatif pour l'analyse décisionnelle et prédictive, dans un environnement Agile.",
          contentEn:
            'Developed custom Odoo modules, a RAG-based AI chatbot, and n8n automation workflows for OCR-based invoice processing and contact fuzzy matching. Implemented ETL pipelines, Odoo SaaS data migration, and Power BI dashboards with Adaptive Seasonal Model forecasting for business intelligence and predictive analytics within an Agile environment.',
          tech: ['Odoo', 'RAG', 'n8n', 'OCR', 'Fuzzy Matching', 'ETL', 'Power BI', 'Prévision', 'Agile'],
        },
        {
          company: '2PI E-LEARNING',
          role: 'Stage de fin d\'études · Projet de fin d\'études DUT',
          location: 'Rabat, Maroc · Avril 2025 — Juin 2025',
          period: 'Avril 2025 — Juin 2025',
          content:
            "Développement d'une application mobile et d'un module CRM automatisé piloté par un agent IA WhatsApp pour analyser les conversations en arrière-plan et suivre les prospects en temps réel.",
          contentEn:
            'Built a mobile app and automated CRM module driven by a WhatsApp AI Agent to handle background conversation analysis and real-time lead tracking.',
          tech: ['Application mobile', 'CRM', 'Agent IA', 'WhatsApp', 'Suivi en temps réel'],
        },
      ],
    },
    about: {
      label: 'À PROPOS',
      number: '04',
      title: 'Du génie informatique au Big Data et à l\'IA.',
      titleEn: 'From software engineering to Big Data and AI.',
      timeline: [
        { year: '2023–2025', label: 'DUT Génie Informatique', labelEn: 'DUT Computer Engineering' },
        { year: '2025–2026', label: 'BUT Big Data & IA', labelEn: 'BUT Big Data & Artificial Intelligence' },
        { year: '2026', label: 'Développement logiciel & IA', labelEn: 'Software & AI Development' },
      ],
      description:
        "Un parcours guidé par la volonté de relier les systèmes métier à l'intelligence artificielle.",
      descriptionEn:
        'A journey driven by the will to connect business systems with artificial intelligence.',
      expandLabel: 'Afficher les modules',
    },
    stack: {
      label: 'STACK TECHNIQUE',
      number: '05',
      title: 'Un écosystème complet.',
      titleEn: 'A complete ecosystem.',
      clickHint: 'Cliquez sur un nœud pour explorer',
      clickHintEn: 'Click a node to explore',
      mobileHint: 'Touchez une catégorie pour explorer',
      categories: [
        {
          key: 'ERP',
          label: 'ERP / Automatisation',
          technologies: ['Odoo', 'n8n', 'API REST', 'Automatisation des workflows', 'OCR', 'Correspondance floue', 'ETL', 'Migration de données', 'Agile'],
        },
        {
          key: 'IA',
          label: 'IA / Données',
          technologies: ['Python', 'RAG', 'NLP', 'PyTorch', 'TensorFlow', 'Power BI', 'Prévision', 'Hadoop', 'Spark', 'Talend'],
        },
        {
          key: 'WEB',
          label: 'Langages / Web & Mobile',
          technologies: ['C', 'C++', 'Java', 'PHP', 'Python', 'JavaScript', 'React', 'React Native', 'Next.js', 'FastAPI', 'Laravel', 'Spring Boot', 'Java EE', 'Django', 'Flask', 'XML'],
        },
        {
          key: 'DONNÉES',
          label: 'Bases de données',
          technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Oracle', 'Redis', 'Supabase', 'Apache Cassandra'],
        },
        {
          key: 'DEVOPS',
          label: 'DevOps',
          technologies: ['Docker', 'Kubernetes', 'Linux', 'Git', 'GitHub', 'GitLab', 'Bitbucket', 'Jira', 'Azure Functions', 'GCP'],
        },
        {
          key: 'AUTOMATISATION',
          label: 'Automatisation',
          technologies: ['n8n', 'Automatisation des workflows', 'Automatisation CRM'],
        },
      ],
    },
    education: {
      label: 'FORMATION',
      number: '06',
      title: 'Formation continue.',
      titleEn: 'Continuous education.',
      items: [
        {
          year: '2025–2026',
          label: 'Bachelor Big Data & Intelligence Artificielle (BUT)',
          labelEn: "Bachelor's Degree in Big Data & Artificial Intelligence (BUT)",
          institution: 'École Supérieure de Technologie de Salé',
          subjects: ['Statistiques & analyse de données', 'Entrepôts de données & Big Data', 'Fouille de données', 'Machine learning & fondamentaux du deep learning', 'Méthodes Agiles & Design Thinking', 'DevOps & services web'],
        },
        {
          year: '2023–2025',
          label: 'DUT Génie Informatique',
          labelEn: 'University Diploma of Technology in Computer Engineering',
          institution: 'École Supérieure de Technologie de Salé',
          subjects: ['Programmation', 'Réseaux informatiques', 'Sécurité', 'Statistiques & probabilités', 'Analyse de données'],
        },
      ],
    },
    cv: {
      label: 'CV',
      number: '06',
      title: 'Mon parcours, en un document.',
      subtitle: 'Retrouvez mon expérience, mes projets, ma formation et mes compétences.',
      download: 'Télécharger mon CV ↓',
      view: 'Voir le CV ↗',
    },
    contact: {
      label: 'CONTACT',
      number: '07',
      title: 'Une idée à transformer en produit ?',
      titleEn: 'Have an idea worth building?',
      email: 'ismailourdou123@gmail.com',
      phone: '+212 610-692362',
      emailBtn: 'E-mail ↗',
      linkedin: 'LinkedIn ↗',
      github: 'GitHub ↗',
      signature: "Construisons quelque chose d'utile.",
      signatureEn: "Let's build something useful.",
      clickHint: 'Cliquez pour réarranger',
    },
  },
  en: {
    nav: {
      name: 'ISMAIL OURDOU',
      subtitle: 'SOFTWARE · AI · FULL-STACK',
      links: { work: 'Work', experience: 'Experience', stack: 'Stack', about: 'About' },
      talk: "Let's talk ↗",
    },
    hero: {
      label: 'JUNIOR SOFTWARE & AI DEVELOPER',
      headlinePrefix: 'I build systems that turn',
      headlineComplexity: 'complexity',
      headlineArrow: 'into',
      headlineSimplicity: 'simplicity',
      headlineEn: 'Je construis des systèmes qui transforment la complexité en simplicité.',
      tags: 'ERP · AI · Automation · Web',
      description:
        'I build ERP solutions, AI applications, automations and web products for real business needs.',
      descriptionEn:
        'Je développe des solutions ERP, des applications IA, des automatisations et des produits web pour répondre à des besoins métier concrets.',
      projects: 'View my projects ↗',
      downloadCV: 'Download my CV ↓',
    },
    work: {
      label: 'SELECTED WORK',
      number: '01',
      title: 'Projects, not just technologies.',
      titleEn: 'Des projets, pas seulement des technologies.',
      freelanceLabel: 'FREELANCE PROJECTS',
      academicLabel: 'ACADEMIC PROJECTS',
      illustrativeLabel: 'Illustrative interface',
      projects: [
        {
          id: 'documind',
          number: '01',
          kind: 'freelance',
          category: 'AI · Document Processing · Web Application',
          name: 'Documind.com',
          subtitle: 'Intelligent document management',
          description:
            'Developed a web-based document analysis application featuring an asynchronous RAG pipeline to ingest PDFs, execute automatic data extraction, and automate processing workflows.',
          descriptionEn:
            "Développement d'une application web d'analyse documentaire intégrant un pipeline RAG asynchrone pour ingérer des PDF, extraire automatiquement les données et automatiser les workflows de traitement.",
          tech: ['Next.js', 'Python', 'MySQL', 'GCP', 'RAG'],
          url: 'https://documind.delrio-lawoffice.com/',
        },
        {
          id: 'callmegrowth',
          number: '02',
          kind: 'freelance',
          category: 'Web Development · Digital Marketing',
          name: 'CallMeGrowth.com',
          subtitle: 'Growth agency website',
          description: 'Developed a professional website for a digital marketing agency focused on growth and branding.',
          descriptionEn: "Développement d'un site professionnel pour une agence de marketing digital axée sur la croissance et l'image de marque.",
          tech: ['React'],
          url: 'https://callmegrowth.com/',
        },
        {
          id: 'ladybug',
          number: '03',
          kind: 'freelance',
          category: 'E-Commerce · Handcrafted Products',
          name: 'Ladybug-Trading.com',
          subtitle: 'Handcrafted décor storefront',
          description: 'Developed and improved an e-commerce website dedicated to handcrafted and decorative products.',
          descriptionEn: "Développement et amélioration d'un site e-commerce dédié à la vente de produits artisanaux et décoratifs.",
          tech: ['HTML', 'CSS', 'JavaScript'],
          url: 'https://ladybugtrading.com/',
        },
        {
          id: 'montana',
          number: '07',
          kind: 'academic',
          category: 'Hotel Booking · Web',
          name: 'Montana',
          subtitle: 'Hotel reservation platform',
          description: 'Developed a web-based hotel reservation platform.',
          descriptionEn: "Développement d'une plateforme web de réservation hôtelière.",
          tech: ['Laravel', 'MySQL'],
        },
        {
          id: 'cabinet',
          number: '08',
          kind: 'academic',
          category: 'Medical Practice · Web',
          name: 'Cabinet Management',
          subtitle: 'Medical practice management',
          description: 'Developed a management system for medical practices.',
          descriptionEn: "Développement d'un système de gestion pour les cabinets médicaux.",
          tech: ['Spring Boot', 'MySQL', 'Hibernate'],
        },
        {
          id: 'e-sport',
          number: '04',
          kind: 'academic',
          category: 'E-Commerce · AI · Forecasting',
          name: 'E-Sport',
          subtitle: 'Intelligent E-Commerce Platform',
          description:
            'Developed an intelligent e-commerce platform integrating ML-driven sales forecasting, an automated support chatbot, and a live, bi-directional chat interface.',
          descriptionEn:
            "Développement d'une plateforme e-commerce intelligente intégrant une prévision des ventes pilotée par le machine learning, un chatbot de support automatisé et une messagerie bidirectionnelle en temps réel.",
          tech: ['React', 'FastAPI', 'MongoDB', 'JWT'],
          features: ['E-Commerce', 'AI Support Chatbot', 'ML Sales Forecasting', 'Live Bi-Directional Chat', 'JWT Authentication', 'Product Management'],
        },
        {
          id: 'ai-resume',
          number: '05',
          kind: 'academic',
          category: 'AI · Candidate Analysis',
          name: 'AI Resume Screening',
          subtitle: 'Intelligent candidate scoring',
          description: 'AI-powered CV screening and candidate scoring application.',
          descriptionEn: "Application d'analyse de CV et de scoring de candidats alimentée par l'IA.",
          tech: ['FastAPI', 'React', 'Docker'],
        },
        {
          id: 'redis-life',
          number: '06',
          kind: 'academic',
          category: 'Distributed Systems · Simulation',
          name: 'Redis Game of Life',
          subtitle: 'Distributed cellular simulation',
          description: 'Implemented a distributed Game of Life using Redis.',
          descriptionEn: "Implémentation d'un jeu de la vie distribué utilisant Redis.",
          tech: ['React', 'Redis', 'Docker'],
        },
      ],
    },
    experience: {
      label: 'EXPERIENCE',
      number: '03',
      title: 'Two experiences, one focus.',
      titleEn: 'Deux expériences, un même objectif.',
      items: [
        {
          company: 'DarbTech',
          role: 'Graduation Internship · BUT Capstone Project',
          location: 'Rabat, Morocco · April 2026 — September 2026',
          period: 'April 2026 — September 2026',
          content:
            'Developed custom Odoo modules, a RAG-based AI chatbot, and n8n automation workflows for OCR-based invoice processing and contact fuzzy matching. Implemented ETL pipelines, Odoo SaaS data migration, and Power BI dashboards with Adaptive Seasonal Model forecasting for business intelligence and predictive analytics within an Agile environment.',
          contentEn:
            "Développement de modules Odoo personnalisés, d'un chatbot IA basé sur le RAG et de workflows d'automatisation n8n pour le traitement OCR des factures et la correspondance floue des contacts. Mise en place de pipelines ETL, migration de données vers Odoo SaaS et tableaux de bord Power BI avec prévisions par modèle saisonnier adaptatif pour l'analyse décisionnelle et prédictive, dans un environnement Agile.",
          tech: ['Odoo', 'RAG', 'n8n', 'OCR', 'Fuzzy Matching', 'ETL', 'Power BI', 'Forecasting', 'Agile'],
        },
        {
          company: '2PI E-LEARNING',
          role: 'Graduation Internship · DUT Capstone Project',
          location: 'Rabat, Morocco · April 2025 — June 2025',
          period: 'April 2025 — June 2025',
          content:
            'Built a mobile app and automated CRM module driven by a WhatsApp AI Agent to handle background conversation analysis and real-time lead tracking.',
          contentEn:
            "Développement d'une application mobile et d'un module CRM automatisé piloté par un agent IA WhatsApp pour analyser les conversations en arrière-plan et suivre les prospects en temps réel.",
          tech: ['Mobile App', 'CRM', 'AI Agent', 'WhatsApp', 'Real-Time Tracking'],
        },
      ],
    },
    about: {
      label: 'ABOUT',
      number: '04',
      title: 'From software engineering to Big Data and AI.',
      titleEn: 'Du génie informatique au Big Data et à l\'IA.',
      timeline: [
        { year: '2023–2025', label: 'DUT Computer Engineering', labelEn: 'DUT Génie Informatique' },
        { year: '2025–2026', label: 'BUT Big Data & AI', labelEn: 'BUT Big Data & IA' },
        { year: '2026', label: 'Software & AI Development', labelEn: 'Développement logiciel & IA' },
      ],
      description:
        'A journey driven by the will to connect business systems with artificial intelligence.',
      descriptionEn:
        "Un parcours guidé par la volonté de relier les systèmes métier à l'intelligence artificielle.",
      expandLabel: 'Show modules',
    },
    stack: {
      label: 'TECHNICAL STACK',
      number: '05',
      title: 'A complete ecosystem.',
      titleEn: 'Un écosystème complet.',
      clickHint: 'Click a node to explore',
      clickHintEn: 'Cliquez sur un nœud pour explorer',
      mobileHint: 'Tap a category to explore',
      categories: [
        {
          key: 'ERP',
          label: 'ERP / Automation',
          technologies: ['Odoo', 'n8n', 'REST APIs', 'Workflow Automation', 'OCR', 'Fuzzy Matching', 'ETL', 'Data Migration', 'Agile'],
        },
        {
          key: 'AI',
          label: 'AI / Data',
          technologies: ['Python', 'RAG', 'NLP', 'PyTorch', 'TensorFlow', 'Power BI', 'Forecasting', 'Hadoop', 'Spark', 'Talend'],
        },
        {
          key: 'WEB',
          label: 'Languages / Web & Mobile',
          technologies: ['C', 'C++', 'Java', 'PHP', 'Python', 'JavaScript', 'React', 'React Native', 'Next.js', 'FastAPI', 'Laravel', 'Spring Boot', 'Java EE', 'Django', 'Flask', 'XML'],
        },
        {
          key: 'DATA',
          label: 'Databases',
          technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Oracle', 'Redis', 'Supabase', 'Apache Cassandra'],
        },
        {
          key: 'DEVOPS',
          label: 'DevOps',
          technologies: ['Docker', 'Kubernetes', 'Linux', 'Git', 'GitHub', 'GitLab', 'Bitbucket', 'Jira', 'Azure Functions', 'GCP'],
        },
        {
          key: 'AUTOMATION',
          label: 'Automation',
          technologies: ['n8n', 'Workflow Automation', 'CRM Automation'],
        },
      ],
    },
    education: {
      label: 'EDUCATION',
      number: '06',
      title: 'Continuous education.',
      titleEn: 'Formation continue.',
      items: [
        {
          year: '2025–2026',
          label: "Bachelor's Degree in Big Data & Artificial Intelligence (BUT)",
          labelEn: 'Bachelor Big Data & Intelligence Artificielle (BUT)',
          institution: 'Higher School of Technology of Salé',
          subjects: ['Statistics & Data Analysis', 'Data Warehousing & Big Data', 'Data Mining', 'Machine Learning & Fundamentals of Deep Learning', 'Agile Methodologies & Design Thinking', 'DevOps & Web Services'],
        },
        {
          year: '2023–2025',
          label: 'University Diploma of Technology in Computer Engineering',
          labelEn: 'DUT Génie Informatique',
          institution: 'Higher School of Technology of Salé',
          subjects: ['Programming', 'Computer Networks', 'Security', 'Statistics & Probability', 'Data Analysis'],
        },
      ],
    },
    cv: {
      label: 'CV',
      number: '06',
      title: 'My journey, in one document.',
      subtitle: 'Find my experience, projects, education and skills.',
      download: 'Download my CV',
      view: 'View CV',
    },
    contact: {
      label: 'CONTACT',
      number: '07',
      title: 'Have an idea worth building?',
      titleEn: 'Une idée à transformer en produit ?',
      email: 'ismailourdou123@gmail.com',
      phone: '+212 610-692362',
      emailBtn: 'Email ↗',
      linkedin: 'LinkedIn ↗',
      github: 'GitHub ↗',
      signature: "Let's build something useful.",
      signatureEn: "Construisons quelque chose d'utile.",
      clickHint: 'Click to rearrange',
    },
  },
};
