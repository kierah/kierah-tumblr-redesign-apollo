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
export default function getImages(blogs) {
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
