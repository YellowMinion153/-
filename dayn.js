const Discord = require('discord.js');
const bot = new Discord.Client();
var token = 'NDIzNDIzMDg3MDE5NTU2ODY1.DYqHmg.JNl3_OS_wAn5VUadcexqP4y2CSo';
var ignoreCase = require('ignore-case');

bot.on('ready', () => {
    console.log('Go bitch');
bot.user.setPresence({ game: { name: 'Вьетнам'} });
});

bot.on('message', msg => {
    if(ignoreCase.equals(msg.content, 'Заткнись')){
    msg.reply('Саткнись миликанец');
    return;
}

    if(ignoreCase.equals(msg.content, 'Гуки на деревьях')){
       msg.channel.send('****спрыгнул с дерева****');
       return;
    }

    if(ignoreCase.equals(msg.content, 'Хитрый гук')){
        msg.channel.send({
            embed:{
                image:{
                url: "https://cdn.discordapp.com/attachments/419427467795628037/423403907440574464/unknown.png",
                }
            }
        })
    }

    if(ignoreCase.equals(msg.content, 'g!heart')){
        msg.channel.send({
            embed:{
                image:{
                    url: "https://cdn.discordapp.com/attachments/363625385025601546/421985363557613568/heart.gif",
                }
            }
        })
    }
});

bot.login('NDIzNDIzMDg3MDE5NTU2ODY1.DYqHmg.JNl3_OS_wAn5VUadcexqP4y2CSo');
