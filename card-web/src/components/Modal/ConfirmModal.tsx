import { useUIStore } from "../../store/useUIStore"
import ModalLayout from "../common/ModalLayout/ModalLayout"
import * as S from "./ModalComponents.styles"

function ConfirmModal() {
    const { modalData, closeModal } = useUIStore();

    const { title, content, onConfirm, onCancel } = modalData || {};

    const handleConfirm = () => {
        if (onConfirm) onConfirm();
        closeModal();
    }

    return (
        <ModalLayout title={title || "알림"}>
            <div style={{ padding: '20px 0', textAlign: 'center', fontSize: '1.6rem' }}>
                {content}
            </div>
            
            <S.ActionButtonGroup>
                {onCancel && (
                    <button className="cancel" onClick={() => { onCancel(); closeModal(); }}>취소</button>
                )}
                <button className="confirm" onClick={handleConfirm}>확인</button>
            </S.ActionButtonGroup>
        </ModalLayout>
    )
}

export default ConfirmModal