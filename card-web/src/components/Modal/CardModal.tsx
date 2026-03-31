import * as S from './ModalComponents.styles'
import { getCardColor } from '../../utils/cardUtils';
import { useCardStore } from '../../store/useCardStore';
import ModalLayout from '../common/ModalLayout/ModalLayout';
import MyCard from './ModalBody/MyCard';
import RecommendCard from './ModalBody/RecommendCard';
import CategoryTag from '../Card/CategoryTag';
import { useUIStore } from '../../store/useUIStore';

const CardModal = () => {
    const { selectedCard } = useCardStore();
    const { modalType } = useUIStore();

    if (modalType != 'CARD_DETAIL' || !selectedCard) return null;

    const color = getCardColor(selectedCard.company);
    const imageUrl = `https://placehold.co/100x64/${color}/${color}`;

    const isMyCard = selectedCard.isOwned;

    return (
        <ModalLayout title="카드 상세 안내">
            <S.ModalHeader>
                <S.ModalImageContainer>
                    <img src={imageUrl} alt="" />
                    <p className="brand-badge">{selectedCard.company}</p> 
                </S.ModalImageContainer>
                <h2>{selectedCard.name}</h2>
            </S.ModalHeader>

            {/* 기본 혜택 조건 */}
            <S.DetailItem>
                <h4>Condition & Benefit</h4>
                <p>{selectedCard?.condition} · {selectedCard?.maxBenefit}</p>
            </S.DetailItem>

            {/* 상세 혜택 리스트 */}
            {Array.isArray(selectedCard?.detailBenefits) && selectedCard?.detailBenefits.length > 0 && (
                <S.DetailItem>
                    <h4>Detailed Benefits</h4>
                    {selectedCard?.detailBenefits.map((benefit, index) => (
                        <p key={index}>
                            <strong>{benefit.title}</strong>: {benefit.content} 
                            <span>({benefit.limit})</span>
                        </p>
                    ))}
                </S.DetailItem>
            )}


            <S.DetailItem>
                <p>{selectedCard?.summary}</p>
                <ul className="category-list">
                    {selectedCard?.categories.map((category, index) => (
                        <li key={index}><CategoryTag categoryKey={category} /></li>
                    ))}
                </ul>
            </S.DetailItem>



            <S.ModalBody>
                {isMyCard ? (
                    <MyCard />
                ) : (
                    <RecommendCard />
                )}
            </S.ModalBody>
        </ModalLayout>
    )
}

export default CardModal