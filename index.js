const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmpModel = require('./Module/employee');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/company13')
    .then(()=>console.log('DataBase Connected'))
    .catch(err=>console.log('Database Connection Error:',err));
app.listen(5135,()=>{
        console.log('Server is Runing on port 5133');
});


app.get('/',(req,res)=>{
        EmpModel.find({})
        .then(employee=>res.json(employee))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.post('/createemployee',(req,res) =>{
        EmpModel.create(req.body)
        .then(employee =>res.status(201).json(employee))
        .catch(err =>res.status(400).json({error: err.message}));

});

app.delete('/deleteemp/:id', (req, res) => {
        const id = req.params.id; 
    
        EmpModel.findByIdAndDelete(id) 
            .then(employee => {
                if (!employee) {
                    return res.status(404).json({ error: 'User not found' });
                }
                res.status(200).json({ message: 'User deleted successfully' });
            })
            .catch(err => res.status(500).json({ error: err.message }));
    });
    