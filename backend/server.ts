import * as fs from "fs";
import * as https from "https";
import * as express from "express";
import * as jsonServer from "json-server";

import { handleAuthentication } from "./auth";
import { handleAuthorization } from "./authz";

const server = express();

const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();
server.use(middlewares);

server.use(jsonServer.bodyParser);

server.post("/login", handleAuthentication);
server.use("/orders", handleAuthorization);

server.use(router);

const options = {
  cert: fs.readFileSync("./backend/keys/cert.pem"),
  key: fs.readFileSync("./backend/keys/key.pem"),
};

https.createServer(options, server).listen(3000, () => {
  console.log("JSON Server is running on https://localhost:3000");
});
