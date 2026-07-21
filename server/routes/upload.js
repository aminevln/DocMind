const express = require("express");
const multer = require("multer");
const path = require("path");

const { uploadFile } = require("../controllers/uploadController");

const router = express.Router();

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },

    filename: (req, file, cb) => {

        const uniqueName =
            Date.now() +
            "-" +
            Math.round(Math.random() * 1e9) +
            path.extname(file.originalname);

        cb(null, uniqueName);

    }

});

const upload = multer({

    storage,

    fileFilter: (req, file, cb) => {

        if (file.mimetype !== "application/pdf") {
            return cb(new Error("Only PDF files are allowed."));
        }

        cb(null, true);

    }

});

router.post("/", upload.single("pdf"), uploadFile);

module.exports = router;