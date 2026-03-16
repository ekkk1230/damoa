import styled from "styled-components";

export const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%); 
  width: 100%;
  max-width: 500px; 
  
  height: 7rem;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #f1f3f5;
  z-index: 9999;
  padding-bottom: env(safe-area-inset-bottom);
`;

export const NavItem = styled.div<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  color: ${props => props.$active ? '#07958c' : '#adb5bd'};
  cursor: pointer;

  .icon { font-size: 2.2rem; }
  span { font-size: 1.1rem; font-weight: 600; }
`;