import type { Post } from "../type/Community"; 

export const mockPosts: Post[] = [
    {
        id: 'n1',
        category: 'NOTICE',
        title: '[공지] 다모아 서비스 점검 안내 (4/1)',
        content: '안녕하세요. 다모아입니다. 안정적인 서비스 제공을 위해 서버 점검을 진행합니다.',
        author: '관리자',
        createdAt: '2026-03-28',
        viewCount: 125,
        isFixed: true,
        isPublic: true
    },
    {
        id: 'n2',
        category: 'NOTICE',
        title: '[이벤트] 신규 카드 등록 시 포인트 증정!',
        content: '새로운 카드를 등록하고 최대 5,000 포인트를 받아가세요.',
        author: '관리자',
        createdAt: '2026-03-25',
        viewCount: 340,
        isFixed: false,
        isPublic: true
    },

    {
        id: 'q1',
        category: 'INQUIRY',
        title: '카드 혜택 비교가 잘 안 보여요.',
        content: '특정 카드사 혜택 정보가 업데이트가 안 된 것 같은데 확인 부탁드립니다.',
        author: 'test',
        createdAt: '2026-03-29',
        viewCount: 5,
        status: 'PROCED',
        answerContent: '안녕하세요. 해당 카드사 혜택은 현재 최신 데이터로 업데이트 완료되었습니다.',
        isPublic: false 
    },
    {
        id: 'q2',
        category: 'INQUIRY',
        title: '회원 탈퇴는 어떻게 하나요?',
        content: '계정을 삭제하고 싶은데 메뉴를 못 찾겠어요.',
        author: 'user01',
        createdAt: '2026-03-30',
        viewCount: 2,
        status: 'WAIT', 
        isPublic: true 
    }
];