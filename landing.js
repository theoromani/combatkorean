document.addEventListener('DOMContentLoaded', () => {
    const lessonGrid = document.getElementById('lesson-grid');
    
    if (!window.lessons) {
        console.error('Lessons data not found');
        return;
    }

    window.lessons.forEach(lesson => {
        const card = document.createElement('div');
        card.classList.add('lesson-card');

        // Simple thumbnail using YouTube image
        const thumbnailUrl = `https://img.youtube.com/vi/${lesson.videoId}/mqdefault.jpg`;

        card.innerHTML = `
            <div class="lesson-thumbnail">
                <img src="${thumbnailUrl}" alt="${lesson.title}">
                <div class="play-overlay">▶</div>
            </div>
            <div class="lesson-info">
                <h3>${lesson.title}</h3>
                <p>${lesson.description}</p>
                <a href="learn.html?id=${lesson.id}" class="btn-learn">학습하기</a>
            </div>
        `;

        lessonGrid.appendChild(card);
    });
});
