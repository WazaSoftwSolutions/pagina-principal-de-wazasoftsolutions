/* public/js/project-detail.js */

/**
 * Inyecta el contenido dinámico en el DOM
 */
function injectProjectData(data) {
    if (!data) {
        // Handle project not found
        document.body.innerHTML = `
            <div class="container mx-auto px-6 py-24 text-center">
                <h1 class="text-4xl font-black mb-4">Proyecto no encontrado</h1>
                <p class="text-xl mb-8">Lo sentimos, la información de este proyecto no está disponible.</p>
                <a href="../index.html" class="bg-black text-white py-3 px-8 rounded-lg font-bold">Volver al Inicio</a>
            </div>
        `;
        return;
    }

    // Basic Info
    document.getElementById('project-title').innerText = data.title;
    document.getElementById('breadcrumb-current').innerText = data.title;
    document.getElementById('project-category').innerText = data.category;
    document.getElementById('project-year').innerText = data.year;
    document.getElementById('project-description').innerText = data.description;
    
    // Title in Head
    document.title = `${data.title} | WazaDevs`;

    // Gallery
    const thumbnailList = document.getElementById('thumbnail-list');
    const primaryImage = document.getElementById('primary-image');
    
    // Clear list if any (precaution)
    thumbnailList.innerHTML = '';

    // Set initial primary image
    primaryImage.src = data.images[0];

    data.images.forEach((imgUrl, index) => {
        const thumb = document.createElement('div');
        thumb.className = `thumbnail-item ${index === 0 ? 'active' : ''}`;
        thumb.innerHTML = `<img src="${imgUrl}" alt="Thumbnail ${index + 1}">`;
        
        thumb.addEventListener('click', () => {
            // Change main image
            primaryImage.style.opacity = '0';
            setTimeout(() => {
                primaryImage.src = imgUrl;
                primaryImage.style.opacity = '1';
            }, 300);

            // Update active thumbnail
            document.querySelectorAll('.thumbnail-item').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });

        thumbnailList.appendChild(thumb);
    });

    // Functionalities
    const fList = document.getElementById('functionalities-list');
    fList.innerHTML = '';
    data.functionalities.forEach(text => {
        const li = document.createElement('li');
        li.className = 'flex items-start gap-3 text-gray-700';
        li.innerHTML = `
            <span class="mt-1 text-black"><i class="fa-solid fa-circle-check"></i></span>
            <span>${text}</span>
        `;
        fList.appendChild(li);
    });
    
    document.getElementById('functionality-image').src = data.functionalityImage;

    // Modules
    const mList = document.getElementById('modules-list');
    mList.innerHTML = '';
    data.modules.forEach(mod => {
        const card = document.createElement('div');
        card.className = 'module-card';
        card.innerHTML = `
            <div class="module-icon"><i class="fa-solid ${mod.icon}"></i></div>
            <h4 class="text-xl font-bold mb-2">${mod.name}</h4>
            <p class="text-gray-600">${mod.description}</p>
        `;
        mList.appendChild(card);
    });

    // Integrations
    const iList = document.getElementById('integrations-list');
    iList.innerHTML = '';
    data.integrations.forEach(text => {
        const span = document.createElement('span');
        span.className = 'bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm';
        span.innerText = text;
        iList.appendChild(span);
    });

    // Technologies
    const techStack = document.getElementById('tech-stack');
    techStack.innerHTML = '';
    for (const [category, items] of Object.entries(data.technologies)) {
        const group = document.createElement('div');
        group.className = 'tech-group';
        group.innerHTML = `
            <h4 class="uppercase tracking-widest text-xs font-bold text-gray-500 mb-4">${category.replace('_', ' ')}</h4>
            <div class="tech-list">
                ${items.map(item => `<span class="tech-tag">${item}</span>`).join('')}
            </div>
        `;
        techStack.appendChild(group);
    }

    // Video
    const videoContainer = document.getElementById('video-container');
    if (data.videoUrl.includes('youtube.com') || data.videoUrl.includes('embed')) {
        videoContainer.innerHTML = `
            <iframe src="${data.videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
    } else {
        videoContainer.innerHTML = `
            <video controls>
                <source src="${data.videoUrl}" type="video/mp4">
                Tu navegador no soporta el elemento de video.
            </video>
        `;
    }
}

// Initial Animation for sections
function initReveal() {
    const reveals = document.querySelectorAll('.section-content, .project-hero, .glass-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

/**
 * Carga el proyecto basándose en el parámetro 'id' de la URL
 */
function loadProjectFromURL() {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
    
    if (typeof projectsData !== 'undefined' && projectId && projectsData[projectId]) {
        injectProjectData(projectsData[projectId]);
    } else {
        injectProjectData(null);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProjectFromURL();
    initReveal();
});
