const express = require("express");

const app = express();

var port = process.env.PORT || 80;

app.listen(port, () => {
	console.log("Server ready");
});


app.get('/ec-stats/', (req, res) => {
	res.send("HELLO WORLD!");
	});

app.use("/", express.static("./public"));