// 1. Get lesson from URL
const urlParams = new URLSearchParams(window.location.search);
const lessonId = urlParams.get('id') || 'lesson1';
const currentLesson = (window.lessons || []).find(l => l.id === lessonId) || (window.lessons ? window.lessons[0] : null);

if (!currentLesson) {
    alert('레슨을 찾을 수 없습니다.');
    window.location.href = 'index.html';
}

// Update Page Title
document.title = `${currentLesson.title} | K-Lesson`;
document.getElementById('lesson-title').textContent = currentLesson.title;

// 2. Load YouTube API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: currentLesson.videoId,
        playerVars: {
            'start': currentLesson.start,
            'end': currentLesson.end,
            'rel': 0,
            'modestbranding': 1
        },
        events: {
            'onReady': onPlayerReady,
        }
    });
}

function onPlayerReady(event) {
    // Optional: auto play
}

// 3. Render Sentence Cards
const sentenceCardsContainer = document.getElementById('sentence-cards');

currentLesson.sentences.forEach(sentence => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <h3>${sentence.korean}</h3>
        <p>${sentence.vietnamese}</p>
    `;

    card.addEventListener('click', () => {
        if (player && player.seekTo) {
            player.seekTo(sentence.timestamp, true);
            player.playVideo();
        }
    });

    sentenceCardsContainer.appendChild(card);
});

// 4. Control Button Listeners
document.getElementById('rewind-btn').addEventListener('click', () => {
    if (player && player.getCurrentTime) {
        const currentTime = player.getCurrentTime();
        player.seekTo(currentTime - 10, true);
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
