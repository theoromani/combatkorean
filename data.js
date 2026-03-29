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
    },
    {
        id: "lesson2",
        title: "직장 내 업무 상황 보고하기",
        description: "상사에게 상황을 설명하고 자연스럽게 대답하는 실전 비즈니스 표현을 배웁니다.",
        category: "Workplace / 비즈니스",
        level: "Intermediate",
        videoId: "m9Lp9yS5-04",
        start: 45,
        end: 65,
        sentences: [
            {
                "timestamp": 46,
                "korean": "잠깐만요, 지금 바로 확인해 보겠습니다.",
                "vietnamese": "Chờ một chút ạ, tôi sẽ kiểm tra ngay bây giờ."
            },
            {
                "timestamp": 52,
                "korean": "아, 네! 준비 다 됐습니다. 걱정 마세요.",
                "vietnamese": "À, vâng! Mọi thứ đã chuẩn bị xong rồi ạ. Đừng lo lắng."
            },
            {
                "timestamp": 58,
                "korean": "최대한 빨리 처리하도록 하겠습니다.",
                "vietnamese": "Tôi sẽ cố gắng xử lý nhanh nhất có thể."
            }
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = lessons;
} else {
    window.lessons = lessons;
}
