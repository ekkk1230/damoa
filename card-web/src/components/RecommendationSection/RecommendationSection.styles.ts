import styled from 'styled-components';

export const RecommendContainer = styled.div`
    box-sizing: border-box;
    width: 100%; padding: 2rem; border-radius: 2.4rem;
    background: #f0f7ff; margin-bottom: 4rem;
    border: .1rem solid #dbeafe; box-shadow: 0 .4rem 1.2rem rgba(0,0,0,,.03);
`;

export const Title = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 2rem; letter-spacing: -.5px;

    span { color: #3b82f6; position: relative;
        &::after { content: ''; position: absolute; bottom: .2rem; left: 0; width: 100%; height: .8rem; background: rgba(59,130,246,.1); z-index: 1; }
    }
`;

export const RecommnedGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;

    @medai (max-width: 48rem) {
        grid-template-columns: repeat(auto-fill, minmax(1fr));
    }
`;



