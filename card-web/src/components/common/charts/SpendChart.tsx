import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { EXPENDITURE_CATEGORIES, CATEGORY_COLORS } from '../../../constance/categories'
import * as S from '../../Modal/ModalComponents.styles'
import { analyzeSpendings } from '../../../store/useCardStore';
import CategoryTag from '../../Card/CategoryTag';

function SpendChart({data}: { data: any }) {

    if(!data) return null;

    const { categoryMap, totalSpending, topCategory } = analyzeSpendings(data, [], []);
    const safeCategoryMap = categoryMap || {}

    const chartData = Object.keys(safeCategoryMap).map((key) => {
        const amount = safeCategoryMap[key];

        return { 
            name: (EXPENDITURE_CATEGORIES as any)[key]?.label, 
            value: Math.round((amount / Number(totalSpending)) * 100), 
            amount,
            color: (CATEGORY_COLORS as any)[key] || '#ccc'
        }; 
    }).sort((a, b) => b.amount - a.amount);

    return (
        <S.SpendChartWrap>
            <ResponsiveContainer width="100%">
                <PieChart>
                    <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={70}
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true} // 애니메이션 활성화 확인
                        animationBegin={0}       // 0초 대기
                        animationDuration={1000} // 1초 동안 실행
                    >
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip 
                        separator=": "
                        formatter={(value: any) => [`${value}%`, '비중']}
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Legend iconType="circle" verticalAlign="bottom" height={36} />
                </PieChart>
            </ResponsiveContainer>

            <div className="total-center">
                <p className="label">총 지출</p>
                <p className="amount">{Number(totalSpending).toLocaleString()}원</p>
            </div>

            <S.TopCategoryMsg>
                이번 달은 <CategoryTag categoryKey={topCategory} /> 항목에서 가장 많은 지출이 발생했어요!
            </S.TopCategoryMsg>
        </S.SpendChartWrap>
    )
}

export default SpendChart