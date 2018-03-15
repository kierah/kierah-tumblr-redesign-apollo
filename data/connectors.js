import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';
import Mongoose from 'mongoose';
import uniqid from 'uniqid';

/* Mongo */
Mongoose.Promise = global.Promise;
const mongo = Mongoose.connect('mongodb://localhost/blogsite', {
  useMongoClient: true
});

const BlogSchema = Mongoose.Schema({
  id: String,
  title: String,
  authorName: String,
});

const PostSchema = Mongoose.Schema({
  id: String,
  blogId: String,
  title: String,
  text: String,
  likes: Number,
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


// create mock data with a seed, so we always get the same
// modify the mock data creation to also create some views:
// see connectors0.js for examples of using casual

let getBlogId = () => 'blog-'+uniqid();
let getPostId = () => 'post-'+uniqid();

casual.seed(123);

_.times(2, () => {
  let blogId = [getBlogId(),getBlogId()],
      postId = [getPostId(),getPostId(),getPostId()];

      Blog.create(
        { id: blogId[0],
          title: casual.title,
          authorName: casual.username},
          { id: blogId[1],
            title: casual.title,
            authorName: casual.username},
      );
      Post.create(
        { id: postId[0],
          blogId: blogId[0],
          title: casual.title,
          text: casual.text,
          likes: Math.floor(Math.random()*100)
        },
        { id: postId[1],
          blogId: blogId[0],
          title: casual.title,
          text: casual.text,
          likes: Math.floor(Math.random()*100)
        },
        { id: postId[2],
          blogId: blogId[1],
          title: casual.title,
          text: casual.text,
          likes: Math.floor(Math.random()*100)
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
      );
    });

export { Blog, Post, Comments };