const express = require("express");
const app = express();
const PORT = 8000;

const hpCasts = {
  "Harry Potter": {
    age: 33,
    birthName: "Daniel Jacob Radcliffe",
    birthDate: "23 July 1989",
    birthLocation: "London, England",
  },
  "Hermione Granger": {
    age: 32,
    birthName: "Emma Charlotte Duerre Watson",
    birthDate: "15 April 1990",
    birthLocation: "Paris, France",
  },
  "Ron Weasley": {
    age: 34,
    birthName: "Rupert Alexander Lloyd Grint",
    birthDate: "24 August 1988",
    birthLocation: "Harlow, Essex, England",
  },
  "Draco Malfoy": {
    age: 34,
    birthName: "Thomas Andrew Felton",
    birthDate: "22 September 1987",
    birthLocation: "Epsom, Surrey, England",
  },
  unknown: {
    age: "unknown",
    birthName: "unknown",
    birthDate: "unknown",
    birthLocation: "unknown",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/api/:name", (req, res) => {
  const castName = req.params.name.toLowerCase();
  if (hpCasts[castName]) {
    res.json(hpCasts[castName]);
  } else {
    res.json(hpCasts["unknown"]);
  }
});
app.listen(PORT, () => {
  console.log(`Server running on porst ${PORT}`);
});
