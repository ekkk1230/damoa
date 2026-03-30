import { useNavigate, useParams } from "react-router-dom";
import { useCommunityStore } from "../../store/useCommunityStore";
import * as S from "./Community.styles";

function CommunityDetail() {
    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();
    
    const { posts, setSelectedPost } = useCommunityStore();

    const post = posts.find(post => post.id === id);

    if (!post) return <S.Container>게시글을 찾을 수 없습니다.</S.Container>

    return (
        <S.Container>
            {post.category === "INQUIRY" && (
                <S.ActionGroup>
                    {/* <button onClick={() => navigate(-1)}>뒤로가기</button> */}
                    <S.EditButton onClick={() => {
                        setSelectedPost(post);
                        navigate(`/community/edit/${post.id}`);
                    }}>
                        수정하기
                    </S.EditButton>
                </S.ActionGroup>
            )}

            <S.Title>{post?.title}</S.Title>
            <S.Info>
                <span>{post?.author}</span>
                <span>{post?.createdAt}</span>
                <span>{post?.viewCount}</span>
            </S.Info>
            <S.Content>
                {post?.content}
            </S.Content>
            
            {post?.answerContent && (
                <S.AnswerBox>
                    <strong>관리자 답변:</strong>
                    <p>{post?.answerContent}</p>
                </S.AnswerBox>
            )}
        </S.Container>
    )
}

export default CommunityDetail