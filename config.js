const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? '' : process.env.SESSION_ID,
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'false' : process.env.ONLY_ME,
ADDRESSES: process.env.ADDRESSES === undefined ? '120363296950588265@g.us,120363235069493573@g.us' : process.env.ADDRESSES,
ALIVE: process.env.ALIVE === undefined ? `Hello im alive now !!` : process.env.ALIVE,
OWNER: process.env.OWNER === undefined ? `94722617699` : process.env.OWNER,
PREFIX: process.env.PREFIX === undefined ? '@' : process.env.PREFIX,
FOOTER: process.env.FOOTER=== undefined ? '‌ꜱᴀᴄʜɪʙᴏᴛ': process.env.FOOTER,
TYPE : process.env.TYPE=== undefined ? 'ad': process.env.TYPE, //ad,link,normal,adgroup,linkgroup
GROUP: process.env.GROUP=== undefined ? '': process.env.GROUP,  // channel link , group link, comiunity link, chat link 
LOGO: process.env.LOGO === undefined ? `https://yt3.googleusercontent.com/ytc/AIdro_mUxbffnwGvic3HlWavc27VCFYNt4uLZJnpUB8CLJbSac8=s900-c-k-c0x00ffffff-no-rj` : process.env.LOGO
};
