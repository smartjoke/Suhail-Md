const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_07_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTU2LFxuICAgICAgICA2MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA5MixcbiAgICAgICAgMTIzLFxuICAgICAgICA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDg2LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDU3LFxuICAgICAgICA0MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI0LFxuICAgICAgICA2OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjExLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMzEsXG4gICAgICAgIDczLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDMxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDkyLFxuICAgICAgICAyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMixcbiAgICAgICAgMTM2LFxuICAgICAgICAwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDg3LFxuICAgICAgICA5LFxuICAgICAgICA1NixcbiAgICAgICAgMzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNixcbiAgICAgICAgMTksXG4gICAgICAgIDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDU1LFxuICAgICAgICA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA4OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMwLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTksXG4gICAgICAgIDUxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDAsXG4gICAgICAgIDMxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjksXG4gICAgICAgIDI4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDczLFxuICAgICAgICAxODEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDY3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlptcnIzRHVEbURxeXhTUkVYOU1oa2NvOWhIL2l5cU50YWNMVlZwbkpmbDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzU5ODQ5OTI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyOTFCRDlFOTM2MzFFRjc5NzM1NDM2Q0VBMjYyRTU3RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAyMjQ0MzNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVFJoelZ2UjZROVdLbjh3ZXhtRFVrZ1wiLFxuICBcInBob25lSWRcIjogXCJkOTNkMDNkYS0zOWEyLTQ4MzUtYjZjZS1jNWVhMWFiNjRjZGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ4LFxuICAgICAgMTU0LFxuICAgICAgNTgsXG4gICAgICAxNjksXG4gICAgICAxODIsXG4gICAgICAzNSxcbiAgICAgIDIwMixcbiAgICAgIDUsXG4gICAgICAxNzcsXG4gICAgICAxNjgsXG4gICAgICAyMjgsXG4gICAgICAxMTEsXG4gICAgICAxNDgsXG4gICAgICA2LFxuICAgICAgMTYsXG4gICAgICAyMTgsXG4gICAgICAxNjQsXG4gICAgICAyMTAsXG4gICAgICAxNTQsXG4gICAgICA2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOCxcbiAgICAgIDE4NCxcbiAgICAgIDgsXG4gICAgICAxMzMsXG4gICAgICAyMzgsXG4gICAgICAxMjMsXG4gICAgICAxNTIsXG4gICAgICA4OCxcbiAgICAgIDE5NCxcbiAgICAgIDI1NSxcbiAgICAgIDQ1LFxuICAgICAgMTg5LFxuICAgICAgMjA0LFxuICAgICAgMTk1LFxuICAgICAgODksXG4gICAgICA2OCxcbiAgICAgIDYxLFxuICAgICAgMTkyLFxuICAgICAgMjI5LFxuICAgICAgMTExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJIVlZFRUVYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NTk4NDk5Mjc6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjUyMjE4MjI5OTI4MTA4OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHJIeHRBREVLeVZvclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4K1BRVUpGZkJoeFhoWkllRmtFOG1lYlFVNktxaDhpKzhXMEpSYlFaL2pJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjAzVWVZNS9YU1pnM2hqSlA2Y2drdkJjZGtyM3lXbDBXaG0xTTZDQTBJaFdTem5wckhJZlJLV2VvOVZRVitOOSsyTVQzMmdwakFrOVVRbDFpWUgyd0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNITEhjenU0MkNlLzlhUmZsYjVhRktOT2FJMnFRSU9hMm1EcXEvK2JTTDZXcGRaWWhDM3dNV2J4R1JyK1VsTkF6UEpaVmhWN3FDNHhWTCs3QnEzUkN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc1OTg0OTkyNzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyMjQ0MzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIMlZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUgyVi5qc29uIjogIntcImtleURhdGFcIjpcIjlMV0w0ZXhnQ05vRHJ3NXBiRHJ2YlVQK2x2UmpnSTljcTJWRUl4eGJPdEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTc0MjM0NTUyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
