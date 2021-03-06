const { MessageEmbed } = require('discord.js');
const { v_list } = require("../vlist.js");


module.exports = {
  category: 'Fun',
  description: 'Replies with a picture of vernon', // Required for slash commands

  slash: "both", // Create both a slash and legacy command
  testOnly: true, // Only register a slash command for the testing guilds

  callback: ({ message, text, client, }) => {

    const user = message.author


    let list = v_list;
    let num = Math.floor(Math.random() * v_list.length)


    let epicColor = "#F7CAC9"
    let rareColor = "#92A8D1"
    let commonColor = "WHITE"
    let embedColor = ""

    let rarity = ""

    let quality = list[num].quality

    if (quality === "Rare") {
      embedColor = rareColor
      rarity = "`[⭐️⭐️]`"
    } else if (quality === "Epic") {
      embedColor = epicColor
      rarity = "`[⭐️⭐️⭐️]`"
    } else if (quality === "Common") {
      embedColor = commonColor
      rarity = "`[⭐️]`"
    } else
    {
      embedColor = "WHITE"
    }

    // DEBUG INFORMATION
    console.log(`DEBUG: \n${user.tag} just unboxed:

    ${rarity} ${list[num].era} ${list[num].version} ${list[num].title}
    ${list[num].link}`)


    let commonEmbed = new MessageEmbed()
      .setAuthor({ name: `🎁 ${user.username} just unboxed an album card!`, iconURL: user.avatarURL(), url: list[num].link })
      .setTitle(rarity + " " + list[num].era + " | " + list[num].version)
      .setThumbnail(list[num].thumb)
      
      //.setDescription(`*v!sell to scrap for worth*`)


      .addFields(
        { name: "ID: ", value: "`" + list[num].id + "`", inline: true },
        { name: "PC: ", value: "`" + list[num].title + "`", inline: true },
        { name: "Worth: ", value: "`🥕 " + list[num].worth + "`", inline: true },
        { name: 'Grade: ', value: "`" + list[num].quality + "`", inline: true },
        { name: 'Era: ', value: "`" + list[num].era + "`", inline: true },
        { name: 'Version: ', value: "`" + list[num].version + "`", inline: true },


      )


      .setImage(list[num].link)
      .setColor(embedColor)
      .setTimestamp()
      .setFooter({ text: `You have 0/${list[num].collection} of the ${list[num].era} set`});



      return message.channel.send({ embeds: [commonEmbed] }).then(async embedMessage => {
      await embedMessage.react('💖');
      await embedMessage.react('🗑');
    });




  },
}