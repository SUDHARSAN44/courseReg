const mongoose = require('mongoose')
const express = require('express')
const courseModel = require('./server/models/courseModel')
const reviewModel = require('./server/models/reviewModel')

const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.urlencoded({extended:true}))

const connectDB=async()=>{await mongoose.connect('mongodb://localhost:27017/course')}

connectDB().then(()=>{
    console.log("DB connected")
}).catch(()=>{
    console.log("DB not connected")
})

app.get('/user/courseCatalog',async(req,res)=>{
    const data = await courseModel.find();
    res.json(data);
})

app.post('/admin/addCourse',async(req,res)=>{
    const data = req.body;
    course = new courseModel(data)
    course.save()
    res.redirect('http://localhost:3000/overview/'+course._id)
})

app.post('/user/addReview',async(req,res)=>{
    const data = req.body;
    course = new reviewModel(data)
    course.save()
    res.redirect('http://localhost:3000/#review')
})

app.get('/user/review',async(req,res)=>{
    const data = await reviewModel.find().sort({_id:-1}).limit(3);;
    res.json(data);
})




app.listen(2882,()=>{
    console.log('serving on port 2882')
})