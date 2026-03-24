import { Link } from "react-router-dom";
import RecommendSection from "../../components/Card/RecommendSection";
import { useCardStore } from "../../store/useCardStore"
import type { MyCardProgress } from "../../type/User";
import * as S from "./MyCard.styles";

function CardList() {
    const { getMyCards, benefit, recentSpendList, deleteCard } = useCardStore();

    return (
        <S.ListContainer>
            <S.Header>
                <p>내 카드 목록</p>
                <Link to="/myCard/add">카드 등록</Link>
            </S.Header>

            <div>
                {getMyCards.length !== 0 ? (
                    <div>
                        {getMyCards.map((card: MyCardProgress) => (
                            <S.CardItem key={card.cardInfo.id}>
                                <S.CardInfo>
                                    <p className="company">{card.cardInfo.company}</p>
                                    <p className="name">{card.cardInfo.name}</p>
                                    <p className="benefit-amount">
                                        누적 혜택: {benefit[card.cardInfo.id]?.toLocaleString() || 0}원
                                    </p>
                                </S.CardInfo>

                                <S.SpendList>
                                    {recentSpendList.filter(s => s.cardId === card.cardInfo.id).length > 0 ? (
                                        recentSpendList
                                            .filter(s => s.cardId === card.cardInfo.id)
                                            .map(s => (
                                                <li key={s.cardId}>
                                                    <span>{s.storeName}</span>
                                                    <span>{s.amount.toLocaleString()}원</span>
                                                </li>
                                            ))
                                    ) : (
                                        <li style={{justifyContent: 'center', color: '#ccc'}}>최근 지출 내역이 없습니다.</li>
                                    )}
                                </S.SpendList>

                                <S.DeleteButton onClick={() => deleteCard(card.cardInfo.id)}>
                                    카드 삭제
                                </S.DeleteButton>
                            </S.CardItem>
                        ))}
                    </div>
                ) : (
                    <S.EmptyMessage>
                        현재 보유중인 카드가 없습니다.<br/>카드를 등록하여 혜택을 관리해보세요.
                    </S.EmptyMessage>
                )}
            </div>
            
            <RecommendSection variant="sub" />
        </S.ListContainer>
    )
}

export default CardList