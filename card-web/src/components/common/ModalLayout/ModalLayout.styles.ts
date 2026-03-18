import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex; justify-content: center; align-items: center;
    z-index: 1000;
    backdrop-filter: blur(4px); 
`;

export const ModalContent = styled.div`
    background: white;
    width: 95%; max-width: 52rem;
    max-height: 80%; overflow-y: auto;
    padding: 4rem 3rem 3rem;
    border-radius: 2.8rem;
    position: relative;
    animation: ${slideUp} 0.3s ease-out;
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
    `;

    export const CloseButton = styled.button`
    position: absolute;
    top: 2rem; right: 2rem;
    background: #f1f5f9;
    border: none;
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    font-size: 2.5rem;
    color: #64748b;
    transition: all 0.2s;

    &:hover {
        background: #e2e8f0;
        color: #1e293b;
        transform: rotate(90deg); 
    }
`;

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
    font-size: 1.5rem
    font-weight: 700;
    color: #334155;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: .6rem

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