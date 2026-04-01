import * as S from "./Reccommend.styles"
import { useParams } from "react-router-dom"
import { useCardStore } from "../../store/useCardStore";
import { Swiper, SwiperSlide } from "swiper/react";
import AgeChart from "../../components/common/charts/AgeChart";
import GenderChart from "../../components/common/charts/GenderChart";
import { useUIStore } from "../../store/useUIStore";
import { useEffect } from "react";

function RecommendDetail() {
    const { getMyCards, cardList, setSelectedCard } = useCardStore();
    const { openModal } = useUIStore();

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:8080/api/cards/${id}`)
            .then(res => res.json())
            .then(data => console.log(data));
        }
    }, [id]);

    const card = cardList.find(c => c.id === Number(id));

    if (!card) {
        return <div>카드 정보를 불러오는 중입니다... 💳</div>
    }

    const isMyCard = getMyCards.some(c => c.cardInfo.id === Number(id));

    const topAge = card?.statistics?.ageGroups.reduce((prev, cur) => {
        return (prev.value > cur.value) ? prev : cur
    }, card.statistics.ageGroups[0])

    const genderData = card?.statistics?.gender;
    const topGender = genderData 
                    ? (genderData.maleRate > genderData.femaleRate ? "남성" : "여성") 
                    : "사용자";

    const handleCardClick = (clickedCard: any) => {
        setSelectedCard(clickedCard);
        openModal('COMPAIR', id);
    }

    return (
        <>
            <S.Container>
                {/* 1. 상단 섹션 */}
                <S.HeroSection>
                    {/* <S.CardImage src={card?.image} alt={card?.name} /> */}
                    <S.HeroText>
                    <span className="type-badge">{card?.cardType}카드</span>
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
                        <AgeChart data={card?.statistics?.ageGroups} />

                        {/* 연령대별 그래프 로직 */}
                        {/* <div className="gender-ratio">남성 {card?.statistics?.gender.male}% | 여성 {card?.statistics?.gender.female}%</div> */}
                        <GenderChart data={card?.statistics?.gender} />

                        <p>{topAge?.label}의 {topGender} 사용자가 많습니다!</p>
                    </div>
                </S.StatsSection>

                {/* 3. 상세 혜택 섹션 */}
                <S.BenefitSection>
                    <h3>상세 혜택 안내</h3>
                    {card?.detailBenefits?.map((benefit, idx) => (
                    <S.BenefitCard key={idx}>
                        <div className="benefit-title">
                        <h4>{benefit.title}</h4>
                        <span className="limit-badge">{benefit.detailLimit}</span>
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
                        <td>{Number(tier.minAmount).toLocaleString()}원 이상</td>
                        <td>{tier.description}</td>
                        </tr>
                    ))}
                    </tbody>
                </S.TierTable>

                {isMyCard === false && (
                    <>
                        <Swiper>
                            {getMyCards.map(card => {
                                return (
                                    <SwiperSlide 
                                        key={card.cardInfo.id}
                                        onClick={() => handleCardClick(card)}
                                    >
                                        <p>{card.cardInfo.company}</p>
                                        <p>{card.cardInfo.name}</p>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </>
                )}
                
                {/* 하단 플로팅 버튼 (비교하기 탭으로 이동하거나 공식홈 이동) */}
                <S.FixedBottomBar>
                    <a href={card?.officialLink} target="_blank" className="apply-btn">카드 신청하기</a>
                </S.FixedBottomBar>
            </S.Container>
        </>
    )
}

export default RecommendDetail