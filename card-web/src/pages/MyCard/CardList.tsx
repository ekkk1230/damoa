import RecommendSection from "../../components/card/RecommendSection";
import { useCardStore } from "../../store/useCardStore"
import type { MyCardProgress } from "../../type/User";

function CardList() {
    const { getMyCards, benefit } = useCardStore();

    return (
        <div>
            <p>내 카드 목록</p>

            <button>카드 등록</button>

            <div>
                {getMyCards.length !== 0 ? (
                    <div>
                        {getMyCards.map((card: MyCardProgress) => (
                            <div key={card.cardInfo.id}>
                                <p>{card.cardInfo.company}</p>
                                <p>{card.cardInfo.name}</p>
                                

                                <button>카드 삭제</button>
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