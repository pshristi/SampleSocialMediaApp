const {Users} = require('../db/models')
const {getRandomUserName} = require('../utils/username')

async function createAnonUser(){
    const user = await Users.create({
        username : getRandomUserName()
    })

    return user
}

async function getUserById(id){
    if (!id) throw new Error('user id not provided')
    if (typeof id !== 'number') throw new Error('user id should be integer')
  
    return await Users.findOne({where : 
        {id : id}
    })
}

async function getUserByUsername(username){
    return await Users.findOne({where :
    {
        username : username
    }
})  
}


module.exports = {
    createAnonUser,
    getUserById,
    getUserByUsername
}

//Testing function code
/*
async function task()
{
    console.log(await createAnonUser())
    console.log("-----------------------")
    console.log(await createAnonUser())
    console.log("-----------------------")
    console.log(await createAnonUser())
    console.log("-----------------------")
}

task()*/