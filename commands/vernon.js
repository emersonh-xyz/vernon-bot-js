const { MessageEmbed } = require('discord.js');

module.exports = {
    category: 'Fun',
    description: 'Replies with a picture of vernon', // Required for slash commands
    
    slash: false, // Create both a slash and legacy command
    testOnly: true, // Only register a slash command for the testing guilds
    
    callback: ({ message, text,}) => {

      const user = message.author
      var picture = [
      "https://en.kepoper.com/wp-content/uploads/2021/03/vernon-profile-1-758x506.jpg",
      "https://lh3.googleusercontent.com/byU3bSUcfvfKCiIMK5eQa4O9D6UkytoLwvZJhTDA083XitflW0VE9u7doyiomx2njx5En-y2qgQ1aDGlBOrKlcvi6zvke-DH=w1200-h630-rj-pp-e365",
      "https://www.somagnews.com/wp-content/uploads/2021/09/SEVENTEEN-Vernon.jpg",
      "https://6.viki.io/image/a83585e5f5b04085a6576d11bdc7981f.jpeg?s=900x600&e=t",
      "https://lh3.googleusercontent.com/ArCl2zzbm-L9OX6XUPSrLibQd2mWqDGHtjL-fXUw6cDSDIoLFDHety0KEU8zcef5MZT1uNMYfUh-eQWB4ifHQ_ufFZSXJWgl=w1200-h630-rj-pp-e365",
      "https://c.tenor.com/rUORWQvKeyAAAAAC/seventeen-vernon.gif",
      "https://www.allkpop.com/upload/2021/10/content/080213/1633673580-v.jpg",
      "https://www.kindpng.com/picc/m/222-2226620_vernon-aesthetic-seventeen-hd-png-download.png",
      "https://pbs.twimg.com/profile_images/1315212081822461952/61Y7JRZQ_400x400.jpg",
      "https://www.nme.com/wp-content/uploads/2021/11/vernon-seventeen-bands-boy-112321.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA-45-f6cQq9j58s__nqGubFRJmYoiazh16Q&usqp=CAU",
      "https://c.tenor.com/eUZ_ZUMjBqAAAAAC/seventeen-vernon.gif",
      "https://64.media.tumblr.com/41b99436c6d39f96ebf02f6929a569ea/tumblr_olirulYx0F1sgray0o1_500.gifv",
      "https://static.wikia.nocookie.net/girlgroup/images/9/91/Vernon_Marie_Claire_2019.jpg/revision/latest/scale-to-width-down/250?cb=20191229145006",
      "http://pm1.narvii.com/6118/e45e179b2f8a567a4d3fd6d995110d018d5fd88e_00.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/512-Fb1EpXL.jpg",
      "https://image.kpopmap.com/2018/12/seventeen-attacca-member-profile-vernon.jpg",
      "https://64.media.tumblr.com/f70e16629f9fb06a7b87ccd25938f13f/6243eac0f0fa077a-97/s1280x1920/5f6f1aa85ad964793954ed6d4ec4f333f45eafc3.jpg",
      "https://i.pinimg.com/474x/46/3a/60/463a60e305f6bba4467c664ec98b5106.jpg",
      "https://data.whicdn.com/images/212481478/original.gif",
      "https://64.media.tumblr.com/092a6d73cac50bfcf02818257013de8a/a1d670393788ca77-7e/s1280x1920/b5bc4fb0eb49958291db285333b9a9d289603c51.jpg",
      "https://64.media.tumblr.com/7419aac82d5f7a37329894b012c03317/tumblr_og8yehUlJ01uaqa61o1_500.gifv",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMTSmhEJliy1COHai9_IDFNANJLcpjZQigCw&usqp=CAU",
      "https://c.tenor.com/JlzupGVQcEMAAAAM/vernon-seventeen.gif",
      "https://c.tenor.com/E-LhmHdX44UAAAAC/vernon-seventeen.gif",
      "https://c.tenor.com/c80ShYtAeXwAAAAd/vernon-seventeen.gif",
      "https://c.tenor.com/ATpYETqrSQQAAAAM/hansol-vernon.gif",
      "https://c.tenor.com/nxuRU4bmxwEAAAAd/seventeen-vernon.gif",
      "http://pa1.narvii.com/6360/09027497428e357986e61fcae538334ef1c35edf_00.gif",
      "https://c.tenor.com/mr__XxwLqboAAAAC/vernon.gif",
      "https://i.pinimg.com/originals/00/a3/78/00a378feee74b3d800d3b822b474c39c.gif",
      "https://data.whicdn.com/images/309592152/original.gif",
      "https://pa1.narvii.com/6777/b459c8e65643d144a4535be5be27d996f2817048_hq.gif",
      "https://thumbs.gfycat.com/ConcernedFeistyBunting-size_restricted.gif",
      "https://c.tenor.com/i8IEksk6wUYAAAAC/vernon-seventeen.gif",
      "https://64.media.tumblr.com/c1060ec4ed074323b34c8baa8742b665/tumblr_inline_o2nmmjXVhw1sccn28_400.gifv",
      "https://thumbs.gfycat.com/JovialPowerlessAfricangoldencat-size_restricted.gif",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfRwGaWHR4aMQQonm8ksLrMo5332c-X05HLg&usqp=CAU"


    ]
      var final = picture[Math.floor(Math.random() * picture.length)];

      
      var num = 0;

      for(let i = 0; i < picture.length; i++)
      {
        if (final === picture[i])
        {
            num = i + 1;
        }
      }

      const reply = `You got picture #${num} \n ${final}`

      
      const embed = new MessageEmbed()
      .setAuthor({ name: "Card: #" + num, url: final })
        .setImage(final)
        .setColor("WHITE")
        .setFooter(`Requested by ${user.tag}` )

      return embed
  
    },
  }