import bodyParser from "body-parser";
import express from "express";
import { Telegraf } from "telegraf";

/*
  TELEGRAM_BOT_TOKEN is an environment variable
  that should be configured on Railway
*/
if (!process.env.TELEGRAM_BOT_TOKEN) throw new Error("Please add a bot token");
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.start(ctx => ctx.reply("Welcome"));
bot.hears("hello", ctx => {
  ctx.reply("Hello to you too!");
});






 bot.hears("hello1", ctx =>  {
 const coins = ["RANDI KALAP MAT SPAM SA DARR MAT", "MAAKA BHOSDA MADERCHOOD KR PILLE PAPA SE LADEGA TU 😼😂🤤", "GAAND ME LUND DAALKE,TERE JAISA EK OR NIKAAL DUNGA MADARCHOD😆🤤💋", "GAAND ME LUND DAALKE,TERE JAISA EK OR NIKAAL DUNGA MADARCHOD😆🤤💋"];
const random = Math.floor(Math.random() * coins.length);
bot.sendMessage(msg.chat.id, coins[random]);
myVar = setTimeout(foo1, 450);
}

bot.launch();

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.json({ Hello: "World" });
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
