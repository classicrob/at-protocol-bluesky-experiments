import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";
import * as at from '@atproto/api';

// const path = require("path")
const glob = require("glob");
//
// Load environment variables from .env file
dotenv.config();

// create a .env file, and add:
// USERNAME = "username.bsky.social"
// PASSWORD = "password"

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

if (!USERNAME) {
  throw new Error("USERNAME not found in .env file");
}

if (!PASSWORD) {
  throw new Error("PASSWORD not found in .env file");
}


const agent = new at.BskyAgent({
  service: 'https://bsky.app/',
  persistSession: (evt: at.AtpSessionEvent, sess?: at.AtpSessionData) {
    // store the session-data for reuse 
    
  }
})
await agent.login({identifier: USERNAME, password: PASSWORD})
agent.getProfile({actor: USERNAME})

// creating richtext
// const rt = new at.RichText({text: 'Hello @alice.com, check out this link: https://example.com'})
// await rt.detectFacets(agent) // automatically detects mentions and links
// const postRecord = {
//   $type: 'app.bsky.feed.post',
//   text: rt.text,
//   facets: rt.facets,
//   createdAt: new Date().toISOString()
// }




// await agent.resumeSession(savedSessionData)
// await agent.createAccount({
//   email: 'alice@mail.com',
//   password: 'hunter2',
//   handle: 'alice.example.com'
// })

// Access the OPENAI_API_KEY from the .env file
