import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/useAuthStore'
import * as S from './Auth.styles'
import { useUIStore } from '../../store/useUIStore';

function SignUp() {
    const [formData, setFormData] = useState({
        id: '',
        password: '',
        confirmPassword: '',
        name: '',
        gender: 'M', 
        birthDate: ''
    });
    const navigate = useNavigate();
    const { signup, isLoading } = useAuthStore();
    const { openModal } = useUIStore();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();

        // 1. 비밀번호 일치 확인
        if (formData.password !== formData.confirmPassword) {
            openModal('CONFIRM', {
                title: '회원가입',
                content: '비밀번호가 일치하지 않습니다.',
            })
            return;
        }

        // 2. 생년월일 입력 확인
        if (!formData.birthDate) {
            openModal('CONFIRM', {
                title: '회원가입',
                content: '생년월일을 선택해주세요.',
            })
            return;
        }

        // 💡 3. signup 함수 호출 (성별, 생년월일 추가 전달) 🦾
        const success = await signup(
            formData.id, 
            formData.password, 
            formData.name, 
            formData.gender, 
            formData.birthDate
        );

        if (success) {
            openModal('CONFIRM', {
                title: '회원가입',
                content: '회원가입을 완료했습니다.',
                onConfirm: () => navigate('/damoa/login'), 
            })
        } else {
            openModal('CONFIRM', {
                title: '회원가입',
                content: '회원가입에 실패했습니다. 아이디 중복을 확인해주세요.',
            })
        }
    };

    return (
        <S.SignUpContainer>
            <S.Logo src="/logo.png" alt="다모아 로고" />
            <S.Title>다모아 시작하기</S.Title>

            <S.SignUpForm onSubmit={handleSignUp}>
                <S.Input 
                    name="name" 
                    placeholder="이름" 
                    onChange={handleChange} 
                    required 
                />
                <S.Input 
                    name="id" 
                    placeholder="아이디" 
                    onChange={handleChange} 
                    required 
                />

                <div style={{ display: 'flex', gap: '20px', margin: '10px 0', justifyContent: 'center' }}>
                    <label style={{ cursor: 'pointer' }}>
                        <input type="radio" name="gender" value="M" checked={formData.gender === 'M'} onChange={handleChange} /> 남성
                    </label>
                    <label style={{ cursor: 'pointer' }}>
                        <input type="radio" name="gender" value="F" checked={formData.gender === 'F'} onChange={handleChange} /> 여성
                    </label>
                </div>

                <S.Input 
                    type="date"
                    name="birthDate" 
                    placeholder="생년월일" 
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