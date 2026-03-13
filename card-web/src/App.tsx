import { useState } from 'react'
import './App.css'
import { CARD_LIST } from './data/cardData';
import type { Card } from './type/Card';
import GenderChart from './components/GenderChart';
import AgeChart from './components/AgeChart';

const companyType = ["전체", "삼성카드", "신한카드", "우리카드", "국민카드", "하나카드", "현대카드"];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("전체");
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const filteredCards = CARD_LIST.filter(card => {
    const isSearchMatch = card.name.includes(searchTerm.toLowerCase()) || card.company.includes(searchTerm.toLowerCase()) || card.categories.some( category => category.includes(searchTerm.toLowerCase()) );
    const isBtnMatch = selectedCompany === "전체" || card.company.includes(selectedCompany);

    return isSearchMatch && isBtnMatch;
  });

  const myCards = filteredCards.filter(card => card.isOwned === true);
  // const recommendCards = filteredCards.filter(card => card.isOwned === false);

  const recommendFilterCards = filteredCards.filter(card => {
    if (searchTerm.trim() == "") return;
    return card.categories.some(category => category.includes(searchTerm.toLowerCase()));
  })

  return (
    <>
      {selectedCard && (
        <>
{/* [상단: Identity]
브랜드 텍스트: company (예: "신한카드")

카드 타입 태그: type (신용/체크/하이브리드)

카드 이름: name

감성 요약: summary (예: "자취생의 구원자...")

보유 뱃지: isOwned가 true일 때만 "MY" 혹은 "보유 중" 표시

[중앙: Visualization (Killer Content)]
성별 비율: statistics.gender.male & female 수치 활용

연령대 분포: statistics.ageGroup 배열 활용 (20대~50대+ 비율)

데이터 출처 안내: "본 데이터는 혜택 선호도를 기반으로 생성된 가상 데이터입니다." 문구 삽입

[하단: Key Benefits & Details]
TOP 3 혜택: mainBenefits 배열의 앞의 3개 아이템만 추출

비용 정보:

연회비: annualFee (예: 15,000원) -> 단, 체크카드면 "없음"으로 조건부 렌더링

이용 조건: condition (예: "전월 실적 30만원 이상")

최대 혜택 금액: maxBenefit (예: "월 최대 5만원 할인")

[액션: CTA]
상세 보기: id값을 이용해 상세 페이지(cards/${id})로 연결

비교함 담기: 해당 카드 객체 전체를 담는 핸들러 연결

카드사메인 컬러 (HEX)느낌 및 활용 
팁신한카드#0046FF신뢰감을 주는 진한 블루. 흰색 글자와 대비가 좋습니다.
삼성카드#222222최근에는 세련된 블랙이나 짙은 블루를 많이 씁니다.
현대카드#000000'현대카드=블랙' 공식이 있을 정도로 검정색과 무채색을 선호합니다.
KB국민카드#FFBC00친근하고 밝은 노란색. 검정색 글자와 잘 어울립니다.
롯데카드#ED1C24강렬한 레드. 포인트 컬러로 쓰기 좋습니다.
우리카드#007BC3시원하고 깨끗한 느낌의 스카이 블루.
하나카드#008485하나금융 특유의 청록색(Teal). 고급스러운 느낌을 줍니다.
NH농협카드#ED9100따뜻한 느낌의 오렌지색 혹은 농협 특유의 초록색을 섞어 씁니다.
BC카드#F0131E롯데보다 조금 더 밝고 선명한 레드입니다.
IBK기업은행#0059A6정직하고 무게감 있는 블루. */}

          <div className="modal-overlay" onClick={() => setSelectedCard(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {/* 카드 상단 포인트 띠 (카드사별 색상 적용 가능) */}
              <div className="modal-top-bar" style={{ backgroundColor: '#0046FF' }}></div>

              <button className="modal-close-btn" onClick={() => setSelectedCard(null)}>✕</button>

              <div className="modal-inner">
                {/* 1. 헤더 영역 */}
                <div className="modal-header">
                  <div className="badge-group">
                    <span className="badge company">{selectedCard.company}</span>
                    <span className={`badge type ${selectedCard.type === '신용' ? 'credit' : 'check'}`}>
                      {selectedCard.type}
                    </span>
                    {selectedCard.isOwned && <span className="badge owned">MY</span>}
                  </div>
                  <h2 className="card-name">{selectedCard.name}</h2>
                  <p className="card-summary">"{selectedCard.summary}"</p>
                </div>
                
                {/* 2. 차트 영역 (추후 직접 구현할 자리) */}
                <div className="chart-placeholder">
                  <p>데이터 시각화 차트가 들어갈 자리입니다</p>
                  <AgeChart data={selectedCard.statistics?.ageGroup} />
                  <GenderChart data={selectedCard.statistics?.gender} />
                </div>

                {/* 3. 혜택 리스트 */}
                <div className="benefit-section">
                  <h3>주요 혜택</h3>
                  <div className="benefit-list">
                    {selectedCard.mainBenefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="benefit-item">
                        <span className="icon">✨</span> {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. 비용 정보 박스 */}
                <div className="info-grid">
                  <div className="info-item">
                    <span className="label">연회비</span>
                    <span className="value">
                      {selectedCard.annualFee !== 0 ? `${selectedCard.annualFee.toLocaleString()}원` : '없음'}
                    </span>
                  </div>
                  <div className="info-item">
                    <span className="label">최대 혜택</span>
                    <span className="value">{selectedCard.maxBenefit}</span>
                  </div>
                  <div className="info-item full">
                    <span className="label">이용 조건</span>
                    <span className="value">{selectedCard.condition}</span>
                  </div>
                </div>

                {/* 5. 액션 버튼 */}
                <div className="button-group">
                  <button className="btn-primary">상세 정보 보기</button>
                  <button className="btn-secondary">비교함 담기</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* 검색창 컨테이너 */}
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '40px 20px', 
        borderRadius: '24px', 
        marginBottom: '30px'
      }}>
        <div style={{ 
          position: 'relative', 
          display: 'inline-block', 
          width: '100%', 
          maxWidth: '400px' 
        }}>
          <input 
            type="text" 
            placeholder="카드 이름으로 검색해보세요" 
            style={{ 
              width: '100%', 
              padding: '12px 20px', 
              fontSize: '16px', 
              borderRadius: '25px', 
              border: '1px solid #ddd', 
              outline: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              boxSizing: 'border-box' 
            }} 
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <span 
            style={{ 
              position: 'absolute', 
              right: '20px', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              color: '#aaa' 
            }}
            >
            🔍
          </span>
        </div>

        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap',
          justifyContent: 'center', 
          gap: '10px', 
          marginTop: '20px' 
        }}>
          {companyType.map((btn) => (
            <button 
              key={btn}
              onClick={() => setSelectedCompany(btn)} 
              style={{
                padding: '8px 18px',
                fontSize: '14px',
                fontWeight: '500',
                borderRadius: '20px', 
                border: '1px solid #007bff',
                cursor: 'pointer',
                transition: 'all 0.2s',
                
                backgroundColor: selectedCompany === btn ? '#007bff' : '#fff',
                color: selectedCompany === btn ? '#fff' : '#007bff',
                
                boxShadow: selectedCompany === btn 
                  ? '0 4px 8px rgba(0, 123, 255, 0.3)' 
                  : 'none'
              }}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      {/* 검색 결과 텍스트 */}
      <div style={{ 
        textAlign: 'left', 
        maxWidth: '1200px',
        margin: '0 auto 20px auto', 
        padding: '0 15px',
        borderLeft: '4px solid #007bff', 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {searchTerm ? (
          <>
            <p>
              <span style={{ color: '#007bff', fontWeight: 'bold' }}>{selectedCompany}</span> 카테고리에서 
              <span style={{ color: '#007bff', fontWeight: 'bold' }}> '{searchTerm}'</span> 검색 결과입니다.
            </p>
            <span style={{ fontSize: '14px', color: '#999', marginLeft: '10px', fontWeight: 'normal' }}>
              총 {filteredCards.length}건
            </span>
          </>
        ) : (
          <>
            <p>
              <span style={{ fontWeight: 'bold', color: '#007bff' }}>
                {selectedCompany === "전체" ? "전체 카드" : `${selectedCompany}`}
              </span> 리스트입니다.
            </p>
            <span style={{ fontSize: '14px', color: '#999', marginLeft: '10px', fontWeight: 'normal' }}>
              총 {filteredCards.length}건
            </span>
          </>
        )}
      </div>

      {/* 내 카드 리스트 */}
      <section>
        <h2 style={{ padding: '0 15px', fontSize: '20px', color: '#333' }}>
          💳 내 보유 카드 <span style={{ fontSize: '14px', color: '#888' }}>({myCards.length})</span>
        </h2>
        <div>
        {myCards.length >= 1 ? (
          myCards.map((card) => (
            /* 카드 전체 박스 스타일 */
            <div key={card.id} style={{ 
              border: '1px solid #eee', 
              borderRadius: '12px', 
              margin: '15px', 
              padding: '20px',
              width: '260px',
              display: 'inline-block', // 카드들을 가로로 나열
              verticalAlign: 'top',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              textAlign: 'left',
              backgroundColor: '#fff'
            }}>
              {/* 카드 이름과 회사 */}
              <div style={{ 
                display: 'flex', 
                gap: '16px', 
                alignItems: 'center', 
                marginBottom: '20px'
              }}>
                <div style={{ 
                  width: '100px',      
                  height: '64px',      
                  borderRadius: '8px', 
                  overflow: 'hidden', 
                  backgroundColor: '#f0f0f0',
                  flexShrink: 0        
                }}>
                  <img 
                    src={card.image} 
                    alt={card.name} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover' 
                    }} 
                  />
                </div>
    
                {/* 2. 텍스트 정보 */}
                <div style={{ textAlign: 'left' }}>
                  <p 
                    style={{ 
                      margin: '0', 
                      fontWeight: 'bold', 
                      fontSize: '18px', 
                      lineHeight: '1.2', 
                      cursor: 'pointer'
                    }}
                    onClick={() => setSelectedCard(card)}
                  >
                    {card.name}
                  </p>
                  <p style={{ 
                    margin: '4px 0 0', 
                    color: '#888', 
                    fontSize: '14px' 
                  }}>
                    {card.company}
                  </p>
                </div>
              </div>
              
              {/* 주요 혜택 리스트 */}
              <p style={{ fontSize: '13px', fontWeight: 'bold', color: '#007bff', margin: '0' }}>주요 혜택</p>
              <ul style={{ paddingLeft: '20px', marginTop: '5px', fontSize: '14px', color: '#444' }}>
                {card.mainBenefits.map((list) => (
                  <li key={list} style={{ marginBottom: '4px' }}>{list}</li>
                ))}
              </ul>
    
              {/* 카테고리 태그 리스트 */}
              <ul style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '6px', 
                padding: '0', 
                listStyle: 'none',
                marginTop: '15px' 
              }}>
                {card.categories.map((cate) => (
                  <li key={cate} style={{ 
                    background: '#f1f3f5', 
                    borderRadius: '15px', 
                    fontSize: '12px',
                    color: '#666'
                  }}>
                    <button 
                      onClick={() => setSearchTerm(cate)}
                      className="tag-button"
                    >#{cate}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <div style={{ 
            gridColumn: '1 / -1',
            width: '100%',
            padding: '80px 20px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            borderRadius: '16px',
            border: '2px dashed #eee',
            marginTop: '20px'
          }}>
            <span style={{ fontSize: '48px', display: 'block', marginBottom: '16px' }}>🔍</span>
            <h3 style={{ color: '#333', margin: '0 0 8px 0' }}>찾으시는 카드가 없어요</h3>
            <p style={{ color: '#888', margin: '0', fontSize: '15px' }}>
              다른 카드 이름이나 혜택 키워드(카페, 주유 등)로 다시 검색해 보시겠어요?
            </p>
            <button 
              onClick={() => {
                setSearchTerm("")
                setSelectedCompany("전체");
              }} 
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              전체 리스트 보기
            </button>
          </div>
        )}
        </div>
      </section>

      {/* 추천 카드 리스트 */}
      <section style={{ 
        backgroundColor: '#f8fbff', 
        padding: '30px 20px',
        borderRadius: '24px', 
        marginTop: '30px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '20px', color: '#007bff', marginBottom: '20px', textAlign: 'left' }}>
          ✨ 이런 카드는 어떠세요?
        </h2>

        {searchTerm === "" ? (
          /* 1. 검색 전 초기 상태 스타일 */
          <div style={{ padding: '40px 0', border: '1px dashed #d1e3f8', borderRadius: '16px' }}>
            <span style={{ fontSize: '32px', display: 'block', marginBottom: '10px' }}>🔍</span>
            <p style={{ margin: 0, color: '#666', fontSize: '15px', lineHeight: '1.6' }}>
              원하시는 카드 혜택(카페, 쇼핑, 배달 등)을 검색하시면<br/>
              <strong>맞춤형 카드를 추천</strong>해 드릴게요!
            </p>
          </div>
        ) : recommendFilterCards.length >= 1 ? (
          /* 2. 추천 결과가 있을 때 */
          <div style={{ textAlign: 'left' }}>
            <p style={{ marginBottom: '20px', paddingLeft: '10px', color: '#444' }}>
              ✨ <strong>'{searchTerm}'</strong> 혜택이 담긴 추천 카드들이에요!
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
              {recommendFilterCards.map(card => ( // ( ) 소괄호를 써서 바로 return 하게 수정!
                <div key={card.id} style={{ 
                  border: '1px solid #eee', 
                  borderRadius: '12px', 
                  margin: '10px', 
                  padding: '20px',
                  width: '260px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                  backgroundColor: '#fff'
                }}>
                  {/* ... 기존 카드 내용 동일 ... */}
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ width: '100px', height: '64px', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                      <img src={card.image} alt={card.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <p style={{ margin: '0', fontWeight: 'bold', fontSize: '18px' }}>{card.name}</p>
                      <p style={{ margin: '4px 0 0', color: '#888', fontSize: '14px' }}>{card.company}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: 'bold', color: '#007bff', margin: '0' }}>주요 혜택</p>
                  <ul style={{ paddingLeft: '20px', marginTop: '5px', fontSize: '14px', color: '#444' }}>
                    {card.mainBenefits.map((list) => <li key={list}>{list}</li>)}
                  </ul>
                  <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', padding: '0', listStyle: 'none', marginTop: '15px' }}>
                    {card.categories.map((cate) => (
                      <li key={cate} style={{ background: '#f1f3f5', padding: '4px 10px', borderRadius: '15px', fontSize: '12px', color: '#666' }}>
                        #{cate}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* 3. 검색 결과가 없을 때 스타일 */
          <div style={{ padding: '40px 0', backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #eee' }}>
            <span style={{ fontSize: '32px', display: 'block', marginBottom: '10px' }}>🏷️</span>
            <p style={{ margin: 0, color: '#888', fontSize: '15px', lineHeight: '1.6' }}>
              아쉽게도 <strong>'{searchTerm}'</strong> 혜택과 관련된<br/>
              추천 카드를 아직 찾지 못했습니다.
            </p>
          </div>
        )}
      </section>
    </>
  )
}

export default App
