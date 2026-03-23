import * as S from "./Reccommend.styles"
import { useCardStore } from "../../store/useCardStore"
import { BRAND_COLORS } from "../../type/Card";
import { Link } from "react-router-dom";

function RecommendList() {
    const { searchTerm, setSearchTerm, 
            selectedCompany, setSelectedCompany,
            cardList } = useCardStore();

    const recommendFilterCards = cardList.filter(card => {
        const isSearchMath = card.categories.some(cate => cate.trim().includes(searchTerm)) ||
                             card.name.trim().includes(searchTerm);

        const isBtnMatch = selectedCompany === "전체" || card.company.includes(selectedCompany);
        return isSearchMath && isBtnMatch;
    })

    return (
        <>
            <div>
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
            </div>
        
            <ul>
                {
                    recommendFilterCards.length >= 1 ? (
                        recommendFilterCards.map(card => (
                            <li key={card.id}>
                                <Link key={card.id} to={`/recommend/${card.id}`}>
                                    <div>
                                        <p>{card.name}</p>
                                        <p>{card.annualFee}</p>
                                        <p>{card.summary}</p>
                                        <p>{card.mainBenefits}</p>
                                    </div>
                                </Link>
                            </li>
                        ))
                    ) : (
                        <p>해당 카드사의 추천 카드가 준비되어있지 않습니다.</p>
                    )
                }
            </ul>
        </>
    )
}

export default RecommendList