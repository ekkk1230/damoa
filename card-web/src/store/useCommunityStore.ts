import { create } from "zustand";
import type { Post } from '../type/Community';
import { mockPosts } from "../data/MOCK_POSTS";


interface CommunityState {
    posts: Post[];
    selectedPost: Post | null;
    setSelectedPost: (post: Post | null) => void;
    changCount: (post: Post | null) => void;
    addPost: (post: Post) => void;
    deletePost: (post: Post) => void;
}

export const useCommunityStore = create<CommunityState>((set) => ({
    posts: mockPosts,
    selectedPost: null,
    setSelectedPost: (post) => set({ selectedPost: post }),
    changCount: (post) => {
        if (!post) return;

        set((state) => {
            const updatedPosts = state.posts.map((p) => p.id === post.id ? { ...p, viewCount: p.viewCount + 1 } : p);
            const updatedSelectedPost = { ...post, viewCount: post.viewCount + 1 };

            return { posts: updatedPosts, selectedPost: updatedSelectedPost };
        })
    },
    addPost: (newPost: Post) => {
        set((state) => ({
            posts: [newPost, ...state.posts]
        }))
    },
    deletePost: (post) => {
        set((state) => {
            const filteredPosts = state.posts.filter(p => p.id !== post.id);

            return { posts: filteredPosts };
        })
    }
}));