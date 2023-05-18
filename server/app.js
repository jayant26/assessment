const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const cors =require('cors');
// const router = express.Router();
const app=express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  });

const registerRoutes=require('./routes/register');
mongoose.connect("mongodb+srv://<username>:<password>@node-shop-app.ke8idrm.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true

});
app.use('/investor',registerRoutes);




app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    // it will forward the error request
    next(error);

});

// it will handle all type of error
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

// it will used to export app.js so that we can use it in server.js
// module.exports=app;
const port = 3001
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});