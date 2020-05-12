const express = require("express");

const photoRoutes = require("../controlers/photo.controler");

const router = express.Router();

router.get("/getFirstAlbum", photoRoutes.getFirstAlbum);
router.get("/getSecondAlbum", photoRoutes.getSecondAlbum);
router.get("/getThirdlbum", photoRoutes.getThirdAlbum);
router.get("/getFourthAlbum", photoRoutes.getFourthAlbum);
router.get("/getFifthAlbum", photoRoutes.getFifthAlbum);

module.exports = router;
