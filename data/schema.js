import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import resolvers from './resolvers';

const typeDefs = `
scalar DateTime
type Query {
  blogInfo(id: String): Blog
  post(id: String): Post
  allPosts(blogId: String): [Post]
  allPostsFromAllBlogs: [Post]
  comments(postId: String): Comments
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
  text: String
  likes: Int
  avatar: String
  createdAt: DateTime
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

//addMockFunctionsToSchema({ schema, mocks });

export default schema;
