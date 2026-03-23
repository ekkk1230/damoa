import styled from 'styled-components';

export const ListContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  p {
    font-size: 1.25rem;
    font-weight: 700;
    color: #333;
  }

  a {
    padding: 8px 16px;
    background-color: #3498db;
    color: white;
    border-radius: 8px;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;
    transition: background 0.2s;

    &:hover {
        background-color: #2980b9;
    }
  }
`;

export const CardItem = styled.div`
  background: white;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  border: 1px solid #f0f0f0;
`;

export const CardInfo = styled.div`
  margin-bottom: 16px;
  
  .company {
    font-size: 0.85rem;
    color: #888;
    margin-bottom: 4px;
  }
  .name {
    font-size: 1.1rem;
    font-weight: 700;
    color: #2c3e50;
  }
  .benefit-amount {
    margin-top: 10px;
    font-size: 0.95rem;
    color: #e74c3c;
    font-weight: 600;
  }
`;

export const SpendList = styled.ul`
  list-style: none;
  padding: 12px;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin-bottom: 16px;

  li {
    font-size: 0.85rem;
    color: #666;
    padding: 6px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const DeleteButton = styled.button`
  width: 100%;
  padding: 10px;
  background: none;
  border: 1px solid #ff7675;
  color: #ff7675;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s;

  &:hover {
    background: #ff7675;
    color: white;
  }
`;

export const EmptyMessage = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #999;
  font-size: 0.95rem;
`;

export const FormWrapper = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 30px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`;

export const FormTitle = styled.h2`
  margin-bottom: 24px;
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1a1a;
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #555;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1.5px solid #eee;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.2s;

  &:focus {
    border-color: #3498db;
    outline: none;
    background: #fcfdfe;
  }
`;

export const Select = styled.select`
  padding: 12px;
  border: 1.5px solid #eee;
  border-radius: 10px;
  font-size: 1rem;
  background: white;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

export const FlexRow = styled.div`
  display: flex;
  gap: 10px;
  
  input { width: 100%;}
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  margin-top: 20px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #2980b9;
  }
`;

export const HintText = styled.p`
  font-size: 0.8rem;
  color: #999;
  margin-top: -4px;
`;

// 혜택 프리뷰 박스
export const BenefitPreview = styled.div`
  margin-top: 20px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 12px;
  border: 1px dashed #3498db;
`;

export const CategoryTag = styled.span`
  display: inline-block;
  padding: 4px 10px;
  background: #3498db;
  color: white;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-bottom: 10px;
`;

export const BenefitList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    font-size: 0.9rem;
    color: #444;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    
    &:before {
      content: "•";
      color: #3498db;
      font-weight: bold;
      margin-right: 8px;
    }
  }
`;