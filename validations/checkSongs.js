const checkName = (req, res, next) => {
    const name = req.body.name;

    if (name) {

        return next()

    } else {

        res.status(400).json({ error: "Name is required" })
    }

}

const checkArtist = (req, res, next) => {
    const artist = req.body.artist;
    if (artist) {

        return next()
    } else {

        res.status(404).json({ error: "Artist is required" })
    }
}

const checkAlbum = (req, res, next) => {
    const album = req.body.album;
    if (album) {

        return next()
    } else {

        res.status(404).json({ error: "Album is required" })
    }
}

const checkTime = (req, res, next) => {
    const time = req.body.time;

    if (time) {
        return next()

    } else {
        res.status(404).json({ error: "Time is required" })
    }
}

const checkBoolean = (req, res, next) => {
    const fav = req.body.is_favorite;
    if (is_favorite == "true" ||
        is_favorite == "false" ||
        is_favorite == undefined ||
        typeof fav === "boolean") {
        next()
    } else {
        res.status(400).json({ error: "is_favorite must be a boolean" })
    }
};
const validateURL = (req, res, next) => {
    if (
        req.body.url.substring(0, 7) === "http://" ||
        req.body.url.substring(0, 8) === "https://"
    ) {
        return next();
    } else {
        res
            .status(400)
            .json({ error: `You forgot to start your url with http:// or https://` });
    }
};

module.exports = { checkName, checkArtist, checkAlbum, checkTime, checkBoolean, validateURL };