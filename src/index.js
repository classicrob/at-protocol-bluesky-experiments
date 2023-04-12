"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var at = require("@atproto/api");
// const path = require("path")
var glob = require("glob");
//
// Load environment variables from .env file
dotenv.config();
var USERNAME = process.env.USERNAME;
var PASSWORD = process.env.PASSWORD;
if (!USERNAME) {
    throw new Error("USERNAME not found in .env file");
}
if (!PASSWORD) {
    throw new Error("PASSWORD not found in .env file");
}
var agent = new at.BskyAgent({
    service: 'https://bsky.app/',
    persistSession: function (evt, sess) {
        // store the session-data for reuse 
    }
});
await agent.login({ identifier: USERNAME, password: PASSWORD });
agent.getProfile({ actor: USERNAME });
// await agent.resumeSession(savedSessionData)
// await agent.createAccount({
//   email: 'alice@mail.com',
//   password: 'hunter2',
//   handle: 'alice.example.com'
// })
// Access the OPENAI_API_KEY from the .env file
