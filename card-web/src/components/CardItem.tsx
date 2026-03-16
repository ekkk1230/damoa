import type { Card } from '../type/Card';
import * as S from '../App.styles';

interface CardItemProps {
  card: Card;
  onClick: (card: Card) => void;
  onTagClick?: (tag: string) => void;
}

const CardItem = ({ card, onClick, onTagClick }: CardItemProps) => {
  const brandColorCode = S.BRAND_COLORS[card.company]?.replace('#', '') || 'eeeeee';
  const imageUrl = `https://placehold.co/100x64/${brandColorCode}/${brandColorCode}`;
  return (
    <S.StyledCard onClick={() => onClick(card)}>
      <S.CardTop>
        <S.CardImageWrapper>
          <img src={imageUrl} alt={card.name} />
          <span className="brand-text">{card.company}</span>
        </S.CardImageWrapper>
        <S.CardTitleGroup>
          <p className="name">{card.name}</p>
          <p className="company">{card.company}</p>
        </S.CardTitleGroup>
      </S.CardTop>

      <S.BenefitLabel>주요 혜택</S.BenefitLabel>
      <S.BenefitList>
        {card.mainBenefits.slice(0, 3).map((benefit) => (
          <li key={benefit}>{benefit}</li>
        ))}
      </S.BenefitList>

      <S.TagList>
        {card.categories.map((cate) => (
          <li key={cate}>
            <S.TagButton 
              onClick={(e) => {
                e.stopPropagation(); // 카드 클릭 이벤트 전파 방지
                onTagClick?.(cate);
              }}
            >
              #{cate}
            </S.TagButton>
          </li>
        ))}
      </S.TagList>
    </S.StyledCard>
  );
};

export default CardItem;