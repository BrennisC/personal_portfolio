interface Technology {
    name: string;
    icon: string;
    color: string;
}

interface SkillCategory {
    title: string;
    icon: string;
    gradient: string;
    hoverColor: string;
    technologies: Technology[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>`,
        gradient: "from-cyan-500 to-green-500",
        hoverColor: "bg-cyan-500/10",
        technologies: [
            {
                name: "HTML & CSS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                color: "#E34F26",
            },
            {
                name: "JavaScript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                color: "#F7DF1E",
            },
            {
                name: "React.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                color: "#61DAFB",
            },
            {
                name: "Next.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                color: "#FFFFFF",
            },
            {
                name: "Astro",
                icon: "https://astro.build/assets/press/astro-icon-dark.svg",
                color: "#FF5D01",
            },
            {
                name: "Tailwind CSS",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
                color: "#06B6D4",
            }
        ]
    },
    {
        title: "Backend",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>`,
        gradient: "from-green-500 to-purple-500",
        hoverColor: "bg-green-500/10",
        technologies: [
            {
                name: "Node.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                color: "#339933",
            },
            {
                name: "Express.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                color: "#000000",
            },
            {
                name: "MySQL",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                color: "#4479A1",
            },
            {
                name: "MongoDB",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                color: "#47A248",
            },
            {
                name: "Laravel",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
                color: "#777BB4",
            }
        ]
    },
    {
        title: "Herramientas",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>`,
        gradient: "from-purple-500 to-red-500",
        hoverColor: "bg-purple-500/10",
        technologies: [
            {
                name: "Git & GitHub",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                color: "#F05032",
            },
            {
                name: "VS Code",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
                color: "#007ACC",
            },
            {
                name: "Figma",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
                color: "#F24E1E",
            },
            {
                name: "Docker",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
                color: "#2496ED",
            }
        ]
    }
]