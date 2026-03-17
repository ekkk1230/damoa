import styled, { keyframes } from 'styled-components';

export const ModalHeader = styled.div`
    display: flex; flex-direction: column; align-items: center;
    margin-bottom: 3rem;
    text-align: center;

    h2 {
        font-size: 2.2rem; font-weight: 700; color: #1e293b;
        margin-top: 1.5rem;
    }
`;

export const ModalImageContainer = styled.div`
    position: relative;
    display: flex; flex-direction: column; align-items: center; gap: 1rem; 

    img {
        width: 12rem; height: auto;
        border-radius: 1.2rem;
        box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    }

    p {
        font-size: 1.4rem; font-weight: 600;  color: #fff;
        padding: .4rem 1.2rem;
        border-radius: 2rem; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
        white-space: nowrap;
    }
`;

export const ModalBody = styled.div`
    border-top: .2rem dashed #f1f5f9; 
    padding-top: 2.5rem;
`;

export const DetailItem = styled.div`
    margin-bottom: 2rem;
    
    h4 {
        font-size: 1.3rem; letter-spacing: 0.5px;
        text-transform: uppercase;
        color: #94a3b8;
        margin-bottom: .8rem;
    }
    
    p {
        font-size: 1.6rem;
        color: #334155;
        line-height: 1.6;
        word-break: keep-all; 
    }

    .category-list {display: flex; gap: .8rem; flex-flow: row wrap; list-style: none; padding: 0; margin: 0;}
    .category-list li { background: #f1f5f9; color: #475569; font-size: 1.3rem; font-weight: 500; padding: .6rem 1.2rem; border-radius: .8rem; border: .1rem solid #e2e8f0; }
`;

export const ChartWrapper = styled.div`
    background: #fdfdfd; 
    border-radius: 1.6rem;
    padding: 2rem 1.5rem;
    border: .1rem solid #f1f5f9;
    flex: 1; 
    min-width: 20rem;
    
    .recharts-responsive-container {
        margin: 0 auto;
    }
`;

export const ChartTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    color: #334155;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: .6rem;

    &::before {
        content: '';
        display: block;
        width: .3rem;
        height: 1.4rem;
        background-color: #3b82f6;
        border-radius: 2rem;
    }
`;

export const ChartContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 2.5rem;
    width: 100%;


    @media (max-width: 480px) {
        flex-direction: column;
    }
`;

export const FormLabel = styled.label`
    display: block;
    font-size: 1rem;
    color: #666;
    margin-bottom: 0.5rem;
`;

export const StyledInput = styled.input`
    width: 100%;
    padding: 1rem;
    border: .1rem solid #ddd;
    border-radius: .8rem;
    margin-bottom: 1rem;
    font-size: 1rem;
`;

export const StyledSelect = styled.select`
    width: 100%;
    padding: 1rem;
    border: .1rem solid #ddd;
    border-radius: .8rem;
    margin-bottom: 1rem;
    font-size: 1rem;

    option { font-size: 1rem; }
`;

export const TabGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
`;

export const TabButton = styled.button<{ $isActive: boolean }>`
  flex: 1;
  padding: 10px;
  border: none;
  background: none;
  font-size: 0.9rem;
  font-weight: ${props => props.$isActive ? 'bold' : 'normal'};
  color: ${props => props.$isActive ? '#333' : '#999'};
  border-bottom: 2px solid ${props => props.$isActive ? '#333' : 'transparent'};
  cursor: pointer;
  transition: all 0.2s;
`;

export const UploadBox = styled.label<{ $disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  border: 2px dashed ${props => props.$disabled ? '#eee' : '#ddd'};
  border-radius: 12px;
  background-color: ${props => props.$disabled ? '#fafafa' : '#fcfcfc'};
  
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  pointer-events: ${props => props.$disabled ? 'none' : 'auto'}; 
  opacity: ${props => props.$disabled ? 0.5 : 1};

  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.$disabled ? '#fafafa' : '#f5f5f5'};
  }
`;

export const ImageUploadBox = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
  border: 2px dashed #ccc;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  cursor: pointer;
  background-color: #f9f9f9;
  
  &:hover {
    background-color: #f1f1f1;
  }

  span {
    font-size: 0.8rem;
    color: #888;
    margin-top: 8px;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const ResultList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
  max-height: 300px;
  overflow-y: auto;
`;

export const ResultItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #eee;

  .info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    .name { font-weight: bold; font-size: 0.9rem; }
    .date-cat { font-size: 0.75rem; color: #888; }
  }
  .amount {
    font-weight: bold;
    color: #333;
  }
`;

const scan = keyframes`
  0% { top: 0%; opacity: 0; }
  50% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  gap: 15px;
`;

export const AnalyzingIcon = styled.div`
  position: relative;
  font-size: 3rem;
  
  // 스캔 라인 효과
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #007aff; // 스캔 라인 색상
    box-shadow: 0 0 8px #007aff;
    animation: ${scan} 2s ease-in-out infinite;
  }
`;

export const ActionGroup = styled.div`
  display: flex;
  gap: 8px;

  button {
    padding: 4px 8px;
    font-size: 0.7rem;
    border-radius: 4px;
    border: 1px solid #ddd;
    background: #fff;
    cursor: pointer;
    &:hover { background: #f5f5f5; }
  }
  
  .delete-btn {
    color: #ff4d4f;
    border-color: #ff4d4f;
    &:hover { background: #fff1f0; }
  }
`;

// 수정 모드일 때 보여줄 간이 입력창
export const InlineInput = styled.input`
  width: 80px;
  padding: 2px 4px;
  font-size: 0.8rem;
  border: 1px solid #007aff;
  border-radius: 4px;
`;

// 1. 개별 아이템 박스
export const ResultEditItem = styled.div<{ $isEditing?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: ${props => props.$isEditing ? '#f0f7ff' : '#f8f9fa'};
  border: 1px solid ${props => props.$isEditing ? '#007aff' : '#eee'};
  border-radius: 10px;
  transition: all 0.2s ease;
`;

// 2. 수정 모드 전용 인풋 그룹
export const EditInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  
  input, select {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 6px;
    font-size: 0.85rem;
    &:focus {
      outline: none;
      border-color: #007aff;
    }
  }

  .row {
    display: flex;
    gap: 4px;
  }
`;

// 3. 우측 액션 버튼들
export const ActionButtons = styled.div`
  display: flex;
  gap: 6px;
  
  button {
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 0.75rem;
    cursor: pointer;
    border: 1px solid #ddd;
    background: #fff;
    
    &.save {
      background: #007aff;
      color: #fff;
      border: none;
    }
    
    &.delete {
      color: #ff4d4f;
      border-color: #ff4d4f;
    }
  }
`;

export const GhostInput = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid #007aff; // 현재 수정 중임을 알리는 최소한의 표시
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  padding: 0;
  margin: 0;
  width: 100%;

  &:focus {
    outline: none;
    border-bottom: 2px solid #007aff;
  }

  // 숫자 화살표 제거 (금액 입력 시)
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

// 카테고리용 투명 셀렉트
export const GhostSelect = styled.select`
  background: none;
  border: none;
  border-bottom: 1px solid #007aff;
  font-family: inherit;
  font-size: inherit;
  color: #888; // 기존 date-cat 색상과 맞춤
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }
`;

export const ItemActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 12px;

  button {
    padding: 4px 8px;
    font-size: 0.75rem;
    border-radius: 4px;
    border: 1px solid #ddd;
    background: #fff;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: #f0f0f0;
    }
  }

  .confirm-btn {
    background: #007aff;
    color: #fff;
    border-color: #007aff;
    &:hover { background: #0063cc; }
  }

  .delete-btn {
    color: #ff4d4f;
    border-color: #ff4d4f;
    &:hover { background: #fff1f0; }
  }
`;