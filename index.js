const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expresLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');


//middlewares 
app.use(express.urlencoded());
app.use(cookieParser());


//use the assets folder for static files 
app.use(express.static('./assets'));

// use express layouts
app.use(expresLayouts);


//extrat style and scripts from sub pages into the layout

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//use express router 

app.use("/",require('./routes'));





//set up the view engine
app.set('view engine','ejs');
app.set('views', './views');
app.listen(port,function(err){
    if(err)
        console.log("Error Starting the server");
    
    console.log('Server has been started');
});