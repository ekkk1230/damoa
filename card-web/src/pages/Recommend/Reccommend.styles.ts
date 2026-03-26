import styled from 'styled-components';
import { getTextColorByBackground } from '../../utils/cardUtils';

// 검색 및 필터 영역
export const FilterSection = styled.div`
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 30px;

  input {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  ul {
    display: flex;
    gap: 8px;
    overflow-x: auto; // 카드사가 많을 때 밀어서 보기
    padding-bottom: 10px;
    list-style: none;
    
    button {
      white-space: nowrap;
      padding: 8px 16px;
      border-radius: 20px;
      border: 1px solid #eee;
      background: #fff;
      cursor: pointer;
      &:hover { background: #333; color: #fff; }
    }
  }
`;

// 카드 그리드 컨테이너
export const CardGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
`;

// 개별 카드 아이템
export const CardItem = styled.li<{ $brandColor: string }>`
  background: #fff;
  border-radius: 16px;
  border: 1px solid #f0f0f0;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  }

  a { text-decoration: none; color: inherit; display: block; width: 100%; height: 100%; }

  .card-content {
    padding: 20px; height: 100%;
    background: ${props => props.$brandColor};
    color: ${props => getTextColorByBackground(props.$brandColor || "#888888")};
  }

  .card-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .annual-fee {
    font-size: 13px;
    margin-bottom: 12px;
  }

  .summary {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 15px;
    min-height: 40px;
  }

  .benefits-tag {
    display: flex; flex-flow: column; align-items: flex-start;
    gap: 5px;

    span {
      background: #f0f4ff;
      color: #3b82f6;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 500;
    }
  }
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8fafc;
  min-height: 100vh;
  padding-bottom: 100px; /* 하단 버튼 공간 */
`;

/* 1. 상단 히어로 섹션 */
export const HeroSection = styled.section<{ color?: string }>`
  background: white;
  border-radius: 24px;
  padding: 40px;
  display: flex;
  align-items: center;
  gap: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  margin-bottom: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 30px 20px;
  }
`;

export const CardImage = styled.img`
  width: 280px;
  height: auto;
  filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.1));
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(-5deg) scale(1.05);
  }
`;

export const HeroText = styled.div`
  flex: 1;

  .type-badge {
    background: #f1f5f9;
    padding: 4px 12px;
    border-radius: 100px;
    font-size: 1.2rem;
    color: #64748b;
    font-weight: 600;
  }

  h1 {
    font-size: 2.8rem;
    margin: 12px 0;
    color: #1e293b;
  }

  .summary {
    font-size: 1.6rem;
    color: #475569;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  .quick-info {
    display: flex;
    gap: 15px;
    font-size: 1.4rem;
    color: #94a3b8;
    
    strong {
      color: #334155;
    }
  }
`;

/* 2. 통계 섹션 (누가 많이 쓰나?) */
export const StatsSection = styled.section`
  background: white;
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 24px;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: #1e293b;
  }

  .stats-grid {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .age-bar-wrapper {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.3rem;

    .label { width: 50px; color: #64748b; }
    .bar-container {
      flex: 1;
      height: 8px;
      background: #f1f5f9;
      border-radius: 4px;
      overflow: hidden;
    }
    .bar-fill {
      height: 100%;
      background: #3b82f6; /* 신한 파란색 느낌 */
      border-radius: 4px;
    }
    .value { width: 40px; text-align: right; font-weight: bold; }
  }
`;

/* 3. 상세 혜택 카드 (Detailed Benefits) */
export const BenefitSection = styled.section`
  margin-bottom: 24px;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 16px;
    padding-left: 8px;
  }
`;

export const BenefitCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 12px;
  border: 1px solid #f1f5f9;
  transition: all 0.2s;

  &:hover {
    border-color: #3b82f6;
    transform: translateY(-2px);
  }

  .benefit-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    h4 { font-size: 1.6rem; color: #1e293b; }
    .limit-badge {
      font-size: 1.2rem;
      background: #eff6ff;
      color: #1d4ed8;
      padding: 4px 10px;
      border-radius: 6px;
      font-weight: 600;
    }
  }

  .benefit-content {
    font-size: 1.4rem;
    color: #64748b;
    line-height: 1.6;
  }
`;

/* 4. 실적 구간 테이블 (Tier Table) */
export const TierTable = styled.table`
  width: 100%;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  border-collapse: collapse;
  
  th, td {
    padding: 16px;
    text-align: left;
    font-size: 1.4rem;
    border-bottom: 1px solid #f1f5f9;
  }

  th {
    background: #f8fafc;
    color: #64748b;
    font-weight: 500;
  }

  td { color: #334155; }

  tr:last-child td { border-bottom: none; }
`;

/* 5. 하단 플로팅 바 */
export const FixedBottomBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 16px 24px;
  display: flex;
  gap: 12px;
  box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.05);
  max-width: 800px;
  margin: 0 auto;

  button, a {
    flex: 1;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    font-size: 1.6rem;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover { opacity: 0.9; }
  }

  .compare-btn {
    background: #1e293b;
    color: white;
    border: none;
  }

  .apply-btn {
    background: #3b82f6;
    color: white;
  }
`;

const TierSection = styled.div`
    width: 100%;
    background: #00f2fe;
`