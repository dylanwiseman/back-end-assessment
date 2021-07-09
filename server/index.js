const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

let fortunes = [
  "You are almost there",
  "You are going to have some new clothes",
  "You can see a lot just by looking",
  "Place special emphasis on old friendship",
  "Practice makes perfect"
]

const selfDestructMsg = [
  "Goodbye, friend",
  "Self destruct imminent",
  "See you on the other side, pal",
  "Adios, amigo",
  "MWAHAHAHA"
]

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});
app.get("/api/fortune", (req,res) => {
  let randomNum = Math.floor(Math.random()*fortunes.length)
  let randomFortune = fortunes[randomNum]

  res.status(200).send(randomFortune)
})
app.post("/api/fortune", (req,res) => {
  fortunes.push(req.body.newFortune)
  res.status(200).send(req.body.newFortune)
})

app.delete("/api/fortune", (req,res) => {
  let randomDestructNum = Math.floor(Math.random()*selfDestructMsg.length)
  let randomDestructMsg = selfDestructMsg[randomDestructNum]
  fortunes = []
  res.status(200).send(randomDestructMsg)
})

app.listen(4000, () => console.log("Server running on 4000"));
