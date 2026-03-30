
import styled from 'styled-components';

// 전체 컨테이너
const CommunityContainer = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

// 페이지 제목 (공지/문의)
const PageTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

// 탭 버튼 그룹
const TabGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
`;

// 개별 탭 버튼 (active 상태에 따라 색상 변경)
const TabButton = styled.button<{ isActive: boolean }>`
  padding: 10px 20px;
  border: none;
  background: none;
  font-size: 1rem;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  color: ${(props) => (props.isActive ? '#007bff' : '#888')};
  border-bottom: 2px solid ${(props) => (props.isActive ? '#007bff' : 'transparent')};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: #007bff;
  }
`;

// 게시글 리스트 컨테이너
const PostList = styled.ul`
  list-style: none;
  padding: 0;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  overflow: hidden;
`;

// 개별 게시글 아이템
const PostItem = styled.li`
  padding: 15px 20px;
  border-bottom: 1px solid #f1f1f1;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const PostTitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1; /* 남은 공간 다 차지 */
  min-width: 0; /* 말줄임표 작동을 위한 설정 */
`;

export const DeleteButton = styled.button`
  background-color: #fff;
  border: 1px solid #ff4d4f;
  color: #ff4d4f;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  flex-shrink: 0; /* 버튼 크기 유지 */

  &:hover {
    background-color: #ff4d4f;
    color: #fff;
  }
`;

export const ActionGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  button {
    background: none;
    border: none;
    color: #666;
    cursor: pointer;
    font-size: 0.9rem;
    &:hover { color: #333; }
  }
`;

export const EditButton = styled.button`
  background-color: #f0f7ff !important; /* 연한 파란색 배경 */
  color: #007bff !important;
  padding: 6px 12px;
  border-radius: 6px;
  font-weight: 600;
  
  &:hover {
    background-color: #e1efff !important;
  }
`;

// 게시글 제목과 배지(고정/상태) 영역
const PostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const PostTitle = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  /* 제목이 길어지면 말줄임표 처리 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// 고정 공지나 답변 상태를 나타내는 배지
const Badge = styled.span<{ type?: 'fixed' | 'wait' | 'proced' }>`
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: bold;
  
  ${(props) => {
    switch (props.type) {
      case 'fixed': return 'background-color: #ffebee; color: #ef5350;'; // 공지 고정
      case 'wait': return 'background-color: #f5f5f5; color: #9e9e9e;'; // 답변 대기
      case 'proced': return 'background-color: #e3f2fd; color: #1e88e5;'; // 답변 완료
      default: return 'background-color: #eee; color: #666;';
    }
  }}
`;

// 게시글 하단 정보 (작성자, 날짜, 조회수)
const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #999;
`;

const InfoGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export {
  CommunityContainer,
  PageTitle,
  TabGroup,
  TabButton,
  PostList,
  PostItem,
  PostHeader,
  PostTitle,
  Badge,
  PostFooter,
  InfoGroup
};

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 30px 20px;
  background-color: #fff;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  line-height: 1.4;
  margin-bottom: 15px;
  word-break: keep-all; /* 한글 단어 단위 줄바꿈 */
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
  margin-bottom: 30px;
  
  span {
    font-size: 0.9rem;
    color: #888;
    position: relative;

    /* 구분선 넣기 */
    &:not(:last-child)::after {
      content: '';
      position: absolute;
      right: -8px;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 12px;
      background-color: #ddd;
    }
  }
`;

export const Content = styled.div`
  font-size: 1.05rem;
  line-height: 1.8;
  color: #444;
  min-height: 200px;
  white-space: pre-wrap; /* 줄바꿈(Enter) 반영 */
  word-wrap: break-word;
  margin-bottom: 50px;
`;

export const AnswerBox = styled.div`
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  border-left: 4px solid #007bff; /* 포인트 컬러로 강조 */
  margin-top: 30px;

  strong {
    display: block;
    font-size: 0.95rem;
    color: #007bff;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
    margin: 0;
    white-space: pre-wrap;
  }
`;

// 추가하면 좋은 스타일: 뒤로가기 버튼
export const BackButton = styled.button`
  background: none;
  border: none;
  color: #666;
  font-size: 0.9rem;
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0;

  &:hover {
    color: #333;
    text-decoration: underline;
  }
`;

export const WriteContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #fff;
`;

export const FormGroup = styled.div`
  margin-bottom: 25px;

  p {
    font-size: 0.95rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #007bff;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  resize: none; /* 크기 조절 막기 */
  outline: none;
  line-height: 1.6;

  &:focus {
    border-color: #007bff;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.95rem;
    cursor: pointer;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    transform: scale(0.98);
  }
`;