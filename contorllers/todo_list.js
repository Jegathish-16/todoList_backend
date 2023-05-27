const { request } = require("express");

//add include the post method
const getAllToDoItems = (require, response) =>{
    response.send("List of all to-do list")
}

const createNewToDoItem = (require, response) =>{
    response.json(request.body)
}

const getAToDoItem = (require, response) =>{
    response.send(`Getting item with id ${request.params.id}`)
}

const UpdateAToDoItem = (require, response) =>{
    response.send(`updating item with id ${request.params.id}`)
}

const deleteAToDoItem = (require, response) =>{
    response.send(`Deleting item with id ${request.params.id}`)
}

module.exports = {getAllToDoItems,createNewToDoItem,getAToDoItem,UpdateAToDoItem,deleteAToDoItem};