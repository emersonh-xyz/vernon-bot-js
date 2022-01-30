const { MessageEmbed } = require('discord.js');
const { v_list } =  require("../vlist.js");


module.exports = {
  category: 'Fun',
  description: 'Replies with a picture of vernon', // Required for slash commands

  slash: false, // Create both a slash and legacy command
  testOnly: false, // Only register a slash command for the testing guilds

  callback: ({ message, text, client, }) => {

    const user = message.author
    const list = v_list
    


    let commonEmbed = new MessageEmbed()
      .setAuthor({ name: `${user.username} Just unboxed: `, iconURL: user.avatarURL(), url: list[0].link })
      .setTitle(` **${list[0].title}** `)
      .setThumbnail(list[0].thumb)
      .setURL(list[0].link)


      .addFields(
        { name: "ID: ", value: "`" + list[0].id + "`" , inline: true },
        { name: "Worth: ", value: "`" + list[0].worth + "🥕`", inline: false }
      

      )
      .addFields(
          { name: 'Quality: ', value: "`" + list[0].quality + "`", inline: true },
          { name: 'Era: ', value: "`" + list[0].era + "`" , inline: true},
          { name: 'Version: ', value: "`" + list[0].version + "`" , inline: true},    
      )


    
      .setImage(list[0].link)
      .setColor("#F7CAC9")
      .setTimestamp()
	    .setFooter({ text: 'https://vernonbot.xyz', iconURL: client.user.avatarURL(), url: list[0].link });



      message.channel.send({embeds: [commonEmbed]}).then(async embedMessage => {
        await embedMessage.react('💖');
        await embedMessage.react('🗑');
    });


    

  },
}