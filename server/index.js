const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
//const { Server } = require("socket.io");
//const io = new Server(server);
const io = require("socket.io")(server, {
    /*cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }*/
  });

const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');

let videos = {}

// enable files upload
app.use(fileUpload({
  createParentPath: true
}));
//add other middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

var fs = require('fs');

app.get('/', (req, res) => {//console.log('/')
  res.sendFile(__dirname + '/index.html');
});
/*
main.bc152dc2.css
main.bc152dc2.css.map
main.70c7e385.js
main.70c7e385.js.LICENSE.txt
main.70c7e385.js.map
chamadadevideo.e8d2c85c2c73cee3879f.png
setaenviar.2fb5c0c5dbeb9fd15d60.png
TELAPEQUENA.f2020e4d3125d3e29aff.jpg
*/

app.get('/static/*', (req, res) => {//console.log(req.url)
  res.sendFile(__dirname + req.url);
});


app.get('/videoAdmin/:id', (req, res) => {//console.log('/video/:id')
  let fileId = req.params.id
  //console.log("fileId: "+fileId)
  let filePath = __dirname + `/uploads/${fileId}`
  //console.log("filePath: "+filePath)
  res.sendFile(filePath);
});

app.get('/videoVisitor/:id', (req, res) => {//console.log('/video/:id')
  let fileId = req.params.id
  //console.log("fileId: "+fileId)
  let filePath = __dirname + `/uploads/${videos[fileId]}`
  //console.log("filePath: "+filePath)
  res.sendFile(filePath);
});

app.post('/upload', async (req, res) => {//console.log('/upload')
  try {
      if(!req.files) {
          res.send({
              status: false,
              message: 'No file uploaded'
          });
          //console.log("!req.files")
      } else {
          //console.log("req.files")
          //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
          let avatar = req.files.avatar;
          //console.log("avatar")
          //console.log(avatar)
          //Use the mv() method to place the file in the upload directory (i.e. "uploads")
          let codigo = Math.random()
          videos[codigo] = avatar.name
          avatar.mv('./uploads/' + avatar.name);

          //send response
          let response = {
            status: true,
            message: 'File is uploaded',
            codigo: codigo,
            data: {                
                name: avatar.name,
                mimetype: avatar.mimetype,
                size: avatar.size
            }
        }
          //console.log(response)
          res.send(response);
      }
  } catch (err) {
      res.status(500).send(err);
  }
});

io.on('connection', (usuario) => {
  //console.log('a user connected');

  usuario.on('disconnect', () => {
    //console.log('user disconnected');
  });

  usuario.on('chatA', (data) => {
    io.emit('chatB', data);
  });

  usuario.on('videoA', (data) => {
    //console.log(data)
    io.emit('videoB', data);
  });

 
});

server.listen(80, () => {
  console.log('listening on localhost/');
});