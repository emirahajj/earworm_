import mongoose from 'mongoose';

const albumSchema = new mongoose.Schema({
    title: String,
    artist: String,
    img: String,
    genre: String,
    duration: Number,
    release: Number,
    styles: {type: Array, "default": []},
    chart_positions: {type: Array, "default": []},
    awards: {type: Array, "default": []}
});

albumSchema.index({title: 1, artist: 1}, {unique: true});

const Album = mongoose.model("album", albumSchema);

export default Album;