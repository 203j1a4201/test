const express = require('express');
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsePayload=createTodo.safeParse(createPayload);
    if (!parsePayload.success) {
     res.status(400).json({ 
        msg: "Invalid request" });
        return;
    }
    await todo.create({
        title: parsePayload.data.title,
        description: parsePayload.data.description,
        completed: false
    })
    res.json({
        msg: "Todo created successfully"
    })
});

app.get('/todos', async (req, res) => {
    const todos = await todo.find({});
    res.json({
        todos: []
    })
  });
  
app.put("/completed", async (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    
    await todo.update({
        _id: req.body.id
    }, {
      completed: true  
    })

    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);