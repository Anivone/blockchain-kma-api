const express = require('express')
const studentModel = require('./student-model.json');

const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
    res.redirect('/student');
});

app.get('/student', ((req, res) => {
    res.send(studentModel);
}))

app.listen(PORT, () => {
    console.log("Server is listening on port ", PORT);
})