import styled from "styled-components";

export const BRAND_COLORS: { [key: string]: string } = {
    // 기존 대형 카드사
    "삼성카드": "#0a4da2",
    "신한카드": "#0046ff",
    "우리카드": "#007bc8",
    "국민카드": "#ffbc00",
    "하나카드": "#009490",
    "현대카드": "#000000",
    "롯데카드": "#ed1c24",
    "농협카드": "#20744a",
    "BC카드": "#f01923",
    "기업은행": "#0068b7",
    "신협": "#0066b3",      
    "수협": "#0067ac",     
    "새마을금고": "#00539b", 
    "우체국": "#ed1c24",    
    "광주은행": "#f2a000",  
    "전북은행": "#005596",  
    "제주은행": "#00a1e1", 
    "경남은행": "#00479d",  
    "부산은행": "#e50012", 
    "대구은행": "#004a95",
    "카카오뱅크": "#ffeb00",
    "케이뱅크": "#1e2225",
    "토스뱅크": "#0059ff", 
    "기타": "#888888",
};

export const Container = styled.div`
    max-width: 120rem;
    margin: 0 auto;
    padding: 4rem 2rem;
    background: #f8f9fa;
    min-height: 100vh;
`;

export const SearchSection = styled.section`
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
`;

export const SearchInputWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 54rem;
    input {
        width: 100%;
        padding: 1.2rem 2rem 1.2rem 4.5rem;
        border-radius: 3rem;
        border: .1rem solid #ddd;
        font-size: 1.5rem;
        transition: all 0.2s;
    }
    .search-icon {
        position: absolute;
        left: 1.8rem;
        top: 50%;
        transform: translateY(-50%);
    }
`;

export const CompanyButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    max-width: 80rem; 
    margin: 0 auto;

    .setting-btns {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        align-items: center;
    }

    .more-btns {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        animation: fadeIn 0.3s ease-out;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;

export const CompanyButton = styled.button<{ $isActive: boolean }>`
    padding: .9rem 2rem;
    border-radius: 2.5rem;
    border: .1rem solid ${props => props.$isActive ? '#007bff' : '#ddd'};
    background: ${props => props.$isActive ? '#007bff' : 'white'};
    color: ${props => props.$isActive ? 'white' : '#555'};
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: ${props => props.$isActive ? '600' : '500'};
    transition: all 0.2s;
`;

export const MoreButton = styled.button`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    max-width: 40rem;
    margin: 1rem auto;
    background: none;
    border: none;
    color: #999;
    font-size: 1.4rem;
    font-weight: 600;
    cursor: pointer;

    &::before, &::after {
        content: "";
        flex: 1;
        height: .1rem;
        background: #eee;
    }

    &:hover {
        color: #666;
    }
`;

export const ResultHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.5rem; 
    
    p {
        font-size: 1.8rem;
        color: #333;
        line-height: 1.4;

        strong {
            color: #222;
            font-weight: 700;
        }

        span {
            font-size: 1.6rem;
            color: #666;
            margin-left: 0.5rem;
            
            strong {
                color: #007bff;
                font-weight: 600;
            }
        }
    }

    .count { 
        color: #888; 
        font-size: 1.4rem;
        font-weight: 500;
        background: #eee; 
        padding: 0.4rem 1.2rem;
        border-radius: 1.2rem;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        
        .count {
            align-self: flex-end;
        }
    }
`;

export const CardSection = styled.section`
    margin-bottom: 5rem;
    h2 { font-size: 2rem; margin-bottom: 2rem; span { color: #007bff; } }
`;

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(36rem, 1fr));
    gap: 2.5rem;
`;

export const EmptyState = styled.div`
    grid-column: 1 / -1;
    text-align: center;
    padding: 6rem 0;
    background: #fff;
    border-radius: 2rem;
    .icon { font-size: 4rem; display: block; margin-bottom: 1rem; }
`;

export const ResetButton = styled.button`
    margin-top: 1.5rem;
    background: none;
    border: .1rem solid #007bff;
    color: #007bff;
    padding: .8rem 2rem;
    border-radius: 2rem;
    cursor: pointer;
`;


