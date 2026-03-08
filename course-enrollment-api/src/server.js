const express =require('express')
const checkDatabaseConnection =require('./utils/dbHealthCheck');
const {course} =require('./routes/courses');

const app = express();
const PORT=process.env.PORT || 4678;

app.use ('/course', courses) 
app.use (logger)
(async ()=>{
    const isDbConnected = await checkDatabaseConnection();
    if (!isDbConnected){
        console.log("Server is not started due to DB connection failure");
        process.exit();
    }
    app.listen(PORT ,()=>{
        console.log(`Server is listening on port:${PORT}`)
    })
})();