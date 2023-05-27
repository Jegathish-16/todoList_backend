const express = require('express')
const router = express.Router()
const {getAllToDoItems,
    createNewToDoItem,
    getAToDoItem,
    UpdateAToDoItem,
    deleteAToDoItem} = require('../contorllers/todo_list')




router.route('/').get(getAllToDoItems).post(createNewToDoItem)
router.route('/:id').get(getAToDoItem).patch(UpdateAToDoItem).delete(deleteAToDoItem)


module.exports = router;
