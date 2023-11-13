const express = require('express');
const songs = express.Router();
const reviewController = require("./reviewController");
songs.use("/:songs_id/reviews", reviewController);

const { getAllSongs, getSong, createSong, deleteSong, updateSong } = require('../queries/song');
const { checkName, checkArtist, checkAlbum, checkTime, checkBoolean, validateURL } = require('../validations/checkSongs');


songs.get('/', async (req, res) => {
    const allSongs = await getAllSongs();
    if (allSongs[0]) {
        res.status(200).json(allSongs)

    } else {
        res.status(500).json({ error: "server error" });
    }
});

songs.get("/:id", async (req, res) => {
    const id = req.params.id;
    const oneSong = await getSong(id);

    if (oneSong.id) {
        res.status(200).json(oneSong)

    } else {
        res.status(404).json({ error: "Not found" })
    }
})

songs.post("/", checkName, checkArtist, checkAlbum, checkTime, checkBoolean, validateURL, async (req, res) => {
    try {
        const song = await createSong(req.body);
        res.json(song)
    } catch (error) {
        res.status(400).json({ error: error });
    }
});

songs.delete("/:id", async (req, res) => {
    const { id } = req.params;

    const deletedSong = await deleteSong(id);

    if (deletedSong.id) {
        res.status(200).json(deletedSong)

    } else {
        res.status(404).json({ error: "Song not found" })
    }

})

songs.put("/:id", checkName, checkArtist, checkAlbum, checkTime, checkBoolean, validateURL, async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const updatedSong = await updateSong(id, body)

    if (updatedSong.id) {

        res.status(200).json(updatedSong)
    } else {

        res.status(404).json({ error: "Song not found" })

    }
});

module.exports = songs;