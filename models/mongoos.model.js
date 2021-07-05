const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PracticeSchema = new Schema({
 
    name: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
      },
      img: String,
      level: String,
});

const PracticeModel = mongoose.model("favorite", PracticeSchema);

module.exports = PracticeModel;