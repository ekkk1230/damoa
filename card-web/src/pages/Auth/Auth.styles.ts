import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
`;

export const Logo = styled.img`
  width: 120px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 40px;
  color: #333;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  gap: 15px;
`;

export const Input = styled.input`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
`;

export const LoginButton = styled.button`
  padding: 15px;
  background-color: #007bff; /* 다모아 브랜드 컬러로 변경해보세요! */
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  
  &:disabled {
    background-color: #ccc;
  }
`;

export const BottomMenu = styled.div`
  margin-top: 20px;
  font-size: 0.9rem;
  color: #666;
`;

export const SignupLink = styled.span`
  margin-left: 10px;
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
`;

export const SignUpForm = styled.form` display: flex; flex-direction: column; width: 100%; max-width: 400px; gap: 12px; `;

export const SignUpButton = styled.button` padding: 15px; background-color: #007bff; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; `;
export const BackButton = styled.button` margin-top: 20px; background: none; border: none; color: #666; text-decoration: underline; cursor: pointer; `;