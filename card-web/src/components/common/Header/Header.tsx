import { Link, useLocation, useNavigate } from "react-router-dom"
import { useState } from "react";
import * as S from "./Header.styles";
import { IoChevronBack, IoMenu, IoLogOutOutline } from "react-icons/io5";
import Sidebar from "./Sidebar";
import { useAuthStore } from "../../../store/useAuthStore";

const Header = () => {
    const { isLoggedIn, logout } = useAuthStore();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const isMain = location.pathname === "/";

    const handleLogout = () => logout();

    return (
        <S.HeaderWrapper>
            <S.HeaderContainer>
                <S.LeftSection>
                    {/* 메인이 아닐 때만 백버튼 노출 */}
                    {!isMain && (
                        <button onClick={() => navigate(-1)} aria-label="뒤로가기">
                            <IoChevronBack size={24} />
                        </button>
                    )}
                </S.LeftSection>

                <S.CenterSection>
                    <S.Logo to="/"><img src="/row-logo.png" alt="다모아" /></S.Logo>
                </S.CenterSection>

                <S.SideSection $isRight>
                    {isLoggedIn && !isMain && (
                        <button onClick={handleLogout} aria-label="로그아웃">
                        <IoLogOutOutline size={22} />
                        </button>
                    )}

                    <button onClick={() => setIsMenuOpen(true)}>
                        <IoMenu size={24} />
                    </button>
                </S.SideSection>
            </S.HeaderContainer>
            <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </S.HeaderWrapper>
    )
}

export default Header