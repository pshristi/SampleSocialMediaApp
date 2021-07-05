const {Users} = require('../db/models')
const {getRandomUserName} = require('../utils/username')

async function createAnonUser(){
    const user = await Users.create({
        username : getRandomUserName()
    })

    return user
}

async function getUserById(id){
    return await Users.findOne({where : id})
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