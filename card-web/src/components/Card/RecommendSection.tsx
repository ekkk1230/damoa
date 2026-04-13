import * as S from "./Card.styles"
import { useCardStore } from "../../store/useCardStore"
import { BRAND_COLORS } from "../../App.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import CategoryTag from "./CategoryTag";
import { normalizeCompanyName } from "../../utils/cardUtils";
import { useUIStore } from "../../store/useUIStore";
import type { Card } from "../../type/Card";
import { useNavigate } from "react-router-dom";

interface RecommendSectionProps {
    variant?: 'main' | 'sub';
}

const swiperOptions = {
    slidesPerView: 1.2, 
    spaceBetween: 16,
    autoplay: { delay: 3000, disableOnInteraction: false },
    breakpoints: {
        480: { slidesPerView: 2.2 },
        768: { slidesPerView: 3.2 }
    }
};

function RecommendSection({ variant = 'main' }: RecommendSectionProps) {
    const navigate = useNavigate();
    const { topSpendingCategory, recommendedCards, setSelectedCard } = useCardStore();
    const { openModal } = useUIStore();

    const handleClickCard = (card: Card) => {
        setSelectedCard(card);
        openModal('CARD_DETAIL'); 
    }

    return (
        <S.RecommendSection>
            <div className="banner-content">
                <div className="text-group">
                    <p className="description">이번 달은 <strong><CategoryTag categoryKey={topSpendingCategory} /></strong> 지출이 가장 많네요!</p>
                </div>
            </div>

            {variant === 'main' ? (
                <>
                    <S.CardListMini>
                    {recommendedCards.length < 1 ? (
                        <p className="no-data">현재 추천할 카드가 준비되어 있지 않습니다.</p>
                    ) : (
                        recommendedCards.map((card, index) => {
                            return (
                                <S.MiniCardItem onClick={() => handleClickCard(card)} key={`${card.id}-${index}`} $brandColor={BRAND_COLORS[card.company]}>
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
                    <S.BannerFooter onClick={() => navigate('/damoa/recommend?filter=recommend')}>
                        총 {recommendedCards.length}개의 맞춤 카드 보러가기 <span>&gt;</span>
                    </S.BannerFooter>
                )}
                </>
            ) : (
                <Swiper
                    modules={[Autoplay]}
                >
                    {recommendedCards.length < 1 ? (
                        <p className="no-data">현재 추천할 카드가 준비되어 있지 않습니다.</p>
                    ) : (
                        recommendedCards.map((card) => {
                            const companyName = normalizeCompanyName(card.company);
                            const brandColor = BRAND_COLORS[companyName]
                            return (
                                <SwiperSlide key={card.id}>
                                    <S.SubCardItem 
                                        onClick={() => handleClickCard(card)}
                                        $brandColor={brandColor}
                                    >
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
                                    </S.SubCardItem>
                                </SwiperSlide>
                            )
                        })
                    )}
                </Swiper>
            )}
        </S.RecommendSection>
    )
}

export default RecommendSection