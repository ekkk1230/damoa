import { useCardStore } from '../../../store/useCardStore'
import * as S from '../ModalComponents.styles';


function MyCard() {
    const { selectedCard, recentSpendList, getMyCards, recommendedCards } = useCardStore();

    const achievementRate = getMyCards.find(card => card.cardInfo.id === selectedCard?.id)?.progress || 0;

    return (
        <>
            <S.DetailItem>
                <p style={{ color: '#64748b', fontSize: '1.4rem', marginBottom: '0.8rem' }}>{selectedCard?.summary}</p>
                <ul className="category-list">
                    {selectedCard?.categories.map((category, index) => (
                        <li key={index}>{category}</li>
                    ))}
                </ul>
            </S.DetailItem>

            {/* 기본 혜택 조건 */}
            <S.DetailItem>
                <h4>Condition & Benefit</h4>
                <p>{selectedCard?.condition} · {selectedCard?.maxBenefit}</p>
            </S.DetailItem>

            {/* 상세 혜택 리스트 */}
            {Array.isArray(selectedCard?.detailBenefits) && selectedCard?.detailBenefits.length > 0 && (
                <S.DetailItem>
                    <h4>Detailed Benefits</h4>
                    {selectedCard?.detailBenefits.map((benefit, index) => (
                        <p key={index} style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>
                            <strong>{benefit.title}</strong>: {benefit.content} 
                            <span style={{ color: '#94a3b8', fontSize: '1.2rem', marginLeft: '0.5rem' }}>({benefit.limit})</span>
                        </p>
                    ))}
                </S.DetailItem>
            )}

            {/* 실적 달성률 섹션 */}
            <S.ProgressWrapper>
                <div className="label-group">
                    <span>현재 실적 달성률</span>
                    <strong>{achievementRate}%</strong>
                </div>
                <S.ProgressBar $percent={achievementRate} />
            </S.ProgressWrapper>

            {/* 최근 지출 내역 섹션 */}
            <S.ChartTitle>최근 지출 내역</S.ChartTitle>
            <S.ResultList>
                {recentSpendList.length > 0 ? (
                    recentSpendList.map(item => (
                        <S.ResultItem key={item.id}>
                            <div className="info">
                                <span className="name">{item.storeName}</span>
                                <span className="date-cat">{item.date} · {item.category}</span>
                            </div>
                            <span className="amount">{item.amount.toLocaleString()}원</span>
                        </S.ResultItem>
                    ))
                ) : (
                    <p style={{ textAlign: 'center', padding: '2rem', color: '#94a3b8' }}>최근 지출 내역이 없습니다.</p>
                )}
            </S.ResultList>

            {/* 추천 카드 섹션 */}
            <S.RecommendSection>
                <h3>비슷한 혜택의 추천 카드</h3>
                <S.RecommendGrid>
                    {recommendedCards.map(card => (
                        <S.RecommendCardItem key={card.id}>
                            <p className="company">{card.company}</p>
                            <p className="card-name">{card.name}</p>
                            <ul className="mini-categories">
                                {card.categories.slice(0, 5).map((cate, index) => (
                                    <li key={index}>{cate}</li>
                                ))}
                            </ul>
                        </S.RecommendCardItem>
                    ))}
                </S.RecommendGrid>
            </S.RecommendSection>
        </>
    )
}

export default MyCard