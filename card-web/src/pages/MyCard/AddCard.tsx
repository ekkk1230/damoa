import { useCardStore } from '../../store/useCardStore';
import React, { useState, useMemo, useEffect, type ChangeEvent } from 'react';
import * as S from './MyCard.styles';
import { CARD_LIST } from '../../data/CARD_LIST';
import { BRAND_COLORS } from '../../type/Card';
import type { MyCardProgress } from '../../type/User';
import { getPerformancePeriod } from '../../utils/cardUtils';

function AddCard() {
  const { addCard } = useCardStore();

  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedCardName, setSelectedCardName] = useState('');
  const [cardType, setCardType] = useState('신용');
  const [performanceGoal, setPerformanceGoal] = useState(0);
  const [annualFee, setAnnualFee] = useState(0);
  const [paymentDate, setPaymentDate] = useState('14');
  const [isCustomPeriod, setIsCustomPeriod] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // 선택한 카드사에 해당하는 카드목록 필터링
  const matchedCard = useMemo(() => {
    return CARD_LIST.filter(c => c.company === selectedCompany);
  }, [selectedCompany]);

  // 카드사가 바뀌면 카드 이름과 폼 초기화
  const handleCompanyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCompany(e.target.value);
    setSelectedCardName('');
    setPerformanceGoal(0);
    setAnnualFee(0);
  }

  // 카드 이름이 선택되면 해당 카드의 상세 정보 자동 기입
  useEffect(() => {
    if (!selectedCardName) return;

    const cardData = CARD_LIST.find(c => c.name === selectedCardName);
    if (cardData) {
      setCardType(cardData.type);
      setAnnualFee(cardData.annualFee || 0);
      
      if (cardData.performanceTiers && cardData.performanceTiers.length > 0) {
        const topTier = cardData.performanceTiers[cardData.performanceTiers.length - 1];
        setPerformanceGoal(topTier.min);
      } else {
        setPerformanceGoal(cardData.bestPerformance || 0);
      }
    }
  }, [selectedCardName]);

  // 결제일이나 직접 수정 여부가 바뀔 때 기간 자동 계산
  useEffect(() => {
    if (!isCustomPeriod) {
      const period = getPerformancePeriod(Number(paymentDate));
      setStartDate(period.startDate);
      setEndDate(period.endDate);
    }
  }, [paymentDate, isCustomPeriod]);

  // 카드 등록
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fullCardData = CARD_LIST.find(c => c.name === selectedCardName);

    if (!fullCardData) {
      alert('카드를 선택해주세요.');
      return;
    }

    const updatedCardInfo = {
      ...fullCardData,
      type: cardType as "신용" | "체크" | "하이브리드",
      annualFee: Number(annualFee),
      isOwned: true,
    }

    const newCard: MyCardProgress = {
      cardInfo: updatedCardInfo,
      nickname: selectedCardName,
      targetAmount: performanceGoal,
      currentAmount: 0,
      billingDate: Number(paymentDate),
      performancePeriod: {
        startDate: startDate,
        endDate: endDate,
      },
      progress: 0
    };

    addCard(newCard);
    alert('카드가 성공적으로 등록되었습니다!');
  }

  return (
    <S.FormWrapper>
      <S.FormTitle>카드 정보 입력</S.FormTitle>

      <form onSubmit={handleSubmit}>
        {/* 카드사 선택 */}
        <S.FormGroup>
          <S.Label>카드 회사</S.Label>
          <S.Select 
            value={selectedCompany} 
            onChange={(e) => handleCompanyChange(e)}
          >
            <option value="">카드사를 선택하세요</option>
            
            {Object.keys(BRAND_COLORS).map((company) => (
              <option key={company} value={company}>{company}</option>
            ))}
          </S.Select>
        </S.FormGroup>

        {/* 카드명 입력 */}
        <S.FormGroup>
          <S.Label>카드 명칭</S.Label>
          <S.Select
            onChange={e => setSelectedCardName(e.target.value)}
          >
            <option value="">카드를 선택하세요</option>

            {matchedCard.map(c => (
              <option value={c.name}>{c.name}</option>
            ))}
          </S.Select>
        </S.FormGroup>

        {/* 전월 실적 목표 입력 추가 */}
        <S.FormGroup>
          <S.Label>목표 전월 실적 (원)</S.Label>
          <S.Input 
            type="number" 
            placeholder="예: 300000" 
            value={performanceGoal}
            onChange={(e) => setPerformanceGoal(Number(e.target.value))}
          />
          <S.HintText>* 혜택을 받기 위한 최소 기준 금액입니다.</S.HintText>
        </S.FormGroup>

        <S.FormGroup>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <S.Label>실적 산정 기간</S.Label>
            <label style={{ fontSize: '12px', cursor: 'pointer' }}>
              <input 
                type="checkbox" 
                checked={isCustomPeriod} 
                onChange={() => setIsCustomPeriod(!isCustomPeriod)} 
              /> 직접 수정
            </label>
          </div>
          
          <S.FlexRow>
            <S.Input 
              type="date" 
              value={startDate} 
              onChange={(e) => setStartDate(e.target.value)}
              disabled={!isCustomPeriod} 
            />
            <span style={{ alignSelf: 'center' }}>~</span>
            <S.Input 
              type="date" 
              value={endDate} 
              onChange={(e) => setEndDate(e.target.value)}
              disabled={!isCustomPeriod}
            />
          </S.FlexRow>
          {!isCustomPeriod && (
            <S.HintText>* 결제일 {paymentDate}일 기준 권장 기간입니다.</S.HintText>
          )}
        </S.FormGroup>

        <S.Row>
          <S.FormGroup>
            <S.Label>유효 기간</S.Label>
            <S.Input type="month" />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label>카드 타입</S.Label>
            <S.Select value={cardType} onChange={(e) => setCardType(e.target.value)}>
              <option value="신용">신용</option>
              <option value="체크">체크</option>
              <option value="하이브리드">하이브리드</option>
            </S.Select>
          </S.FormGroup>

          {(cardType === '신용' || cardType === '하이브리드') && (
            <S.FormGroup>
              <S.Label>연회비 (원)</S.Label>
              <S.Input onChange={e => setAnnualFee(Number(e.target.value))} value={annualFee} type="number" placeholder="0" />
            </S.FormGroup>
          )}
        </S.Row>

        <S.SubmitButton type="submit">카드 등록하기</S.SubmitButton>
      </form>
    </S.FormWrapper>
  );
}

export default AddCard;