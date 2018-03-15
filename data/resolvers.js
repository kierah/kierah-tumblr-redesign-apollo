import { Blog, Post, Comments } from './connectors';

const resolvers = {
  Query: {
    blogInfo(_, args) {
      return Blog.findOne({id: args.id});
    },
    post(_, args) {
      return Post.findOne({id: args.id});
    },
    allPosts(_, args) {
      return Post.findAll({blogId: args.blogId});
    },
    comments(_, args) {
      return Comments.findOne({postId: args.postId});
    }
  },
  Blog: {
    // Should all be the default resolvers
  },
  Post: {
    // Should all be the default resolvers
  },
  Comments: {
    comments(comments) {
      return comments.comments;
    }
  },
  Comment: {
    // Should all be the default resolvers
  }
};

export default resolvers;
