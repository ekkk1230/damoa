import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Splash = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }

                return prev + 2;
            })
        }, 20);

        return () => clearInterval(interval);
    }, [])

    return (
        <SplashContainer>
            <Logo src="/loading-logo.png" alt="로고" />
            <LoadingText>불러오는 중...</LoadingText>
            <ProgressBarContainer>
                <ProgressBarFill width={progress} />
            </ProgressBarContainer>
        </SplashContainer>
    );
};


const SplashContainer = styled.div`
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  height: 100vh; background-color: #fff;
`;

const Logo = styled.img` width: 150px; animation: pulse 1.5s infinite; 
  @keyframes pulse { 0% { opacity: 0.5; } 50% { opacity: 1; } 100% { opacity: 0.5; } }
`;

const LoadingText = styled.p` margin-top: 20px; color: #666; font-size: 0.9rem; `;

const ProgressBarContainer = styled.div`
  width: 200px;
  height: 6px;
  background-color: #eee;
  border-radius: 10px;
  overflow: hidden; /* 게이지가 밖으로 안 나가게 */
`;

const ProgressBarFill = styled.div<{ width: number }>`
  width: ${(props) => props.width}%;
  height: 100%;
  background: linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%);
  transition: width 0.1s ease-out; /* 부드럽게 늘어나도록 */
`;

export default Splash;