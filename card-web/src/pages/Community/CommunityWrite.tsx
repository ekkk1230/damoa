import { useEffect, useState } from "react";
import { useCommunityStore } from "../../store/useCommunityStore"
import * as S from "./Community.styles"
import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate, useParams } from "react-router-dom";

function CommunityWrite() {
    const { addPost, selectedPost } = useCommunityStore();
    const { user } = useAuthStore();
    const navigate = useNavigate();
     
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        isPublic: true,
    });

    const author = user?.name || '';
    const handleSubmit = () => {

        if (!formData.title.trim() || !formData.content.trim()) {
            alert('내용을 입력해주세요');
            return;
        }

        const newPost = {
            id: String(Date.now()),
            title: formData.title,
            content: formData.content,
            createdAt: new Date().toISOString().split('T')[0],
            author: author,
            viewCount: 0,
            category: 'INQUIRY' as const,
            status: 'WAIT' as const,
            isPublic: formData.isPublic
        }

        addPost(newPost);
        alert('등록되었습니다.');
        navigate('/community');
    }


    const { id } = useParams<{ id: string }>();
    useEffect(() => {
        if (id && selectedPost) {
            setFormData({
                title: selectedPost.title,
                content: selectedPost.content,
                isPublic: selectedPost.isPublic
            })
        }
    }, [id, selectedPost])

    return (
        <S.WriteContainer>
            <h2>1:1 문의하기</h2>
            <S.FormGroup>
                <p>제목</p>
                <S.Input 
                    type="text" 
                    placeholder="제목을 입력하세요"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
            </S.FormGroup>

            <S.FormGroup>
                <p>내용</p>
                <S.TextArea 
                    placeholder="문의하실 내용을 상세히 적어주세요"
                    value={formData.content}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                />
            </S.FormGroup>

            <S.FormGroup>
                <p>공개 여부</p>
                <S.RadioGroup>
                    <label>
                        <input 
                            type="radio" 
                            name="isPublic" 
                            checked={formData.isPublic} 
                            onChange={() => setFormData({...formData, isPublic: true})}
                        /> 공개
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="isPublic" 
                            checked={!formData.isPublic}
                            onChange={() => setFormData({...formData, isPublic: false})}
                        /> 비공개 🔒
                    </label>
                </S.RadioGroup>
            </S.FormGroup>

            <S.SubmitButton onClick={handleSubmit}>작성 완료</S.SubmitButton>
        </S.WriteContainer>
    )
}

export default CommunityWrite