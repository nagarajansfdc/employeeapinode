const express = require('express');
const PORT=3000;
const app=express();

const responseData = [
    {
        "EmployeeCode" : 101,
        "Name": "John",
        "Salary" : 300000,
        "Email":"john@ajskill.com",
        "Photo" : "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        "EmployeeCode" : 102,
        "Name": "Karthik",
        "Salary" : 400000,
        "Email":"karthik@ajskill.com",
        "Photo" : "https://images.pexels.com/photos/2381069/pexels-ph…jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "EmployeeCode" : 103,
        "Name": "Maccy",
        "Salary" : 600000,
        "Email":"Maccy@ajskill.com",
        "Photo" : "https://images.pexels.com/photos/580613/pexels-pho…jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "EmployeeCode" : 104,
        "Name": "Britto",
        "Salary" : 600000,
        "Email":"Britto@ajskill.com",
        "Photo" : "https://images.pexels.com/photos/2505026/pexels-ph…jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "EmployeeCode" : 105,
        "Name": "Maxwell",
        "Salary" : 500000,
        "Email":"maxwell@ajskill.com",
        "Photo" : "https://images.pexels.com/photos/859264/pexels-pho…jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        "EmployeeCode" : 106,
        "Name": "Stephony",
        "Salary" : 500000,
        "Email":"stephony@ajskill.com",
        "Photo" : "https://images.pexels.com/photos/3756679/pexels-ph…jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]




app.get('/',(req,res,next)=>{

    const jsonContent = JSON.stringify(responseData);
    res.send(jsonContent);

    //res.send('Welcome to Node js app');
})

app.listen(process.env.PORT|| PORT,()=>{
    console.log('Server is running on PORT',PORT);  
})

