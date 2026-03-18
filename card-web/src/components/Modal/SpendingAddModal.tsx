import * as S from './ModalComponents.styles'
import { useCardStore } from '../../store/useCardStore';
import ModalLayout from '../common/ModalLayout/ModalLayout';
import type { Card } from '../../type/Card';
import React, { useState } from 'react';

interface SpendingAddModalProps {
    cards: {
        cardInfo: Card;
        nickname: string;
        currentAmount: number;
        targetAmount: number;
    }[];
}

interface AnalyzedItem {
    id: number;
    storeName: string;
    amount: number;
    date: string;
    category: string;
}

const CATEGORIES = ['식비', '카페', '교통/주유', '쇼핑', '금융/보험', '의료/건강', '기타'];

const SpendingAddModal = ({ cards }: SpendingAddModalProps) => {
    const { modalType, addSpending, closeModal } = useCardStore();

    const [activeTab, setActiveTab] = useState<'manual' | 'upload'>('manual');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analyzedList, setAnalyzedList] = useState<AnalyzedItem[]>([]);
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

        const newEntry = {
            id: Date.now(),
            ...form,
            amount: Number(form.amount),
            cardId: Number(form.cardId)
        };

        addSpending(newEntry);
        closeModal();

        setForm({ amount: '', cardId: '', storeName: '', date: new Date().toISOString().split('T')[0], category: '식비' });
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsAnalyzing(true);

        setTimeout(() => {
            const mockResult: AnalyzedItem[] = [
                { id: 1, storeName: "안양주유소", amount: 50000, date: "2026-03-15", category: "교통/주유" },
                { id: 2, storeName: "스타벅스", amount: 6100, date: "2026-03-16", category: "카페" },
            ]

            setAnalyzedList(mockResult);
            setIsAnalyzing(false);
        }, 1500);
    }

    const handleUpdateItem = (id: number, field: string, value: string) => {
        const finalValue = field === 'amount' ? Number(value.replace(/[^0-9]/g, '')) : value;
        setAnalyzedList(prevList => 
            prevList.map(item => 
                item.id === id 
                    ? { ...item, [field]: finalValue }
                    : item 
            )
        );
    };

    const handleSave = () => setEditingId(null);

    const handleDelete = (id: number) => {
        setAnalyzedList(prevList =>
            prevList.filter(item => item.id !== id)
        )
    }

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
                        {cards.map(item => (
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
            ) : (
                <>
                    <S.FormLabel>이 내역들을 어떤 카드로 등록할까요?</S.FormLabel>
                    <S.StyledSelect 
                        value={form.cardId}
                        onChange={e => setForm({ ...form, cardId: e.target.value })}
                        style={{ marginBottom: '20px' }}
                    >
                        <option value="" hidden>카드를 선택해주세요</option>
                        {cards.map(item => (
                            <option key={item.cardInfo.id} value={item.cardInfo.id}>{item.nickname}</option>
                        ))}
                    </S.StyledSelect>

                    {!isAnalyzing && analyzedList.length === 0 && (
                        <S.UploadBox $disabled={!form.cardId}>
                        <input 
                            type="file" 
                            hidden 
                            accept="image/*" 
                            onChange={handleImageUpload}
                            disabled={!form.cardId} 
                        />
                        <span style={{fontSize: '2rem'}}>📸</span>
                        <p style={{marginTop: '10px', color: '#666'}}>
                            {form.cardId ? '영수증이나 캡처 화면 업로드' : '카드를 먼저 선택해주세요'}
                        </p>
                        <span style={{fontSize: '0.8rem', color: '#999'}}>
                            AI가 자동으로 내역을 추출합니다
                        </span>
                    </S.UploadBox>
                    )}

                    {isAnalyzing && (
                        <S.LoadingWrapper>
                            <S.AnalyzingIcon>📄</S.AnalyzingIcon>
                        </S.LoadingWrapper>
                    )}

                    {analyzedList.length > 0 && (
                        <>
                            <p style={{fontSize: '0.9rem', fontWeight: 'bold'}}>분석 결과 ({analyzedList.length}건)</p>
                            <S.ResultList>
                                {analyzedList.map(item => (
                                    item.id === editingId ? (
                                        <S.ResultItem key={item.id}>
                                            <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                                                <div className="info">
                                                    <span className="name">
                                                        <S.GhostInput value={item.storeName} autoFocus onChange={e => handleUpdateItem(item.id, 'storeName', e.target.value)} />
                                                    </span>
                                                    <span className="date-cat">
                                                        {item.date} · 
                                                        <S.GhostSelect 
                                                            value={item.category}
                                                            onChange={e => handleUpdateItem(item.id, 'category', e.target.value)}
                                                        >
                                                            {CATEGORIES.map(cate => (
                                                                <option value={cate}>{cate}</option>
                                                            ))}
                                                        </S.GhostSelect>
                                                    </span>
                                                </div>
                                                
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <div className="amount" style={{ display: 'flex', alignItems: 'center' }}>
                                                        <S.GhostInput 
                                                            type="number" 
                                                            value={item.amount}
                                                            onChange={e => handleUpdateItem(item.id, 'amount', e.target.value)}
                                                            style={{ textAlign: 'right', width: '80px' }} 
                                                        />원
                                                    </div>
                                                    <S.ItemActionGroup>
                                                        <button className="confirm-btn" onClick={() => handleSave()}>적용</button>
                                                        <button onClick={() => setEditingId(null)}>취소</button>
                                                    </S.ItemActionGroup>
                                                </div>
                                            </div>
                                        </S.ResultItem>
                                    ) : (
                                        <S.ResultItem key={item.id}>
                                            <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                                                <div className="info">
                                                    <span className="name">{item.storeName}</span>
                                                    <span className="date-cat">{item.date} · {item.category}</span>
                                                </div>
                                                
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <div className="amount">{item.amount.toLocaleString()}원</div>
                                                    <S.ItemActionGroup>
                                                        <button onClick={() => setEditingId(item.id)}>수정</button>
                                                        <button className="delete-btn" onClick={() => handleDelete(item.id)}>삭제</button>
                                                    </S.ItemActionGroup>
                                                </div>
                                            </div>
                                        </S.ResultItem>
                                    )
                                ))}
                            </S.ResultList>
                            <button 
                                onClick={() => {
                                    analyzedList.forEach(item => {
                                        addSpending({...item, cardId: Number(form.cardId) || 1});
                                    });
                                    closeModal();
                                    setAnalyzedList([]);
                                }}
                                style={{width: '100%', padding: '15px', marginTop: '20px', background: '#333', color: '#fff'}}
                            >
                                {analyzedList.length}건 모두 등록하기
                            </button>
                            <button onClick={() => setAnalyzedList([])} style={{width: '100%', background: 'none', border: 'none', color: '#888', marginTop: '10px'}}>
                                다시 업로드하기
                            </button>
                        </>
                    )}
                </>
            )}
        </ModalLayout>
    )
}

export default SpendingAddModal