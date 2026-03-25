import * as S from "./Reccommend.styles"
import { useCardStore } from "../../store/useCardStore"
import { BRAND_COLORS } from "../../type/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { normalizeCompanyName } from "../../utils/cardUtils";

function RecommendList() {
    const { searchTerm, setSearchTerm, 
            selectedCompany, setSelectedCompany,
            cardList } = useCardStore();

    const [sortType, setSortType] = useState('기본');

    const recommendFilterCards = cardList.filter(card => {
        const isSearchMath = card.categories.some(cate => cate.trim().includes(searchTerm)) ||
                             card.name.trim().includes(searchTerm);

        const isBtnMatch = selectedCompany === "전체" || card.company.includes(selectedCompany);
        return isSearchMath && isBtnMatch;
    })

    const sortedCards = [...recommendFilterCards].sort((a, b) => {
        let valueA = 0;
        let valueB = 0;

        if (sortType === '20대 인기순') {
            valueA = a.statistics?.ageGroup[0].value || 0;
            valueB = b.statistics?.ageGroup[0].value || 0;
        }
        else if (sortType === '30대 인기순') {
            valueA = a.statistics?.ageGroup[1].value || 0;
            valueB = b.statistics?.ageGroup[1].value || 0;
        }
        else if (sortType === '40대 인기순') {
            valueA = a.statistics?.ageGroup[2].value || 0;
            valueB = b.statistics?.ageGroup[2].value || 0;
        }
        else if (sortType === '50대 인기순') {
            valueA = a.statistics?.ageGroup[3].value || 0;
            valueB = b.statistics?.ageGroup[3].value || 0;
        }
        else if (sortType === '여성 선호순') {
            valueA = a.statistics?.gender.female || 0;
            valueB = b.statistics?.gender.female || 0;
        }
        else if (sortType === '남성 선호순') {
            valueA = a.statistics?.gender.male || 0;
            valueB = b.statistics?.gender.male || 0;
        }

        return valueB - valueA;
    })

    return (
        <>
            <S.Container>
                <S.FilterSection>
                    <input 
                        type="text" 
                        placeholder="cardName" 
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <ul>
                        <li><button onClick={() => setSelectedCompany('전체')}>전체</button></li>
                        {Object.keys(BRAND_COLORS)
                            .filter(c => c !== "기타")
                            .map((c, idx) => (
                                <li key={idx}><button onClick={() => setSelectedCompany(c)}>{c}</button></li>
                            ))    
                        }
                    </ul>
                    <select value={sortType} onChange={e => setSortType(e.target.value)}>
                        <option value="20대 인기순">20</option>
                        <option value="30대 인기순">30</option>
                        <option value="40대 인기순">40</option>
                        <option value="50대 인기순">50</option>
                        <option value="남성 선호순">남</option>
                        <option value="여성 선호순">여</option>
                    </select>
                </S.FilterSection>
            
                <S.CardGrid>
                    {recommendFilterCards.length >= 1 ? (
                        sortedCards.map(card => {
                            const companyName = normalizeCompanyName(card.company);
                            const brandColor = BRAND_COLORS[companyName];
                            return (
                                <S.CardItem key={card.id} $brandColor={brandColor}>
                                    <Link to={`/recommend/${card.id}`}>
                                        <div className="card-content">
                                            <p className="card-name">{card.name}</p>
                                            <p className="annual-fee">연회비 {card.annualFee.toLocaleString()}원</p>
                                            <p className="summary">{card.summary}</p>
                                            <div className="benefits-tag">
                                                {card.mainBenefits.map(benefit => (
                                                    <p>{benefit}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </Link>
                                </S.CardItem>
                            )
                        })
                    ) : (
                        <p>결과가 없습니다.</p>
                    )}
                </S.CardGrid>
            </S.Container>
        </>
    )
}

export default RecommendList