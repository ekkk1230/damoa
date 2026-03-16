import * as S from './CardItem.styles';
import type { Card } from '../../type/Card'
import { getCardColor } from '../../utils/cardUtils';
import { useCardStore } from '../../store/useCardStore';

interface CardItemProps {
    card: Card;
    onTagClick: (tag: string) => void;
}

const CardItem = ({ card, onTagClick }: CardItemProps) => {
    const openModal = useCardStore((state) => state.openModal);

    const color = getCardColor(card.company);
    const imageUrl = `https://placehold.co/100x64/${color}/${color}`;

    return (
        <S.StyledCard onClick={() => openModal(card)}>
            <S.CardTop>
                <S.CardImageWrapper>
                    <img src={imageUrl} alt="" />
                    <p className='brand-text'>{card.company}</p>
                </S.CardImageWrapper>


                <S.CardTitleGroup>
                    <p className='name'>{card.name}</p>
                    <p className='company'>{card.company}</p>
                </S.CardTitleGroup>
            </S.CardTop>
            <S.BenefitList>
                {card.mainBenefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                ))}
            </S.BenefitList>
            <S.TagList>
                {card.categories.map((cate, idx) => (
                    <S.TagButton 
                        key={idx}
                        onClick={e => {
                            e.stopPropagation();
                            onTagClick(cate);
                        }}
                    >
                        {cate}
                    </S.TagButton>
                ))}
            </S.TagList>
        </S.StyledCard>
    )
}

export default CardItem