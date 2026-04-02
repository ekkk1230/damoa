import { Link } from "react-router-dom"
import * as S from "./BottomNav.styles"

function BottomNav() {
    return (
        <S.NavContainer>
            <S.NavItem $active={true}>
                <Link to="/damoa/">
                    <span className="icon">🏠</span>
                    <span>홈</span>
                </Link>
            </S.NavItem>
            <S.NavItem $active={location.pathname === "/myCard"}>
                <Link to="/damoa/myCard">
                    <span className="icon">📊</span>
                    <span>내 카드</span>
                </Link>
            </S.NavItem>
            <S.NavItem $active={location.pathname === "/recommend"}>
                <Link to="/damoa/recommend">
                    <span className="icon">💳</span>
                    <span>카드추천</span>
                </Link>
            </S.NavItem>
            <S.NavItem $active={location.pathname === "/community"}>
                <Link to="/damoa/community">
                    <span className="icon">👤</span>
                    <span>커뮤니티</span>
                </Link>
            </S.NavItem>
        </S.NavContainer>
    )
}

export default BottomNav