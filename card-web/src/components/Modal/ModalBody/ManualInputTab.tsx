import { useState } from 'react'
import * as S from '../ModalComponents.styles'
import { useCardStore } from '../../../store/useCardStore';

function ManualInputTab() {
    const { getMyCards } = useCardStore();

    const [form, setForm] = useState({
        amount: '',
        cardId: '',
        storeName: '',
        date: new Date().toISOString().split('T')[0],
        category: '식비'
    })
    
    return (
        <>
            <S.FormLabel>결제 금액</S.FormLabel>
            <S.StyledInput 
                type="number" 
                value={form.amount} 
                onChange={e => setForm({ ...form, amount: e.target.value })}
                placeholder="0원" 
            />

            <S.FormLabel>사용 카드</S.FormLabel>
            <S.StyledSelect 
                value={form.cardId}
                onChange={e => setForm({ ...form, cardId: e.target.value })}
            >
                <option selected hidden>카드를 선택해주세요</option>
                {getMyCards.map(item => (
                    <option key={item.cardInfo.id} value={item.cardInfo.id}>{item.cardInfo.name}</option>
                ))}
            </S.StyledSelect>

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