const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const eventModel = require("./models/event");

const PORT = process.env.PORT || 5001;

// database credentials should be stored in environment variables 

const database =
  "mongodb+srv://rihaan:nasirulahmed@cluster0.o1csf.mongodb.net/notesapp?retryWrites=true&w=majority";

const router = express.Router();
const app = express();
app.use(express.json());
app.use(cors());

// routes && middlewares
app.use("/events", (req, res) => {
  eventModel.find({}, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//adding events

// const addEvents = router.post('/', async (req, res) => {
//     const {title, body, date,image } = req.body;
//     console.log(req.body);
//     const event = new eventModel({
//         title: title,
//         body: body,
//         date: date,
//         image: image
//     });

//     try {
//        const saveEvent = await event.save();
//        res.status(200).send(saveEvent);
        
//     } catch (error) {
//         res.status(400).send(e);
//     }
// })

// app.use("/add-event", addEvents);

// connecting to the database and server
mongoose
  .connect(database, {})
  .then(() => {
    console.log("connected to db");
    app.listen(PORT, () => {
      console.log("server is up and running");
    });
  })
  .catch((e) => console.log(e));
