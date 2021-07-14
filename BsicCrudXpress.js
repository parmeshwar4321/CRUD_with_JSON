// xpress.js  is most popular framework of  node js
// its  a web application framework which provdie simple api
// we can build web applications,WEBSITES,backend

// WHY EXPRESS :
//1)its save time and better as compared to node
//2)code is small as well and 10x  fast & scalable

// creat file => type null > app.js

//post we share data to server

const xpress=require('express');
const students = require('./fakedata');
const db= require('./dbconnections')
const app=xpress()
app.use(xpress.json())
app.listen(8080,()=>{
    console.log('server running....');
});
app.get('/',(req,res)=>{

    res.json({"message":"api is working"})
})

app.get('/students',(req,res)=>{

    res.json(students)
})

app.post('/api',(req,res)=>{
const user={
    id: students.length + 1,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
}

students.push(user)
    res.json(user)
})

app.put('/api/:id' ,(req,res)=>{
    let id=req.params.id
    let last_name= req.body.last_name
    let first_name=req.body.first_name
    let email=req.body.email
let index=students.findIndex((student)=>{
    return(  student.id== Number.parseInt(id))
})
if(index>=0){
    let std=students[index]
    std.first_name=first_name
    std.last_name=last_name
    std.email=email
    res.json(std)
}
else{
    res.status(404)}
})


app.delete('/api/:id',(req,res)=>{

    let id=req.params.id

    let index=students.findIndex((student)=>{
        return(  student.id== Number.parseInt(id))
    })
    if(index>=0){
        let std=students[index]
        students.splice(index,1)
        res.json(std)
    }
    else{res.status(404)
    res.end}
})  