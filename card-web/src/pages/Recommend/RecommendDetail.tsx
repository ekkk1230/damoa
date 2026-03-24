import * as S from "./Reccommend.styles"
import { useParams } from "react-router-dom"
import { useCardStore } from "../../store/useCardStore";
import SpendChart from "../../components/common/charts/SpendChart";
import CardComparison from "../../components/Card/CardComparison";

function RecommendDetail() {
    const { getMyCards, cardList, spendings } = useCardStore();

    const { id } = useParams();

    const card = cardList.find(c => c.id === Number(id));
    const isMyCard = getMyCards.filter(c => c.cardInfo.id === Number(id)).length !== 0;

    return (
        <>
            {isMyCard === false && (
                <>
                    <ul>
                        {getMyCards.map(card => (
                            <li key={card.cardInfo.id}><button>{card.cardInfo.name}</button></li>
                        ))}
                    </ul>

                    {getMyCards.map(card => {
                        const filteresSpendList = spendings.filter(s => Number(s.cardId) === Number(card.cardInfo.id));

                        return (
                            <div key={card.cardInfo.id}>
                            <p>{card.cardInfo.name}</p>

                            {filteresSpendList.length >= 1 && (
                                    <SpendChart data={filteresSpendList} />
                            )}

                            <CardComparison recommendId={Number(id)} cardId={card.cardInfo.id} />
                        </div>
                        )
                    })}
                </>
            )}

            <S.Container>
                {/* 1. 상단 섹션 */}
                <S.HeroSection>
                    {/* <S.CardImage src={card?.image} alt={card?.name} /> */}
                    <S.HeroText>
                    <span className="type-badge">{card?.type}카드</span>
                    <h1>{card?.name}</h1>
                    <p className="summary">{card?.summary}</p>
                    <div className="quick-info">
                        <span>연회비 <strong>{card?.annualFee.toLocaleString()}원</strong></span>
                        <span>|</span>
                        <span><strong>{card?.condition}</strong></span>
                    </div>
                    </S.HeroText>
                </S.HeroSection>

                {/* 2. 통계 섹션 (심플한 바 그래프) */}
                <S.StatsSection>
                    <h3>이 카드의 주요 사용자</h3>
                    <div className="stats-grid">
                    {/* 연령대별 그래프 로직 */}
                    <div className="gender-ratio">남성 {card?.statistics?.gender.male}% | 여성 {card?.statistics?.gender.female}%</div>
                    </div>
                </S.StatsSection>

                {/* 3. 상세 혜택 섹션 */}
                <S.BenefitSection>
                    <h3>상세 혜택 안내</h3>
                    {card?.detailBenefits?.map((benefit, idx) => (
                    <S.BenefitCard key={idx}>
                        <div className="benefit-title">
                        <h4>{benefit.title}</h4>
                        <span className="limit-badge">{benefit.limit}</span>
                        </div>
                        <p className="benefit-content">{benefit.content}</p>
                    </S.BenefitCard>
                    ))}
                </S.BenefitSection>

                {/* 4. 실적별 구간 (Table) */}
                    <h3>실적별 할인 한도</h3>
                    <S.TierTable>
                        <thead>
                        <tr>
                            <th>전월 실적</th>
                            <th>할인 혜택</th>
                        </tr>
                        </thead>
                        <tbody>
                        {card?.performanceTiers?.map((tier, idx) => (
                            <tr key={idx}>
                            <td>{tier.min.toLocaleString()}원 이상</td>
                            <td>{tier.desc}</td>
                            </tr>
                        ))}
                        </tbody>
                    </S.TierTable>
                
                {/* 하단 플로팅 버튼 (비교하기 탭으로 이동하거나 공식홈 이동) */}
                <S.FixedBottomBar>
                    <button className="compare-btn">내 카드와 비교하기</button>
                    <a href={card?.officialLink} target="_blank" className="apply-btn">카드 신청하기</a>
                </S.FixedBottomBar>
            </S.Container>
        </>
    )
}

export default RecommendDetail