import * as S from './CardModal.styles'
import { getCardColor } from '../../utils/cardUtils';
import GenderChart from '../common/charts/GenderChart';
import AgeChart from '../common/charts/AgeChart';
import { useCardStore } from '../../store/useCardStore';

const CardModal = () => {
    const { selectedCard, isModalOpen, closeModal } = useCardStore();

    if (!isModalOpen || !selectedCard) return null;

    const color = getCardColor(selectedCard.company);
    const imageUrl = `https://placehold.co/100x64/${color}/${color}`;

    return (
        <S.ModalOverlay onClick={closeModal}>
            <S.ModalContent onClick={e => e.stopPropagation()}>
                <S.CloseButton onClick={closeModal}>&times;</S.CloseButton>

                <S.ModalHeader>
                    <S.ModalImageContainer>
                        <img src={imageUrl} alt="" />
                        <p className="brand-badge">{selectedCard.company}</p> 
                    </S.ModalImageContainer>

                    <h2>{selectedCard.name}</h2>
                </S.ModalHeader>

                <S.ModalBody>
                    <S.DetailItem>
                        <h4>주요 혜택</h4>
                        <p>{selectedCard.mainBenefits.join(', ')}</p>
                    </S.DetailItem>

                    <S.DetailItem>
                        <h4>카테고리</h4>
                        <ul className="category-list">
                        {selectedCard.categories.map((cate, idx) => (
                            <li key={idx}>{cate}</li>
                        ))}
                        </ul>
                    </S.DetailItem>

                    <S.ChartContainer>
                        <GenderChart data={selectedCard.statistics?.gender} />
                        <AgeChart data={selectedCard.statistics?.ageGroup} />
                    </S.ChartContainer>
                </S.ModalBody>
            </S.ModalContent>
        </S.ModalOverlay>
    )
}

export default CardModal