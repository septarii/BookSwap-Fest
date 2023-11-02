const express = require("express");
const bodyParser = require("body-parser");
const utils = require("./utils");
app = express();
app.use(bodyParser.urlencoded({ extended: true }));
utils.resetDatabase();
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/post", (req, res) => {
  let nume = String(req.body.lname);
  let prenume = String(req.body.fname);
  let tel = String(req.body.telefon);
  let mail = String(req.body.email);
  const persoanaInserata = {
    lName: nume,
    fName: prenume,
    telephone: tel,
    email: mail,
  };
  res.status(200).send(`Ai fost inregistrat/a cu succes, ${nume} ${prenume}!`);
  utils.insertPerson(persoanaInserata);
});

app.listen(5500, () => {
  console.log("Server started on port 5500");
});
