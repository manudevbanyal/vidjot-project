
// importing modules
const express = require('express');
const app = express();
const port = process.env.PORT || 3000 ;
const exphbs = require('express-handlebars');
const path =  require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');


// importing local modules
const index = require('./routes/index').router;
const about = require('./routes/about').router;
const idea = require('./routes/idea').router;
const user = require('./routes/user').router;

//configuring database
const db = require('./config/database')

//Body Parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//connect flash middleware
app.use(flash());

//express session middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
     }))

     app.use(passport.initialize());
     app.use(passport.session());

///connecting tothe database 
mongoose.connect(db.mongoURI,{
    useNewUrlParser:true
})
.then(()=>console.log('connected successfully'))
.catch(err=>console.log(err))
 
// setting view engines
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//global variables 
app.use((req,res,next)=>{

    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;

        next();
})


// using routes middlewares
app.use(index);
app.use(about);
app.use(idea);
app.use(user)
app.use((req,res)=>{
    res.render('error')
});


// listening to the port 
app.listen(port,()=>console.log(`server started on localhost://${port}`))

