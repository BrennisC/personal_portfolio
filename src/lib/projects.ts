interface Project {
    id: number;
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    category: 'fullstack' | 'frontend' | 'backend' | 'mobile';
    github: string;
    demo?: string;
    featured: boolean;
    year: number;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "PseudoCoder",
        description: "Un intérprete y entorno de ejecución de pseudocódigo al estilo PSeInt, con editor de código con resaltado de sintaxis, consola de entrada/salida y ejecución en tiempo real.",
        technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Shadcn UI"],
        category: "fullstack",
        github: "https://github.com/BrennisC/PseudoCoder",
        featured: true,
        year: 2025
    },
    {
        id: 2,
        title: "Personal Portfolio",
        description: "Portafolio personal con diseño moderno y responsivo, construido con Astro para un rendimiento óptimo y Tailwind CSS para un diseño atractivo.",
        technologies: ["Astro", "TypeScript", "Tailwind CSS"],
        category: "frontend",
        github: "https://github.com/BrennisC/personal_portfolio",
        featured: true,
        year: 2025
    },
    {
        id: 3,
        title: "Sistema Evaluación Docente",
        description: "Plataforma para la evaluación de docentes universitarios, con roles de administrador, docente y estudiante, análisis de datos y generación de reportes.",
        technologies: ["Python", "Django", "PostgreSQL", "Bootstrap"],
        category: "fullstack",
        github: "https://github.com/BrennisC/Sistema_Evaluacion_Docente",
        featured: true,
        year: 2024
    },
    {
        id: 4,
        title: "Movies App",
        description: "Aplicación web para explorar películas y series, con funcionalidades de búsqueda, filtrado por categorías y detalles completos de cada título.",
        technologies: ["React", "CSS", "JavaScript", "API REST"],
        category: "frontend",
        github: "https://github.com/BrennisC/movies_brennis",
        featured: false,
        year: 2024
    },
    {
        id: 5,
        title: "UNAS Academia",
        description: "Plataforma educativa para gestión de cursos, estudiantes y profesores de la academia universitaria, con sistema de calificaciones y seguimiento de progreso.",
        technologies: ["Astro", "TypeScript", "Tailwind CSS", "Node.js"],
        category: "fullstack",
        github: "https://github.com/BrennisC/unas_academia",
        featured: false,
        year: 2024
    },
    {
        id: 6,
        title: "Sistema Guía de Remisión",
        description: "Sistema para la gestión y seguimiento de guías de remisión, control de inventario y tracking de envíos para empresas logísticas.",
        technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
        category: "fullstack",
        github: "https://github.com/BrennisC/sistema-guia-remision",
        featured: true,
        year: 2024
    },
    {
        id: 7,
        title: "HLI Calculator",
        description: "Calculadora especializada para el Índice de Nivel de Humanidad, con interfaz gráfica intuitiva y generación de reportes detallados.",
        technologies: ["Python", "Tkinter", "Pandas", "NumPy"],
        category: "frontend",
        github: "https://github.com/BrennisC/hli-calculator",
        featured: false,
        year: 2024
    },
    {
        id: 8,
        title: "Laravel Project",
        description: "Aplicación web con sistema de autenticación, gestión de usuarios, CRUD completo y panel administrativo desarrollada con Laravel.",
        technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
        category: "backend",
        github: "https://github.com/BrennisC/laravel_project.io",
        featured: false,
        year: 2024
    },
    {
        id: 9,
        title: "PHP CRUD",
        description: "Sistema básico de Creación, Lectura, Actualización y Eliminación de registros implementado en PHP puro con conexión a base de datos MySQL.",
        technologies: ["PHP", "MySQL", "HTML", "CSS"],
        category: "backend",
        github: "https://github.com/BrennisC/php_crud",
        featured: false,
        year: 2024
    },
    {
        id: 10,
        title: "Tutoring Project",
        description: "Sistema de gestión de tutorías académicas que conecta estudiantes con tutores, permite programar sesiones y realizar seguimiento del progreso académico.",
        technologies: ["Python", "Django", "PostgreSQL", "Bootstrap"],
        category: "fullstack",
        github: "https://github.com/BrennisC/TutoringProject",
        featured: false,
        year: 2024
    },
    {
        id: 11,
        title: "Odyssey Game",
        description: "Juego de aventura desarrollado con HTML, CSS y JavaScript donde el jugador debe resolver acertijos y superar obstáculos en un mundo de fantasía.",
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "frontend",
        github: "https://github.com/BrennisC/odyc_game",
        featured: false,
        year: 2024
    },
    {
        id: 12,
        title: "Vivero UNAS",
        description: "Sistema de gestión para el vivero universitario, con inventario de plantas, seguimiento de crecimiento y control de ventas.",
        technologies: ["C++", "Qt", "SQLite"],
        category: "fullstack",
        github: "https://github.com/BrennisC/Vivero-UNAS",
        featured: false,
        year: 2024
    }
];

// Función para obtener los proyectos destacados
export const getFeaturedProjects = (): Project[] => {
    return projects.filter(project => project.featured);
};

// Función para obtener proyectos por categoría
export const getProjectsByCategory = (category: 'fullstack' | 'frontend' | 'backend' | 'mobile'): Project[] => {
    return projects.filter(project => project.category === category);
};

// Función para obtener todos los proyectos
export const getAllProjects = (): Project[] => {
    return projects;
};