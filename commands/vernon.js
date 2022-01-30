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
      .setAuthor({ name: "Era: attacca", url: link })
      .setDescription("╰☆ Rare Quality")
      .addFields(
        { name: 'Era', value: "attacca" },
        { name: 'Verion', value: 'carat 03' },
        { name: 'Quality', value: 'Rare', inline: true },
      )
      .setImage(link)
      .setColor("WHITE")
      .setFooter(`Requested by ${user.tag}`)


    return commonEmbed;


  },
}