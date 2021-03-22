# ToDosApp_nodeJS
# To-do List App with Node.js and MongoDB
* Basic Requairments
* MongoDB:
* REST:
* Node.js:
* Express :
* CRUD:
* VS Code or any other code editor

# Step 1: install Node.js
# step 2: Create new repository in your github
# Step 3: clone your new repository to your VS Code
# step 4: Excute your VS Code terminal with ** npm init **
# Step 5: Install the required packages, Express, mongoose, ejs, dotenv and nodemon
* npm install --save express mongoose ejs dotenv
* npm install --save-dev nodemon
* after this go to package,json and update "scripts": {"start":"nodemon index.js} this will help you to start nodemon easily
# Step 6: Create your index.js file and initialize your server with "npm init" in your terminal
* const express = require("express");
const app = express();
app.listen(3000, () => console.log("Server Up and running"));
* Open the terminal and initialize your server using npm init
# Step 7: add get method and set your ejs view as template
* app.set("view engine", "ejs");
* app.get('/',(req, res) => {
res.send('Hello World!');
});
* Now we save and check the http://localhost:3000/ to see if it´s working.
# Step 8: create files todo.ejs and todoEdit.ejs under view folder
# Step 9: Creat stylesheet folder and style.css file inside it.