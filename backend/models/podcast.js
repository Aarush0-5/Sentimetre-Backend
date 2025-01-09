import mongoose from "mongoose";
const podcastSchema = new mongoose.Schema(
    {
        ptitle : { type: String, required: true},
        purl : { type: String, required: true},
        pdescription : { type: String, required: true},
        pbg: {type: String, required:true},
    },
{
    timestamps: true
})

const Podcast = mongoose.model('Podcast', podcastSchema);
export default Podcast;