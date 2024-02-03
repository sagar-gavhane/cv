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
    "Principle Engineer with 7+ years of successful software delivery experience. Expert in Node.js, Spring Boot, and Golang. Specializing in building scalable Microservices",
  summary:
    "Demonstrated ability to drive revenue growth, lead and mentor teams, and enhance software quality. Excited to leverage my expertise for innovation and excellence in next project.",
  avatarUrl: "https://avatars.githubusercontent.com/u/33308798?v=4",
  personalWebsiteUrl: "https://sagar-web.vercel.app/",
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
      link: "https://www.dynpro.com/",
      badges: ["Pune (Remote)"],
      title: "Principle Engineer",
      // logo: ParabolLogo,
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
      badges: ["Pune (Remote)"],
      title: "Senior Software Engineer → Tech Lead",
      // logo: ParabolLogo,
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
      link: "https://fabric.inc/",
      badges: ["Pune", "Bangalore"],
      title: "Product Engineer",
      // logo: ClevertechLogo,
      start: "July 2019",
      end: "January 2021",
      description: [
        "Designed and implemented cost-effective microservices, leading to an average monthly operational expense reduction of $300. This achievement was realized through the optimization of function execution time, the implementation of API response caching, and the adoption of efficient development strategies.",
        "Dramatically improved product performance through the implementation of advanced techniques, including efficient cache policies, module-based code-splitting, deferred loading of 3rd party scripts, and preloading/lazy-loading static assets. These enhancements led to a remarkable 30% reduction in both page loading speed and bundle size.",
      ],
    },
    {
      company: "Param Business Solution",
      link: "https://parambs.info/",
      badges: ["Pune"],
      title: "Senior Software Engineer",
      // logo: JojoMobileLogo,
      start: "August 2018",
      end: "July 2019",
      description: [
        "Revamped and executed a robust private asset safeguard strategy, ensuring the security of customers' confidential documents through VPC protection. This initiative not only gained the trust of 85% of users but also reinforced our data security measures.",
        "Successfully migrated legacy projects to cutting-edge technology, ensuring seamless transition without disrupting business logic. This migration resulted in a reduction of approximately $380 in annual maintenance costs.",
      ],
    },
    {
      company: "Ampkona",
      link: "#",
      badges: ["Pune"],
      title: "Full Stack Developer",
      // logo: NSNLogo,
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
    "React.js / Next.js / Remix",
    "Apache Kafka",
    "Redis",
    "RabbitMQ",
    "Microservices",
    "GraphQL",
    "Express.js",
    "Gorilla Mux",
    "PostgreSQL",
    "DynamoDB",
    "RabbitMQ",
    "Docker",
    "Kubernetes",
    "Chai",
    "Mocha",
    "Jest",
    "Junit",
    "Mockito",
    "Jenkins",
    "Prometheus",
    "ELK Stack",
  ],
  projects: [
    {
      title: "HR Tech",
      techStack: [
        "Principle Engineer",
        "Spring Boot",
        "Golang",
        "Kafka",
        "Redis",
        "Microservices",
        "GCP",
        "BigQuery",
        "MySQL",
        "React.js",
      ],
      description:
        "I've signed an NDA agreement with the company, so I can't share details of the product.",
    },
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
        "Spring Boot",
        "Spring Cloud",
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
        label: "moneyspring.in",
        href: "https://www.moneyspring.in/",
      },
    },
    {
      title: "ERP Cloud",
      techStack: ["TypeScript", "Next.js"],
      description:
        "ERP Cloud app that streamlines business processes, enhances collaboration, and provides real-time insights for efficient and data-driven decision-making.",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "#",
      },
    },
    {
      title: "Veerbhadra Construction",
      techStack: ["Full Stack Developer", "TypeScript", "React", "Node.js"],
      description:
        "Veerbhadra Construction is go-to source for premium raw materials, catering specifically to construction companies. Comprehensive range includes high-quality sands, cements, pipes, bricks, and much more.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "#",
      },
    },
    {
      title: "Walhekar Properties",
      techStack: ["Full Stack Developer", "TypeScript", "React", "Node.js"],
      description:
        "Revolutionizing the real estate industry with a cutting-edge cloud application, seamlessly enhancing efficiency and transforming the way property professionals manage, collaborate, and succeed.",
      logo: ParabolLogo,
      link: {
        label: "walhekar.in",
        href: "https://walhekar.in/",
      },
    },
    {
      title: "RKChicken",
      techStack: ["Full Stack Developer", "TypeScript", "React", "Node.js"],
      description:
        "Premier B2B destination for top-quality chicken products, connecting retailers with a diverse range of fresh and sustainable poultry offerings.",
      logo: ParabolLogo,
      link: {
        label: "rkchicken.com",
        href: "https://rkchicken.com/",
      },
    },
  ],
  blogs: [
    {
      title: "Reactive Programming in JavaScript with RxJS.",
      description:
        "This article is an introduction to RxJS, a JavaScript library for reactive programming with asynchronous data streams1. It explains the basic concepts of observables, observers, operators, and subjects, and compares them with promises. It also provides some examples of using RxJS for handling events, animations, and AJAX operations.",
      tags: ["JavaScript", "Programming", "WebDev", "RxJS"],
      link: {
        label: "Reactive Programming in JavaScript with RxJS.",
        href: "https://dev.to/sagar/reactive-programming-in-javascript-with-rxjs-4jom",
      },
    },
    {
      title: "How to Capture Screenshots with Puppeteer",
      description:
        "This article is about how to capture screenshots of web pages using Puppeteer, a Node.js library that controls headless Chrome or Chromium1. The author provides an overview of Puppeteer, installation instructions, and code examples for capturing single and multiple screenshots2. The article also highlights the benefits and features of Puppeteer for web scraping and testing tasks.",
      tags: ["JavaScript", "Node", "WebDev", "Puppeteer"],
      link: {
        label: "How to Capture Screenshots with Puppeteer",
        href: "https://dev.to/sagar/how-to-capture-screenshots-with-puppeteer-3mb2",
      },
    },
    {
      title: "How to build a blog with Next.js",
      description:
        "This article is about how to build a blog website from scratch using Next.js, a React framework that supports static site generation1. The author explains the steps and code involved in creating and rendering markdown files as blog posts. The author also compares Next.js with Gatsby, another popular static site generator.",
      tags: ["Beginner", "JavaScript", "React", "Tutorial"],
      link: {
        label: "How to build a blog with Next.js",
        href: "https://dev.to/sagar/building-a-blog-with-next-js-253",
      },
    },
    {
      title: "React Performance Optimization",
      description:
        "This article is about how to avoid unnecessary re-renders of React components by using techniques such as passing limited props, memoizing objects and functions, and using React.memo with custom comparison functions. The article provides code examples and screenshots to illustrate the concepts and performance benefits. The article also warns about the potential drawbacks of memoizing large components and advises to use ReactDevTools profiler to identify bottlenecks.",
      tags: ["JavaScript", "React", "Performance", "Optimization"],
      link: {
        label: "React Performance Optimization",
        href: "https://dev.to/sagar/things-should-be-considered-while-writing-your-react-components-3n4a",
      },
    },
    {
      title: "Build a RESTful API with the Serverless Framework",
      description:
        "This article is about how to create serverless RESTful API services using the Serverless Framework and AWS Lambda.",
      tags: ["Serverless", "Node", "JavaScript", "Beginner"],
      link: {
        label: "Build a RESTful API with the Serverless Framework",
        href: "https://dev.to/sagar/build-a-restful-api-with-the-serverless-framework-ene",
      },
    },
    {
      title: "Code splitting in React",
      description:
        "This article is about how to implement code splitting in React apps using dynamic import () and Webpack1. It explains the benefits of code splitting, such as reducing bundle size and improving performance. It also shows how to use React Loadable library to simplify code splitting.",
      tags: ["React.js", "JavaScript", "Code Splitting", "Optimization"],
      link: {
        label: "Code splitting in React",
        href: "https://dev.to/sagar/increase-user-interactions-by-implementing-code-splitting-in-react-5a1e",
      },
    },
    {
      title:
        "Implement a serverless CI/CD pipeline with AWS (Amazon Web Services).",
      description:
        "This article is about how to implement a serverless CI/CD pipeline with AWS services such as CodeBuild, CodePipeline, S3, and Serverless Framework1. The author explains the steps to create a weight watcher application that asks for weight every day and stores it in a database2. The article is the first part of a series and covers the continuous integration aspect of the pipeline.",
      tags: ["Serverless", "AWS", "DevOps", "Node"],
      link: {
        label:
          "Implement a serverless CI/CD pipeline with AWS (Amazon Web Services).",
        href: "https://dev.to/sagar/implement-a-serverless-cicd-pipeline-with-aws-amazon-web-services-438f",
      },
    },
    {
      title: "Introduction to AWS Lambda",
      description:
        "This article is about the advantages and limitations of AWS Lambda, a service that allows users to run functions on the cloud without managing servers1. The article covers topics such as cost, scalability, security, performance, and vendor lock-in. The article also invites readers to share their thoughts and experiences with AWS Lambda.",
      tags: ["Aws Lambda", "AWS", "DevOps", "Serverless"],
      link: {
        label: "Introduction to AWS Lambda",
        href: "https://dev.to/sagar/brief-explanation-of-aws-lambda-1hgn",
      },
    },
  ],
} as const;
