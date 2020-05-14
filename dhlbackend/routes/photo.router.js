const express = require("express");

const photoRoutes = require("../controlers/photo.controler");

const router = express.Router();

router.get("/getAlbums", photoRoutes.getAlbums);

module.exports = router;
