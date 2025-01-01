//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349023267933";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0dXMGtvSjVIaGV5amhvSlR5WnhTZERKc2hPeUZNaDJJaVlBQVdHY2lFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTExKNmRSWjZJQmxJT3RPNit3dEFpVHBSN05wNHZoSnRna0Q1U3BKM0VFTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQjE5UjVPTVVoVzJvQzRHYmoya0VHRVNkcFRQZUNoNFlHc0NIUVJUTTJZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpNHd1SmRGdlZ5SHpYVWdFZVRZZlg3ZXIxekdjeGNCc3Z6MWJkY0hXUVIwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNKRGtoZ0xlLzBGTHhtK2VsMHI0YVFzTDdjaEppNkd2eENwc1R1WjZrMFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVNVHVtN0JsODd0UW1ERlFkVmJacG5BTU5ZMko3Z0xtbUlzVG5wUDNYUjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU83THJxSUVtcWRKWCtCNFo0cjhQdjliTWd0YzFqWDBLSWhZcHA2ZjBHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVFWcEYwdzZadXFHeFBSRUlBSmt6ZU5zM2RkNFpYeXI5TFppazVGK25WMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhIcDlLNWF3Q21IYStJc3JmajZiZFpJT1g3MENPczVsSU1WNFJlSC9hQ2dDTXhPVDVBMExWQmRNL3ZHL3IxdE5xWVJXWW4ra3JOSWF4bWtkYW1lK0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NCwiYWR2U2VjcmV0S2V5IjoiL0REYmNDL3dEejFRdlJJb0FXSEdnSloxWU9zWTBVcUxOZkUvNXhYVWE1UT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTmZhOWt4dERRcEd5OWg3cWtycDV3QSIsInBob25lSWQiOiI5MDg1NTE3Yy1hM2ZhLTQ5NzctYWNlNy03MWVhYmIwNGE4MmQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0tDeCt4cE5qdWZWN1JDWTZoTUlJOUhncktnPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhqSXI4bVdkQTRlTEpEa1o5MUE1OXR4eFgxbz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJWWFcxNExFWCIsIm1lIjp7ImlkIjoiMjM0OTAyMzI2NzkzMzo2NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTYW1za2lkIFR2In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLU1luZjRERUpUTTA3c0dHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJkTnorSmhDNldwaUdHVG8wVkZNd09QL0hWRG9uSHhGQVJWUGUwcFBBQlJRPSIsImFjY291bnRTaWduYXR1cmUiOiJweGN3dzVPYml4dGw3ZE41RktWaHBld25RWU1FcVpTWXZWWE9rbWd4Z3liSHdUMHpQRDBzblNPTnJMUTkzNTMvL2dxdExiQVlkajZrM0ptcXBvbnlBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidUQwUFlrUXRPS01QMmloY3dvRENDOTl4TjhBbmpBVCtFMGticUUzQjVxTWdZeHpVc1RzOGpWRVJic3c4R1grbE9aM2QwVzFXMVllMTN5MXZRV1d1QVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDIzMjY3OTMzOjY2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhUYy9pWVF1bHFZaGhrNk5GUlRNRGoveDFRNkp4OFJRRVZUM3RLVHdBVVUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzU3MTQzMzgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTjVHIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`KING_DAVID™`",
  author: process.env.PACK_AUTHER || "KING_DAVID",
  packname: process.env.PACK_NAME || "KING_DAVID",
  botname: process.env.BOT_NAME || "KING_DAVID",
  ownername: process.env.OWNER_NAME || "KING_DAVID",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
