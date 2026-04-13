import * as S from "./Card.styles"
import { useCardStore } from "../../store/useCardStore";
import CategoryTag from "./CategoryTag";

function RecentSection() {
    const { recentSpendList, getMyCards } = useCardStore();


    return (
        <S.RecentSection>
            <div className="section-header">
                <h3>최근 지출 내역</h3>
            </div>
            
            <S.SpendList>
                {recentSpendList.map((item, index) => {
                    const recentCard = getMyCards.find(card => item.cardId === card.id);

                    return (
                        <S.SpendItem key={`${index}-${item.id}`}>
                            <div className="item-left">
                                <div className="info">
                                    <p className="name">{recentCard?.cardInfo.name}</p>
                                    <p className="store">{item.storeName}</p>
                                    <p className="date">{item.date} · <CategoryTag categoryKey={item.category} /></p>
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