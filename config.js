const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/BAD_BOY-MD/BAD_BOY-MD/blob/main/images/BAD_BOY-MD.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 BAD_BOY-MD Is Alive Now😍*",
BOT_OWNER: '94774756599',  // Replace with the owner's phone number



};
