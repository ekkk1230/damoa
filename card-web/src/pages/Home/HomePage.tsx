import * as S from "./HomePage.styles";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { BRAND_COLORS } from "../../App.styles";
import { useCardStore } from "../../store/useCardStore";
import RecentSection from "../../components/Card/RecentSection";
import RecommendSection from "../../components/Card/RecommendSection";
import { normalizeCompanyName } from "../../utils/cardUtils";
import { useUIStore } from "../../store/useUIStore";

export const HomePage = () => {
	const { totalSpending, getMyCards, totalBenefit, setSelectedCard } = useCardStore();
	const { openModal } = useUIStore();

	const handleCardClick = (cardInfo: any) => {
		setSelectedCard(cardInfo);
		openModal('CARD_DETAIL');
	}

    return (
        <>
			<S.HomeContainer>
				{/* 1. 상단 요약 섹션 */}
				<S.SummaryCard>
					<S.SummaryInfo>
						<p className="label">{new Date().getMonth() + 1}월 예상 지출 내역</p>
						<h2 className="total-amount">{totalSpending.toLocaleString()}원</h2>
						{totalBenefit > 0 ? (
							<span className="benefit-amount"> +{totalBenefit.toLocaleString()}원</span>
						) : (
							<span className="zero-text"> 아직 혜택이 없어요</span>
						)}
					</S.SummaryInfo>
					<S.QuickAddBtn onClick={() => openModal('SPENDING_ADD')}>
						<span className="icon">📸</span> 
						지출등록
					</S.QuickAddBtn>
				</S.SummaryCard>

				{/* 2. 카드 실적 슬라이드 섹션 */}
				<S.CardSection>
					<h3>내 카드 실적 현황</h3>
					<Swiper
						{...({
							modules: [Pagination],
							spaceBetween: 20,
							slidesPerView: 1.2,
							pagination: { clickable: true },
							observer: true,
							observeParents: true,
							watchOverflow: true,
						} as any)}
					>
						{
							getMyCards.length >= 1 ? (
								getMyCards.map(card => {
									const { cardInfo, targetAmount, currentAmount } = card;
									const companyName = normalizeCompanyName(cardInfo.company);
									const brandColor = BRAND_COLORS[companyName];
		
									return (
										<SwiperSlide key={cardInfo.id} onClick={() => handleCardClick(cardInfo)}>
											<S.CreditCardBox $brandColor={brandColor}>
													<div className="card-top">
														<span className="card-company">{cardInfo.company}</span>
														<span className="card-name">{cardInfo.name}</span>
													</div>
													
													<S.ProgressWrapper>
														<div className="amount-info">
															<span>{currentAmount.toLocaleString()}원</span>
															<span>목표 {targetAmount.toLocaleString()}원</span>
														</div>
														<S.ProgressBar>
															<S.ProgressFill $width={card.progress} /> 
														</S.ProgressBar>
														<p className="percentText">실적 {card.progress}% 달성</p>
													</S.ProgressWrapper>
												</S.CreditCardBox>
										</SwiperSlide>
									)
								})
							) : (
								<p>현재 보유중인 카드가 없습니다. 카드를 등록하여 혜택을 관리해보세요.</p>
							)
						}
					</Swiper>
				</S.CardSection>

				{/* 3. 최근 지출 내역 */}
				<RecentSection />

				{/* 4. 추천 카드 섹션 */}
				<RecommendSection variant="main" />
			</S.HomeContainer>
		</>
    );
};