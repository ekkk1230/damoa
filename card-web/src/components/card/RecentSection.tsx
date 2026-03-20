import * as S from "./cardComponents.styles"
import { useCardStore } from "../../store/useCardStore";

function RecentSection() {
    const { recentSpendList, userCards } = useCardStore();

    return (
        <S.RecentSection>
            <div className="section-header">
                <h3>최근 지출 내역</h3>
                <button className="more-btn">전체보기</button>
            </div>
            
            <S.SpendList>
                {recentSpendList.slice(0, 5).map(item => {
                    const usedCard = userCards.find(card => card.cardInfo.id === item.cardId);

                    return (
                        <S.SpendItem key={item.id}>
                            <div className="item-left">
                            <div className="info">
                                <p className="name">{usedCard?.cardInfo.name}</p>
                                <p className="store">{item.storeName}</p>
                                <p className="date">{item.date} · {item.category}</p>
                            </div>
                            </div>
                            <div className="item-right">
                            <p className="amount">{item.amount.toLocaleString()}원</p>
                            </div>
                        </S.SpendItem>
                    )
                })}
            </S.SpendList>
        </S.RecentSection>
    )
}

export default RecentSection