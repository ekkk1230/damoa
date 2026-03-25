import { useState } from 'react';
import * as S from './ModalComponents.styles'
import { useCardStore } from '../../store/useCardStore';
import ModalLayout from '../common/ModalLayout/ModalLayout';
import ManualInputTab from './ModalBody/ManualInputTab';
import ImageInputTab from './ModalBody/ImageInputTab';

const CATEGORIES = ['식비', '카페', '교통/주유', '쇼핑', '금융/보험', '의료/건강', '기타'];

const SpendingAddModal = () => {
    const { modalType, addSpending, closeModal, analyzedList, isAnalyzing, uploadAndAnalyze, deleteAnalyzedItem, confirmAllSpendings, updateAnalyzedItem } = useCardStore();

    const [activeTab, setActiveTab] = useState<'manual' | 'upload'>('manual');
    const [editingId, setEditingId] = useState<number | null>(null);

    const [form, setForm] = useState({
        amount: '',
        cardId: '',
        storeName: '',
        date: new Date().toISOString().split('T')[0],
        category: '식비'
    })

    if (modalType != 'SPENDING_ADD') return null;

    const handleSubmit = () => {
        if (!form.amount || !form.cardId || !form.storeName) {
            alert('모든 항목을 입력해주세요.');
            return;
        }

        addSpending({
            id: Date.now(),
            ...form,
            amount: Number(form.amount),
            cardId: Number(form.cardId)
        });
        
        closeModal();
        setForm({ amount: '', cardId: '', storeName: '', date: new Date().toISOString().split('T')[0], category: '식비' });
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        
        await uploadAndAnalyze(file);
    };

    const handleUpdateItem = (id: number, field: string, value: string | number) => {
        updateAnalyzedItem(id, { [field]: value });
    };

    const handleSave = () => setEditingId(null);

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