export type PostCategory = 'NOTICE' | 'INQUIRY';
export type StateType = 'WAIT' | 'PROCED';

export interface Post {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    author: string;
    viewCount: number;
    category: PostCategory;

    isFixed?: boolean;

    status?: StateType;
    answerContent?: string;
    isPublic: boolean;
}