const express = require('express');
const reviews = express.Router({ mergeParams: true });

const { getSong } = require("../queries/song.js");
//Queries

const {
    getAllReviews,
    getReview,
    newReview,
    deleteReview,
    updateReview
} = require("../queries/reviews.js");

//Index
reviews.get("/", async (req, res) => {
    const { songs_id } = req.params;
    const allReviews = await getAllReviews(songs_id);
    const song = await getSong(songs_id);

    if (song.id) {
        res.status(200).json({ ...song, allReviews });
    } else {
        res.status(500).json({ error: "Server error" });
    }
});

//SHOW

reviews.get("/:id", async (req, res) => {
    const { songs_id, id } = req.params;
    const review = await getReview(id);
    const song = await getSong(songs_id);

    if (review) {
        res.json({ ...song, review });

    } else {
        res.status(404).json({ error: "Not Found" });
    }
});

//UPDATE

reviews.put("/:id", async (req, res) => {
    const { id, songs_id } = req.params;
    const updatedReview = await updateReview({ songs_id, id, ...req.body });

    if (updatedReview.id) {

        res.status(200).json({ updatedReview });

    } else {
        res.status(404).json("Review not found");

    }
});

reviews.post("/", async (req, res) => {
    const { songs_id } = req.params;
    const review = await newReview({ songs_id, ...req.body });
    res.status(200).json(review);
});

//DELETE

reviews.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedReview = await deleteReview(id);
    (deletedReview.id) {
        res.status(200).json(deletedReview);

    } else {
        res.status(404).json({ error: "Review not found" });
    }
});
