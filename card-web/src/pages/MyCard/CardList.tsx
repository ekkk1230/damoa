import { Link } from "react-router-dom";
import RecommendSection from "../../components/card/RecommendSection";
import { useCardStore } from "../../store/useCardStore"
import type { MyCardProgress } from "../../type/User";

function CardList() {
    const { getMyCards, benefit, recentSpendList, deleteCard } = useCardStore();

    return (
        <div>
            <p>내 카드 목록</p>

            <Link to="/myCard/add">카드 등록</Link>

            <div>
                {getMyCards.length !== 0 ? (
                    <div>
                        {getMyCards.map((card: MyCardProgress) => (
                            <div key={card.cardInfo.id}>
                                <p>{card.cardInfo.company}</p>
                                <p>{card.cardInfo.name}</p>
                                <p>혜택 금액: {benefit[card.cardInfo.id] || 0 }원</p>
                                <ul>
                                    {
                                        recentSpendList.length > 0 && recentSpendList
                                            .filter(s => s.cardId === card.cardInfo.id)
                                            .map(s => (
                                                <li key={s.cardId}>
                                                    {s.storeName} - {s.amount.toLocaleString()}원
                                                </li>
                                            ))
                                    }
                                </ul>
                                

                                <button onClick={() => deleteCard(card.cardInfo.id)}>카드 삭제</button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>현재 보유중인 카드가 없습니다. 카드를 등록해주세요.</p>
                )}
            </div>
            
            <RecommendSection variant="sub" />
        </div>
    )
}

export default CardList