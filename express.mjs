"use strict";
// import express.
import express from "express";
// import file system.
import { readFile } from "fs";
// import path.
import { join } from "path";
// import file url to path.
import { fileURLToPath } from "url";

// express assigned to constant.
const app = express();

// dir name.
const __dirname = fileURLToPath(new URL(".", import.meta.url));

app.use(express.static("src"))
;
// the server is listen.
app.listen(3000, () => console.log("the server is listening to 3000..."))
