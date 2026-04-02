import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/useAuthStore'
import * as S from './Auth.styles'
import { useUIStore } from '../../store/useUIStore';

function Login() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const { login, isLoading } = useAuthStore();
    const { openModal } = useUIStore();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const success = await login(id, password);

        if (success) {
            navigate('/');
        } else {
            openModal('CONFIRM', {
                title: '로그인',
                content: '아이디 또는 비밀번호를 확인해주세요.',
                onConfirm: () => {},
            })
        }
    }

    return (
        <S.LoginContainer>
            {/* 1. public 폴더의 로고 활용 */}
            <S.Logo src="/logo.png" alt="다모아 로고" />
            <S.Title>모든 혜택을 한곳에, 다모아</S.Title>

            <S.LoginForm onSubmit={handleLogin}>
                <S.Input 
                type="text" 
                placeholder="아이디를 입력하세요" 
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
                />
                <S.Input 
                type="password" 
                placeholder="비밀번호를 입력하세요" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                
                <S.LoginButton type="submit" disabled={isLoading}>
                {isLoading ? '로그인 중...' : '로그인'}
                </S.LoginButton>
            </S.LoginForm>

            <S.BottomMenu>
                <span>계정이 없으신가요?</span>
                <S.SignupLink onClick={() => navigate('/damoa/signup')}>회원가입</S.SignupLink>
            </S.BottomMenu>
        </S.LoginContainer>
    )
}

export default Login