
import { Link } from 'react-router-dom';
import AgeChart from '../../common/charts/AgeChart';
import GenderChart from '../../common/charts/GenderChart';
import * as S from '../ModalComponents.styles'
import { useCardStore } from '../../../store/useCardStore';

function RecommendCard() {
    const { selectedCard } = useCardStore();

    return (
        <>
            <S.ChartTitle>사용자 통계</S.ChartTitle>
            <S.ChartContainer>
                <GenderChart data={selectedCard?.statistics?.gender} />
                <AgeChart data={selectedCard?.statistics?.ageGroup} />
            </S.ChartContainer>
            <S.DetailItem>
                <h4>주요 혜택</h4>
                <p>{selectedCard?.mainBenefits.join(', ')}</p>
            </S.DetailItem>
            <S.DetailItem>
                <h4>카테고리</h4>
                <ul className="category-list">
                    {selectedCard?.categories.map((cate, idx) => (
                        <li key={idx}>{cate}</li>
                    ))}
                </ul>
            </S.DetailItem>

            {selectedCard?.annualFee !== 0 && (
                <S.FeeInfo>
                    <span>연회비 안내</span>
                    <strong>{selectedCard?.annualFee}원</strong>
                </S.FeeInfo>
            )}

            <S.ButtonGroup>
                <Link to={selectedCard?.officialLink || "#"} className="official-btn" target="_blank">
                    카드사 공식 홈페이지
                </Link>
                <Link to={`/card/${selectedCard?.id}`} className="detail-btn">
                    카드 상세 페이지
                </Link>
            </S.ButtonGroup>
        </>
    )
}

export default RecommendCard