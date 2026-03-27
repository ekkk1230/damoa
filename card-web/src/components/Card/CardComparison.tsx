import * as S from './Card.styles'
import { useCardStore, analyzeSpendings, calculateExpectedBenefit } from '../../store/useCardStore'
import BenefitBarChart from '../common/charts/BenefitBarChart';
import type { Card } from '../../type/Card';
import CategoryTag from './CategoryTag';
import { EXPENDITURE_CATEGORIES } from '../../constance/categories';


function CardComparison({recommendId, cardId}: {recommendId: number, cardId: number}) {

	if (!recommendId || !cardId) return;

	const { spendings, getMyCards, cardList } = useCardStore();

    const currentCardSpendings = spendings.filter(s => Number(s.cardId) === Number(cardId));
	const { categoryMap } = analyzeSpendings(currentCardSpendings, getMyCards, cardList);
	
	const safeCategoryMap = categoryMap || {};

	const targetCard = cardList.find(c => c.id === cardId);
	const recommendCard = cardList.find(c => c.id === recommendId);

	const targetRes = calculateExpectedBenefit(categoryMap, targetCard as Card);
	const recommendRes = calculateExpectedBenefit(categoryMap, recommendCard as Card);

	const diff = Number(recommendRes?.totalBenefit) - Number(targetRes?.totalBenefit);

	const allCategoryKeys = Object.keys(EXPENDITURE_CATEGORIES);

	const meaningfulCategories = allCategoryKeys.filter(cate => {
		const isSpent = (safeCategoryMap[cate] || 0) > 0; // 내가 돈을 썼는가?
		// const hasTargetBenefit = (targetRes.categoryBenefits[cate] || 0) > 0; // 내 카드가 혜택을 주는가?
		// const hasRecommendBenefit = (recommendRes.categoryBenefits[cate] || 0) > 0; // 추천 카드가 혜택을 주는가?
		const isRecommendTarget = recommendCard?.categories.some(c => c.includes(cate));

		return isSpent && isRecommendTarget;
	});

	const categories = meaningfulCategories;

	const comparisonDetail = categories.map((cate) => {
		const spent = safeCategoryMap[cate] || 0;
		const targetBenefit = targetRes.categoryBenefits[cate] || 0;
		const recommendBenefit = recommendRes.categoryBenefits[cate] || 0;
		const diff = Number(recommendBenefit) - Number(targetBenefit);
		
		return {
			category: cate,   
			spent,
			targetBenefit,
			recommendBenefit,
			diff,
		};
	});

	const filteredComparisonResult = comparisonDetail.filter(d => recommendCard?.categories.some(cate => cate.includes(d.category)));

	const emptyCategories = categories.reduce((acc, cate) => ({ ...acc, [cate]: 0 }), {});
	
	const chartData = [
		{
			name: '현재 카드',
			...emptyCategories,
			...targetRes?.categoryBenefits,
			total: targetRes?.totalBenefit
		},
		{
			name: '추천 카드',
			...emptyCategories,
			...recommendRes?.categoryBenefits,
			total: recommendRes?.totalBenefit
		}
	]

    return (
		<S.ComparisonWrapper>
			<h3>혜택 비교 결과</h3>
			<div className="comparison-grid">
				<div className="card-item">
					<p>현재: {targetCard?.name}</p>
					<strong>{targetRes?.totalBenefit.toLocaleString()}원 할인</strong>
				</div>
				
				<div className="vs-badge">VS</div>

				<div className="card-item highlight">
					<p>추천: {recommendCard?.name}</p>
					<strong>{recommendRes?.totalBenefit.toLocaleString()}원 할인</strong>
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

			<S.StyledTable>
				<caption>소비분석 결과</caption>
				<thead>
					<tr>
						<th>카테고리</th>
						<th>소비금액</th>
						<th>현재혜택</th>
						<th>추천혜택</th>
						<th>차이</th>
					</tr>
				</thead>
				<tbody>
					{filteredComparisonResult.length !== 0 &&
						filteredComparisonResult.map(item => (
							<tr key={item.category}>
								<td><CategoryTag categoryKey={item.category} /></td>
								<td>{item.spent.toLocaleString()}원</td>
								<td>{item.targetBenefit.toLocaleString()}원</td>
								<td>{item.recommendBenefit.toLocaleString()}원</td>
								<td>
									<S.DiffText $isPlus={item.diff > 0}>
										{item.diff.toLocaleString()}원
									</S.DiffText>
								</td>
							</tr>
						))
					}
				</tbody>
			</S.StyledTable>
		</S.ComparisonWrapper>
    )
}

export default CardComparison