import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import Connection from './database/db.js'
import router from './routes/route.js';
const app = express();
app.use(cors())
const PORT =process.env.PORT || 5000 ;
const URL =process.env.MONGODB_URI || 'mongodb+srv://book_shelevs:1234@cluster0.zve0ilg.mongodb.net/';
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(PORT, () => console.log(`Server is running on this port: ${PORT}`));
app.get("/", (req, res) => {
    res.send("<h1>hurrah! Your Server is Running Now....");
  });
app.use('/', router)
Connection(URL);