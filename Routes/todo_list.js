// added REST Route operations
const express = require('express')
const router = express()

router.get('/',(require, response) =>{
    response.send("List of all to-do items")
})

module.exports = router;
