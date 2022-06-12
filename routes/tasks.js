const express = require('express');
const router = express.Router();
const {getAllTasks,postAllTasks,getTask,updateTask,deleteTask} = require('../controllers/tasks')
router.route('/').get(getAllTasks).post(postAllTasks)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router
