const {Users, Posts} = require('../db/models')

async function createNewPost(userId, title, body)
{
    const post = await Posts.create({
        title,
        body,
        userId
    })
    return post;
}

async function findAllPosts(query)
{
    let where = {}
    if (query.userId) { where.userId = query.userId }
  
    const posts = await Posts.findAll(
        {include : [Users],
        where}
    )
    return posts;
}

module.exports = {
    createNewPost,
    findAllPosts
}

/*
async function task()
{
    
    console.log(await createNewPost(
        1,
        "This is sample post 1",
        "The body for sample post 1 goes here"))
    console.log(await createNewPost(
        2,
        "This is sample post 2",
        "The body for sample post 2 goes here"))
   //
   const posts = await showAllPosts()
   for (let p of posts)
   {
       console.log(`${p.title} \n author : ${p.user.username} \n ${p.body} \n ================\n`)
   } 
} 

task()
*/


