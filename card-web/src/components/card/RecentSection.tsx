import * as S from "./cardComponents.styles"
import { useCardStore } from "../../store/useCardStore";

function RecentSection() {
    const { recentSpendList, userCards } = useCardStore();

    console.log(recentSpendList, userCards)

    return (
        <S.RecentSection>
            <div className="section-header">
                <h3>최근 지출 내역</h3>
                <button className="more-btn">전체보기</button>
            </div>
            
            <S.SpendList>
                {recentSpendList.slice(0, 5).map(item => {
                    const usedCard = userCards.find(card => item.id === card.cardInfo.id);
                    console.log('item.id', item.id,)

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