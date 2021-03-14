import mongoose from 'mongoose';

const artistSchema = new mongoose.Schema({
    name: String,
    genres: {type: Array, "default": []},
    albums: [{type: mongoose.Schema.Types.ObjectId, ref: 'Album'}]
});

artistSchema.index({name: 1}, {unique: true})
const Artist = mongoose.model("artist", artistSchema)

export default Artist;