var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// MI CODIGO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const fileManager = require('./middlewares/uploadFileManager');

app.post('/api/fileanalyse', fileManager.single('upfile'), (req, res, next) => {
    const {originalname, mimetype, size} = req.file;

    // console.log(req.files);
    return res.json({
      name: originalname,
      type: mimetype,
      size,
    });
})

// MI CODIGO ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
