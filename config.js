const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_28_12_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDAsXG4gICAgICAgIDE3LFxuICAgICAgICAxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM4LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc0LFxuICAgICAgICA3NyxcbiAgICAgICAgODYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTksXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDk4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA1LFxuICAgICAgICAzNixcbiAgICAgICAgMTUzLFxuICAgICAgICA0NSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICA1MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MixcbiAgICAgICAgMjIwLFxuICAgICAgICA2NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgODEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAxNSxcbiAgICAgICAgOTksXG4gICAgICAgIDExLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDczLFxuICAgICAgICAyLFxuICAgICAgICA5MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDcxLFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0MixcbiAgICAgICAgMjU0LFxuICAgICAgICA0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDY0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGcmw4c1hIYUV6SVB3NFF0R1BvUTVVZnMvZ2o4djgxOW0yN2xnMjF1eWI0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJd1c3ZWJPOFRuNkJUcWNWMkpKd193XCIsXG4gIFwicGhvbmVJZFwiOiBcImU0MmY3Y2E3LTRiN2MtNDcyMC1iMDAyLWE1YzljNjIyN2Y3ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODksXG4gICAgICAxMDQsXG4gICAgICAzOSxcbiAgICAgIDIwMixcbiAgICAgIDE1MSxcbiAgICAgIDE3LFxuICAgICAgMjI4LFxuICAgICAgNDcsXG4gICAgICAxMDQsXG4gICAgICAxOTcsXG4gICAgICAxMzIsXG4gICAgICAxNjcsXG4gICAgICAxNjcsXG4gICAgICAxMTgsXG4gICAgICAxNTksXG4gICAgICAxNDcsXG4gICAgICAxNDYsXG4gICAgICAxNyxcbiAgICAgIDI0NixcbiAgICAgIDgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ2LFxuICAgICAgMjQ3LFxuICAgICAgNTcsXG4gICAgICA0LFxuICAgICAgMTI0LFxuICAgICAgNTMsXG4gICAgICA0NSxcbiAgICAgIDIzMixcbiAgICAgIDc1LFxuICAgICAgMzEsXG4gICAgICAyMDksXG4gICAgICAxMSxcbiAgICAgIDk5LFxuICAgICAgNDEsXG4gICAgICAxMjcsXG4gICAgICA5OSxcbiAgICAgIDE3MCxcbiAgICAgIDQwLFxuICAgICAgMjM5LFxuICAgICAgNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWUUxOU4xOTNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY3NjQ0NzU0MzoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc5OTI5NDAwNTAwMzM1OjI5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0orUHFCb1Foc3pNdWdZWURDQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOGphNSt4Qk9GUUtMSVNMZ2p5S1pWNDBEcHh0VThocjc4WVYySnA3SFRrRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGRHJ0c1VMSUZXMTg1THpkRUpxMWZ6bmYxV1AvSDJ2QWEvdm5LMVdLTHpiRWRETEU0N0lhdHFqbGY0dksyTkMyRHplaW1GWjJ5bjd3M2g0YnlDZWRBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIza0VRWnpwNWdrOGM5SFVGN1VWT2s4WEVRRHdGcGMyNlB4bFczYUJvZUpnaWZTMFlZZW1CNzY5Um5ldUZCclowTDFyWDdnRGdIcTRUR1BYYXFHdFBoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2NzY0NDc1NDM6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM1MDI0NzRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "𝕮𝖍𝖗𝖎𝖘𝖙𝖎𝖆𝖓 ◤⃟𝘿 𝕰𝖘𝖈𝖆𝖓𝖔𝖗 ☬꧂🔥",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
