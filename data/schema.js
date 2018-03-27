import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
scalar DateTime
type Query {
  blogInfo(id: String): Blog
  post(id: String): Post
  topPost(blogId: String): Post
  allPosts(blogId: String): [Post]
  allPostsFromAllBlogs: [Post]
  topPostFromAllBlogs: [BlogWithPost]
  comments(postId: String): Comments
  allBlogs: [Blog]
}
type Mutation {
  createPost(title: String,
             content: String,
             type: String,
             blogId: String,
             avatar: String): Post
}
type Blog {
  id: String
  title: String
  description: String
  authorName: String
  avatar: String
}
type Post {
  id: String
  blogId: String
  title: String
  content: String
  likes: Int
  avatar: String
  createdAt: DateTime
  type: String
}
type BlogWithPost {
  id: String
  title: String
  description: String
  authorName: String
  avatar: String
  post: Post
}
type Comment {
  commenterId: String
  text: String
}
type Comments {
  postId: String
  comments: [Comment]
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
