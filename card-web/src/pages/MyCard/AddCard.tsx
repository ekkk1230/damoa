import { useState, useMemo } from 'react';
import * as S from './MyCard.styles';
import { CARD_LIST } from '../../data/CARD_LIST';

function AddCard() {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedCardName, setSelectedCardName] = useState('');
  const [cardType, setCardType] = useState('신용');

  // 선택된 정보와 일치하는 카드 데이터 찾기
  const matchedCard = useMemo(() => {
    return CARD_LIST.find(
      (c) => c.company === selectedCompany && c.name === selectedCardName
    );
  }, [selectedCompany, selectedCardName]);

  return (
    <S.FormWrapper>
      <S.FormTitle>카드 정보 입력</S.FormTitle>

      <form>
        {/* 카드사 선택 (Select 혹은 Datalist 추천) */}
        <S.FormGroup>
          <S.Label>카드 회사</S.Label>
          <S.Select 
            value={selectedCompany} 
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            <option value="">카드사를 선택하세요</option>
            <option value="신한카드">신한카드</option>
            <option value="현대카드">현대카드</option>
            {/* ... */}
          </S.Select>
        </S.FormGroup>

        {/* 카드명 입력 */}
        <S.FormGroup>
          <S.Label>카드 명칭</S.Label>
          <S.Input 
            placeholder="정확한 카드명을 입력하세요" 
            value={selectedCardName}
            onChange={(e) => setSelectedCardName(e.target.value)}
          />
        </S.FormGroup>

        {/* 매칭된 카드가 있을 경우 혜택 프리뷰 노출 */}
        {/* {matchedCard && (
          <S.BenefitPreview>
            <S.CategoryTag>{matchedCard.category}</S.CategoryTag>
            <S.BenefitList>
              {matchedCard.benefits.map((b, index) => (
                <li key={index}>{b}</li>
              ))}
            </S.BenefitList>
          </S.BenefitPreview>
        )} */}

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
        </S.Row>

        {(cardType === '신용' || cardType === '하이브리드') && (
          <S.FormGroup>
            <S.Label>연회비 (원)</S.Label>
            <S.Input type="number" placeholder="0" />
          </S.FormGroup>
        )}

        <S.SubmitButton type="button">카드 등록하기</S.SubmitButton>
      </form>
    </S.FormWrapper>
  );
}

export default AddCard;