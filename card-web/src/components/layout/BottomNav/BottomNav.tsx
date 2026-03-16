import * as S from "./BottomNav.styles"

function BottomNav() {
    return (
        <S.NavContainer>
            <S.NavItem $active={true}>
                <span className="icon">🏠</span>
                <span>홈</span>
            </S.NavItem>
            <S.NavItem>
                <span className="icon">📊</span>
                <span>소비내역</span>
            </S.NavItem>
            <S.NavItem>
                <span className="icon">💳</span>
                <span>카드추천</span>
            </S.NavItem>
            <S.NavItem>
                <span className="icon">👤</span>
                <span>마이</span>
            </S.NavItem>
        </S.NavContainer>
    )
}

export default BottomNav