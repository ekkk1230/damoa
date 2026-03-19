import styled from "styled-components";

export const RecentSection = styled.section`
  padding: 0 20px 100px; // 하단 탭바 높이를 고려해 아래 여백을 넉넉히 줌
  margin-top: 40px;      // 카드 슬라이더와의 간격

  .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      h3 {
          font-size: 18px;
          font-weight: 800;
          color: #333d4b; // 토스 스타일의 진한 그레이
          letter-spacing: -0.5px;
      }

      .more-btn {
          font-size: 14px;
          font-weight: 600;
          color: #8b95a1; // 부드러운 그레이
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px 8px;
          
          &:hover {
              color: #3182f6; // 호버 시 포인트 컬러
          }
      }
  }
`;

export const SpendList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px; // 아이템 사이 간격
`;

export const SpendItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04); // 아주 은은한 그림자
  border: 1px solid #f1f1f1; // 테두리를 살짝 주면 더 깔끔합니다

  .item-left {
    .info {
      display: flex;
      flex-direction: column;
      gap: 4px;

      .name {
        font-size: 11px;
        font-weight: 700;
        color: #3182f6; // 카드 이름에 포인트 컬러
        background: #f0f7ff;
        padding: 2px 6px;
        border-radius: 4px;
        width: fit-content;
      }

      .store {
        font-size: 16px;
        font-weight: 600;
        color: #333d4b;
      }

      .date {
        font-size: 13px;
        color: #8b95a1;
      }
    }
  }

  .item-right {
    .amount {
      font-size: 17px;
      font-weight: 700;
      color: #1a1a1a;
    }
  }

  /* 클릭했을 때 반응형 효과 */
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:active {
    transform: scale(0.97);
    background-color: #f9fafb;
  }
`;


export const RecommendSection = styled.section`
  background-color: #ffffff; /* 이모지가 없으니 배경을 흰색으로 하고 테두리를 살짝 주는 게 깔끔해요 */
  border: 1px solid #f0f0f0;
  border-radius: 16px;
  padding: 24px 20px;
  margin: 24px 0;
`;

export const BannerHeader = styled.div`
  margin-bottom: 20px;

  .description {
    font-size: 15px;
    color: #444;
    line-height: 1.5;

    strong {
      color: #000; /* 이모지가 없으므로 텍스트 강조를 더 뚜렷하게 */
      font-weight: 800;
      border-bottom: 2px solid #e2e8f0; /* 밑줄 효과로 포인트 */
      padding-bottom: 1px;
    }
  }
`;

export const CardListMini = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 8px;
  
  &::-webkit-scrollbar { display: none; }
  -ms-overflow-style: none;
  scrollbar-width: none;

  .no-data {
    width: 100%;
    padding: 20px 0;
    color: #bbb;
    font-size: 13px;
    text-align: center;
  }
`;

export const MiniCardItem = styled.div<{ $brandColor?: string }>`
  min-width: 150px;
  background: #fdfdfd;
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  border-top: 3px solid ${props => props.$brandColor || '#ccc'}; /* 왼쪽 대신 위쪽 테두리로 변경 */
  padding: 16px 12px;
  transition: transform 0.2s;

  &:active {
    transform: scale(0.98);
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  }

  .card-thumb {
    margin-bottom: 12px;
    .name {
      font-size: 13px;
      font-weight: 700;
      color: #333;
    }
  }

  .card-info {
    ul {
      list-style: none;
      padding: 0;
      li {
        font-size: 11px;
        color: #777;
        margin-bottom: 6px;
        line-height: 1.4;
        
        &::before {
          content: "•";
          margin-right: 4px;
        }
      }
    }
  }
`;

export const BannerFooter = styled.div`
  margin-top: 18px;
  padding-top: 15px;
  border-top: 1px dashed #eee; /* 구분선 추가 */
  text-align: center;
  font-size: 12px;
  color: #888;
  font-weight: 500;

  span {
    margin-left: 2px;
  }
`;
