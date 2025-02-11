import express from "express";
const app = express();

app.get('/', (req,res)=>{
    res.send("server is ready")
})
//get a list of five jokes
app.get('/jokes',(req,res) => {
    const jokes =[
        {
            id:1,
            title:"A Joke",
            content:"This is a joke"
        },
        {
            id:2,
            title:"Another Joke",
            content:"This is a joke"
        },
        {
            id:3,
            title:"third Joke",
            content:"This is a joke"
        },
        {
            id:4,
            title:"fourth Joke",
            content:"This is a not a joke "
        },
        
    ]
    res.send(jokes);
})


const port = process.env.PORT || 3000;

app.listen(port , () => {
    console.log(`server at http:/localhost:${port}`)
});