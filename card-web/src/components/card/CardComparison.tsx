import * as S from './Card.styles'
import { useCardStore } from '../../store/useCardStore'
import BenefitBarChart from '../common/charts/BenefitBarChart';


function CardComparison({recommendId, cardId}: {recommendId: number, cardId: number}) {
	const { categoryTotals, cardList } = useCardStore();

	if (!recommendId || !cardId) return;

	const targetCard = cardList.find(c => c.id === cardId);
	const recommendCard = cardList.find(c => c.id === recommendId);

	const calculateCardBenefit = (card: any, totals: any) => {
		if (!card) return 0;

		const totalSpent = Object.values(totals).reduce((sum: number, val: any) => sum + val, 0);

		const minTier = card.performanceTiers?.[0].min || 0;
		if (totalSpent < minTier) return 0;

		return card.benefitRules?.reduce((acc: number, rule: any) => {
			const mySpent = totals[rule.category];
			let estimated = Math.round(mySpent * rule.rate);

			if (estimated > rule.limit) {
				estimated = rule.limit;
			}

			return acc + estimated;
		}, 0) || 0;
	};

	const targetBenefit = calculateCardBenefit(targetCard, categoryTotals);
	const recommendBenefit = calculateCardBenefit(recommendCard, categoryTotals);

	const diff = recommendBenefit - targetBenefit;

	const categories = Object.keys(categoryTotals);
	const comparisonDetails = categories.map((cate) => {
		// 해당 카테고리에 사용자가 쓴 총 금액
		const mySpent = categoryTotals[cate];

		// 사용자의 카드 룰 중에 해당 카테고리와 일차하는 룰 찾기
		const targetRule = targetCard?.benefitRules?.find(rule => rule.category === cate);

		// 추천 카드 룰 중에 해당 카테고리와 일치하는 룰 찾기
		const recommendRule = recommendCard?.benefitRules?.find(rule => rule.category === cate);

		// 사용자 카드의 실제 혜택 금액
		const tBenefit = targetRule 
						? Math.min(Math.round(mySpent * targetRule.rate), targetRule.limit)
						: 0;
		
		// 추천 카드의 실체 혜택 금액
		const rBeenfit = recommendRule
						? Math.min(Math.round(mySpent * recommendRule.rate), recommendRule.limit)
						: 0;

		return {
			category: cate,
			spent: mySpent,
			targetBenefit: tBenefit,
			recommendBenefit: rBeenfit,
			diff: rBeenfit - tBenefit
		}
	});

	const sortDetails = comparisonDetails.sort((a, b) => b.spent - a.spent);

	const chartData = [
		{
			name: '현재 카드',
			...sortDetails.reduce((acc, cur) => ({ ...acc, [cur.category]: cur.targetBenefit }), {}),
			total: targetBenefit
		},
		{
			name: '추천 카드',
			...sortDetails.reduce((acc, cur) => ({ ...acc, [cur.category]: cur.recommendBenefit }), {}),
			total: recommendBenefit
		}
	]

    return (
		<S.ComparisonWrapper>
			<h3>혜택 비교 결과</h3>
			<div className="comparison-grid">
				<div className="card-item">
					<p>현재: {targetCard?.name}</p>
					<strong>{targetBenefit.toLocaleString()}원 할인</strong>
				</div>
				
				<div className="vs-badge">VS</div>

				<div className="card-item highlight">
					<p>추천: {recommendCard?.name}</p>
					<strong>{recommendBenefit.toLocaleString()}원 할인</strong>
				</div>
			</div>

			{diff > 0 ? (
				<p className="result-msg">
					카드를 바꾸시면 매달 <span>{diff.toLocaleString()}원</span>을 더 아낄 수 있어요!
				</p>
			) : (
				<p className="result-msg">현재 카드가 가장 효율적입니다.</p>
			)}

			<BenefitBarChart data={chartData} categories={categories} />
		</S.ComparisonWrapper>
    )
}

export default CardComparison