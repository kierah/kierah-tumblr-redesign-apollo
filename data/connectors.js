import Mongoose from 'mongoose';
import uniqid from 'uniqid';
import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} from 'graphql-iso-date';
import casual from 'casual';
import dotenv from 'dotenv';
import _ from 'lodash';
import getAvatars, { getImages } from './images.js';

dotenv.config()

/* Mongo */
Mongoose.Promise = global.Promise;
let mongodbUrl = process.env.MONGODB_URI || 'mongodb://localhost/tumblr-redesign';
const mongo = Mongoose.connect(mongodbUrl, {
  useMongoClient: true
});
console.log(mongodbUrl);

const BlogSchema = Mongoose.Schema({
  id: String,
  title: String,
  description: String,
  authorName: String,
  avatar: String,
});

const PostSchema = Mongoose.Schema({
  id: String,
  blogId: String,
  title: String,
  content: String,
  likes: Number,
  avatar: String,
  createdAt: Date,
  type: String,
});

const CommentsSchema = Mongoose.Schema({
  postId: String,
  comments: [
    { commenterId: String,     // This is a blog id
      text: String,
    }
  ],
});

const ViewSchema = Mongoose.Schema({
  postId: Number,
  views: Number,
});

const Blog = Mongoose.model('Blog', BlogSchema);
const Post = Mongoose.model('Post', PostSchema);
const Comments = Mongoose.model('Comments', CommentsSchema);


  let getBlogId = () => 'blog-'+uniqid();
  let getPostId = () => 'post-'+uniqid();
  let avatarUrls = getAvatars();
  let imgUrls = getImages();
  let n=1, m=0;

  casual.seed(Math.round((new Date()).getTime() / 1000));

  Blog.create({ id: getBlogId(),
    title: "This User",
    description: casual.text,
    authorName: "this-user",
    avatar: avatarUrls[0].avatar});

  _.times(4, () => {

    let blogId = [],
        postId = [];

    _.times(2, () => {
      blogId.push(getBlogId());
    });
    _.times(7, () => {
      postId.push(getPostId());
    });

    Blog.create(
      { id: blogId[0],
        title: casual.title,
        description: casual.text,
        authorName: casual.username,
        avatar: avatarUrls[n].avatar},
      { id: blogId[1],
        title: casual.title,
        description: casual.text,
        authorName: casual.username,
        avatar: avatarUrls[n+1].avatar},
    );
    Post.create(
      { id: postId[2],
        blogId: blogId[0],
        title: casual.title,
        content: imgUrls[m],
        likes: Math.floor(Math.random()*100),
        avatar: avatarUrls[n].avatar,
        createdAt: (new Date()).toISOString(),
        type: "image",
      },
      { id: postId[0],
        blogId: blogId[0],
        title: casual.title,
        content: casual.text,
        likes: Math.floor(Math.random()*100),
        avatar: avatarUrls[n].avatar,
        createdAt: (new Date()).toISOString(),
        type: "text",
      },
      { id: postId[1],
        blogId: blogId[0],
        title: casual.title,
        content: casual.text,
        likes: Math.floor(Math.random()*100),
        avatar: avatarUrls[n].avatar,
        createdAt: (new Date()).toISOString(),
        type: "text",
      },
      { id: postId[3],
        blogId: blogId[0],
        title: casual.title,
        content: imgUrls[m+1],
        likes: Math.floor(Math.random()*100),
        avatar: avatarUrls[n].avatar,
        createdAt: (new Date()).toISOString(),
        type: "image",
      },
      { id: postId[4],
        blogId: blogId[1],
        title: casual.title,
        content: casual.text,
        likes: Math.floor(Math.random()*100),
        avatar: avatarUrls[n+1].avatar,
        createdAt: (new Date()).toISOString(),
        type: "text",
      },
      { id: postId[5],
        blogId: blogId[1],
        title: casual.title,
        content: imgUrls[m+2],
        likes: Math.floor(Math.random()*100),
        avatar: avatarUrls[n+1].avatar,
        createdAt: (new Date()).toISOString(),
        type: "image",
      },
      { id: postId[6],
        blogId: blogId[1],
        title: casual.title,
        content: imgUrls[m+4],
        likes: Math.floor(Math.random()*100),
        avatar: avatarUrls[n+1].avatar,
        createdAt: (new Date()).toISOString(),
        type: "image",
      },

    );
    Comments.create(
      { postId: postId[0],
        comments: [
          { commenterId: blogId[1],     // This is a blog id
            text: casual.text,
          },
          { commenterId: blogId[0],     // This is a blog id
            text: casual.text,
          },
          { commenterId: blogId[1],     // This is a blog id
            text: casual.text,
          },
        ],
      },
      { postId: postId[1],
        comments: [
          { commenterId: blogId[1],     // This is a blog id
            text: casual.text,
          },
          { commenterId: blogId[0],     // This is a blog id
            text: casual.text,
          },
          { commenterId: blogId[1],     // This is a blog id
            text: casual.text,
          },
        ],
      },
      { postId: postId[2],
        comments: [],
      },
      { postId: postId[3],
        comments: [],
      },
      { postId: postId[4],
        comments: [],
      },
      { postId: postId[5],
        comments: [],
      },
      { postId: postId[6],
        comments: [],
      },
    );

    n += 2;
    m += 4;
  });

export { Blog, Post, Comments };
