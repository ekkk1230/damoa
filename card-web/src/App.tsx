import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import type { Card } from './type/Card';

const CARD_LIST: Card[] = [ 
  {
    id: 1,
    name: "톡톡카드",
    company: "삼성카드",
    annualFee: 10000,
    image: "https://placehold.co/200x120/png",
    mainBenefits: ["스타벅스 50% 할인"],
    categories: ["카페", "주유"],
    isOwned: true,
  },
  {
    id: 2,
    name: "해피카드",
    company: "신한카드",
    annualFee: 10000,
    image: "https://placehold.co/200x120/png",
    mainBenefits: ["주유 50% 할인"],
    categories: ["주유", "도서"],
    isOwned: true,
  },
  {
    id: 3,
    name: "절약카드",
    company: "우리카드",
    annualFee: 10000,
    image: "https://placehold.co/200x120/png",
    mainBenefits: ["온라인쇼핑몰 50% 할인"],
    categories: ["식당", "쇼핑"],
    isOwned: false,
  },
]

const companyType = ["전체", "삼성카드", "신한카드", "우리카드", "국민카드", "하나카드", "현대카드"];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("전체");

  const filteredCards = CARD_LIST.filter(card => {
    const isSearchMatch = card.name.includes(searchTerm.toLowerCase()) || card.company.includes(searchTerm.toLowerCase()) || card.categories.some( category => category.includes(searchTerm.toLowerCase()) );
    const isBtnMatch = selectedCompany === "전체" || card.company.includes(selectedCompany);

    return isSearchMatch && isBtnMatch;
  });

  const myCards = filteredCards.filter(card => card.isOwned === true);
  const recommendCards = filteredCards.filter(card => card.isOwned === false);

  const recommendFilterCards = recommendCards.filter(card => {
    if (searchTerm.trim() == "") return;
    return card.categories.some(category => category.includes(searchTerm.toLowerCase()));
  })

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
                  <p style={{ 
                    margin: '0', 
                    fontWeight: 'bold', 
                    fontSize: '18px', 
                    lineHeight: '1.2' 
                  }}>
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
                    padding: '4px 10px', 
                    borderRadius: '15px', 
                    fontSize: '12px',
                    color: '#666'
                  }}>
                    #{cate}
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
        ) : recommendCards.length >= 1 ? (
          /* 2. 추천 결과가 있을 때 */
          <div style={{ textAlign: 'left' }}>
            <p style={{ marginBottom: '20px', paddingLeft: '10px', color: '#444' }}>
              ✨ <strong>'{searchTerm}'</strong> 혜택이 담긴 추천 카드들이에요!
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
              {recommendCards.map(card => ( // ( ) 소괄호를 써서 바로 return 하게 수정!
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
