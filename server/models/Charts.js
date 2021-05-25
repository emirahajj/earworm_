import mongoose from 'mongoose';


const chartSchema = new mongoose.Schema({
  year: Number,
  rank: Number,
  album: {type: mongoose.Schema.Types.ObjectId, ref: 'album'}
});

const Chart = mongoose.model("charts", chartSchema);

export default Chart;