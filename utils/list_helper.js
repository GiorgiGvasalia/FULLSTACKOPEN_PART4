const dummy = (blogs) => {
  return 1;
}

const totalLikes = (blogs) => {
  if(blogs.length === 0) return 0;

  return blogs.reduce((a, b) => a + b.likes, 0);
}

const mostLiked = (blogs) => {
  if(blogs.length === 0) return {};

  let index = 0;
  blogs.forEach((blog, j) => {
    if(blog.likes > blogs[index].likes) index = j;
  });

  return {
    title: blogs[index].title,
    author: blogs[index].author,
    likes: blogs[index].likes
  }
}


module.exports = {
  dummy, totalLikes, mostLiked
}