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
            { "timestamp": 236, "korean": "큰일인데?", "vietnamese": "Chuyện lớn rồi đây?" },
            { "timestamp": 239, "korean": "일할사람이 없어서 큰일이야 하이 일 잘하는데", "vietnamese": "Không có người làm nên gay go thật, bạn Hi làm việc tốt lắm mà" },
            { "timestamp": 245, "korean": "어떡하지?", "vietnamese": "Làm sao bây giờ?" }
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
            { "timestamp": 46, "korean": "잠깐만요, 지금 바로 확인해 보겠습니다.", "vietnamese": "Chờ một chút ạ, tôi sẽ kiểm tra ngay bây giờ." },
            { "timestamp": 52, "korean": "아, 네! 준비 다 됐습니다. 걱정 마세요.", "vietnamese": "À, vâng! Mọi thứ đã 준비 xong rồi ạ. Đừng lo lắng." },
            { "timestamp": 58, "korean": "최대한 빨리 처리하도록 하겠습니다.", "vietnamese": "Tôi sẽ cố gắng xử lý nhanh nhất có thể." }
        ]
    },
    {
        id: "lesson3",
        title: "식당에서 메뉴 주문하기",
        description: "한국 식당에서 메뉴를 고르고 주문하는 필수 표현을 학습합니다.",
        category: "Daily Life / 식당",
        level: "Beginner",
        videoId: "vX9P2p6Koz0",
        start: 120,
        end: 140,
        sentences: [
            { "timestamp": 122, "korean": "여기 메뉴판 좀 보여주시겠어요?", "vietnamese": "Cho tôi xem menu được không ạ?" },
            { "timestamp": 128, "korean": "비빔밥 하나랑 불고기 2인분 주세요.", "vietnamese": "Cho tôi một suất Bibimbap và hai suất Bulgogi." },
            { "timestamp": 135, "korean": "너무 맵지 않게 해주세요.", "vietnamese": "Làm cho tôi bớt cay một chút nhé." }
        ]
    },
    {
        id: "lesson4",
        title: "병원에서 증상 설명하기",
        description: "어디가 아픈지 정확하게 설명하고 처방을 받는 방법을 배웁니다.",
        category: "Emergency / 병원",
        level: "Intermediate",
        videoId: "A9O5-N6mCis",
        start: 10,
        end: 30,
        sentences: [
            { "timestamp": 12, "korean": "어제부터 열이 나고 목이 아파요.", "vietnamese": "Tôi bị sốt và đau họng từ ngày hôm qua." },
            { "timestamp": 18, "korean": "배가 계속 아픈데 소화제를 주시겠어요?", "vietnamese": "Tôi bị đau bụng liên tục, cho tôi thuốc tiêu hóa được không?" },
            { "timestamp": 25, "korean": "주사 맞아야 하나요, 아니면 약만 먹으면 되나요?", "vietnamese": "Tôi phải tiêm hay chỉ cần uống thuốc là được ạ?" }
        ]
    },
    {
        id: "lesson5",
        title: "은행에서 계좌 개설하기",
        description: "통장을 만들고 체크카드를 발급받는 대화 상황입니다.",
        category: "Public Service / 은행",
        level: "Intermediate",
        videoId: "6DOfO6YlIis",
        start: 50,
        end: 75,
        sentences: [
            { "timestamp": 52, "korean": "새 계좌를 만들고 싶은데 어떤 서류가 필요해요?", "vietnamese": "Tôi muốn mở tài khoản mới, cần những giấy tờ gì ạ?" },
            { "timestamp": 60, "korean": "외국인 등록증 여기 있습니다.", "vietnamese": "Thẻ đăng ký người nước ngoài của tôi đây ạ." },
            { "timestamp": 68, "korean": "인터넷 뱅킹도 신청하고 싶어요.", "vietnamese": "Tôi cũng muốn đăng ký dịch vụ Internet Banking." }
        ]
    },
    {
        id: "lesson6",
        title: "시장에서 가격 흥정하기",
        description: "쇼핑할 때 가격을 물어보고 덤을 요청하는 실용적인 표현입니다.",
        category: "Daily Life / 쇼핑",
        level: "Beginner",
        videoId: "p_Vq8U_eOIs",
        start: 30,
        end: 55,
        sentences: [
            { "timestamp": 32, "korean": "이 사과 얼마예요? 좀 비싼 것 같아요.", "vietnamese": "Táo này bao nhiêu tiền ạ? Có vẻ hơi đắt." },
            { "timestamp": 40, "korean": "조금만 깎아 주시면 안 될까요?", "vietnamese": "Có thể bớt cho tôi một chút được không?" },
            { "timestamp": 48, "korean": "현금으로 계산하면 더 싸게 해주세요.", "vietnamese": "Nếu trả bằng tiền mặt thì hãy giảm giá thêm cho tôi nhé." }
        ]
    },
    {
        id: "lesson7",
        title: "택시 이용 및 목적지 안내",
        description: "택시 기사님께 목적지를 설명하고 도착 시간을 묻는 표현입니다.",
        category: "Daily Life / 교통",
        level: "Beginner",
        videoId: "fA9R3m68Ghk",
        start: 15,
        end: 40,
        sentences: [
            { "timestamp": 18, "korean": "서울역으로 가주세요. 얼마나 걸릴까요?", "vietnamese": "Cho tôi đến ga Seoul. Mất khoảng bao lâu ạ?" },
            { "timestamp": 26, "korean": "여기서 세워주세요. 감사합니다.", "vietnamese": "Hãy dừng lại ở đây cho tôi. Cảm ơn bác." },
            { "timestamp": 33, "korean": "잔돈은 안 주셔도 됩니다.", "vietnamese": "Bác không cần trả lại tiền thừa đâu ạ." }
        ]
    },
    {
        id: "lesson8",
        title: "첫 만남 자기소개",
        description: "처음 만난 사람에게 예의 바르게 인사하고 자신을 소개합니다.",
        category: "Socializing / 인사",
        level: "Beginner",
        videoId: "8X1z4q5DclA",
        start: 100,
        end: 125,
        sentences: [
            { "timestamp": 102, "korean": "안녕하세요, 만나서 반갑습니다.", "vietnamese": "Xin chào, rất vui được gặp bạn." },
            { "timestamp": 110, "korean": "저는 베트남에서 온 투이입니다.", "vietnamese": "Tôi là Thuy, đến từ Việt Nam." },
            { "timestamp": 118, "korean": "잘 부탁드립니다. 앞으로 친하게 지내요.", "vietnamese": "Rất mong được giúp đỡ. Chúng ta hãy làm bạn thân nhé." }
        ]
    },
    {
        id: "lesson9",
        title: "직장 내 점심 메뉴 제안",
        description: "동료들과 점심 메뉴를 고르며 취향을 이야기하는 대화입니다.",
        category: "Workplace / 소통",
        level: "Intermediate",
        videoId: "EunE1u-t59o",
        start: 45,
        end: 70,
        sentences: [
            { "timestamp": 48, "korean": "오늘 점심은 뭐 먹을까요? 한식 어때요?", "vietnamese": "Trưa nay chúng ta ăn gì nhỉ? Món Hàn Quốc thấy thế nào?" },
            { "timestamp": 55, "korean": "근처에 맛있는 김치찌개 집이 있어요.", "vietnamese": "Gần đây có quán canh Kimchi ngon lắm." },
            { "timestamp": 63, "korean": "저는 다 괜찮아요. 아무거나 잘 먹습니다.", "vietnamese": "Tôi thì cái gì cũng được. Cái gì tôi cũng ăn ngon cả." }
        ]
    },
    {
        id: "lesson10",
        title: "우체국에서 택배 보내기",
        description: "해외로 택배를 보내는 절차와 비용 확인 대화입니다.",
        category: "Public Service / 생활",
        level: "Intermediate",
        videoId: "L7X_H-29LhA",
        start: 200,
        end: 230,
        sentences: [
            { "timestamp": 205, "korean": "베트남으로 이 박스를 보내고 싶습니다.", "vietnamese": "Tôi muốn gửi chiếc hộp này về Việt Nam." },
            { "timestamp": 215, "korean": "배송비는 무게에 따라 결정되나요?", "vietnamese": "Phí vận chuyển được quyết định theo trọng lượng phải không ạ?" },
            { "timestamp": 222, "korean": "도착하는 데 얼마나 걸릴까요?", "vietnamese": "Mất bao lâu thì hàng sẽ đến nơi ạ?" }
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = lessons;
} else {
    window.lessons = lessons;
}
