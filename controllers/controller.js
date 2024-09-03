const todoModel = require('../models/volunterr/model')

let todoStorage = [];

const defaultController = async (req , res) =>{
    // let data = await todoModel.find({});
    res.render('index',{todos:todoStorage});
}
let count = 1;

const addTodoController = async(req , res) => {
    console.log(req.body.todo);
    const data = {
        fname: req.body.fname,
        email: req.body.email,
        number: req.body.number,
        skill: req.body.skill
    }
    let todo = new todoModel(data);
    await todo.save();
    console.log("todo",todo);
    
    res.redirect('/');
}
const readTodoController =async (req , res) => {
    console.log("read page");
    let data =await todoModel.find({});
    res.render('read',{todos:data});
}
const editTodoController =async (req , res)=> {
    console.log("edit controller");
    const id = req.params.id;
    let data =await todoModel.findOne({_id:id});
    console.log('SingleRec',data);
    console.log("edit controller");
    res.render('edit',{data});
    
}
const updateTodoController =async (req , res) => {
    console.log("updatedRec",req.params.id);
    let updatedTodo = await todoModel.findByIdAndUpdate(req.params.id,req.body,{name:true})
    console.log("updated todo",updatedTodo);
    res.redirect('/');     
}
const deleteTodoController =async (req , res) => {
    console.log("delete controller");
    let DeletTodo = await todoModel.findByIdAndDelete(req.params.id);
    console.log("delet todo >>" , DeletTodo);
    res.redirect('/read');
}
module.exports = {defaultController, addTodoController,editTodoController,updateTodoController,deleteTodoController,readTodoController};