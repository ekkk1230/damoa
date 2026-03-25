import * as S from '../ModalComponents.styles'
import { useCardStore } from '../../../store/useCardStore';
import { useState } from 'react';
import { EXPENDITURE_CATEGORIES } from '../../../constance/categories';
import CategoryTag from '../../Card/CategoryTag';

function ImageInputTab() {
    const { closeModal, getMyCards, analyzedList, isAnalyzing, uploadAndAnalyze, deleteAnalyzedItem, confirmAllSpendings, updateAnalyzedItem } = useCardStore();

    const [form, setForm] = useState({
        amount: '',
        cardId: '',
        storeName: '',
        date: new Date().toISOString().split('T')[0],
        category: '',
    })
    const [editingId, setEditingId] = useState<number | null>(null);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        await uploadAndAnalyze(file);
    }
    
    const handleUpdateItem = (id: number, field: string, value: string|number) => {
        updateAnalyzedItem(id, { [field]: value });
    }

    const handleSave = () => setEditingId(null);

    const CATEGORIES = Object.entries(EXPENDITURE_CATEGORIES).map(([key, value]) => (
        <option key={key} value={key}>{value.label}</option>
    ))

    return (
        <>
            <S.FormLabel>이 내역들을 어떤 카드로 등록할까요?</S.FormLabel>
            <S.StyledSelect 
                value={form.cardId}
                onChange={e => setForm({ ...form, cardId: e.target.value })}
                style={{ marginBottom: '20px' }}
            >
                <option value="" hidden>카드를 선택해주세요</option>
                {getMyCards.map(item => (
                    <option key={item.cardInfo.id} value={item.cardInfo.id}>{item.cardInfo.name}</option>
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
                                                    {CATEGORIES}
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
                                            <span className="date-cat">{item.date} · <CategoryTag categoryKey={item.category} /></span>
                                        </div>
                                        
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <div className="amount">{item.amount.toLocaleString()}원</div>
                                            <S.ItemActionGroup>
                                                <button onClick={() => setEditingId(item.id)}>수정</button>
                                                <button className="delete-btn" onClick={() => deleteAnalyzedItem(item.id)}>삭제</button>
                                            </S.ItemActionGroup>
                                        </div>
                                    </div>
                                </S.ResultItem>
                            )
                        ))}
                    </S.ResultList>
                    <button 
                        onClick={() => {
                            confirmAllSpendings(Number(form.cardId));
                            closeModal();
                        }}
                        style={{width: '100%', padding: '15px', marginTop: '20px', background: '#333', color: '#fff'}}
                    >
                        {analyzedList.length}건 모두 등록하기
                    </button>
                </>
            )}
        </>
    )
}

export default ImageInputTab