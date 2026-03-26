import { PAGE_TITLES } from "../../../constance/navigation";
import * as S from "./Header.styles";
import { IoClose } from "react-icons/io5";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}


function Sidebar({isOpen, onClose}: SidebarProps) {
  return (
    <div>
        <>
            {/* 어두운 배경 (클릭 시 닫힘) */}
            {isOpen && <S.Overlay onClick={onClose} />}

            {/* 본체 */}
            <S.SidebarContainer $isOpen={isOpen}>
                <S.SidebarHeader>
                    <h3>전체 메뉴</h3>
                    <button onClick={onClose}><IoClose size={28} /></button>
                </S.SidebarHeader>

                <S.MenuList>
                    {Object.entries(PAGE_TITLES).map(([path, title]) => (
                        <li key={path}>
                            <S.MenuLink to={path} onClick={onClose}>
                                {title}
                            </S.MenuLink>
                        </li>
                    ))}
                </S.MenuList>
            </S.SidebarContainer>
        </>
    </div>
  )
}

export default Sidebar