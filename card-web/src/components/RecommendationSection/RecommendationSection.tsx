import React from 'react'
import type { Card } from '../../type/Card';
import * as S from './RecommendationSection.styles';
import CardItem from '../CardItem/CardItem';

interface RecommendationSectionProps {
    searchTerm: string;
    recommendCards: Card[];
    onTagClick: (tag: string) => void;
}

const RecommendationSection = ({ searchTerm, recommendCards, onTagClick }: RecommendationSectionProps) => {
    if (!searchTerm.trim() || recommendCards.length === 0) return null;

    return (
        <S.RecommendContainer>
            <S.Title>
                "<span>{searchTerm}</span>" 혜택을 가진 추천 카드에요!
            </S.Title>

            <S.RecommnedGrid>
                {recommendCards.map(card => (
                    <CardItem 
                        key={card.id}
                        card={card}
                        onTagClick={onTagClick}
                    />
                ))}
            </S.RecommnedGrid>
        </S.RecommendContainer>
    )
}

export default RecommendationSection