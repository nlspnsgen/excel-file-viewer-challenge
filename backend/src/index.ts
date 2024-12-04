import express from "express";
import multer from "multer";
import cors from "cors";
import fs, { write } from "fs";
import util from 'util';
import {read, utils} from 'xlsx';

const readDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

const app = express();
app.use(cors());



app.post('/upload', upload.single('spreadsheet'), async (req, res) => {
    console.log("upload wurde ausgeführt: ", req.file);
    res.send("done");
})

app.get("/files", async (req, res) =>  {
    const directory = await readDir("uploads");
    res.send(directory);
});

app.get("/file/:filename", async (req, res) => {
    const file = await readFile(`uploads/${req.params.filename}`);
    const wb = read(file);
    const ws = wb.Sheets[wb.SheetNames[0]];
    const json = utils.sheet_to_json(ws);
    res.send(json.slice(0,5));
})

app.listen(3000, () => {
    console.log("app listening on port 3000");
})