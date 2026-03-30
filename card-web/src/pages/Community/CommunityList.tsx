import { useState } from "react";
import * as S from "./Community.styles";
import { useCommunityStore } from "../../store/useCommunityStore";
import { Link, useNavigate } from "react-router-dom";
import type { Post } from "../../type/Community";

function CommunityList() {
    const { posts, setSelectedPost, changCount, deletePost } = useCommunityStore();
    const navigate = useNavigate();

    const handlePostClick = (post: Post) => {
        changCount(post);
        setSelectedPost(post);
        navigate(`/community/${post.id}`);
    }

    const handleDelete = (e: React.MouseEvent, post: Post) => {
        e.stopPropagation();
        if (confirm('삭제하시겠습니까?')) {
            deletePost(post)
        } else return false;
    }

    const [activeTab, setActiveTab] = useState('NOTICE');

    const filteredPosts = posts.filter(post => ( post.category === activeTab ));

    return (
        <S.CommunityContainer>
            <S.PageTitle>커뮤니티</S.PageTitle>

            {/* 탭 메뉴 영역 */}
            <S.TabGroup>
                <S.TabButton 
                    isActive={activeTab === 'NOTICE'} 
                    onClick={() => setActiveTab('NOTICE')}
                >
                공지사항
                </S.TabButton>
                <S.TabButton 
                    isActive={activeTab === 'INQUIRY'} 
                    onClick={() => setActiveTab('INQUIRY')}
                >
                1:1 문의
                </S.TabButton>
            </S.TabGroup>

            {/* 게시글 리스트 영역 */}
            <S.PostList>
                {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                    <S.PostItem key={post.id} onClick={() => handlePostClick(post)}>
                        <S.PostHeader>
                            <S.PostTitleBox>
                                {post.isFixed && <S.Badge type="fixed">공지</S.Badge>}
                                <S.PostTitle>{post.title}</S.PostTitle>
                            </S.PostTitleBox>
                            
                            {/* 삭제 버튼 추가 */}
                            <S.DeleteButton onClick={(e) => handleDelete(e, post)}>
                                삭제
                            </S.DeleteButton>
                        </S.PostHeader>

                        <S.PostFooter>
                            <S.InfoGroup>
                                <span>{post.author}</span>
                                <span>{post.createdAt}</span>
                            </S.InfoGroup>
                            <span>조회 {post.viewCount}</span>
                        </S.PostFooter>
                    </S.PostItem>
                ))
                ) : (
                <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>
                    등록된 게시글이 없습니다.
                </div>
                )}
            </S.PostList>
            
            {/* 문의사항 탭일 때만 '글쓰기' 버튼 보여주기 */}
            {activeTab === 'INQUIRY' && (
                <Link to="/community/add">작성하기</Link>
            )}
        </S.CommunityContainer>
    )
}

export default CommunityList