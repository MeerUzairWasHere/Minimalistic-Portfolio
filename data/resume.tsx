import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from 'lucide-react'
import { Icons } from '../components/icons'

export const DATA = {
   name: 'Meer Uzair',
   initials: 'MU',
   url: 'https://meeruzairwashere.online',
   location: 'India, Kashmir',
   locationLink: 'https://www.google.com/maps/place/srinagar',
   description:
    '"Driving end-to-end excellence with seamless user experiences through masterfully crafted code."',
 summary:
    'Mir Uzair Bashir is a Quality Engineer at [BQE Software](https://bqe.com) and tech enthusiast. He enjoys gaming and learning about new technologies in his free time, combining his professional expertise with his passion for innovation.\n\n'
    + 'Currently, I’m focusing on web3, blockchain, and related technologies.\n\n'
    + 'Some key areas of focus for me include:\n'
    + '- Expanding knowledge in web3 and blockchain technologies\n'
    + '- Enhancing expertise in JavaScript and TypeScript\n'
    + '- Exploring new development tools and frameworks\n\n'
    + 'If you’re interested in working on collaborative projects that push boundaries or mentoring me in my journey, I’d love to connect.\n\n'
    + 'Let’s discuss:\n'
    + '- Web development queries or hurdles\n'
    + '- Design concepts or potential collaborations\n'
    + '- The latest tech trends and breakthroughs\n\n'
    + 'I’m always on the lookout for new ways to innovate and expand my development horizons. Let’s create something extraordinary together!',
   avatarUrl: '/me.png',
   skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "TailwindCSS",
      "Styled Components",
      "MUI",
      "DaisyUI",
      "Shadcn/ui",
      "Acternity.ui",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Postgres",
      "Prisma",
      "Mongoose",
      "Postman",
      "Git",
      "React Query",
      "React Router",
      "Next.js",
      "Nyxbui",
      "Zustand",
      "RTK",
      "Recoil",
      "Playwright",
      "Docker",
      "Zod",
      "Cloudinary",
      "Clerk",
      "NextAuth",
      "Axios"
   ],
   navbar: [
      { href: '/', icon: HomeIcon, label: 'Home' },
      { href: '/blog', icon: NotebookIcon, label: 'Blogs' },
      { href: '#projects', icon: CodeIcon, label: 'Projects' },
      { href: '#contact', icon: PencilLine, label: 'Contact' },
   ],
   contact: {
      email: 'meer.uxair007@gmail.com',
      tel: '+91 8899080590',
      social: {
         GitHub: {
            name: 'GitHub',
            url: 'https://github.com/MeerUzairWasHere',
            icon: Icons.github,
            navbar: true,
         },
         LinkedIn: {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/mir-uzair-bashir-1b682b176',
            icon: Icons.linkedin,
            navbar: true,
         },
         X: {
            name: 'X',
            url: 'https://twitter.com/MirUzairWasHere',
            icon: Icons.x,
            navbar: true,
         },
         email: {
            name: 'Send Email',
            url: '#',
            icon:  Icons.email,
            navbar: false,
         },
      },
   },

   work: [
      {
         company: 'BQE Software',
         href: 'https://bqe.com',
         badges: ["Full-Time"],
         location: 'Hybrid',
         title: 'Quality Engineer',
         logoUrl: '/bqe.png',
         start: 'June 2024',
         end: 'Present',
         description:
        'Conduct detailed inspections and tests on products to ensure compliance with quality standards. Implement quality control processes to enhance reliability. Analyze data to identify defects and improvement areas. Collaborate with cross-functional teams to resolve quality issues, drive improvements, and maintain documentation to support compliance and traceability.',
      },
      {
         company: 'SquadTech Innovations',
         href: 'https://squadtechinnovations.in',
         badges: ["Freelancing"],
         location: 'On-Site',
         title: 'Full-Stack Developer',
         logoUrl: '/squadtech.png',
         start: 'Jan 2024',
         end: 'Jun 2024',
         description:
        'Created captivating UI/UX designs for tour and travel clients, focusing on cross-device compatibility and visual appeal. Crafted intuitive e-commerce interfaces to boost conversion rates. Managed UI for school management systems, ensuring seamless interactions for stakeholders. Integrated user feedback and usability testing, transforming designs into responsive, high-performance web applications.',
      },
      {
         company: 'National IT Solutions',
         href: 'https://www.nationalitsolutions.com',
         badges: ["Internship"],
         location: 'On-Site',
         title: 'Frontend Developer',
         logoUrl: '/nits.jpeg',
         start: 'Jul 2023',
         end: 'Jan 2024',
         description:
        'Developed engaging interfaces for tour, travel, and e-commerce platforms, prioritizing visual appeal, user-friendliness, and cross-device functionality. Managed UI for a school ERP system, ensuring intuitive designs for all stakeholders. Combined UI/UX principles and optimized design mockups into responsive web applications, improving overall user experiences and performance.',
      },
   ],
   education: [
      {
         school: 'University of Kashmir',
         href: 'https://kashmiruniversity.net/',
         degree: 'Bachelors of Computer Applications',
         start: '2012',
         logoUrl:"/ku.png",
         end: '2023',
      },
   ],
   projects: [
      {
         title: 'Conventional Emoji Commits',
         href: 'https://conventional-emoji-commits.site',
         dates: 'Oct 2023 - Present',
         active: true,
         description:
        'A specification for adding human and machine readable meaning to commit messages using color-rich emojis 🌈',
         technologies: [
            'git',
            'emoji',
            'commit',
            'conventional',
            'nuxt',
         ],
         links: [
            {
               type: 'Website',
               href: 'https://conventional-emoji-commits.site',
               icon: <Icons.smile className="size-3" />,
            },
            {
               type: 'Source',
               href: 'https://github.com/conventional-emoji-commits/conventional-emoji-commits.site',
               icon: <Icons.github className="size-3" />,
            },
         ],
         image: '',
         video:
        'https://cdn.nyxbui.design/conventional-emoji-commits.mp4',
      },
      {
         title: 'Nyxb UI',
         href: 'https://magicui.design',
         dates: 'June 2023 - Present',
         active: true,
         description:
        'Fusion UI library combining Shadcn/UI and MagicUI. Featuring 150+ free and open-source components built with React, Typescript, Tailwind CSS, and Framer Motion. Create stunning, responsive interfaces effortlessly. 100% open-source.',
         technologies: [
            'Next.js',
            'Typescript',
            'TailwindCSS',
            'Nyxb UI',
         ],
         links: [
            {
               type: 'Website',
               href: 'https://nyxbui.design',
               icon: <Icons.globe className="size-3" />,
            },
            {
               type: 'Source',
               href: 'https://github.com/magicuidesign/magicui',
               icon: <Icons.github className="size-3" />,
            },
         ],
         image: '',
         video: 'https://cdn.nyxbui.design/bento-grid.mp4',
      },
      {
         title: 'More Projects',
         href: 'https://nyxb.nexus/projects',
         dates: '',
         active: true,
         description:
        'Explore many more projects here.',
         technologies: [],
         links: [
            {
               type: 'Website',
               href: 'https://nyxb.nexus/projects',
               icon: <Icons.globe className="size-3" />,
            },
         ],
         image: '',
         video: 'https://cdn.nyxbui.design/more-projects.mp4',
      },
   ],
} as const
