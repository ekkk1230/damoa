import { useCardStore } from '../../../store/useCardStore'
import { getCategoryLabel } from '../../../utils/cardUtils';
import CategoryTag from '../../Card/CategoryTag';
import * as S from '../ModalComponents.styles';


function MyCard() {
    const { selectedCard, recentSpendList, getMyCards, cardList} = useCardStore();

    const targetUserCard = getMyCards.find(card => card.cardInfo.id === selectedCard?.id);
    const achievementRate = targetUserCard?.progress || 0;
    const filteredSpendList = recentSpendList.filter(item => item.cardId === targetUserCard?.id);
    
    const selectedCategories = selectedCard?.categories || [];
    const relatedRecommendedCards = cardList
        .filter(card =>
            card.id !== selectedCard?.id &&
            card.categories.some(cate => selectedCategories.includes(cate))
        )
        .sort(() => Math.random() - .5)
        .slice(0 ,4);

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
                {filteredSpendList.length > 0 ? (
                    filteredSpendList.map(item => {
                        
                        return (
                            <S.ResultItem key={item.id}>
                                <div className="info">
                                    <p className="category"><CategoryTag categoryKey={item.category} /></p>
                                    <p className="amount">{item.amount.toLocaleString()}원</p>
                                </div>
                                <p className="date">{new Date(item.date).toLocaleDateString()}</p>
                            </S.ResultItem>
                        )
                    })
                ) : (
                    <p style={{ textAlign: 'center', padding: '2rem', color: '#94a3b8' }}>최근 지출 내역이 없습니다.</p>
                )}
            </S.ResultList>

            {/* 추천 카드 섹션 */}
            <S.RecommendSection>
                <h3>비슷한 혜택의 추천 카드</h3>
                <S.RecommendGrid>
                    {relatedRecommendedCards.map(card => (
                        <S.RecommendCardItem key={card.id}>
                            <p className="company">{card.company}</p>
                            <p className="card-name">{card.name}</p>
                            <ul className="mini-categories">
                                {card.categories.slice(0, 5).map((cate, index) => (
                                    <li key={index}>{getCategoryLabel(cate)}</li>
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