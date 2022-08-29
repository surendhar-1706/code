const express = require('express')

const router = express.Router()

const { createWorkout, getWorkout, getWorkoutById, deleteWorkout, updateWorkout} = require('../controllers/workoutController')

router.get('/',getWorkout)
router.get("/:id",getWorkoutById)
router.post("/",createWorkout)
router.delete("/:id",deleteWorkout)
router.patch("/:id",updateWorkout)


module.exports = router