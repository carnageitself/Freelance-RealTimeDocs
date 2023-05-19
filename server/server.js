const mongoose = require('mongoose');
const Document = require('./Document');

const DB_URL = 'mongodb+srv://Yash:GODCarNageYT@cluster0.nmw6ddc.mongodb.net/'


mongoose.connect(DB_URL, {
  useNewUrlParser: true,
}).then((data) => {
        console.log(`mongoDB connected with server ${data.connection.host}`);
    }).catch((er) => { console.log(er) })

const io = require("socket.io")(3001, {
  cors: {
    origin: `http://localhost:3000`,
    methods: ["GET", "POST"],
  },
});

const defaultValue = ""

io.on("connection", (socket) => {
  socket.on("get-document", async documentId => {
    const document = await findOrCreateDocument(documentId);
    socket.join(documentId);
    socket.emit("load-document", document.data);

    socket.on("send-changes", (delta) => {
      socket.broadcast.to(documentId).emit("recieve-changes", delta);
    });
    socket.on("save-document", async data => {
await Document.findByIdAndUpdate(documentId, { data })
    })
  });
});

async function findOrCreateDocument(id) {
    if (id == null) return

    const document = await Document.findById(id)
    if (document) return document
    return await Document.create({ _id:id, data: defaultValue })
}