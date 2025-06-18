export interface Benefit {
    title: string;
    description: string;
    icon: string;
    bgColorClass: string;
    iconColorClass: string;
}

export const benefits: Benefit[] = [
    {
        title: 'Desarrollo rápido',
        description: 'Entrega eficiente sin comprometer la calidad del código.',
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>`,
        bgColorClass: 'bg-blue-600/20',
        iconColorClass: 'text-blue-400'
    },
    {
        title: 'Calidad garantizada',
        description: 'Código limpio, escalable y siguiendo las mejores prácticas.',
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>`,
        bgColorClass: 'bg-green-600/20',
        iconColorClass: 'text-green-400'
    },
    {
        title: 'Comunicación clara',
        description: 'Reportes regulares y transparencia en todo el proceso.',
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>`,
        bgColorClass: 'bg-purple-600/20',
        iconColorClass: 'text-purple-400'
    },
    {
        title: 'Soporte continuo',
        description: 'Mantenimiento y actualizaciones post-lanzamiento.',
        icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>`,
        bgColorClass: 'bg-orange-600/20',
        iconColorClass: 'text-orange-400'
    }
];
