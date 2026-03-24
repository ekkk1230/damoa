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

export const SubCardItem = styled.div<{ $brandColor?: string }>`
  background: #fff;
  border-radius: 16px;
  border: 1px solid #eee;
  padding: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
  height: 100%; // 높이 균일화

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
    border-color: ${props => props.$brandColor || '#3498db'};
  }

  .card-thumb {
    width: 100%;
    height: 100px;
    background-color: ${props => props.$brandColor || '#f5f5f5'};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    padding: 10px;

    .name {
      font-size: 0.9rem;
      text-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  }

  .card-info {
    ul {
      list-style: none;
      padding: 0;
      li {
        font-size: 0.8rem;
        color: #666;
        margin-bottom: 4px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; // 넘치는 텍스트 처리

        &:before {
          content: "•";
          margin-right: 5px;
          color: ${props => props.$brandColor || '#3498db'};
        }
      }
    }
  }
`;

export const ComparisonWrapper = styled.div`
  background: #f9fafb;
  border-radius: 16px;
  padding: 24px;
  margin: 20px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: #111827;
    text-align: center;
  }

  .comparison-grid {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 24px;
  }

  .card-item {
    flex: 1;
    background: #ffffff;
    padding: 16px;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    text-align: center;
    transition: transform 0.2s;

    p {
      font-size: 0.85rem;
      color: #6b7280;
      margin-bottom: 8px;
    }

    strong {
      font-size: 1rem;
      color: #374151;
      display: block;
    }

    &.highlight {
      border: 2px solid #3b82f6; // 추천 카드는 강조색 사용
      background: #eff6ff;

      strong {
        color: #2563eb;
        font-size: 1.1rem;
      }
    }
  }

  .vs-badge {
    font-size: 0.75rem;
    font-weight: 800;
    color: #9ca3af;
    background: #f3f4f6;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .result-msg {
    text-align: center;
    font-size: 0.95rem;
    color: #4b5563;
    padding-top: 16px;
    border-top: 1px dashed #d1d5db;

    span {
      font-weight: 700;
      color: #ef4444; // 아낄 수 있는 금액은 빨간색 계열로 강조
    }
  }
`;