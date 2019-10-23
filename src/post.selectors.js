import { createSelector } from "reselect";

const getUsers = state => state.users.data;
const getPosts = state => state.posts.data;

export const getPostsWithUserPhoto = createSelector(
  [getUsers, getPosts],
  (users, posts) =>
    posts.map(post => {
      const userFromPost = users.find(user => user.id === post.userId);
      return {
        ...post,
        thumbnailUrl: userFromPost.image
      };
    })
);

export const getOddPostsWithUserPhoto = createSelector(
  [getPostsWithUserPhoto],
  posts => {
    return posts.filter(post => !(post.id % 2 === 0));
  }
);
