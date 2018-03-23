import { Blog, Post, Comments } from './connectors';
import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} from 'graphql-iso-date';

const resolvers = {
  DateTime: GraphQLDateTime,
  Query: {
    blogInfo(_, args) {
      return Blog.findOne({id: args.id});
    },
    post(_, args) {
      return Post.findOne({id: args.id});
    },
    allPosts(_, args) {
      return Post.find({blogId: args.blogId});
    },
    allPostsFromAllBlogs(_, args) {
      return Post.find({});
    },
    comments(_, args) {
      return Comments.findOne({postId: args.postId});
    }
  },
  Blog: {
    // Should all be the default resolvers
  },
  Post: {
    avatar(post) {
      let blog = Blog.findOne({blogId: post.blogId});
//      console.log(post.blogId);
      console.log('blog ',blog);
//      console.log(blog.avatar);
      return blog.avatar;
    },
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
