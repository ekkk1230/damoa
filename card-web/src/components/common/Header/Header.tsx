import { Link, useLocation } from "react-router-dom"
import { useState } from "react";
import * as S from "./Header.styles"

const Header = () => {
    const location = useLocation();
    const [hasNotification, setHasNotification] = useState(true);

    return (
        <S.HeaderContainer>
            <S.NavInner>
                <Link to="/"><h1>💳 DAMOA</h1></Link>

                <S.NavMenu>
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>홈</Link>
                    <Link to="//my-cards/add" className={location.pathname === '/my-cards' ? '/my-cards' : ''}>내 카드</Link>
                    <Link to="/popular" className={location.pathname === '/popular' ? '/popular' : ''}>인기카드</Link>
                    <Link to="/board" className={location.pathname === '/board' ? '/board' : ''}>
                        커뮤니티
                        {hasNotification && <S.Badge dot />}
                    </Link>
                </S.NavMenu>

                <S.AuthGroup>
                    <S.NotificationWrapper>
                        <Link to="/notifications">
                            <span className="bell-icon">🔔</span>
                            {hasNotification && <S.Badge count={1} />}
                        </Link>
                    </S.NotificationWrapper>

                    <Link to="/login">로그인</Link>
                    <Link to="/signup" className="signup-btn">회원가입</Link>
                </S.AuthGroup>
            </S.NavInner>
        </S.HeaderContainer>    
    )
}

export default Header