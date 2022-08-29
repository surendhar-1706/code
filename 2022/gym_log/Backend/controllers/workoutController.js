const { default: mongoose } = require('mongoose')
const Workout = require('../models/workoutModel')

const createWorkout = async (req,res)=>{
    const {title,load,reps}= req.body
    try{
    const workout_data = await Workout.create({title,load,reps})
    res.status(200).json(workout_data)

    }
    catch(error){
        res.status(400).json({error:error.message})
    }


}

const getWorkout = async (req,res)=>{
    const workout_data = await Workout.find({}).sort({createdAt:-1})
    res.json(workout_data)
}

const getWorkoutById = async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Olunga id kudra'})
    }
    const workout_data = await Workout.findById(id)
    if(!workout_data){
        return res.json({error:"Olunga id solra"})
    }
    res.json(workout_data)
}





const deleteWorkout = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Olunga id kudra'})
    }
    const workout_data = await Workout.findOneAndDelete({_id:id})
    res.status(200).json(workout_data)
}

const updateWorkout = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Olunga id kudra'})
    }
    const workout_data = await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!workout_data){
        return res.json({error:"Olunga id solra"})
    }
    res.status(200).json(workout_data)
}



module.exports ={
    createWorkout,
    getWorkout,
    getWorkoutById,
    deleteWorkout,
    updateWorkout
}