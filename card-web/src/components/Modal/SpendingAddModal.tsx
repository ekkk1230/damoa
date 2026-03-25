import { useState } from 'react';
import * as S from './ModalComponents.styles'
import { useCardStore } from '../../store/useCardStore';
import ModalLayout from '../common/ModalLayout/ModalLayout';
import ManualInputTab from './ModalBody/ManualInputTab';
import ImageInputTab from './ModalBody/ImageInputTab';

const SpendingAddModal = () => {
    const { modalType } = useCardStore();

    const [activeTab, setActiveTab] = useState<'manual' | 'upload'>('manual');

    if (modalType !== 'SPENDING_ADD') return null;


    return (
        <ModalLayout title="지출 내역 등록">
            <S.TabGroup>
                <S.TabButton
                    $isActive={activeTab === 'manual'}
                    onClick={() => setActiveTab('manual')}
                >
                    직접 입력
                </S.TabButton>
                <S.TabButton
                    $isActive={activeTab === 'upload'}
                    onClick={() => setActiveTab('upload')}
                >
                    이미지 업로드 입력
                </S.TabButton>
            </S.TabGroup>

            {activeTab === 'manual' ? (
                <ManualInputTab />
            ) : (
                <ImageInputTab />
            )}
        </ModalLayout>
    )
}

export default SpendingAddModal