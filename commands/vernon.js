const { MessageEmbed } = require('discord.js');
const { v_list } =  require("../vlist.js");


module.exports = {
  category: 'Fun',
  description: 'Replies with a picture of vernon', // Required for slash commands

  slash: false, // Create both a slash and legacy command
  testOnly: false, // Only register a slash command for the testing guilds

  callback: ({ message, text, client, }) => {

    const user = message.author

    let list = v_list;
    let num = Math.floor(Math.random()*v_list.length)
    


    let commonEmbed = new MessageEmbed()
      .setAuthor({ name: `${user.username} Just unboxed: `, iconURL: user.avatarURL(), url: list[num].link })
      .setTitle(` **${list[num].title}** `)
      .setThumbnail(list[num].thumb)
      .setURL(list[num].link)


      .addFields(
        { name: "ID: ", value: "`" + list[0].id + "`" , inline: true },
        { name: "Worth: ", value: "`" + list[0].worth + "🥕`", inline: false }
      

      )
      .addFields(
          { name: 'Quality: ', value: "`" + list[num].quality + "`", inline: true },
          { name: 'Era: ', value: "`" + list[num].era + "`" , inline: true},
          { name: 'Version: ', value: "`" + list[num].version + "`" , inline: true},    
      )


    
      .setImage(list[num].link)
      .setColor("#F7CAC9")
      .setTimestamp()
	    .setFooter({ text: 'https://vernonbot.xyz', iconURL: client.user.avatarURL(), url: list[num].link });



      message.channel.send({embeds: [commonEmbed]}).then(async embedMessage => {
        await embedMessage.react('💖');
        await embedMessage.react('🗑');
    });


    

  },
}