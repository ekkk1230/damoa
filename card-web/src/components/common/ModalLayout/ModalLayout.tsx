import * as S from "./ModalLayout.styles"
import { useCardStore } from "../../../store/useCardStore"

function ModalLayout({ children, title }: { children: React.ReactNode, title?: string }) {
    const { closeModal } = useCardStore();
    
    return (
        <S.ModalOverlay onClick={closeModal}>
            <S.ModalContent onClick={e => e.stopPropagation()}>
                <S.ModalHeader>
                    <h3>{title}</h3>
                    <S.CloseButton onClick={closeModal}>&times;</S.CloseButton>
                </S.ModalHeader>

                <div className="modal-body">
                    {children}
                </div>
            </S.ModalContent>
        </S.ModalOverlay>
    )
}

export default ModalLayout