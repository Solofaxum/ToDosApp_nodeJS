
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const TodoTask = require("./models/TodoTask");


const app = express();


app.use("/static", express.static("public"));
dotenv.config();
//Urlencoded will allow us to extract the data from the form by adding her to the body property of the request.
app.use(express.urlencoded({ extended: true }));

//connection to db
mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to db!");
    app.listen(3000, () => console.log("Server Up and running"));
});

//View enjine configeration
app.set("view engine", "ejs");

// app.get('/',(req, res) => {
//     res.send('Hello Solomon!');
//     });

//GET Method
// app.get('/', (req, res) => {
//     res.render('todo.ejs');
// });

// GET METHOD
app.get("/", (req, res) => {
    TodoTask.find({}, (err, tasks) => {
        res.render("todo.ejs", { todoTasks: tasks });
    });
});

//POST Metod
// app.post('/',(req, res) => {
//     console.log(req.body);
//     });

//POST METHOD
app.post('/', async (req, res) => {
    const todoTask = new TodoTask({
        content: req.body.content
    });
    try {
        await todoTask.save();
        res.redirect("/");
    } catch (err) {
        res.redirect("/");
    }
});

//UPDATE
app.route("/edit/:id")
    .get((req, res) => {
        const id = req.params.id;
        TodoTask.find({}, (err, tasks) => {
            res.render("todoEdit.ejs", { todoTasks: tasks, idTask: id });
        });
    })
    .post((req, res) => {
        const id = req.params.id;
        TodoTask.findByIdAndUpdate(id, { content: req.body.content }, err => {
            if (err) return res.send(500, err);
            res.redirect("/");
        });
    });

//DELETE
app.route("/remove/:id").get((req, res) => {
    const id = req.params.id;
    TodoTask.findByIdAndRemove(id, err => {
        if (err) return res.send(500, err);
        res.redirect("/");
    });
});
// app.listen(3000, () => console.log("Server Up and running"));