// 1. Get lesson from URL
const urlParams = new URLSearchParams(window.location.search);
const lessonId = urlParams.get('id') || 'lesson1';
const currentLesson = (window.lessons || []).find(l => l.id === lessonId) || (window.lessons ? window.lessons[0] : null);

if (!currentLesson) {
    alert('Lesson not found.');
    window.location.href = 'index.html';
}

// Update Page Content
document.title = `${currentLesson.title} | Combat Korean Training`;
document.getElementById('lesson-title-nav').textContent = currentLesson.title;

// Phrase Explanation Placeholder
const firstPhrase = currentLesson.sentences[0] ? currentLesson.sentences[0].korean : "Learn real expressions";
document.getElementById('phrase-exp').textContent = `In this scene, you will learn the expression "${firstPhrase}". Pay attention to the tone and situation.`;

// 2. Load YouTube API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: currentLesson.videoId,
        playerVars: {
            'start': currentLesson.start,
            'end': currentLesson.end,
            'rel': 0,
            'modestbranding': 1,
            'controls': 1,
            'autoplay': 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    // Player is ready
}

function onPlayerStateChange(event) {
    // Could track time here to highlight active card
}

// 3. Render Sentence Cards
const sentenceCardsContainer = document.getElementById('sentence-cards');

currentLesson.sentences.forEach((sentence, index) => {
    const card = document.createElement('div');
    card.classList.add('sentence-card');
    card.setAttribute('data-index', index);

    card.innerHTML = `
        <h4>${sentence.korean}</h4>
        <p>${sentence.vietnamese}</p>
    `;

    card.addEventListener('click', () => {
        // Highlight active card
        document.querySelectorAll('.sentence-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        if (player && player.seekTo) {
            player.seekTo(sentence.timestamp, true);
            player.playVideo();
        }
    });

    sentenceCardsContainer.appendChild(card);
});

// 4. Enhanced Player Controls
document.getElementById('rewind-btn').addEventListener('click', () => {
    if (player && player.getCurrentTime) {
        const currentTime = player.getCurrentTime();
        player.seekTo(Math.max(currentTime - 10, currentLesson.start), true);
    }
});

document.getElementById('speed-down-btn').addEventListener('click', () => {
    if (player && player.getPlaybackRate) {
        const currentRate = player.getPlaybackRate();
        player.setPlaybackRate(Math.max(currentRate - 0.25, 0.25));
    }
});

document.getElementById('speed-up-btn').addEventListener('click', () => {
    if (player && player.getPlaybackRate) {
        const currentRate = player.getPlaybackRate();
        player.setPlaybackRate(Math.min(currentRate + 0.25, 2.0));
    }
});
