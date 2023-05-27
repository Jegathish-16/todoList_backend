const express = require('express')
const router = express.Router()
const {getAllToDoItems} = require('../contorllers/todo_list')




router.route('/').get(getAllToDoItems)


module.exports = router;
