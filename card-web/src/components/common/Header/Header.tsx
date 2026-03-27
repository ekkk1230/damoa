import { Link, useLocation, useNavigate } from "react-router-dom"
import { useState } from "react";
import * as S from "./Header.styles";
import { IoChevronBack, IoMenu } from "react-icons/io5";
import Sidebar from "./Sidebar";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const isMain = location.pathname === "/";

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