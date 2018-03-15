/*
Some sample queries

{
  blogInfo(id: "blog-g2pc5150jesudoyn") {
		id
    title
    authorName
  }
}

{
  post(id: "post-g2pc5150jesudoyq") {
    id
    blogId
    title
    text
    likes
  }
}

{
  allPosts(blogId: "blog-g2pc5150jesudoyn") {
    id
    blogId
    title
    text
    likes
  }
}

{
  comments(postId: "post-g2pc5150jesudoyq") {
    comments: {
      commenterId
      text
    }
  }
}



*/
