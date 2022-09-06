const multer = require('multer'),
path = require('path')

const pathToFiles = path.join(__dirname, '../store')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, pathToFiles);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${path.extname(file.originalname)}`);
    }
})

const uploadFile = multer({storage});

module.exports = uploadFile;