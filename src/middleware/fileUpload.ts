import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    try {
      const uploadPath = path.join(__dirname, "../../src/public");
      console.log("Uploading file to:", uploadPath);
      cb(null, uploadPath);
    } catch (error) {
      console.error("Error in destination function:", error);
      cb("Error setting destination", error);
    }
  },
  filename: (req, file, cb) => {
    try {
      const timestamp = new Date().getTime();
      const ext = path.extname(file.originalname);
      const filename = `${timestamp}${ext}`;
      console.log("Generated filename:", filename);
      cb(null, filename);
    } catch (error) {
      console.error("Error in filename function:", error);
      cb("Error generating filename", error);
    }
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 10, // 10 MB
  },
});

module.exports = {
  upload: upload,
};
