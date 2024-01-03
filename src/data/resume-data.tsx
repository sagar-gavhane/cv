import {
  BarepapersLogo,
  ClevertechLogo,
  ConsultlyLogo,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sagar Gavhane",
  initials: "SG",
  location: "Pune, Maharashtra, India",
  locationLink: "https://maps.app.goo.gl/aZv43xFM2HF3FUki9",
  about:
    "Principle Engineer with 7+ years of successful software delivery experience. Expert in Node.js, React.js, Spring Boot, and Golang. Specializing in building scalable Microservices",
  summary:
    "Demonstrated ability to drive revenue growth, lead and mentor teams, and enhance software quality. Excited to leverage my expertise for innovation and excellence in next project.",
  avatarUrl: "https://avatars.githubusercontent.com/u/33308798?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "sgavhane70@gmail.com",
    tel: "+918624040905",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/sagar-gavhane",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sagar-gavhane",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/_sagar_gavhane",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Modern College",
      degree: "Bachelor's Degree in Computer Science",
      start: "2013",
      end: "2017",
    },
  ],
  work: [
    {
      company: "DynPro",
      link: "https://www.peppercontent.io/",
      badges: ["Remote"],
      title: "Principle Engineer",
      logo: ParabolLogo,
      start: "January 2024",
      end: "Present",
      description: [
        "Spearheaded the successful implementation of a cutting-edge software development process, resulting in a 20% increase in team efficiency and a 15% reduction in time-to-market for new products.",
        "Orchestrated the migration of legacy systems to a modern cloud infrastructure, reducing operational costs by 25% and enhancing scalability, resulting in improved overall system performance.",
        "Collaborated with cross-functional teams to define and implement a data-driven decision-making framework, resulting in a 30% improvement in project success rates and better alignment with business objectives.",
        "Achieved a 15% improvement in product reliability by instituting rigorous testing and quality assurance processes, ultimately enhancing customer satisfaction and reducing post-release issues.",
      ],
    },
    {
      company: "Pepper Content",
      link: "https://www.peppercontent.io/",
      badges: ["Remote"],
      title: "Senior Software Engineer → Tech Lead",
      logo: ParabolLogo,
      start: "January 2021",
      end: "June 2023",
      description: [
        "We achieved a remarkable 32% increase in revenue and scalability by implementing automation in content ordering, payment capturing, and invoicing processes.",
        "Offered expert technical guidance, coaching, and domain-specific knowledge to mentor a team of engineers, resulting in a substantial improvement in their skill set and overall performance.",
        "Effectively managed software development processes, from delivering and deploying 163 features in a production environment to conducting interviews for 225 candidates, evaluating SDE-3 and SDE-2 roles, and ensuring codebase quality through meticulous review of 592 PRs.",
      ],
    },
    {
      company: "Fabric",
      link: "https://clevertech.biz",
      badges: ["Pune", "Bangalore"],
      title: "Product Engineer",
      logo: ClevertechLogo,
      start: "July 2019",
      end: "January 2021",
      description: [
        "Designed and implemented cost-effective microservices, leading to an average monthly operational expense reduction of $300. This achievement was realized through the optimization of function execution time, the implementation of API response caching, and the adoption of efficient development strategies.",
        "Dramatically improved product performance through the implementation of advanced techniques, including efficient cache policies, module-based code-splitting, deferred loading of 3rd party scripts, and preloading/lazy-loading static assets. These enhancements led to a remarkable 30% reduction in both page loading speed and bundle size.",
      ],
    },
    {
      company: "Param Business Solution",
      link: "https://bsgroup.eu/",
      badges: ["Pune"],
      title: "Senior Software Engineer",
      logo: JojoMobileLogo,
      start: "August 2018",
      end: "July 2019",
      description: [
        "Revamped and executed a robust private asset safeguard strategy, ensuring the security of customers' confidential documents through VPC protection. This initiative not only gained the trust of 85% of users but also reinforced our data security measures.",
        "Successfully migrated legacy projects to cutting-edge technology, ensuring seamless transition without disrupting business logic. This migration resulted in a reduction of approximately $380 in annual maintenance costs.",
      ],
    },
    {
      company: "Ampkona",
      link: "https://www.nokia.com",
      badges: ["Pune"],
      title: "Full Stack Developer",
      logo: NSNLogo,
      start: "March 2017",
      end: "August 2018",
      description:
        "Implemented a post-development client feedback collection process within the UAT environment, ensuring comprehensive feature validation prior to production deployment.",
    },
  ],
  skills: [
    "Node.js",
    "Spring Boot",
    "Golang",
    "Java",
    "MySQL",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Kafka",
    "Redis",
    "RabbitMQ",
    "Microservices",
    "GraphQL",
  ],
  projects: [
    {
      title: "Pepper",
      techStack: [
        "Lead Developer",
        "TypeScript",
        "Node.js (Express.js)",
        "Kafka",
        "React.js",
        "Golang",
        "AWS",
        "Redis",
        "Microservices",
      ],
      description:
        "Content Marketing Platform to achieve your marketing goals on time, every time.",
      logo: ConsultlyLogo,
      link: {
        label: "peppercontent.io",
        href: "https://www.peppercontent.io/product/content-marketing-platform/",
      },
    },
    {
      title: "XPM",
      techStack: [
        "Product Engineer",
        "TypeScript",
        "AWS",
        "Microservices",
        "Next.js",
        "MongoDB",
        "Serverless Framework",
      ],
      description:
        "XM provides a single place to create, manage, and enrich your website content.",
      logo: MonitoLogo,
      link: {
        label: "fabric.inc",
        href: "https://fabric.inc/",
      },
    },
    {
      title: "BuildDirect",
      techStack: [
        "Product Engineer",
        "Next.js",
        "MongoDB",
        "MySQL",
        "GraphQL",
        "JavaScript",
        "Microservices",
      ],
      description:
        "BuildDirect connects homeowners and home improvement professionals with sellers around the world through innovation and technology.",
      logo: JarockiMeLogo,
      link: {
        label: "builddirect.com",
        href: "https://www.builddirect.com/",
      },
    },
    {
      title: "EddieBauer",
      techStack: [
        "Product Engineer",
        "Next.js",
        "JavaScript",
        "Redis",
        "MySQL",
      ],
      description:
        "EddieBauer is a clothing store chain company based in Bellevue, Washington DC.",
      logo: Minimal,
      link: {
        label: "eddiebauer.com",
        href: "https://www.eddiebauer.com/",
      },
    },
    {
      title: "MoneySpring",
      techStack: [
        "Product Engineer",
        "Microservices",
        "Serverless Framework",
        "DynamoDB",
        "AWS",
        "Node.js",
        "Express.js",
      ],
      description:
        "Personalized, unbiased wealth management and investment advisory.",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "ERP Cloud",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Veerbhadra",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Proptop",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Revolutionizing the real estate industry with a cutting-edge cloud application, seamlessly enhancing efficiency and transforming the way property professionals manage, collaborate, and succeed.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "PoultryPro",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Premier B2B destination for top-quality chicken products, connecting retailers with a diverse range of fresh and sustainable poultry offerings.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
  ],
} as const;
