// Tech stack filename -> human-readable name mapping for JSON-LD
const TECH_STACK_NAMES = {
    'reactlogo.webp': 'React',
    'htmllogo.webp': 'HTML',
    'csslogo.webp': 'CSS',
    'jslogo.webp': 'JavaScript',
    'tailwindlogo.webp': 'Tailwind CSS',
    'firebaselogo.webp': 'Firebase',
    'netlifylogo.webp': 'Netlify',
    'wordpresslogo.webp': 'WordPress',
    'elementorlogo.webp': 'Elementor',
    'phplogo.webp': 'PHP',
};

const AXADOV_PROJECTS = [
    {
        title: "TeleBar - Telefon do'koni avtomatlashtirish tizimi",
        seoTitle: "TeleBar - Phone Store POS & Inventory Management System",
        description: "Mobil telefon do'konlari uchun to'liq avtomatlashtirilgan boshqaruv, kassa, ombor va savdo tizimi.",
        seoDescription: "Complete POS, IMEI tracking, and inventory management system for mobile phone retailers.",
        url: "https://axadov-portfolio.vercel.app/telebar-demo.html",
        techStack: ['reactlogo.webp', 'jslogo.webp', 'tailwindlogo.webp']
    },
    {
        title: "Sauna & Hammom boshqaruv tizimi",
        seoTitle: "Sauna & Bath Complex Management System",
        description: "Dam olish maskanlari va sauna majmualari uchun xonalar bandligi, vaqt hisobi va billing dasturi.",
        seoDescription: "Comprehensive booking, billing, and room management system for sauna and bath wellness complexes.",
        url: "https://axadov-portfolio.vercel.app/sauna-demo.html",
        techStack: ['reactlogo.webp', 'jslogo.webp', 'tailwindlogo.webp']
    },
    {
        title: "Creative 3D Portfolio",
        seoTitle: "Axadov Abdurasul Creative 3D Portfolio",
        description: "Interaktiv 3D yo'lak, WebGL va Three.js texnologiyalari asosidagi shaxsiy portfolio.",
        seoDescription: "Interactive 3D WebGL corridor portfolio showcasing modern frontend and backend development.",
        url: "https://axadov-portfolio.vercel.app/",
        techStack: ['reactlogo.webp', 'jslogo.webp', 'csslogo.webp']
    }
];

const AXADOV_FAQS = [
    {
        question: "Axadov Abdurasul kim?",
        answer: "Axadov Abdurasul — zamonaviy web-ilovalar, biznes boshqaruv tizimlari (ERP, POS) va interaktiv 3D WebGL tajribalari yaratishga ixtisoslashgan Senior Frontend va Backend dasturchi."
    },
    {
        question: "Qanday texnologiyalardan foydalaniladi?",
        answer: "Asosiy stack: React, Next.js, Node.js, Express, JavaScript, TypeScript, Three.js, React Three Fiber, GSAP, Tailwind CSS, PostgreSQL, MongoDB."
    },
    {
        question: "Loyihalar buyurtma berish uchun qanday bog'lanish mumkin?",
        answer: "Telegram orqali @axadovcoder profiliga yoki Instagram orqali @infasuz ga yozishingiz mumkin."
    }
];

function buildJsonLd() {
    const graph = [];

    const person = {
        '@type': 'Person',
        '@id': 'https://axadov-portfolio.vercel.app/#person',
        name: 'Axadov Abdurasul',
        alternateName: ['axadov', 'axadovcoder', 'Abdurasul Axadov'],
        url: 'https://axadov-portfolio.vercel.app',
        jobTitle: 'Senior Frontend & Backend Developer',
        description: 'Senior frontend & backend developer portfolio by Axadov Abdurasul (axadov). Explore interactive 3D WebGL scenes, React, Node.js and creative coding.',
        knowsAbout: ['React', 'Three.js', 'JavaScript', 'TypeScript', 'GSAP', 'Next.js', 'Node.js', 'WebGL', '3D Graphics', 'Web Development'],
        sameAs: [
            'https://t.me/axadovcoder',
            'https://instagram.com/infasuz',
            'https://github.com/obsidianosuz-hub'
        ]
    };
    graph.push(person);

    const website = {
        '@type': 'WebSite',
        '@id': 'https://axadov-portfolio.vercel.app/#website',
        url: 'https://axadov-portfolio.vercel.app',
        name: 'Axadov Abdurasul (axadov) | Creative 3D Portfolio',
        description: 'Senior frontend & backend developer portfolio by Axadov Abdurasul (axadov). Explore interactive 3D WebGL scenes, React, Node.js and creative coding.',
        publisher: { '@id': 'https://axadov-portfolio.vercel.app/#person' }
    };
    graph.push(website);

    const profilePage = {
        '@type': 'ProfilePage',
        '@id': 'https://axadov-portfolio.vercel.app/#profilepage',
        url: 'https://axadov-portfolio.vercel.app',
        mainEntity: { '@id': 'https://axadov-portfolio.vercel.app/#person' },
        about: { '@id': 'https://axadov-portfolio.vercel.app/#person' }
    };
    graph.push(profilePage);

    const faqPage = {
        '@type': 'FAQPage',
        '@id': 'https://axadov-portfolio.vercel.app/#faq',
        mainEntity: AXADOV_FAQS.map(item => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
            }
        }))
    };
    graph.push(faqPage);

    graph.push({
        '@type': 'ItemList',
        '@id': 'https://axadov-portfolio.vercel.app/#projectslist',
        name: 'Portfolio Projects by Axadov Abdurasul (axadov)',
        description: 'Selected web development projects showcasing React, Node.js, Three.js, and creative frontend engineering.',
        numberOfItems: AXADOV_PROJECTS.length,
        itemListElement: AXADOV_PROJECTS.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
                '@type': 'CreativeWork',
                name: p.seoTitle || p.title,
                description: p.seoDescription || p.description || '',
                url: p.url || undefined,
                creator: { '@id': 'https://axadov-portfolio.vercel.app/#person' },
                ...(p.techStack && p.techStack.length > 0 ? {
                    keywords: p.techStack.map(t => TECH_STACK_NAMES[t] || t).join(', ')
                } : {})
            }
        }))
    });

    AXADOV_PROJECTS.forEach(p => {
        const projectSlug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        graph.push({
            '@type': 'CreativeWork',
            '@id': `https://axadov-portfolio.vercel.app/#project-${projectSlug}`,
            name: p.seoTitle || p.title,
            description: p.seoDescription || p.description || '',
            url: p.url || undefined,
            creator: { '@id': 'https://axadov-portfolio.vercel.app/#person' },
            ...(p.techStack && p.techStack.length > 0 ? {
                keywords: p.techStack.map(t => TECH_STACK_NAMES[t] || t).join(', ')
            } : {})
        });
    });

    return {
        '@context': 'https://schema.org',
        '@graph': graph
    };
}

function buildLlmsTxt() {
    const siteTitle = 'Axadov Abdurasul (axadov) | Creative 3D Portfolio';
    const siteDescription = 'Senior frontend & backend developer portfolio by Axadov Abdurasul (axadov). Explore interactive 3D WebGL scenes, React, Node.js and creative coding.';
    const aboutMe = 'Senior frontend & backend developer with expertise in building interactive 3D web applications, POS & inventory management platforms, full-stack systems, React and Node.js solutions.';

    let content = `# ${siteTitle}\n`;
    content += `> ${siteDescription}\n\n`;
    content += `## Biography / About Me\n`;
    content += `${aboutMe}\n\n`;
    content += `## Core Technologies & Skills\n`;
    content += `- React, Three.js, React Three Fiber (R3F), GSAP (GreenSock), JavaScript, TypeScript, Next.js, Node.js, WebGL, 3D Graphics, Web Development.\n\n`;
    content += `## Selected Portfolio Projects\n`;
    AXADOV_PROJECTS.forEach(p => {
        const tech = p.techStack ? ` (Tech: ${p.techStack.map(t => TECH_STACK_NAMES[t] || t).join(', ')})` : '';
        content += `- [${p.seoTitle || p.title}](${p.url || 'https://axadov-portfolio.vercel.app'}): ${p.seoDescription || p.description || ''}${tech}\n`;
    });
    content += `\n## Frequently Asked Questions (FAQ)\n`;
    AXADOV_FAQS.forEach(item => {
        content += `- **${item.question}**\n  ${item.answer.replace(/\n/g, '\n  ')}\n`;
    });

    return content;
}

export function generateSeoHtml() {
    const cachedLlmsContent = buildLlmsTxt();

    return {
        name: 'sanity-seo-plugin',

        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                if (req.url === '/llms.txt') {
                    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                    res.end(cachedLlmsContent);
                } else {
                    next();
                }
            });
        },

        async transformIndexHtml(html) {
            try {
                const siteTitle = 'Axadov Abdurasul (axadov) | Creative 3D Portfolio';
                const siteDescription = 'Senior frontend & backend developer portfolio by Axadov Abdurasul (axadov). Explore interactive 3D WebGL scenes, React, Node.js and creative coding.';
                const aboutMe = 'Senior frontend & backend developer with expertise in building interactive 3D web applications, POS & inventory management platforms, full-stack systems, React and Node.js solutions.';

                let seoHtml = `\n<div id="seo-content" class="sr-only-seo">\n`;
                seoHtml += `  <header>\n    <h1>${siteTitle}</h1>\n    <p>${siteDescription}</p>\n  </header>\n`;
                seoHtml += `  <section id="about">\n    <h2>About Me</h2>\n    <p>${aboutMe}</p>\n    <a href="https://github.com/obsidianosuz-hub">GitHub</a>\n    <a href="https://t.me/axadovcoder">Telegram</a>\n    <a href="https://instagram.com/infasuz">Instagram</a>\n  </section>\n`;
                seoHtml += `  <section id="projects">\n    <h2>Projects</h2>\n    <ul>\n`;
                AXADOV_PROJECTS.forEach(p => {
                    seoHtml += `      <li>\n        <h3>${p.seoTitle || p.title}</h3>\n        <p>${p.seoDescription || p.description || ''}</p>\n        ${p.url ? `<a href="${p.url}">Visit ${p.seoTitle || p.title}</a>\n` : ''}      </li>\n`;
                });
                seoHtml += `    </ul>\n  </section>\n`;
                seoHtml += `  <section id="faq">\n    <h2>Frequently Asked Questions (FAQ)</h2>\n`;
                AXADOV_FAQS.forEach(item => {
                    seoHtml += `    <article>\n      <h3>${item.question}</h3>\n      <p>${item.answer}</p>\n    </article>\n`;
                });
                seoHtml += `  </section>\n</div>\n`;

                const jsonLdSchemas = buildJsonLd();
                const jsonLdScript = `\n  <!-- Dynamic Structured Data (JSON-LD) -->\n  <script type="application/ld+json">\n${JSON.stringify(jsonLdSchemas, null, 2)}\n  </script>\n`;

                let transformedHtml = html.replace(
                    /<title>(.*?)<\/title>/,
                    `<title>${siteTitle}</title>`
                );
                
                if (transformedHtml.includes('<meta name="description"')) {
                    transformedHtml = transformedHtml.replace(
                        /<meta name="description" content="(.*?)"\s*\/?>/,
                        `<meta name="description" content="${siteDescription}" />`
                    );
                } else {
                    transformedHtml = transformedHtml.replace(
                        '</head>',
                        `  <meta name="description" content="${siteDescription}" />\n</head>`
                    );
                }

                transformedHtml = transformedHtml
                    .replace(
                        /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
                        `<meta property="og:title" content="${siteTitle}" />`
                    )
                    .replace(
                        /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
                        `<meta property="og:description" content="${siteDescription}" />`
                    )
                    .replace(
                        /<meta\s+property="og:site_name"\s+content="[^"]*"\s*\/?>/i,
                        `<meta property="og:site_name" content="Axadov Abdurasul Portfolio" />`
                    );

                transformedHtml = transformedHtml
                    .replace(
                        /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
                        `<meta name="twitter:title" content="${siteTitle}" />`
                    )
                    .replace(
                        /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
                        `<meta name="twitter:description" content="${siteDescription}" />`
                    );

                transformedHtml = transformedHtml.replace('</head>', `${jsonLdScript}</head>`);

                if (transformedHtml.includes('id="seo-content"')) {
                    transformedHtml = transformedHtml.replace(
                        /<div id="seo-content" class="sr-only-seo">[\s\S]*?<\/div>/,
                        seoHtml
                    );
                } else {
                    transformedHtml = transformedHtml.replace('</body>', `${seoHtml}</body>`);
                }

                return transformedHtml;
            } catch (error) {
                console.error('SEO Plugin Error:', error);
                return html;
            }
        },

        async generateBundle() {
            this.emitFile({
                type: 'asset',
                fileName: 'llms.txt',
                source: cachedLlmsContent
            });
        }
    };
}
