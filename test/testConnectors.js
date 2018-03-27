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
  allBlogs {
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
    content
    likes
    createdAt
    type
  }
}

{
  allPosts(blogId: "blog-g2pc4dxjf40pkvf") {
    id
    blogId
    title
    content
    likes
    avatar
    createdAt
    type
  }
}
{
  allPostsFromAllBlogs {
    id
    blogId
    title
    content
    likes
    avatar
    createdAt
    type
  }
}
{
  topPostFromAllBlogs {
    id
    blogId
    title
    content
    likes
    avatar
    createdAt
    type
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

mutation {
  createPost(title: "My Post",
    content: "The content of my post",
    type: "text",
    blogId: "blog-g2pc41lbjf5oqsun")
    {
    id
	  blogId
	  title
 	 	content
  	likes
  	avatar
  	createdAt
  	type
  }
}

*/
