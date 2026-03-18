import styled from "styled-components";

export const HomeContainer = styled.div`
    padding: 2rem;
    background-color: #f8f9fa;
    min-height: 100vh;
    width: 100%;
    display: block;
`;

export const SummaryCard = styled.section`
    background: linear-gradient(135deg, #95dccd, #07958c);
    border-radius: 2.4rem; 
    padding: 3rem; 
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    box-shadow: 0 1rem 2rem rgba(110, 142, 251, 0.3);
    margin-bottom: 3rem; 
`;

export const SummaryInfo = styled.div`
    .label {
        font-size: 1.4rem;
        opacity: 0.9;
        margin-bottom: 0.8rem;
    }
    .total-amount {
        font-size: 2.8rem;
        font-weight: 700;
        margin-bottom: 1.2rem;
    }
    .benefit-amount {
        font-size: 1.4rem;
        span {
        font-weight: 600;
        color: #fffb00;
        }
    }
`;

export const QuickAddBtn = styled.button`
    background: rgba(255, 255, 255, 0.2);
    border: 0.1rem solid rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(1rem); 
    color: white;
    padding: 1.2rem 2rem;
    border-radius: 1.2rem;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-0.3rem); 
        background: rgba(255, 255, 255, 0.3);
    }

    .icon {
        font-size: 2rem; 
    }
`;

export const CardSection = styled.section`
  margin-top: 2rem;
  width: 100%;
  /* padding 2rem을 고려하여 실제 컨텐츠가 들어갈 너비 고정 */
  overflow: hidden;

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 2rem;
    padding-left: 0.5rem;
  }

  .swiper {
    width: 100%;
    /* overflow: visible을 줘야 카드 그림자가 안 잘립니다 */
    overflow: visible !important; 
    padding-bottom: 4rem !important;
  }

  .swiper-slide {
    /* 중요: 스와이퍼가 계산한 슬라이드 너비를 자식에게 강제 전달 */
    width: 100%; 
    height: auto;
    display: flex;
    justify-content: center;
  }
`;

export const CreditCardBox = styled.div<{ $brandColor: string }>`
  width: 100%; 
  max-width: 100%; 
  
  background: ${props => props.$brandColor};
  border-radius: 2rem;
  padding: 2.5rem;
  color: white;
  min-height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.1);
  flex-shrink: 0; 

  .card-top {
    display: flex;
    flex-direction: column;
    .nickname { font-size: 1.4rem; opacity: 0.8; }
    .card-name { font-size: 1.8rem; font-weight: 600; margin-top: 0.5rem; }
  }
`;

export const ProgressWrapper = styled.div`
  margin-top: 2rem;
  
  .amount-info {
    display: flex;
    justify-content: space-between;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  .percentText {
    text-align: right;
    font-size: 1.2rem;
    margin-top: 0.8rem;
    color: var(--point-mint);
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 1.2rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  overflow: hidden;
`;

export const ProgressFill = styled.div<{ $width: number }>`
  width: ${props => props.$width}%;
  height: 100%;
  background: linear-gradient(90deg, #00f2fe, #80ffea);
  border-radius: 1rem;
  transition: width 0.5s ease-in-out;
`;

export const RecommendBanner = styled.section`
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