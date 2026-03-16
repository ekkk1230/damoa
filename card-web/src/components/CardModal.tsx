import { useState, useEffect } from 'react';
import type { Card } from '../type/Card'
import * as S from '../App.styles'
import GenderChart from './GenderChart';
import AgeChart from './AgeChart';

interface CardModalProps {
    card: Card | null;
    onClose: () => void;
}

const CardModal = ({card, onClose}: CardModalProps) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (card) {
            setIsLoading(true);
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [card]);

    if (!card) return null;

    // 1. CSS 배경색으로 즉시 사용할 원본 컬러
    const brandColor = S.BRAND_COLORS[card.company] || '#eeeeee';
    // 2. 이미지 URL용 컬러 코드 (# 제거)
    const brandColorCode = brandColor.replace('#', '');
    const imageUrl = `https://placehold.co/400x250/${brandColorCode}/${brandColorCode}`;

    return (
        <S.ModalOverlay onClick={onClose}>
            <S.ModalContent onClick={e => e.stopPropagation()}>
                <S.CloseButton onClick={onClose}>&times;</S.CloseButton>

                {isLoading ? (
                    /* 로딩 상태일 때 보여줄 화면 */
                    <S.LoadingWrapper>
                        <div className="spinner" />
                        <p>카드 정보를 불러오고 있어요...</p>
                    </S.LoadingWrapper>
                ) : (
                    /* 로딩 완료 후 보여줄 데이터 (기존 틀 유지) */
                    <div className="fade-in">
                        {/* $brandColor 전달로 이미지 로딩 전 배경색 확보 */}
                        <S.ModalImageWrapper $brandColor={brandColor}>
                            <img src={imageUrl} alt={card.company} />
                            <span className="brand-text">{card.company}</span>
                        </S.ModalImageWrapper>

                        <S.ModalTitle>{card.name}</S.ModalTitle>
                        <S.ModalCompany>{card.company}</S.ModalCompany>

                        <S.DetailSection>
                            <h4>✨ 상세 혜택 안내</h4>
                            <ul>
                                {card.mainBenefits.map((benefit, idx) => (
                                    <li key={idx}>{benefit}</li>
                                ))}
                            </ul>
                        </S.DetailSection>

                        <S.DetailSection>
                            <h4>🏷️ 관련 태그</h4>
                            <S.TagList>
                                {card.categories.map((cate) => (
                                    <li key={cate}>
                                        <S.TagButton as="span">#{cate}</S.TagButton>
                                    </li>
                                ))}
                            </S.TagList>

                            <S.ChartContainer>
                                <GenderChart data={card.statistics?.gender} />
                                <AgeChart data={card.statistics?.ageGroup} />
                            </S.ChartContainer>
                        </S.DetailSection>
                    </div>
                )}
            </S.ModalContent>
        </S.ModalOverlay>
    )
}

export default CardModal