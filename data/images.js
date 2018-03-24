// request example here: https://stackoverflow.com/questions/11826384/calling-a-json-api-with-node-js
// tumblr client example here: https://github.com/tumblr/tumblr.js
import request from 'request';
import tumblr from 'tumblr.js';

const TUMBLR_API_KEY='lvgmxbdwCQ9GYlFqKXNsibyUd9wOTLt0ERKAWV5bPFCt6yRjo7';
const uri = 'https://api.tumblr.com/v2/blog/just-shower-thoughts/avatar/512';

// Authenticate via OAuth
//var tumblr = require('tumblr.js');
/*let client = tumblr.createClient({
  credentials: {
  consumer_key: 'lvgmxbdwCQ9GYlFqKXNsibyUd9wOTLt0ERKAWV5bPFCt6yRjo7',
    consumer_secret: 'V7LMY1PFrImi7MZwGY8MnVZVU2f5dtbXNCoiXX5pKR9yf66AB9',
    token: 'iEyltWDpxSdHaMiP81bSBCgKINZ2ttk3IHOy8rwMzFvVwI729h',
    token_secret: 'b1e1uTlyEQmv8lN1K2gJdaGfRmQ0dsBJF3AHZPAv98SxWtILNl'
  },
  returnPromises: true,
});

// Make the request
client.userInfo(function (err, data) {
    // ...
    });
*/
export default function getAvatars(blogs) {
  let images = [];

/*  request.get({
    uri: uri,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error: ', err);
    }
    else if (res.statusCode !== 200) {
      console.log('Status: ', res.statusCode);
    }
    else {
      console.log(data);
    }
  });
*/
  blogs.forEach((blogName) => {
    images.push({blogName: blogName,
                 avatar: `https://api.tumblr.com/v2/blog/${blogName}/avatar/512`});

  });
  return images;
}

export function getImages() {
  return [
    "https://78.media.tumblr.com/e53713b91905a21279df17541eb9a495/tumblr_p5lffbbzyW1ro5jd6o1_540.jpg",
    "https://78.media.tumblr.com/62c50bd296fc8676624735f638f410a9/tumblr_p6285o0plq1r2p7yko1_540.png",
    "https://78.media.tumblr.com/a09ee009b445ab80656da513a3455538/tumblr_p620zdP4lq1v4iggwo1_540.jpg",
    "https://78.media.tumblr.com/71c5a730ab7941f25ae9c7944eb4d766/tumblr_p620zdP4lq1v4iggwo2_1280.jpg",
    "https://78.media.tumblr.com/82cafed814e706ff037dd2a96b23263f/tumblr_p5lk1cxB131ro5jd6o1_540.jpg",
    "https://78.media.tumblr.com/326bf88339d7dd4a7a6bf2fea44b1895/tumblr_p5m0kbEGAY1ro5jd6o1_1280.jpg",
    "https://78.media.tumblr.com/1ac644d17bcc1f3947c2db8785d4395d/tumblr_p5nu2mULC11ro5jd6o1_540.jpg",
    "https://78.media.tumblr.com/aa9c20617cf60052dcc471b005c81035/tumblr_p5q5v9a2My1ro5jd6o1_540.jpg",
    "https://78.media.tumblr.com/1ceb8408fd20e64ca6a40c0213cba3ad/tumblr_p5rq8w73WP1ro5jd6o1_540.jpg",
    "https://78.media.tumblr.com/5bd85d90a87e60aad22bfb9c9a47236c/tumblr_o1vyng807a1sfy3b9o1_540.jpg",
    "https://78.media.tumblr.com/9d8e4fc573c836ba804d9bf6e377c08e/tumblr_p62st7qnAn1wna6v8o1_540.jpg",
    "https://78.media.tumblr.com/5bacbbfb3160f1885c856ef00bd5536f/tumblr_p5s5m8n9P21ro5jd6o1_540.jpg",
    "https://78.media.tumblr.com/cb8b4521dd23dd6b2733b994410d1aff/tumblr_p5ssblWYtr1ro5jd6o1_540.jpg",
    "https://78.media.tumblr.com/c75e9e3791bcf9817aa7e3efa1da4d20/tumblr_p5taakL87z1ro5jd6o1_540.jpg",
    "https://78.media.tumblr.com/d5e313217f055dd4c7bba9d5fe746911/tumblr_p5vmukUuhw1ro5jd6o1_540.jpg",
  ];

}
