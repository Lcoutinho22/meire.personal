function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-theme');
    const icon = document.querySelector('.theme-toggle i');
    const logo = document.querySelector('.profile-img-top');
    if(body.classList.contains('light-theme')){ 
        icon.classList.replace('fa-sun', 'fa-moon'); 
        if(logo) logo.src = './image/logo-roxa.jpeg';
        localStorage.setItem('theme-mp', 'light'); 
    } else { 
        icon.classList.replace('fa-moon', 'fa-sun'); 
        if(logo) logo.src = './image/logo-branca (1).jpeg';
        localStorage.setItem('theme-mp', 'dark'); 
    }
}
if(localStorage.getItem('theme-mp') === 'light') { 
    document.body.classList.add('light-theme'); 
    document.querySelector('.theme-toggle i').classList.replace('fa-sun', 'fa-moon'); 
    const logoInit = document.querySelector('.profile-img-top');
    if(logoInit) logoInit.src = './image/logo-roxa.jpeg';
}

function enviarAnamnese() {
    const nome = document.getElementById('clientName').value;
    const idade = document.getElementById('clientAge').value;
    const nivel = document.getElementById('levelSelect').value;
    const plano = document.getElementById('planSelect').value;
    const saude = document.getElementById('healthInput').value || "Nenhuma restrição relatada.";
    const objetivo = document.getElementById('goalInput').value;
    
    if(!nome || !idade || !objetivo) { alert("Por favor, preencha Nome, Idade e Objetivo."); return; }
    
    const mensagem = `Olá Meire! Preenchi a pré-avaliação:%0A%0A*--- DADOS ---*%0A*Nome:* ${nome}%0A*Idade:* ${idade} anos%0A*Nível:* ${nivel}%0A*Plano de Interesse:* ${plano}%0A%0A*--- SAÚDE ---*%0A${saude}%0A%0A*--- OBJETIVO ---*%0A${objetivo}%0A%0AAguardo análise!`;
    
    window.open(`https://wa.me/5519982729585?text=${mensagem}`, '_blank');
}

function escolherPlano(plano) {
    const mensagem = `Olá Meire! Me interessei pelo plano *${plano}*. Poderia me passar mais detalhes sobre como funciona?`;
    window.open(`https://wa.me/5519982729585?text=${mensagem}`, '_blank');
}

// Share Menu
function toggleShareMenu() {
    const menu = document.getElementById('shareMenu');
    menu.classList.toggle('show');
}

// Fechar menus ao clicar fora
document.addEventListener('click', (event) => {
    const shareContainer = document.querySelector('.share-container');
    const sMenu = document.getElementById('shareMenu');
    if (shareContainer && !shareContainer.contains(event.target)) {
        if(sMenu) sMenu.classList.remove('show');
    }

    const langContainer = document.querySelector('.lang-container');
    const lMenu = document.getElementById('langMenu');
    if (langContainer && !langContainer.contains(event.target)) {
        if(lMenu) lMenu.classList.remove('show');
    }
});

function sharePage(network) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Conheça a metodologia da Meire Pimenta, Personal Trainer Especialista 40+!");
    
    let shareUrl = '';
    
    switch(network) {
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${text}%20${url}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'twitter':
            /* fallback pro antigo twitter / X */
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
            break;
        case 'tiktok':
            /* TikTok doesn't have a direct URL generic share endpoint like the others */
            /* Best approach is to copy to clipboard and alert the user */
            navigator.clipboard.writeText(`${decodeURIComponent(text)} ${decodeURIComponent(url)}`).then(() => {
                alert("Link copiado! Cole no seu TikTok ou envie para seus amigos.");
            });
            toggleShareMenu();
            return;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
    toggleShareMenu();
}

// --- MULTI-LANGUAGE SYSTEM ---
const i18n = {
    pt: {
        badge40: "Apenas Mulheres 40+",
        bio: "Consultoria fitness integrada. Alinhando treino, mindset e movimento para resultados duradouros.",
        btnWhats: "Falar Agora",
        btnPlans: "Ver Planos",
        titleAbout: 'Sobre a Treinadora <span class="swipe-hint"><i class="fas fa-arrows-alt-h"></i> deslize</span>',
        titleMethod: "O Método",
        titlePillars: "Os Pilares do Método",
        titlePresencial: "Treinamento Presencial",
        titleOnline: "Consultoria Online",
        titleServices: "Outros Serviços",
        titleFeedback: "O Que Dizem",
        titleEvaluation: "Pré-Avaliação Gratuita",
        btnSubmit: '<i class="fab fa-whatsapp"></i> Enviar Pré-Avaliação',
        ctaTitle: "Comece Sua Transformação",
        ctaSub: "Agende sua avaliação e dê o primeiro passo hoje.",
        ctaBtn: '<i class="fab fa-whatsapp"></i> Falar com a Treinadora',
        feed1: "Vc entrou na minha vida de maneira encantadora, além de ser um profissional maravilhosa uma mulher incrível 😍",
        feed2: "Melhor personal que eu já tive e me ajuda não só E me ajuda não so com fisico, mas tambem nas crises de ansiedade ❤️",
        feed3: "Parabéns pelo Dom de cuidar das pessoas com tanto profissionalismo e o melhor de tudo com AMOR ❤️"
    },
    en: {
        badge40: "Women 40+ Only",
        bio: "Integrated fitness consulting. Aligning training, mindset, and movement for lasting results.",
        btnWhats: "Talk Now",
        btnPlans: "See Plans",
        titleAbout: 'About the Trainer <span class="swipe-hint"><i class="fas fa-arrows-alt-h"></i> swipe</span>',
        titleMethod: "The Method",
        titlePillars: "Method Pillars",
        titlePresencial: "In-Person Training",
        titleOnline: "Online Consulting",
        titleServices: "Other Services",
        titleFeedback: "Testimonials",
        titleEvaluation: "Free Pre-Evaluation",
        btnSubmit: '<i class="fab fa-whatsapp"></i> Submit Pre-Evaluation',
        ctaTitle: "Start Your Transformation",
        ctaSub: "Schedule your evaluation and take the first step today.",
        ctaBtn: '<i class="fab fa-whatsapp"></i> Talk to the Trainer',
        feed1: "You entered my life in a charming way, besides being a wonderful professional, an incredible woman 😍",
        feed2: "Best personal trainer I've ever had, helps me not only physically but also with my anxiety attacks ❤️",
        feed3: "Congratulations on the Gift of taking care of people with so much professionalism and best of all, with LOVE ❤️"
    },
    es: {
        badge40: "Solo Mujeres 40+",
        bio: "Consultoría de fitness integrada. Alineando entrenamiento, mentalidad y movimiento para resultados duraderos.",
        btnWhats: "Hablar Ahora",
        btnPlans: "Ver Planes",
        titleAbout: 'Sobre la Entrenadora <span class="swipe-hint"><i class="fas fa-arrows-alt-h"></i> deslizar</span>',
        titleMethod: "El Método",
        titlePillars: "Pilares del Método",
        titlePresencial: "Entrenamiento Presencial",
        titleOnline: "Consultoría Online",
        titleServices: "Otros Servicios",
        titleFeedback: "Testimonios",
        titleEvaluation: "Pre-Evaluación Gratuita",
        btnSubmit: '<i class="fab fa-whatsapp"></i> Enviar Pre-Evaluación',
        ctaTitle: "Comienza Tu Transformación",
        ctaSub: "Programa tu evaluación y da el primer paso hoy.",
        ctaBtn: '<i class="fab fa-whatsapp"></i> Hablar con la Entrenadora',
        feed1: "Entraste en mi vida de una manera encantadora, además de ser una profesional maravillosa y una mujer increíble 😍",
        feed2: "La mejor entrenadora personal que he tenido, me ayuda no solo en lo físico, sino también en mis crisis de ansiedad ❤️",
        feed3: "Felicidades por el Don de cuidar a las personas con tanto profesionalismo y lo mejor de todo, con AMOR ❤️"
    }
};

function toggleLangMenu() {
    document.getElementById('langMenu').classList.toggle('show');
}

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(i18n[lang] && i18n[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = i18n[lang][key];
            } else {
                el.innerHTML = i18n[lang][key];
            }
        }
    });

    const badges = document.querySelectorAll('.badge-40plus');
    badges.forEach(b => {
        if(i18n[lang] && i18n[lang].badge40) b.innerText = i18n[lang].badge40;
    });

    localStorage.setItem('lang-mp', lang);
    toggleLangMenu();
}

// Initial Language Load
document.addEventListener('DOMContentLoaded', () => {
   const savedLang = localStorage.getItem('lang-mp');
   if(savedLang) changeLanguage(savedLang);
});

// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
});
