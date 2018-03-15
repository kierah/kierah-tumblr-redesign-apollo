import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
//import mocks from './mocks';
import resolvers from './resolvers';

const typeDefs = `
type Query {
  blogInfo(id: String): Blog
  post(id: String): Post
  allPosts(blogId: String): [Post]
  comments(postId: String): Comments
}
type Blog {
  id: String
  title: String
  authorName: String
}
type Post {
  id: String
  blogId: String
  title: String
  text: String
  likes: Int
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
