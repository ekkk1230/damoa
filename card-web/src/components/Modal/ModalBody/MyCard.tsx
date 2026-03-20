import { useCardStore } from '../../../store/useCardStore'
import * as S from '../ModalComponents.styles';


function MyCard() {
    const { selectedCard, recentSpendList, getMyCards, recommendedCards } = useCardStore();

    const achievementRate = getMyCards.find(card => card.cardInfo.id === selectedCard?.id)?.progress || 0;

    console.log(selectedCard)
    return (
        <>            
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