const moviesModels = require("../models/moviesModels.js");


// get movie all
const getMovieController = async (req, res, next) => {
    try {
        const movie = await moviesModels.getMovieModels();

        res.status(200).json({ message: "Get Movies Succesfully", movie})
    } catch (error){
        console.log("Error getting movies", error.message);
        res.status(404).json({error: error.message})
    }
}

module.exports = { getMovieController }