"use strict";
exports.__esModule = true;
var fs = require("fs");
var https = require("https");
var express = require("express");
var jsonServer = require("json-server");
var auth_1 = require("./auth");
var authz_1 = require("./authz");
var server = express();
var router = jsonServer.router("db.json");
var middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.post("/login", auth_1.handleAuthentication);
server.use("/orders", authz_1.handleAuthorization);
server.use(router);
var options = {
    cert: fs.readFileSync("./backend/keys/cert.pem"),
    key: fs.readFileSync("./backend/keys/key.pem")
};
https.createServer(options, server).listen(3000, function () {
    console.log("JSON Server is running on https://localhost:3000");
});
