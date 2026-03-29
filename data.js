const lessons = [
    {
        id: "lesson1",
        title: "실제 한국어 회화 #1",
        description: "베트남 노동자를 위한 실전 한국어 표현 학습 (영상 3:55 ~ 4:10)",
        category: "Workplace / 생활",
        level: "Intermediate",
        videoId: "ZtFGPHzdYQM",
        start: 235,
        end: 250,
        sentences: [
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
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = lessons;
} else {
    window.lessons = lessons;
}
