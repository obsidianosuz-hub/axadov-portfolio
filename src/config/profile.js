/**
 * Central Profile Configuration
 * 
 * Edit this file to customize the portfolio details, milestones,
 * projects, certificates, and social media links.
 */

export const PROFILE_DATA = {
    // Basic Information
    name: "Axadov Abdurasul",
    nickname: "AXADOV",
    tagline: "< senior frontend & backend developer />",
    email: "axadovabdurasul51@gmail.com",
    phone: "+998501594232",
    
    // Social Links
    socials: {
        telegram: "https://t.me/abdurasul7404",
        instagram: "https://instagram.com/infasuz",
        gmail: "mailto:axadovabdurasul51@gmail.com",
        phone: "tel:+998501594232",
        // Fallbacks or extra socials
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        facebook: "https://facebook.com"
    },

    // About Room Story Milestones
    milestones: [
        { 
            id: 'intro', 
            position: [0, 0, -15], 
            type: 'intro', 
            title: 'AXADOV', 
            subtitle: '< senior frontend & backend developer />' 
        },
        { 
            id: 'about_me', 
            position: [0, 0, -55], 
            type: 'journey', 
            title: 'ABOUT ME', 
            subtitle: 'Passionate developer creating interactive web experiences' 
        },
        { 
            id: 'journey', 
            position: [0, 0, -95], 
            type: 'journey', 
            title: 'JOURNEY', 
            subtitle: 'Developing solid frontend interfaces & robust backend APIs' 
        },
        { 
            id: 'skills', 
            position: [0, 0, -135], 
            type: 'skills', 
            title: 'SKILLS', 
            subtitle: 'React • Node.js • Javascript • Databases • Creative Coding' 
        },
    ],

    // Gallery Projects
    projects: [
        {
            id: 'project-1',
            title: 'LOYIHA 1',
            front: '/textures/gallery/monetuneprzod.webp', // Placeholder texture
            painted: '/textures/gallery/monetuneprzod_painted.webp',
            url: '#',
            description: 'Ushbu loyiha sizning birinchi loyiha namunangizdir. Uni src/config/profile.js faylidan osonlikcha o\'zgartirishingiz mumkin.',
            techStack: ['/textures/gallery/reactlogo.webp', '/textures/gallery/jslogo.webp', '/textures/gallery/csslogo.webp']
        },
        {
            id: 'project-2',
            title: 'LOYIHA 2',
            front: '/textures/gallery/timberkittyprzod.webp', // Placeholder texture
            painted: '/textures/gallery/timberkittyprzod_painted.webp',
            url: '#',
            description: 'Bu yerda sizning ikkinchi loyihangiz tavsifi ko\'rsatiladi. Texnologiyalar va havolalarni sozlang.',
            techStack: ['/textures/gallery/htmllogo.webp', '/textures/gallery/jslogo.webp', '/textures/gallery/csslogo.webp']
        }
    ],

    // Awards and Certificates fallback
    awards: {
        featured: {
            id: 'award-featured',
            layout: 'certificate_grid',
            title: 'Featured Collection',
            items: [
                { label: 'Senior Web Developer', date: '2026', image: '/textures/about/FEATURED.webp', url: '#' }
            ],
            platformConfig: {
                label: 'HONOR',
                color: '#1a1a1a',
                icon: '⭐'
            }
        },
        sotd: {
            id: 'award-sotd',
            layout: 'certificate_grid',
            title: 'Achievements & Certificates',
            items: [
                { label: 'Frontend Certification', date: '2025', image: '/textures/about/SOTDAYYOUNGMULTICSSWINNER.webp', url: '#' },
                { label: 'Backend Architecture', date: '2025', image: '/textures/about/SOTDAYYOUNGMULTIORPETRON.webp', url: '#' }
            ],
            platformConfig: {
                label: 'AWARD',
                color: '#1a1a1a',
                icon: '🏆'
            }
        },
        sotm: {
            id: 'award-sotm',
            layout: 'certificate_grid',
            title: 'Site of the Month',
            items: [],
            platformConfig: {
                label: 'AWARD',
                color: '#1a1a1a',
                icon: '📅'
            }
        },
        other: {
            id: 'award-other',
            layout: 'certificate_grid',
            title: 'Other Recognitions',
            items: [],
            platformConfig: {
                label: 'PRESTIGE',
                color: '#1a1a1a',
                icon: '👑'
            }
        }
    },

    // Studio Floating CRT Monitors Content
    studioContent: [
        {
            id: 'st-001',
            platform: 'instagram',
            title: 'Dasturlash sirlari va maslahatlar',
            description: 'Instagram sahifamizda eng so\'nggi texnologiyalar, dasturlash bo\'yicha o\'quv materiallari va qiziqarli postlarni kuzatib boring.',
            frontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec.webp',
            paintedFrontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp',
            url: 'https://instagram.com/infasuz',
            date: '2026-08-15',
            views: '5.2K',
            duration: 'Post'
        },
        {
            id: 'st-002',
            platform: 'blog',
            title: 'Modern 3D Web Development',
            description: 'Ushbu postda Three.js va React Three Fiber yordamida qanday qilib chiroyli 3D saytlar yaratish haqida so\'z boradi.',
            url: 'https://t.me/abdurasul7404',
            date: '2026-08-15',
            views: '1.2K',
            readTime: '4 min'
        }
    ]
};
