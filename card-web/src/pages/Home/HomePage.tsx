import * as S from "./HomePage.styles";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useMemo } from "react";
import { CARD_LIST } from "../../data/cardData";
import { BRAND_COLORS } from "../../App.styles";

export const MOCK_SPENDING = [
	{
	  id: 1,
	  storeName: "주식회사 위대한상상", 
	  amount: 28500,
	  category: "식비",
	  date: "2026-03-12",
	  cardId: 1, 
	},
	{
	  id: 2,
	  storeName: "김가네 상암점", 
	  amount: 9500,
	  category: "식비",
	  date: "2026-03-14",
	  cardId: 1,
	},
	{
	  id: 3,
	  storeName: "(주)이삼오구", 
	  amount: 45000,
	  category: "건강/쇼핑",
	  date: "2026-03-15",
	  cardId: 1, 
	},
	{
	  id: 4,
	  storeName: "스타벅스 안양역점", 
	  amount: 6100,
	  category: "카페",
	  date: "2026-03-16",
	  cardId: 2,
	},
	{
	  id: 5,
	  storeName: "DB손해보험", 
	  amount: 55000,
	  category: "금융/보험",
	  date: "2026-03-10",
	  cardId: 2,
	}
];

export const HomePage = () => {
	const topCategory = "식비";

	const spendingMap = MOCK_SPENDING.reduce((acc: {[key: number]: number}, cur) => {
		const id = Number(cur.cardId);

		acc[id] = (acc[id] || 0) + cur.amount;
		return acc;
	}, {} as Record<number, number>);


	const myCards = useMemo(() => {
		return CARD_LIST
				.filter(card => card.isOwned)
				.map(card => ({
					cardInfo: card,
					nickname: `${card.company} ${card.name}`,
					targetAmount: 3000000,
					currentAmount: spendingMap[card.id] || 0,
				}))
	}, [spendingMap]);

	const totalSpending = useMemo(() => {
		return Object.values(spendingMap).reduce((acc, cur) => acc + cur, 0);
	}, [spendingMap]);

	const totalBenefit = Math.floor(totalSpending * 0.015);

	const recommendaedCards = useMemo(() => {
		const filtered = CARD_LIST.filter(card => card.categories.includes(topCategory));
		return [...filtered].sort(() => Math.random() - .5).slice(0, 5);
	}, [topCategory]);

    return (
        <S.HomeContainer>
            {/* 1. 상단 요약 섹션 */}
            <S.SummaryCard>
                <S.SummaryInfo>
                    <p className="label">이번 달 총 지출</p>
                    <h2 className="total-amount">{totalSpending.toLocaleString()}원</h2>
                    <p className="benefit-amount">이번 달 혜택 <span>+{totalBenefit.toLocaleString()}</span></p>
                </S.SummaryInfo>
                <S.QuickAddBtn>
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
					{myCards.map(card => {
						const { cardInfo, nickname, targetAmount, currentAmount } = card;
						const progress = Math.min(Math.round((currentAmount / targetAmount) * 100), 100);

						return (
							<SwiperSlide key={cardInfo.id}>
								<S.CreditCardBox $brandColor={BRAND_COLORS[cardInfo.company]}>
										<div className="card-top">
											<span className="nickname">{nickname}</span>
											<span className="card-name">{cardInfo.name}</span>
										</div>
										
										<S.ProgressWrapper>
											<div className="amount-info">
												<span>{currentAmount.toLocaleString()}원</span>
												<span>목표 {targetAmount.toLocaleString()}원</span>
											</div>
											<S.ProgressBar>
												<S.ProgressFill $width={progress} /> 
											</S.ProgressBar>
											<p className="percentText">실적 {progress}% 달성</p>
										</S.ProgressWrapper>
									</S.CreditCardBox>
							</SwiperSlide>
						)
					})}
                </Swiper>
            </S.CardSection>

            {/* 2. 추천 카드 섹션 */}
			<S.RecommendBanner>
				<div className="banner-content">
					<div className="emogi">🍔</div>
					<div className="text-group">
						<p className="description">이번 달은 <strong>식비</strong> 지출이 가장 많네요!</p>
					</div>
				</div>

				<S.CardListMini>
					{recommendaedCards.map(card => {
						return (
							<S.MiniCardItem key={card.id} $brandColor={BRAND_COLORS[card.company]}>
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
					})}
				</S.CardListMini>

				<S.BannerFooter>
                    총 5개의 맞춤 카드 보러가기 <span>&gt;</span>
                </S.BannerFooter>
			</S.RecommendBanner>
        </S.HomeContainer>
    );
};