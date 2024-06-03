const { getAll, create, getOne, destroy, update } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();
// static routes
userRouter.route("/")
		.get(getAll)
        .post(create)
//dynamic routes    
userRouter.route('/:id')
        .get(getOne)
        .delete(destroy)
        .put(update)  // gotta make sure that in postman it is set as put and not get 

module.exports = userRouter;