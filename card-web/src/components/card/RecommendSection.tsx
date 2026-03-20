import * as S from "./cardComponents.styles"
import { useCardStore } from "../../store/useCardStore"
import { BRAND_COLORS } from "../../App.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';

interface RecommendSectionProps {
    variant?: 'main' | 'sub';
}

function RecommendSection({ variant = 'main' }: RecommendSectionProps) {
    const { topSpendingCategory, recommendedCards, openModal } = useCardStore();

    return (
        <S.RecommendSection>
            <div className="banner-content">
                <div className="text-group">
                    <p className="description">이번 달은 <strong>{topSpendingCategory}</strong> 지출이 가장 많네요!</p>
                </div>
            </div>

            {variant === 'main' ? (
                <>
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
                </>
            ) : (
                <Swiper
                    modules={[Autoplay]}
                >
                    {recommendedCards.length < 1 ? (
                        <p className="no-data">현재 추천할 카드가 준비되어 있지 않습니다.</p>
                    ) : (
                        <SwiperSlide>
                        {recommendedCards.map(card => {
                            return (
                                <div onClick={() => openModal('CARD_DETAIL', card)} key={card.id} >
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
                                </div>
                            )
                        })}
                        </SwiperSlide>
                    )}
                </Swiper>
            )}
        </S.RecommendSection>
    )
}

export default RecommendSection