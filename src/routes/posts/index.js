const {Router} = require('express')

const {findAllPosts,
    createNewPost,
} = require('../../connectors/posts')

const route = Router()

route.get('/',async (req,res) => {
    const posts = await findAllPosts(req.query)
    if(posts)
    {
        res.status(200).send(posts)
    }
    else
    {
        res.status(404).send(
            {
                Error : "Can't retrive posts"
            }
        )
    }
})

route.post('/', async (req,res) => {
    const {userId, title, body} = req.body
    if((!userId) || (!title) || (!body))
    {
        return res.status(404).send({
            error : "Can't create a post"
        })
    }
    const post = await createNewPost(userId, title,body)
    res.status(201).send(post)
})

module.exports = {
    postsRoute : route
}