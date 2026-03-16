import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 7rem;
  background-color: rgba(248, 250, 250, 0.9); 
  backdrop-filter: blur(10px);
  border-bottom: 0.1rem solid #D1E2E0; 
  z-index: 1000;
  display: flex;
  justify-content: center;
`;

export const NavInner = styled.div`
  width: 100%;
  max-width: 120rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 2.2rem;
    font-weight: 800;
    color: #0F4C5C;
    letter-spacing: -0.05rem;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Badge = styled.span<{ dot?: boolean; count?: number }>`
  position: absolute;
  background-color: #FF7E67; 
  color: white;
  border-radius: 50%;
  
  ${props => props.dot ? `
    width: 0.6rem;
    height: 0.6rem;
    top: 0;
    right: -0.8rem;
  ` : `
    width: 1.6rem;
    height: 1.6rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -0.5rem;
    right: -0.5rem;
    font-weight: 700;
  `}
`;

export const NotificationWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 0.5rem;

  .bell-icon {
    font-size: 2rem;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: rotate(15deg);
    }
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 3.5rem;

  a {
    position: relative;
    font-size: 1.6rem;
    font-weight: 600;
    color: #556B69;
    transition: all 0.2s ease;

    &:hover {
      color: #0F4C5C; 
    }


    &.active {
      color: #0F4C5C;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        bottom: -0.5rem;
        left: 0;
        width: 100%;
        height: 0.2rem;
        background-color: #9DBEB9;
      }
    }
  }
`;

export const AuthGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  a {
    font-size: 1.4rem;
    font-weight: 500;
    color: #667A78;

    &.signup-btn {
      background-color: #9DBEB9;
      color: #2F3E3D;
      padding: 0.9rem 1.8rem;
      border-radius: 0.8rem;
      font-weight: 700;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: #89ADAA;
        transform: translateY(-1px);
        box-shadow: 0 0.4rem 1.2rem rgba(157, 190, 185, 0.3);
      }
    }

    &:hover:not(.signup-btn) {
      color: #2F3E3D;
    }
  }
`;

export const CardSection = styled.section`
  margin-top: 2rem;
  
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 2rem;
    padding-left: 0.5rem;
  }

  .swiper-pagination-bullet-active {
    background: var(--primary-color);
  }
`;

export const CreditCardBox = styled.div`
  background: #2c3e50; 
  border-radius: 2rem;
  padding: 2.5rem;
  color: white;
  min-height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.1);

  .card-top {
    display: flex;
    flex-direction: column;
    .nickname { font-size: 1.4rem; opacity: 0.8; }
    .card-name { font-size: 1.8rem; font-weight: 600; margin-top: 0.5rem; }
  }
`;

export const ProgressWrapper = styled.div`
  margin-top: 2rem;
  
  .amount-info {
    display: flex;
    justify-content: space-between;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  .percentText {
    text-align: right;
    font-size: 1.2rem;
    margin-top: 0.8rem;
    color: var(--point-mint);
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 1.2rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  overflow: hidden;
`;

export const ProgressFill = styled.div<{ width: number }>`
  width: ${props => props.width}%;
  height: 100%;
  background: linear-gradient(90deg, var(--point-mint), #80ffea);
  border-radius: 1rem;
  transition: width 0.5s ease-in-out;
`;