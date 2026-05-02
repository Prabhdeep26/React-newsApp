require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const {
	newsApi_BaseURL,
	newApi_filters,
	newSearchApiFilter,
} = require("./utils/constants");

app.use(express.json());
app.use(cors());

app.get("/api/news/:userQuery", async (req, res) => {
	try {
		const response = await fetch(
			newsApi_BaseURL +
				req.params.userQuery +
				newApi_filters +
				process.env.NEWSAPI_KEY,
			{
				headers: {
					"User-Agent":
						"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				},
			},
		);
		const jsondata = await response.json();
		res.json(jsondata);
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
});

app.get("/api/search/:userQuery", async (req, res) => {
	try {
		const response = await fetch(
			newsApi_BaseURL +
				req.params.userQuery +
				newSearchApiFilter +
				process.env.NEWSAPI_KEY,
			{
				headers: {
					"User-Agent":
						"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				},
			},
		);
		const jsondata = await response.json();
		res.json(jsondata);
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
});

app.listen(3000, () => {
	console.log("server is listening");
});
