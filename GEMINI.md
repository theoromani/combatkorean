# Project: Q-Sort 조직문화진단 웹앱

## Goal
- 동일한 60개 카드로 2회 배치:
  1) 현상문화(current)
  2) 이상문화(ideal)
- 사용자는 마우스로 카드를 drag & drop 하여 "정규분포 슬롯"에 배치한다.
- 카드별 위치(slotId)를 Firestore에 저장한다.
- 두 배치 간 동일 카드의 위치 차이로 리포트를 만든다:
  - 중요하지만 잘됨
  - 중요하지만 미흡
  - 덜 중요하지만 과함
  - 덜 중요하고 덜함

## Non-negotiables
- 카드 텍스트는 /data/qsort_cards.json(60개)을 seed로 사용.
- 정규분포 슬롯은 distribution JSON으로 구성 가능해야 함(60카드 기본 제공).
- 빈 슬롯만 drop 가능. 이미 차있으면 swap 또는 기존 카드 pool로 이동(간단 전략 채택).
- Firestore 저장은 users/{uid}/sessions/{sessionId} 단위. placements.current, placements.ideal을 map으로 저장.
- Auth는 anonymous sign-in 사용.

## Tech stack
- Next.js (App Router) + TypeScript + Tailwind
- Firebase: Auth + Firestore
- Drag&Drop: dnd-kit

## Deliverables
1) Drag & Drop 보드: Pool + Q-sort Grid(컬럼/슬롯)
2) Phase toggle(current/ideal)
3) Firestore persistence
4) Diff report page/component
5) Firestore rules file

## Coding style
- Client components 최소화
- 타입 명시
