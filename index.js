import express from "express";
import bodyParser from 'body-parser';



const app = express();
const PORT = 5010;

app.use(bodyParser.json());

//routes
app.get('/', (req, res) => {
    res.send([{ message: "Auth failed!" }]);
});

app.get('/test', (req, res) => {
    res.send("API working perfectly!");
});


app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));