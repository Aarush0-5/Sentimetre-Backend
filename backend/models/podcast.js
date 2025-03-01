import mongoose from "mongoose";
const podcastSchema = new mongoose.Schema(
    {
        title : { type: String, required: true},
        urly : { type: String, required: true},
        urls : { type: String, required: true},
        urla : { type: String, required: true},
        description : { type: String, required: true},
        bg: {type: String, required:true},
    }
)

const Podcast = mongoose.model('Podcast', podcastSchema);
export default Podcast;