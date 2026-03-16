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
        feed1: "Eu comecei meio sem saber se ia dar resultado, mas fiquei surpresa com as mudanças no meu corpo! Além de me sentir mais leve e disposta, já consigo ver diferença real. O que mais gosto é que tudo é feito de forma simples e possível de manter. Seu acompanhamento faz muita diferença! Muito obrigada mesmo! 💛",
        feed2: "Treinar com você faz toda a diferença! Sua dedicação, motivação e cuidado mostram o quanto você ama o que faz. Obrigada por me incentivar sempre a ir além.",
        feed3: "Eu não tenho não amada Meire vc esta fazendo a diferença nos treinos que vc esta me dando. Realmente estou me sentindo bem, bem melhor. Agradecer a Deus por ter colocado vc no meu caminho amada Meire. E que Deus continue te abençoando infinitamente ❤️",
        feed4: "Gostaria de expressar minha imensa gratidão pelo seu apoio e encorajamento. A sua orientação e experiência faz uma enorme diferença na minha vida. Tenho a melhor Personal Meire Pimenta ❤️💪🏻"
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
        feed1: "I started kind of not knowing if it would work, but I was surprised by the changes in my body! Besides feeling lighter and more willing, I can already see a real difference. What I like most is that everything is done in a simple and possible-to-maintain way. Your support makes a big difference! Thank you very much! 💛",
        feed2: "Training with you makes all the difference! Your dedication, motivation, and care show how much you love what you do. Thank you for always encouraging me to go further.",
        feed3: "I have no words beloved Meire, you are making a difference in the workouts you are giving me. I really am feeling good, much better. Thank God for putting you in my path beloved Meire. And may God continue to bless you infinitely ❤️",
        feed4: "I would like to express my immense gratitude for your support and encouragement. Your guidance and experience make a huge difference in my life. I have the best Personal trainer Meire Pimenta ❤️💪🏻"
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
        feed1: "Empecé sin saber si daría resultado, ¡pero me sorprendieron los cambios en mi cuerpo! Además de sentirme más ligera y dispuesta, ya veo una diferencia real. Lo que más me gusta es que todo se hace de manera simple y posible de mantener. ¡Tu acompañamiento hace mucha diferencia! ¡Muchas gracias! 💛",
        feed2: "¡Entrenar contigo hace toda la diferencia! Tu dedicación, motivación y cuidado muestran cuánto amas lo que haces. Gracias por animarme siempre a ir más allá.",
        feed3: "No tengo palabras amada Meire, estás haciendo la diferencia en los entrenamientos que me das. Realmente me siento bien, mucho mejor. Agradezco a Dios por haberte puesto en mi camino amada Meire. Y que Dios te siga bendiciendo infinitamente ❤️",
        feed4: "Me gustaría expresar mi inmensa gratitud por tu apoyo y aliento. Tu orientación y experiencia hacen una gran diferencia en mi vida. Tengo la mejor entrenadora personal Meire Pimenta ❤️💪🏻"
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
