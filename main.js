
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'ZtFGPHzdYQM', // Updated video ID
    playerVars: {
        'start': 235, // Start at 3:55
        'end': 250     // End at 4:10
    },
    events: {
      'onReady': onPlayerReady,
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    // event.target.playVideo();
}


const sentences = [
    {
        "timestamp": 236,
        "korean": "큰일인데?",
        "vietnamese": "Chuyện lớn rồi đây?"
    },
    {
        "timestamp": 239,
        "korean": "일할사람이 없어서 큰일이야 하이 일 잘하는데",
        "vietnamese": "Không có người làm nên gay go thật, bạn Hi làm việc tốt lắm mà"
    },
    {
        "timestamp": 245,
        "korean": "어떡하지?",
        "vietnamese": "Làm sao bây giờ?"
    }
];

const sentenceCardsContainer = document.getElementById('sentence-cards');

sentences.forEach(sentence => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-timestamp', sentence.timestamp);

    const koreanText = document.createElement('h3');
    koreanText.textContent = sentence.korean;

    const vietnameseText = document.createElement('p');
    vietnameseText.textContent = sentence.vietnamese;

    card.appendChild(koreanText);
    card.appendChild(vietnameseText);

    card.addEventListener('click', () => {
        player.seekTo(sentence.timestamp, true);
        player.playVideo();
    });

    sentenceCardsContainer.appendChild(card);
});


document.getElementById('rewind-btn').addEventListener('click', () => {
    const currentTime = player.getCurrentTime();
    player.seekTo(currentTime - 10, true);
});

document.getElementById('speed-down-btn').addEventListener('click', () => {
    const currentRate = player.getPlaybackRate();
    player.setPlaybackRate(Math.max(currentRate - 0.25, 0.25));
});

document.getElementById('speed-up-btn').addEventListener('click', () => {
    const currentRate = player.getPlaybackRate();
    player.setPlaybackRate(currentRate + 0.25);
});
