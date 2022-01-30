const { MessageEmbed } = require('discord.js');

module.exports = {
  category: 'Fun',
  description: 'Replies with a picture of vernon', // Required for slash commands

  slash: false, // Create both a slash and legacy command
  testOnly: false, // Only register a slash command for the testing guilds

  callback: ({ message, text, }) => {

    const user = message.author
    const link = "https://lh6.googleusercontent.com/WvI2UHXrbMDapxo2FexbzqBBF30RcGg7PxhU-BRo7Sl7S4D7Kze6fk0ni6uuhKBMURaWWbpUUyeTZXPN7A_58Rne0kBhWPRypkirFn3MrkldDS_ZLvnw_INVhsbd-Ba1Sm5faZ805g"


    var commonEmbed = new MessageEmbed()
      .setAuthor({ name: `${user.username} Just unboxed: `, iconURL: user.avatarURL(), url: link })
      .setTitle("`[⭐️⭐️]` **Attacca Vernon**")
      .setURL(link)

      .addFields(
        { name: "ID: ", value: "`1101`", inline: true },
        { name: "Worth: ", value: "`200 🥕`", inline: false }
      

      )
      .addFields(
          { name: 'Quality: ', value: '`Rare`', inline: true },
          { name: 'Era: ', value: "`Attacca`", inline: true},
          { name: 'Version: ', value: '`Carat 03`', inline: true},    
      )


    
      .setImage(link)
      .setColor("RED")
      .setTimestamp()
	    .setFooter({ text: 'Unboxed with `!vernon`', iconURL: link });



      message.channel.send({embeds: [commonEmbed]}).then(async embedMessage => {
        await embedMessage.react('💖');
        await embedMessage.react('🗑');
    });


    

  },
}