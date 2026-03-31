import styled from "styled-components";
import { Link } from "react-router-dom";

/* ==========================================================================
   Header Styles
   ========================================================================== */

export const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #f1f1f1;
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 0;
`;

export const HeaderContainer = styled.header`
  margin: 0 2rem;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    color: #333;
  }
`;

export const CenterSection = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
`;

export const SideSection = styled.div<{ $isRight?: boolean }>`
  flex: 1;
  display: flex;
  justify-content: ${(props) => (props.$isRight ? "flex-end" : "flex-start")};

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    color: #333;
  }
`;

export const Logo = styled(Link)`
  font-size: 22px;
  font-weight: 900;
  color: #3b82f6; /* 포인트 컬러 */
  text-decoration: none;
  letter-spacing: -0.5px;

  img { width: 12rem; height: auto; }
`;

/* ==========================================================================
   Sidebar Styles
   ========================================================================== */

// 어두운 배경 처리
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px); /* 💡 트렌디한 블러 효과 */
  z-index: 1500;
`;

export const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background-color: #ffffff;
  z-index: 2000;
  padding: 20px;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
  
  /* 💡 오른쪽에서 슥 나타나는 애니메이션 */
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.$isOpen ? "translateX(0)" : "translateX(100%)")};
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;

  h3 {
    font-size: 18px;
    font-weight: 700;
    color: #111;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
    display: flex;
    align-items: center;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MenuLink = styled(Link)`
  display: block;
  padding: 15px 10px;
  font-size: 16px;
  font-weight: 500;
  color: #444;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background-color: #f5f9ff;
    color: #3b82f6;
  }
`;