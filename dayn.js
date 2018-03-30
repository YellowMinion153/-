const Discord = require('discord.js');
const bot = new Discord.Client();
var ignoreCase = require('ignore-case');

var d = 00, h = 00, m = 00;

bot.on('ready', () => {
    console.log('Go bitch');
bot.user.setPresence({ game: { name: 'Вьетнам', type: 2} });
});

var i = 0;
bot.on('message', msg => {
    if(i === 1)
if (ignoreCase.equals(msg.content, 'Сломать палец')) {
    msg.channel.send("`*кричит от боли, но не говорит миликанцам ничего*`");
    i = 0;
    console.log("1");
}
if (ignoreCase.equals(msg.content, 'Устроить нехватку кислорода')) {
    msg.channel.send("`*задыхаясь, падает и умирает*`");
    i = 0;
    console.log("2");
}
if (ignoreCase.equals(msg.content, 'Снять с гука штаны')) {
    msg.channel.send("Ничего не выходит, штаны гука приклеины на клей");
    i = 0;
}
if (ignoreCase.equals(msg.content, 'Пнуть гука')) {
    msg.channel.send("`*терпя боль, ничего не говорит*`");
    i = 0;
}
if (ignoreCase.equals(msg.content, 'Поставить гука коленями на рис')) {
    msg.channel.send("`*стиснув зубы, гук терпит и в итоге съедает весь рис*`");
    i = 0;
}
if (ignoreCase.equals(msg.content, 'Обзывать гука')) {
    msg.channel.send("`*начинает плакать*`");
    i = 0;
}
if (ignoreCase.equals(msg.content, 'Топить гука')) {
    msg.channel.send("Не прошло и секунды, как гук выпил всю воду");
    i = 0;
}
if (ignoreCase.equals(msg.content, 'Напоить гука')) {
    msg.channel.send("Гука не так просто напоить, он просто получил удовольствие от пытки");
    i = 0;
}
if (ignoreCase.equals(msg.content, 'Включить элджея')) {
    msg.channel.send("`*с кровью из ушей, рассказывает миликанцам всё*`");
        i = 0;
        console.log("3");
    }
if (i !== 1 && ignoreCase.equals(msg.content, 'Пытать гука')) {
        msg.reply("Выберите пытку");
        i = 1;
}
});

bot.on('message', msg => {
    if(ignoreCase.equals(msg.content, 'Заткнись')){
    msg.reply('Саткнись миликанец');
    return;
}

    if(ignoreCase.equals(msg.content, 'g!help')){
        msg.channel.send('```1)Гуки на деревьях                                                               ' +
            '2)Хитрый гук                                                                      ' +
            '3)Напалм                                                                          ' +
            '4)g!heart                                                                         ' +
            '5)Пытать гука: Сломать палец; Устроить нехватку кислорода; Включить элджея; Снять с гука штаны; Пнуть гука; ' +
            'Поставить гука коленями на рис; Обзывать гука; Топить гука; Напоить гука                                                                     ' +
            '6)Даун гук                                                                          ' +
            '7)Гимн гуков```');
        msg.channel.send('Бот будет обновляться в дальнейшем');
    }

    if(ignoreCase.equals(msg.content, 'Гуки на деревьях')){
       msg.channel.send('`*спрыгнул с дерева*`');
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

    if(ignoreCase.equals(msg.content, 'Даун гук')){
        msg.channel.send({
            embed:{
                image:{
                    url: "https://cdn.discordapp.com/attachments/423241965325254657/424327723884871681/73eec4f2b47c340c.png",
                }
            }
        })
    }

    if(ignoreCase.equals(msg.content, 'Гимн гуков')){
        msg.channel.send("https://www.youtube.com/watch?v=4DxeiPYwHAg");
    }

    if(ignoreCase.equals(msg.content, 'Напалм')){
        msg.channel.send({
            embed:{
                image:{
                url: "https://cdn.discordapp.com/attachments/423241965325254657/423605506117206027/1.jpg",
                }
            }
        })
    }

    if(ignoreCase.equals(msg.content, 'Солнечный гук')){
        msg.channel.send({
            embed:{
                image:{
                url: "https://cdn.discordapp.com/attachments/423241965325254657/423591361292533770/421956339351420928.png",
                }
            }
        })
    };

    if(ignoreCase.equals(msg.content, 'g!heart')){
        if(msg.author.id === '207571677851287552'){
        msg.reply('Пошел нахер пидр');
            return;
        }
    }
	
	if(ignoreCase.equals(msg.content, 'set.time 60')){
		if(msg.author.id === '278984183240720385'){
			m = m + 60;
			console.log('+hour');
		}
		return;
	};
	
	if(ignoreCase.equals(msg.content, 'set.time 24')){
		if(msg.author.id === '278984183240720385'){
			h = h + 24;
			console.log('+day');
		}
		return;
	};
	
	if(ignoreCase.equals(msg.content, 'подготовка')){
		if(msg.author.id === '278984183240720385'){
			h = 11;
			m = 58;
			console.log('подготовка');
		}
		return;
	};
	
	if(ignoreCase.equals(msg.content, 'restart.time')){
		if(msg.author.id === '278984183240720385'){
			d = 0;
			h = 0;
			m = 0;
			console.log('Defolt time');
		}
		return;
	};
	
	if(msg.content, 'подготовка'){
		bot.channels.get('429349387139809281').send('```*собирает повстанцев*```')
		return;
	};
	
	if(h === 12, m === 00){
		bot.channels.get("429349387139809281").send('```*собирает повстанцев*```')
		return;
	};
	
    if(ignoreCase.equals(msg.content, 'g!heart')){
        msg.channel.send({
            embed: {
                image: {
                    url: "https://cdn.discordapp.com/attachments/363625385025601546/421985363557613568/heart.gif",
                }
            }
        });
        msg.reply('У гуков тоже есть сердце');
    }
        return;
});

bot.login(process.env.BOT_TOKEN);

updateInOneMinute = function(){
    m = m + 1;
    if(m >= 60){
        h = h + 1;
        m = 0;
    }

    if(h >= 24){
        d = d + 1;
        h = 0;
        console.log('Updating hours....');
    }

    formateTime();
    setTimeout(updateInOneMinute, 60000);
}

formateTime = function(){

    var formattedM = '', formattedH = '', formattedD = '';

    if(m < 10)
        formattedM = '0' + m;
    else
        formattedM = m;

    if(h < 10)
        formattedH = '0' + h;
    else
        formattedH = h;

    if(d < 10)
        formattedD = '0' + d;
    else
        formattedD = d;
	bot.user.setPresence({ game: { name: 'Вьетнам ' + formattedD + ':' + formattedH + ':' + formattedM, type: 2 } });
};

logTime = function () {
    console.log('M:' + m);
    console.log('H:' + h);
    console.log('D:' + d);
}

setTimeout(updateInOneMinute, 60000);