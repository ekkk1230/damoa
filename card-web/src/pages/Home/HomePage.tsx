import * as S from "./HomePage.styles";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { BRAND_COLORS } from "../../App.styles";
import { useCardStore } from "../../store/useCardStore";
import CardModal from "../../components/Modal/CardModal";
import SpendingAddModal from "../../components/Modal/SpendingAddModal";
import RecentSection from "../../components/card/RecentSection";
import RecommendSection from "../../components/card/RecommendSection";

export const HomePage = () => {
	const { openModal, totalSpending, getMyCards, totalBenefit } = useCardStore();

    return (
        <>
			<S.HomeContainer>
				{/* 1. 상단 요약 섹션 */}
				<S.SummaryCard>
					<S.SummaryInfo>
						<p className="label">{new Date().getMonth() + 1}월 예상 지출 내역</p>
						<h2 className="total-amount">{totalSpending.toLocaleString()}원</h2>
						<p className="benefit-amount">이번 달 혜택 <span>+{totalBenefit.toLocaleString()}</span></p>
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
						{getMyCards.map(card => {
							const { cardInfo, targetAmount, currentAmount } = card;

							return (
								<SwiperSlide key={cardInfo.id} onClick={() => openModal('CARD_DETAIL', cardInfo)}>
									<S.CreditCardBox $brandColor={BRAND_COLORS[cardInfo.company]}>
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
						})}
					</Swiper>
				</S.CardSection>

				{/* 3. 최근 지출 내역 */}
				<RecentSection />

				{/* 4. 추천 카드 섹션 */}
				<RecommendSection variant="main" />
			</S.HomeContainer>

			<CardModal />
			<SpendingAddModal cards={getMyCards} />
		</>
    );
};