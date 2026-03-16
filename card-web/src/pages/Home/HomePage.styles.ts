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

export const RecommendBanner = styled.div`
   margin-top: 1rem;
  background: white;
  border-radius: 2.4rem;
  padding: 2.2rem;
  box-shadow: 0 0.8rem 2.4rem rgba(0, 0, 0, 0.04);

  .banner-header {
    margin-bottom: 2rem;
    .banner-title {
        display: flex;
        align-items: center;
        gap: 1.2rem;
        .emoji { font-size: 2.4rem; }
        .description {
            font-size: 1.5rem;
            color: var(--text-main);
            strong { color: #07958c; font-weight: 700; }
        }
    }
  }
`;

export const CardListMini = styled.div`
  display: flex;
  gap: 1.2rem;
  overflow-x: auto;
  padding-bottom: 1rem;

  &::-webkit-scrollbar { display: none; }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const MiniCardItem = styled.div<{ $brandColor?: string }>`
  flex-shrink: 0;
  width: 11rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  .card-thumb {
    width: 100%;
    height: 7rem;
    background: ${props => props.$brandColor || '#e9ecef'};
    border-radius: 1rem;
    padding: 1.2rem;
    display: flex;
    align-items: flex-end; 
    box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;

    .name {
      font-size: 1.1rem;
      font-weight: 700;
      line-height: 1.3;
      word-break: keep-all;
      color: ${props => 
        (props.$brandColor === "#ffeb00" || props.$brandColor === "#ffbc00") 
        ? "#222" : "white"
      };
      z-index: 1;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.05) 100%);
    }
  }

  .card-info {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;

      li {
        font-size: 1.1rem;
        color: #07958c;
        font-weight: 600;
        line-height: 1.4;
        
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &::before {
          content: '• ';
          margin-right: 0.3rem;
        }
      }
    }
  }
`;

export const BannerFooter = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #f1f3f5;
  font-size: 1.3rem;
  color: var(--text-sub);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;

  span { font-size: 1.6rem; color: #ced4da; }
`;