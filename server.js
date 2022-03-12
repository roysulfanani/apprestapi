const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// panggil route
var routes = require("./router");
routes(app);

app.listen(5000, () => {
    console.log(`Server started on port`);
});
