const fs = require("fs");
module.exports = {
  config:{
  name: "kabbo",
        version: "1.0.1",
        prefix: false,
  permssion: 0,
  credits: "nayan", 
  description: "Fun",
  category: "no prefix",
  usages: "farhan",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("kabbo")==0 || body.indexOf("KABBO")==0 || body.indexOf("kabbo")==0 || body.indexOf("farhan")==0) {
    var msg = {
        body: "👉আমার বস♻️ kabbo এখন বিজি আছে💔 । তার ইনবক্সে এ মেসেজ দিয়ে রাখো ‎‎‎‎‎‎‎‎‎https://www.facebook.com/kuang.39179🔰 ♪√বস ফ্রি হলে আসবে🧡😁😜🐒",
        attachment: fs.createReadStream(__dirname + `/Nayan/boss.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {

  }
} 
