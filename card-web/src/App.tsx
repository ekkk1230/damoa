import { useState } from 'react';
import { CARD_LIST } from './data/cardData';
import type { Card } from './type/Card';
import CardItem from './components/CardItem';
import RecommendationSection from './components/RecommendationSections';
import * as S from './App.styles';
import CardModal from './components/CardModal';

const companyType = ["전체", "삼성카드", "신한카드", "우리카드", "국민카드", "하나카드", "현대카드"];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("전체");
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const filteredCards = CARD_LIST.filter(card => {
    const isSearchMatch = card.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          card.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          card.categories.some(c => c.includes(searchTerm.toLowerCase()));
    const isBtnMatch = selectedCompany === "전체" || card.company.includes(selectedCompany);
    return isSearchMatch && isBtnMatch;
  });

  const myCards = filteredCards.filter(card => card.isOwned);
  const recommendFilterCards = filteredCards.filter(card => 
    searchTerm.trim() !== "" && card.categories.some(c => c.includes(searchTerm.toLowerCase()))
  );

  const getCardImage = (company: string) => {
    const color = S.BRAND_COLORS[company]?.replace('#', '') || 'eeeeee';
    const textColor = 'ffffff'; // 글자색은 흰색으로 고정
    
    return `https://placehold.co/100x64/${color}/${textColor}?text=${encodeURIComponent(company)}`;
  };

  return (
    <S.Container>
      {/* 검색 섹션 */}
      <S.SearchSection>
        <S.SearchInputWrapper>
          <input 
            type="text" 
            placeholder="카드 이름으로 검색해보세요" 
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </S.SearchInputWrapper>

        <S.CompanyButtonGroup>
          {companyType.map((btn) => (
            <S.CompanyButton 
              key={btn}
              $isActive={selectedCompany === btn}
              onClick={() => setSelectedCompany(btn)}
            >
              {btn}
            </S.CompanyButton>
          ))}
        </S.CompanyButtonGroup>
      </S.SearchSection>

      {/* 결과 정보 */}
      <S.ResultHeader>
        <p>
          <strong>{selectedCompany === "전체" ? "전체 카드" : selectedCompany}</strong> 리스트입니다.
          {searchTerm && <span> (<strong>'{searchTerm}'</strong> 검색 결과)</span>}
        </p>
        <span className="count">총 {filteredCards.length}건</span>
      </S.ResultHeader>

      {/* 내 카드 리스트 */}
      <S.CardSection>
        <h2>💳 내 보유 카드 <span>({myCards.length})</span></h2>
        <S.CardGrid>
          {myCards.length > 0 ? (
            myCards.map(card => (
              <CardItem key={card.id} card={card} onClick={setSelectedCard} onTagClick={setSearchTerm} />
            ))
          ) : (
            <S.EmptyState>
              <span className="icon">🔍</span>
              <h3>보유 중인 카드가 없어요</h3>
              <p>다른 검색어나 전체 리스트를 확인해 보세요.</p>
              <S.ResetButton onClick={() => { setSearchTerm(""); setSelectedCompany("전체"); }}>
                전체 리스트 보기
              </S.ResetButton>
            </S.EmptyState>
          )}
        </S.CardGrid>
      </S.CardSection>

      {/* 추천 섹션 */}
      <RecommendationSection 
        searchTerm={searchTerm}
        recommendCards={recommendFilterCards}
        onCardClick={setSelectedCard}
        onTagClick={(tag) => setSearchTerm(tag)}
      />
      <CardModal
        card={selectedCard}
        onClose={() => setSelectedCard(null)}
      />
    </S.Container>
  );
}

export default App;