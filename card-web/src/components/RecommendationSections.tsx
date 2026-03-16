import type { Card } from '../type/Card';
import CardItem from './CardItem';
import * as S from '../App.styles';

interface RecommendationSectionProps {
  searchTerm: string;
  recommendCards: Card[];
  onCardClick: (card: Card) => void;
  onTagClick: (tag: string) => void;
}

const RecommendationSection = ({ 
  searchTerm, 
  recommendCards, 
  onCardClick,
  onTagClick
}: RecommendationSectionProps) => {
  return (
    <S.RecommendWrapper>
      <S.RecommendTitle>✨ 이런 카드는 어떠세요?</S.RecommendTitle>

      {searchTerm === "" ? (
        <S.EmptyState>
          <span className="icon">🔍</span>
          <p>
            원하시는 카드 혜택(카페, 쇼핑, 배달 등)을 검색하시면<br/>
            <strong>맞춤형 카드를 추천</strong>해 드릴게요!
          </p>
        </S.EmptyState>
      ) : recommendCards.length >= 1 ? (
        <>
          <S.RecommendInfoText>
            ✨ <strong>'{searchTerm}'</strong> 혜택이 담긴 추천 카드들이에요!
          </S.RecommendInfoText>
          <S.CardGrid>
            {recommendCards.map(card => (
              <CardItem 
                key={card.id} 
                card={card} 
                onClick={onCardClick}
                onTagClick={onTagClick}
              />
            ))}
          </S.CardGrid>
        </>
      ) : (
        <S.EmptyState>
          <span className="icon">🏷️</span>
          <p>
            아쉽게도 <strong>'{searchTerm}'</strong> 혜택과 관련된<br/>
            추천 카드를 아직 찾지 못했습니다.
          </p>
        </S.EmptyState>
      )}
    </S.RecommendWrapper>
  );
};

export default RecommendationSection;