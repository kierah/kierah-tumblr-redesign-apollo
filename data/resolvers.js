// Tutorial used in creating this: https://medium.com/the-ideal-system/graphql-and-mongodb-a-quick-example-34643e637e49
import uniqid from 'uniqid';
import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} from 'graphql-iso-date';
import { Blog, Post, Comments } from './connectors';

const resolvers = {
  DateTime: GraphQLDateTime,
  Query: {
    async blogInfo(_, args) {
      return await Blog.findOne({id: args.id});
    },
    async post(_, args) {
      return await Post.findOne({id: args.id});
    },
    async allPosts(_, args) {
      return await Post.find({blogId: args.blogId});
    },
    async allPostsFromAllBlogs(_, args) {
      return await Post.find({});
    },
    async comments(_, args) {
      return await Comments.findOne({postId: args.postId});
    },
    async allBlogs(_, args) {
      return await Blog.find({});
    }
  },
  Mutation: {
    async createPost(_, args, context, info) {
      let postId = 'post-'+uniqid();
      const mutationArgs = {
        id: postId,
        blogId: args.blogId,
        title: args.title,
        content: args.content,
        likes: 0,
        avatar: args.avatar,
        createdAt: (new Date()).toISOString(),
        type: args.type,
      };
      console.log("Calling mutation: ", mutationArgs);
      const res = await Post.create(mutationArgs);
      return await Post.findOne({id: postId});
    },

      // what is the createLink equivalent in non-prisma apollo?
//      return context.db.mutation.createLink({ data: { title, content, type, blogId } }, info);
//    },
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
