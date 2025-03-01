import Podcast from "../models/podcast.js";
import mongoose from "mongoose";


export const podcastget = async (req,res)=>{
    try{
        const data= await Podcast.find({});
       return res.status(200).json({message: "all the data received", data: data});
    }catch(error){
       return res.status(500).json({message: "Data could not be retrieved."})
    }
}

export const podcastpost = async (req, res) => {
     const { title, urly, urls, urla, description ,bg} = req.body;
      if (!title || !urly || !urls || urla || !description || !bg) {
        return res.status(400).json({ message: 'Please add all the details' });
      }
        const newPodcast = new Podcast({
          title,
          description,
          urly,
          urls,
          urla,
          bg,
        });
  
        try {
          await newPodcast.save();
          return res.status(200).json({ message: 'Podcast added successfully', data: newPodcast });
        } catch (error) {
          console.error('Error in adding the podcast', error.message);
          return res.status(500).json({ message: 'Server error' });
        }
  };
  

export const podcastput = async(req,res)=> {
    const {id} = req.params;
    const podcast = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message : "Incorrect ID"})
    }
    try {
         const updatedPodcast = await Podcast.findByIdAndUpdate(id, podcast, {new:true});
         if (!updatedPodcast) {
            return res.status(404).json({ message: "Podcast not found" });
        }
        return res.status(200).json({message : "Podcast updated successfully!", data: updatedPodcast})
    } catch (error) {
       return res.status(500).json({message: "Podcast could not be updated due to interal server error :("})
    }
}

export const podcastdelete = async (req,res) => {
    const{id}= req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "Incorrect ID" });
    }
    try {
        const deletedPodcast= await Podcast.findByIdAndDelete(id);
        if (!deletedPodcast) {
            return res.status(404).json({ message: "Podcast not found" });
        }
       return res.status(200).json({message: "Podcast successfully deleted"})
    }catch(error){
        return res.status(404).json({message: `Podcast with id: ${id} does not exist`})
    }

}