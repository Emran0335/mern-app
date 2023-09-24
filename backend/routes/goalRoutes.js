const express = require('express');
const router = express.Router();

const {
getGoals,
setGoal,
updateGoal,
deleteGoal
} = require('../controllers/goalController')