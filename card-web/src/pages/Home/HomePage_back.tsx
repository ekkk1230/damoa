import { CARD_LIST } from "../../data/cardData"
import CardItem from '../../components/CardItem/CardItem';
import * as S from '../../App.styles copy';
import RecommendationSection from '../../components/RecommendationSection/RecommendationSection';
import CardModal from "../../components/Modal/CardModal"; 
import { useCardStore } from '../../store/useCardStore';

function HomePage_() {
  const {
    searchTerm, setSearchTerm,
    selectedCompany, setSelectedCompany,
    isExpanded, setIsExpanded
  } = useCardStore();

  const filteredCards = CARD_LIST.filter(card => {
    const isSearchMatch = card.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          card.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          card.categories.some(c => c.includes(searchTerm.toLowerCase()));
    const isBtnMatch = selectedCompany === "전체" || card.company.includes(selectedCompany);
    return isSearchMatch && isBtnMatch;
  });

  const myCards = filteredCards.filter(card => card.isOwned);
  const recommendFilterCards = filteredCards.filter(card => !card.isOwned);

  const myCompanies = Array.from(new Set(CARD_LIST.filter(card => card.isOwned).map(card => card.company)));
  const otherCompanies = Array.from(new Set(CARD_LIST.map(card => card.company)))
    .filter(company => !myCompanies.includes(company));

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
          <div className='setting-btns'>
            <S.CompanyButton
              $isActive={selectedCompany === "전체"}
              onClick={() => setSelectedCompany("전체")}
            >
              전체
            </S.CompanyButton>
            {myCompanies.map(company => (
              <S.CompanyButton
                key={company}
                $isActive={selectedCompany === company}
                onClick={() => setSelectedCompany(company)}
              >
                {company}
              </S.CompanyButton>
            ))}          
          </div>

          <S.MoreButton onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? "접기 ▲" : "+ 더보기"}</S.MoreButton>

          <div className='more-btns'>
            {isExpanded && otherCompanies.map((company) => (
              <S.CompanyButton
                key={company}
                $isActive={selectedCompany === company}
                onClick={() => setSelectedCompany(company)}
              >
                {company}
              </S.CompanyButton>
            ))}
          </div>
        </S.CompanyButtonGroup>
      </S.SearchSection>

      {/* 결과 정보 */}
      <S.ResultHeader>
        <p>
          <strong>{selectedCompany === "전체" ? "전체 카드" : selectedCompany}</strong> 리스트입니다.
          {searchTerm && <span> (<strong>'{searchTerm}'</strong> 검색 결과)</span>}
        </p>
      </S.ResultHeader>

      {/* 내 카드 리스트 */}
      <S.CardSection>
        <h2>💳 내 보유 카드 <span>({myCards.length})</span></h2>
        <S.CardGrid>
          {myCards.length > 0 ? (
            myCards.map(card => (
              <CardItem key={card.id} card={card} onTagClick={setSearchTerm} />
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
        onTagClick={setSearchTerm}
      />
      
      <CardModal />
    </S.Container>
  );
}

export default HomePage_;