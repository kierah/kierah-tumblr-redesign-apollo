/*
Some sample queries

{
  blogInfo(id: "blog-g2pc4dxjf40pkvf") {
		id
    title
    description
    authorName
    avatar
  }
}

{
  post(id: "post-g2pc4dxjf40pkv8") {
    id
    blogId
    title
    text
    likes
    createdAt
  }
}

{
  allPosts(blogId: "blog-g2pc4dxjf40pkvf") {
    id
    blogId
    title
    text
    likes
    createdAt
  }
}
{
  allPostsFromAllBlogs {
    id
    blogId
    title
    text
    likes
    createdAt
  }
}
{
  comments(postId: "post-g2pc4dxjf40pkv8") {
    comments: {
      commenterId
      text
    }
  }
}



*/
