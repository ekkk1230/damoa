import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        /* 앱 고유 컬러 (그라데이션용) */
        --primary-color: #6e8efb;
        --secondary-color: #a777e3;
        
        /* 텍스트 및 배경 */
        --bg-color: #f8f9fa;
        --text-main: #333333;
        --text-sub: #666666;

        /* 포인트 컬러 */
        --point-yellow: #fffb00;
        --point-mint: #00f2fe;
        
        /* 그림자 */
        --card-shadow: 0 1rem 2rem rgba(110, 142, 251, 0.3);
    }

    html {
        font-size: 62.5%; 
    }

    body {
        margin: 0;
        padding: 0;
        background-color: var(--bg-color);
        font-family: 'Pretendard', sans-serif; 
        color: var(--text-main);
        width: 100%;
        display: block;
    }
`;

export const BRAND_COLORS: { [key: string]: string } = {
    "삼성카드": "#0a4da2",
    "신한카드": "#0046ff",
    "우리카드": "#007bc8",
    "국민카드": "#ffbc00",
    "KB국민카드": "#ffbc00",
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