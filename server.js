const express = require("express");
const morgan = require("morgan");
const cors = require('cors')
const cookieParser= require("cookie-parser");
const csrf= require("csurf");
const numCPU = require('os').cpus().length;
const cluster = require('cluster');
const path = require('path')

const crypto = require('crypto');

const { PORT } = require("./config/index");

const authRoutes = require("./routes/auth.routes");
const jobsRoutes = require("./routes/jobs.routes");
const companyRoutes = require("./routes/company.routes");

const { PageNotFoundError, PageError } = require("./middlewares/error");
const qnaRoute = require("./routes/qna.routes");


// DATABASE CONNECTION

require('./helpers/init_mongo');

const app = express();
const port = PORT || 5000;

const middlewares = [
    morgan('dev'),
    express.json(),
    cors(),
    cookieParser(),
    /*csrf({
        cookie : true
    })*/
]

app.use(middlewares)

app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobsRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/qna', qnaRoute)

/*app.use(express.static('client/build'));
app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})*/

 
app.use(PageNotFoundError);
app.use(PageError);

app.listen(port, _=> {
    console.log('====================================');
    console.log(`server : ${process.pid} @ we are live on port ${port}`.toUpperCase());
    console.log('====================================');
})
