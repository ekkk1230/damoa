import styled from 'styled-components';

export const StyledCard = styled.div`
    background: #Fff;
    border-radius: 1.6rem;
    padding: 2.4rem;
    box-shadow: 0 .4rem 2rem rgba(0,0,0,.08);
    cursor: pointer;
    transition: transform .2s;
    &:hover { transform: translateY(-.5rem); }
`;

export const CardTop = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-bottom: 2rem;
`;

export const CardImageWrapper = styled.div`
    position: relative;
    width: 10rem;
    height: 6.4rem;
    border-radius: .8rem;
    overflow: hidden;
    background: #eee;
    img { width: 100%; height: 100%; object-fit: cover; }

    .brand-text { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #fff; font-size: 1.2rem; font-weight: bold; text-shadow: 0 .1rem .2rem rgba(0,0,0,.04); white-space: nowrap;}
`;

export const CardTitleGroup = styled.div`
    .name { font-weight: bold; font-size: 1.6rem; margin-bottom: .4rem; }
    .company { color: #888; font-size: 1.3rem; }
`;

export const BenefitList = styled.ul`
    padding: 0; list-style: none;
    li { 
        font-size: 1.4rem; color: #666; margin-bottom: .6rem; 
        &::before { content: '•'; margin-right: .8rem; color: #007bff; }
    }
   
`;

export const TagList = styled.ul`
    display: flex; gap: .8rem; list-style: none; padding: 0; margin-top: 1.5rem; flex-wrap: wrap;
`;

export const TagButton = styled.button`
    background: #f0f2f5; border: none; padding: .4rem 1rem; border-radius: .4rem; font-size: 1.2rem; color: #555; cursor: pointer;
    &:hover { background: #e2e5e9; }
`;