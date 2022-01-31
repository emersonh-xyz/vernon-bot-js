const { MessageEmbed } = require('discord.js');
const { v_list } = require("../vlist.js");


module.exports = {
  category: 'Tool',
  description: 'Forcing a card pull', // Required for slash commands

  slash: false, // Create both a slash and legacy command
  testOnly: false, // Only register a slash command for the testing guilds

  expectedArgs: '<number1>',
  minArgs: 1,
  maxArgs: 1,

  ownerOnly: true,

  callback: ({ message, text, client, args}) => {

    const user = message.author
    
    let idArgument = args[0]
    console.log("Arg found as " + idArgument)
    let id = 0;

    let list = v_list;

    
    for(let i = 0; i < list.length; i++)
    {
        if (list[i].id === idArgument)
        {
            id = i;
            console.log("id found at index:" + id)
            console.log("id set to " + id)
        } else {
            console.log("id could not be found")
        }

    }


    let epicColor = "#F7CAC9"
    let rareColor = "#92A8D1"
    let commonColor = "WHITE"
    let embedColor = ""

    let rarity = ""

    if (list[id].quality === "Rare") {
      embedColor = rareColor
      rarity = "`⭐️⭐️`"
    } else if (list[id].quality === "Epic") {
      embedColor = epicColor
      rarity = "`⭐️⭐️⭐️`"
    } else if (list[id].quality === "Common") {
      embedColor = commonColor
      rarity = "`⭐️`"
    } else
    {
      embedColor = "WHITE"
    }

    // DEBUG INFORMATION
    console.log(`DEBUG: \n${user.tag} just unboxed:

    ${rarity} ${list[id].era} ${list[id].version} ${list[id].title}
    ${list[id].link}`)


    let commonEmbed = new MessageEmbed()
      .setAuthor({ name: `🎁 ${user.username} just unboxed an album!`, iconURL: user.avatarURL(), url: list[id].link })
      .setTitle(rarity + " [" + list[id].era + "] " + list[id].version + "" )
      .setThumbnail(list[id].thumb)
      
      .setDescription(`**╰☆** You own **0**/${list[id].collection} from this set`)


      .addFields(
        { name: "ID: ", value: "`" + list[id].id + "`", inline: true },
        { name: "Title: ", value: "`" + list[id].title + "`", inline: true },
        { name: "Worth: ", value: "`" + list[id].worth + " 🥕`", inline: true },
        { name: 'Quality: ', value: "`" + list[id].quality + "`", inline: true },
        { name: 'Era: ', value: "`" + list[id].era + "`", inline: true },
        { name: 'Version: ', value: "`" + list[id].version + "`", inline: true },


      )


      .setImage(list[id].link)
      .setColor(embedColor)
      .setTimestamp()
      .setFooter({ text: 'https://vernonbot.xyz', iconURL: client.user.avatarURL(), url: list[id].link });



    message.channel.send({ embeds: [commonEmbed] }).then(async embedMessage => {
      await embedMessage.react('💖');
      await embedMessage.react('🗑');
    });



  },
}