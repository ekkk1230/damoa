import { useState } from 'react'
import * as S from '../ModalComponents.styles'
import { useCardStore } from '../../../store/useCardStore';
import { EXPENDITURE_CATEGORIES } from '../../../constance/categories';
import { useUIStore } from '../../../store/useUIStore';
import { useAuthStore } from '../../../store/useAuthStore';

function ManualInputTab() {
    const { getMyCards, addSpending, selectedCard } = useCardStore();
    const { user } = useAuthStore();
    const { openModal } = useUIStore();

    const [form, setForm] = useState({
        amount: '',
        cardId: '',
        storeName: '',
        date: new Date().toISOString().split('T')[0],
        category: ''
    })

    const handleSubmit = () => {
        if (!user?.id) return;

        if (!form.amount || !form.cardId || !form.storeName || !form.date) {
            openModal('CONFIRM', {
                title: '',
                content: '모든 항목을 입력해주세요.',
                onConfirm: () => {},
            })
            return;
        }

        addSpending({
            id: Date.now(),
            ...form,
            amount: Number(form.amount),
            cardId: Number(form.cardId),
            userId: user.id,
        })
        setForm({ amount: '', cardId: '', storeName: '', date: new Date().toISOString().split('T')[0], category: '' })
    }
    
    return (
        <>
            <S.FormLabel>사용 카드</S.FormLabel>
            <S.StyledSelect 
                value={form.cardId}
                onChange={e => setForm({ ...form, cardId: e.target.value })}
            >
                <option selected hidden>카드를 선택해주세요</option>
                {getMyCards.map(item => {
                    console.log(item)
                    return (
                    <option key={item.id} value={item.id}>
                        {item.cardInfo.name}
                    </option>
                    )
})}
            </S.StyledSelect>

            <S.FormLabel>분류</S.FormLabel>
            <S.StyledSelect 
                value={form.category}
                onChange={e => setForm({ ...form, category: e.target.value })}
            >
                <option selected hidden>카테고리를 선택해주세요</option>
                {Object.entries(EXPENDITURE_CATEGORIES).map(([key, value]) => (
                    <option value={key} key={key}>{value.label}</option>
                ))}
            </S.StyledSelect>

            <S.FormLabel>결제 금액</S.FormLabel>
            <S.StyledInput 
                type="number" 
                value={form.amount} 
                onChange={e => setForm({ ...form, amount: e.target.value })}
                placeholder="0원" 
            />

            <S.FormLabel>상호명</S.FormLabel>
            <S.StyledInput 
                value={form.storeName} 
                onChange={e => setForm({ ...form, storeName: e.target.value })}
                type="text" 
                placeholder="예: 스타벅스" 
            />

            <S.FormLabel>날짜</S.FormLabel>
            <S.StyledInput 
                value={form.date} 
                onChange={e => setForm({ ...form, date: e.target.value })}
                type="date"
            />
            
            <button onClick={handleSubmit}>등록하기</button>
        </>
    )
}

export default ManualInputTab