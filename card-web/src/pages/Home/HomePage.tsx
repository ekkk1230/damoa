import * as S from "./HomePage.styles";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useMemo } from "react";
import { CARD_LIST } from "../../data/cardData";
import { BRAND_COLORS } from "../../App.styles";
import { useCardStore } from "../../store/useCardStore";
import CardModal from "../../components/Modal/CardModal";
import SpendingAddModal from "../../components/Modal/SpendingAddModal";
import { USER_CARDS } from "../../data/userCardData";

export const HomePage = () => {
	const { openModal, spendings } = useCardStore();

	const spendingCategory = useMemo(() => {
		return spendings.reduce((acc: {[key: string]: number}, cur) => {
			const id = cur.category;
			acc[id] = (acc[id] || 0) + cur.amount;
			return acc;
		}, {} as Record<string, number>);
	}, [spendings]);

	// console.log(spendingCategory);

	const topCategory = useMemo(() => {
		if (spendings.length === 0) return "지출 없음";

		return Object.keys(spendingCategory).reduce((prev, cur) => {
			return spendingCategory[cur] > spendingCategory[prev] ? cur : prev;
		})
	}, [spendingCategory, spendings]);

	// console.log(topCategory)

	const spendingMap = spendings.reduce((acc: {[key: number]: number}, cur) => {
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

	const recentSpendList = spendings.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	const recommendaedCards = useMemo(() => {
		const filtered = CARD_LIST.filter(card => card.categories.includes(topCategory));
		return [...filtered].sort(() => Math.random() - .5).slice(0, 5);
	}, [topCategory]);

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
						{myCards.map(card => {
							const { cardInfo, nickname, targetAmount, currentAmount } = card;
							const progress = Math.min(Math.round((currentAmount / targetAmount) * 100), 100);

							return (
								<SwiperSlide key={cardInfo.id} onClick={() => openModal('CARD_DETAIL', cardInfo)}>
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

				{/* 3. 최근 지출 내역 */}
				<S.RecentSection>
					<div className="section-header">
						<h3>최근 지출 내역</h3>
						<button className="more-btn">전체보기</button>
					</div>
					
					<S.SpendList>
						{recentSpendList.slice(0, 5).map(item => {
							const usedCard = USER_CARDS.find(card => card.cardInfo.id === item.cardId);

							return (
								<S.SpendItem key={item.id}>
									<div className="item-left">
									<div className="info">
										<p className="name">{usedCard?.cardInfo.name}</p>
										<p className="store">{item.store}</p>
										<p className="date">{item.date} · {item.category}</p>
									</div>
									</div>
									<div className="item-right">
									<p className="amount">-{item.amount.toLocaleString()}원</p>
									</div>
								</S.SpendItem>
							)
						})}
					</S.SpendList>
				</S.RecentSection>

				{/* 4. 추천 카드 섹션 */}
				<S.RecommendBanner>
					<div className="banner-content">
						<div className="text-group">
							<p className="description">이번 달은 <strong>{topCategory}</strong> 지출이 가장 많네요!</p>
						</div>
					</div>

					<S.CardListMini>
						{recommendaedCards.length < 1 ? (
							<p className="no-data">현재 추천할 카드가 준비되어 있지 않습니다.</p>
						) : (
							recommendaedCards.map(card => {
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
						{recommendaedCards.length >= 1 && (
							<S.BannerFooter>
								총 {recommendaedCards.length}개의 맞춤 카드 보러가기 <span>&gt;</span>
							</S.BannerFooter>
						)}
				</S.RecommendBanner>
			</S.HomeContainer>

			<CardModal />
			<SpendingAddModal cards={myCards} />
		</>
    );
};