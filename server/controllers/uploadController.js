const { extractTextFromPdf } = require("../services/pdfService");

const uploadFile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No PDF uploaded.",
            });
        }

        const text = await extractTextFromPdf(req.file.path);

        console.log("\n================ PDF CONTENT ================\n");
        console.log(text);
        console.log("\n=============================================\n");

        return res.status(200).json({
            success: true,
            message: "PDF uploaded and parsed successfully!",
            file: {
                originalName: req.file.originalname,
                filename: req.file.filename,
                size: req.file.size,
            },
            preview: text.substring(0, 500),
        });

    } catch (error) {
        console.error("UPLOAD ERROR:");
        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message,
            stack: error.stack,
        });
    }
};

module.exports = {
    uploadFile,
};