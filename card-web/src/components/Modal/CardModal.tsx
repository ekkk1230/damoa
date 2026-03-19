import * as S from './ModalComponents.styles'
import { getCardColor } from '../../utils/cardUtils';
import { useCardStore } from '../../store/useCardStore';
import ModalLayout from '../common/ModalLayout/ModalLayout';
import MyCard from './ModalBody/MyCard';
import RecommendCard from './ModalBody/RecommendCard';

const CardModal = () => {
    const { selectedCard, modalType } = useCardStore();

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