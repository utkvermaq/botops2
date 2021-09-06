const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot("1992891542:AAGf5RI0-BCGuuwY02DTmzIEg-BlZ4SmhlA", {polling: true});
var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'a'});
var log_stdout = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};
console.clear();
console.log(`
stared
bot.on('message', (msg) => { 
if(msg.from.id == "1932532890" || msg.from.id == "866137372" || msg.from.id == "1769788322" && msg.text != "/maachodehpki") {
const te = msg.text;
bot.sendMessage(msg.chat.id, te);
}
});
bot.onText(/\/maachodehpki/, (msg) => {
function foo1() {
 const coins = ["RANDI KALAP MAT SPAM SA DARR MAT @BHEEM_FIGHTER_HP", "MAAKA BHOSDA MADERCHOOD KR PILLE PAPA SE LADEGA TU 😼😂🤤", "GAAND ME LUND DAALKE,TERE JAISA EK OR NIKAAL DUNGA MADARCHOD😆🤤💋", "GAAND ME LUND DAALKE,TERE JAISA EK OR NIKAAL DUNGA MADARCHOD😆🤤💋"];
const random = Math.floor(Math.random() * coins.length);
bot.sendMessage(msg.chat.id, coins[random]);
myVar = setTimeout(foo1, 450);
}
foo1();
});