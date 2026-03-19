import * as S from "./cardComponents.styles"
import { useCardStore } from "../../store/useCardStore"
import { BRAND_COLORS } from "../../App.styles copy";

function RecommendSection() {
    const { topSpendingCategory, recommendedCards, openModal } = useCardStore();

    return (
        <S.RecommendSection>
            <div className="banner-content">
                <div className="text-group">
                    <p className="description">이번 달은 <strong>{topSpendingCategory}</strong> 지출이 가장 많네요!</p>
                </div>
            </div>

            <S.CardListMini>
                {recommendedCards.length < 1 ? (
                    <p className="no-data">현재 추천할 카드가 준비되어 있지 않습니다.</p>
                ) : (
                    recommendedCards.map(card => {
                        return (
                            <S.MiniCardItem onClick={() => openModal('CARD_DETAIL', card)} key={card.id} $brandColor={BRAND_COLORS[card.company]}>
                                <div className="card-thumb">
                                    <span className="name">{card.name}</span>
                                </div>
                                <div className="card-info">
                                    <ul>
                                        {card.mainBenefits.map((benefit, idx) => (
                                            <li key={idx}>{benefit}</li>
                                        ))}
                                    </ul>
                                </div>
                            </S.MiniCardItem>
                        )
                    })
                )}
            </S.CardListMini>
                {recommendedCards.length >= 1 && (
                    <S.BannerFooter>
                        총 {recommendedCards.length}개의 맞춤 카드 보러가기 <span>&gt;</span>
                    </S.BannerFooter>
                )}
        </S.RecommendSection>
    )
}

export default RecommendSection