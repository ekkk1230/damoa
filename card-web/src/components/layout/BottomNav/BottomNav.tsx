import { Link } from "react-router-dom"
import * as S from "./BottomNav.styles"

function BottomNav() {
    return (
        <S.NavContainer>
            <S.NavItem $active={true}>
                <Link to="/">
                    <span className="icon">🏠</span>
                    <span>홈</span>
                </Link>
            </S.NavItem>
            <S.NavItem $active={location.pathname === "/myCard"}>
                <Link to="/myCard">
                    <span className="icon">📊</span>
                    <span>소비내역</span>
                </Link>
            </S.NavItem>
            <S.NavItem $active={location.pathname === "/recommend"}>
                <Link to="/recommend">
                    <span className="icon">💳</span>
                    <span>카드추천</span>
                </Link>
            </S.NavItem>
            <S.NavItem>
                <span className="icon">👤</span>
                <span>마이</span>
            </S.NavItem>
        </S.NavContainer>
    )
}

export default BottomNav