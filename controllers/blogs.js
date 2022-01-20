const jwt = require('jsonwebtoken')
const blogsRouter = require('express').Router()
const Blog = require('../model/blog')
const User = require('../model/user')

blogsRouter.get('/', (request, response) => {
    Blog
      .find({})
      .then(blogs => {
        console.log("asdasd");
        response.json(blogs)
      })
})

blogsRouter.delete('/:id', async (request, response) => {
  const blog = await Blog.findById(request.params.id);

  if ( blog.user.toString() === request.params.id.toString() ){
    blog.delete();
    response.status(300);
  } else {
    response.status(400);
  }

})
  
blogsRouter.post('/', async (request, response) => {
    const body = request.body

    const token = request.token;
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
    const user = await User.findById(decodedToken.id)

    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes,
      user: user._id
    })
  
    const savedBlog = await blog.save()
    user.notes = user.blogs.concat(savedBlog._id)
    await user.save()

    response.json(savedBlog)
})

module.exports = blogsRouter;