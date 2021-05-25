import mongoose from 'mongoose';

const genreScema = new mongoose.Schema({
    name: String,
    styles: {type: Array, "default": []},
});

genreScema.index({name: 1}, {unique: true});

const Genre = mongoose.model("genre", genreScema);

export default Genre;