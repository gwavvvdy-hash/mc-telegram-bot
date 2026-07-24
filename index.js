require('dotenv').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
    ctx.reply('أهلاً بك في بوت استضافة ماينكرافت المجاني! 🎮');
});

bot.command('create', (ctx) => {
    ctx.reply('جاري تجهيز سيرفرك المجاني برام 1GB... ⏳');
});

bot.launch();
console.log('Bot is running! 🔥');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
