// PORT
const PORT = process.env.PORT || 4000;

// Dependencies
const express = require("express");
const cors = require("cors");

// App Object
const app = express();

// Controllers
const allergiesController = require("./controllers/allergies");
const appointmentsController = require("./controllers/appointments");
const careTeamController = require("./controllers/careTeam");
const familyHistoryController = require("./controllers/familyHistory");
const healthConditionsController = require("./controllers/healthConditions");
const hospitalizationsController = require("./controllers/hospitalizations");
const medicationsController = require("./controllers/medications");
const socialHistoryController = require("./controllers/socialHistory");
const surgeriesController = require("./controllers/surgeries");
const vaccinationsController = require("./controllers/vaccinations");

// Environment Variable
require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/allergies", allergiesController);
app.use("/appointments", appointmentsController);
app.use("/careteam", careTeamController);
app.use("/familyhistory", familyHistoryController);
app.use("/healthconditions", healthConditionsController);
app.use("/hospitalizations", hospitalizationsController);
app.use("/medications", medicationsController);
app.use("/socialhistory", socialHistoryController);
app.use("/surgeries", surgeriesController);
app.use("/vaccinations", vaccinationsController);

app.get("/*", (req, res) => {
    res.json({ comment: "You've reached an incorrect URL." });
});

// Listen
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});