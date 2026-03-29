document.addEventListener('DOMContentLoaded', () => {
    const lessonGrid = document.getElementById('lesson-grid');
    
    if (!window.lessons) {
        console.error('Lessons data not found');
        return;
    }

    window.lessons.forEach(lesson => {
        const card = document.createElement('div');
        card.classList.add('lesson-card');

        const thumbnailUrl = `https://img.youtube.com/vi/${lesson.videoId}/maxresdefault.jpg`;

        card.innerHTML = `
            <div class="lesson-thumb">
                <img src="${thumbnailUrl}" alt="${lesson.title}">
                <span class="lesson-badge">${lesson.level || 'Beginner'}</span>
            </div>
            <div class="lesson-content">
                <div class="lesson-meta">${lesson.category || 'Conversation'}</div>
                <h3>${lesson.title}</h3>
                <p>${lesson.description}</p>
                <div style="margin-top: 1.5rem;">
                    <a href="learn.html?id=${lesson.id}" class="btn btn-primary" style="width: 100%;">Start Lesson</a>
                </div>
            </div>
        `;

        lessonGrid.appendChild(card);
    });
});
