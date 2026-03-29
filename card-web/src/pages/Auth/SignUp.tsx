import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/useAuthStore'
import * as S from './Auth.styles'

function SignUp() {
    const [formData, setFormData] = useState({
        id: '',
        password: '',
        confirmPassword: '',
        name: ''
    });
    const navigate = useNavigate();
    const { signup, isLoading } = useAuthStore();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSignUp = async (e:React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        const success = await signup(formData.id, formData.password, formData.name);

        if (success) {
            alert('회원가입이 완료되었습니다. 로그인 해주세요.');
            navigate('/login');
        } else {
            alert('회원가입에 실패했습니다.');
        }
    };

    return (
        <S.SignUpContainer>
            <S.Logo src="/logo.png" alt="다모아 로고" />
            <S.Title>다모아 시작하기</S.Title>

            <S.SignUpForm onSubmit={handleSignUp}>
                <S.Input 
                name="name" 
                placeholder="이름을 입력하세요" 
                onChange={handleChange} 
                required 
                />
                <S.Input 
                name="id" 
                placeholder="아이디(이메일)를 입력하세요" 
                onChange={handleChange} 
                required 
                />
                <S.Input 
                type="password" 
                name="password" 
                placeholder="비밀번호" 
                onChange={handleChange} 
                required 
                />
                <S.Input 
                type="password" 
                name="confirmPassword" 
                placeholder="비밀번호 확인" 
                onChange={handleChange} 
                required 
                />
                
                <S.SignUpButton type="submit" disabled={isLoading}>
                {isLoading ? '처리 중...' : '회원가입 완료'}
                </S.SignUpButton>
            </S.SignUpForm>

            <S.BackButton onClick={() => navigate(-1)}>이전으로</S.BackButton>
        </S.SignUpContainer>
    )
}

export default SignUp