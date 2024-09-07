import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from 'lucide-react'
import { Icons } from '../components/icons'

export const DATA = {
   name: 'Mir Uzair',
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
         title: 'Open Source Portfolio',
         href: 'https://meeruzairwashere-portfolio.vercel.app/',
         dates: 'Jan 2024 - Mar 2024',
         active: true,
         description:
        'Are you a developer looking to showcase your work in a professional and personalized manner? Look no further! With this portfolio template, you can create your own stunning full-stack portfolio effortlessly. Simply follow the instructions in the GitHub repository!',
         technologies: [
            "Nextjs.14",
            "Prisma",
            "React-Query",
            "TailwindCSS",
            "MongoDB",
            "AceternityUI"
         ],
         links: [
            {
               type: 'Website',
               href: 'https://meeruzairwashere-portfolio.vercel.app/',
               icon: <Icons.globe className="size-3" />,
            },
            {
               type: 'Source',
               href: 'https://github.com/MeerUzairWasHere/open-source-portfolio',
               icon: <Icons.github className="size-3" />,
            },
         ],
         image: '',
         video:
        '/project-1.mp4',
      },
      {
         title: 'TrekNest Travels',
         href: 'https://trek-nest-travels.onrender.com/',
         dates: 'Jun 2024 - Jul 2024',
         active: true,
         description:
        'A full-stack web app on GitHub, offering travel management for users & admins. Users book packages, manage bookings & personal info. Admins oversee users, bookings & packages.',
         technologies: [
            "MERN Stack",
            "React-Router",
            "Axios",
            "React-Quill",
            "React-Toastify",
            "Cloudinary",
            "React-Icons",
         ],
         links: [
            {
               type: 'Website',
               href: 'https://trek-nest-travels.onrender.com/',
               icon: <Icons.globe className="size-3" />,
            },
            {
               type: 'Source',
               href: 'https://github.com/MeerUzairWasHere/TrekNest---Tour-and-Travel-CMS',
               icon: <Icons.github className="size-3" />,
            },
         ],
         image: '',
         video: '/project-2.mp4',
      },
      {
         title: 'ezSnippets',
         href: 'https://ez-snippets.vercel.app',
         dates: 'Apr 2024 - May 2024',
         active: true,
         description:
        'Your hassle-free solution for developers to organize, store, and access code snippets efficiently, enhancing productivity and focus in the development workflow.',
         technologies: [
            "Next.js",
            "TypeScript",
            "MongoDB",
            "Mongoose",
            "Clerk",
            "TailwindCSS",
            "Shadcn-UI",
            "Zod",
            "React-Query"
         ],
         links: [
            {
               type: 'Website',
               href: 'https://ez-snippets.vercel.app',
               icon: <Icons.globe className="size-3" />,
            },
            {
               type: 'Source',
               href: 'https://github.com/MeerUzairWasHere/ezSnippets',
               icon: <Icons.github className="size-3" />,
            },
         ],
         image: '',
         video: '/project-3.mp4',
      },
      {
         title: 'More Projects',
         href: 'https://meeruzairwashere.online/projects',
         dates: '',
         active: true,
         description:
        'Explore many more projects here.',
         technologies: [],
         links: [
            {
               type: 'Website',
               href: 'https://meeruzairwashere.online/projects',
               icon: <Icons.globe className="size-3" />,
            },
         ],
         image: '',
         video: 'project-4.mp4',
      },
   ],
} as const
