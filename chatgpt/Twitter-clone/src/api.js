const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = () => fetch(`${BASE_URL}/posts`).then(res => res.json());
export const fetchPost = (id) => fetch(`${BASE_URL}/posts/${id}`).then(res => res.json());
export const fetchComments = (postId) => fetch(`${BASE_URL}/posts/${postId}/comments`).then(res => res.json());
export const fetchUser = (userId) => fetch(`${BASE_URL}/users/${userId}`).then(res => res.json());
