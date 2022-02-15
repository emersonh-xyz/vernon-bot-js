let idCounter = 0;

function count(){ 
  idCounter++
  return idCounter;
}


var num = 1;

function pad(n){
    var string = "" + num;
    var pad = "0000";
    n = pad.substring(0, pad.length - string.length) + string;
    num++;
    return n;
}
    

let v_list = [
    { 
        link: "https://vernonbot.xyz/vernon-img/0.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/24h.jpeg", 
        version: "Carat", 
        worth: 500, 
        era: "💎 24H", 
        quality: "Epic", 
        title: `Vernon`, 
        collection: 1,
        id: pad(count()) 
    },
    { 
        link: "https://vernonbot.xyz/vernon-img/1.jpeg", 
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/ainochikara.jpeg", 
        version: "Weverse Preorder", 
        worth: 250, 
        era: "💞 Ainochikara", 
        quality: "Rare", 
        title: `Vernon`, 
        collection: 3,
        id: pad(count()) 
    },
    {   
        link: "https://vernonbot.xyz/vernon-img/2.jpeg", 
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/ainochikara.jpeg", 
        version: "Christmas", 
        worth: 500, 
        era: "💞 Ainochikara", 
        quality: "Epic", 
        title: `Vernon`, 
        collection: 3,
        id: pad(count()) 
    },
    {
        link: "https://vernonbot.xyz/vernon-img/3.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/ainochikara.jpeg",
        version: "Universal",
        worth: 250,
        era: "💞 Ainochikara",
        quality: "Rare",
        title: "Vernon",
        collection: 3,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/4.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/alone.jpg",
        version: "Alone 01",
        worth: 250,
        era: "🤍 AL1",
        quality: "Rare",
        title: "Vernon",
        collection: 3,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/5.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/alone.jpg",
        version: "All 03",
        worth: 250,
        era: "🤍 AL1",
        quality: "Rare",
        title: "Vernon",
        collection: 3,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/6.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/alone.jpg",
        version: "All 13",
        worth: 250,
        era: "🤍 AL1",
        quality: "Rare",
        title: "Vernon",
        collection: 3,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/7.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/anode.jpeg",
        version: "Truth - White 01",
        worth: 100,
        era: "🌿 An Ode",
        quality: "Common",
        title: "Vernon",
        collection: 12,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/8.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/anode.jpeg",
        version: "Hope - White 01",
        worth: 100,
        era: "🌿 An Ode",
        quality: "Common",
        title: "Vernon",
        collection: 12,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/9.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/anode.jpeg",
        version: "Begin - Color 01",
        worth: 100,
        era: "🌿 An Ode",
        quality: "Common",
        title: "Vernon",
        collection: 12,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/10.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/anode.jpeg",
        version: "The Poet - White 01",
        worth: 100,
        era: "🌿 An Ode",
        quality: "Common",
        title: "Vernon",
        collection: 12,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/11.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/anode.jpeg",
        version: "Truth - Color 01",
        worth: 100,
        era: "🌿 An Ode",
        quality: "Common",
        title: "Vernon",
        collection: 12,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/12.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/anode.jpeg",
        version: "Real - Color 01",
        worth: 100,
        era: "🌿 An Ode",
        quality: "Common",
        title: "Vernon",
        collection: 12,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/13.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/anode.jpeg",
        version: "Begin - White 01",
        worth: 100,
        era: "🌿 An Ode",
        quality: "Common",
        title: "Vernon",
        collection: 12,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/14.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/anode.jpeg",
        version: "The Poet - White 02",
        worth: 100,
        era: "🌿 An Ode",
        quality: "Common",
        title: "Vernon",
        collection: 12,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/15.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/anode.jpeg",
        version: "The Poet - Color 01",
        worth: 100,
        era: "🌿 An Ode",
        quality: "Common",
        title: "Vernon",
        collection: 12,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/16.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/anode.jpeg",
        version: "Real - White 01",
        worth: 100,
        era: "🌿 An Ode",
        quality: "Common",
        title: "Vernon",
        collection: 12,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/17.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/anode.jpeg",
        version: "Truth - Color 02",
        worth: 100,
        era: "🌿 An Ode",
        quality: "Common",
        title: "Vernon",
        collection: 12,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/18.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/anode.jpeg",
        version: "Hope - White 02",
        worth: 100,
        era: "🌿 An Ode",
        quality: "Common",
        title: "Vernon",
        collection: 12,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/19.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.png",
        version: "One Side",
        worth: 100,
        era: "🗡 Attacca",
        quality: "Common",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/20.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.png",
        version: "Other Side",
        worth: 100,
        era: "🗡 Attacca",
        quality: "Common",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/21.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.png",
        version: "Beside",
        worth: 100,
        era: "🗡 Attacca",
        quality: "Common",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/22.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.png",
        version: "Yizhiyu A",
        worth: 500,
        era: "🗡 Attacca",
        quality: "Epic",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/23.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.png",
        version: "Yizhiyu B",
        worth: 500,
        era: "🗡 Attacca",
        quality: "Epic",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/24.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.png",
        version: "Op 3",
        worth: 100,
        era: "🗡 Attacca",
        quality: "Common",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/25.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.png",
        version: "Op 3",
        worth: 100,
        era: "🗡 Attacca",
        quality: "Common",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/26.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.png",
        version: "Carat 02",
        worth: 250,
        era: "🗡 Attacca",
        quality: "Rare",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/27.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.png",
        version: "Carat 03",
        worth: 250,
        era: "🗡 Attacca",
        quality: "Rare",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/28.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.png",
        version: "Carat 04",
        worth: 250,
        era: "🗡 Attacca",
        quality: "Rare",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/29.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.png",
        version: "Carat 01",
        worth: 250,
        era: "🗡 Attacca",
        quality: "Rare",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/30.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.png",
        version: "Carat Photo 01",
        worth: 500,
        era: "🗡 Attacca",
        quality: "Epic",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/31.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.png",
        version: "Carat Photo 02",
        worth: 500,
        era: "🗡 Attacca",
        quality: "Epic",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/32.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.png",
        version: "Carat Photo 03",
        worth: 500,
        era: "🗡 Attacca",
        quality: "Epic",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/33.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.png",
        version: "Carat Photo 05",
        worth: 500,
        era: "🗡 Attacca",
        quality: "Epic",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/34.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.png",
        version: "Carat Photo 06",
        worth: 500,
        era: "🗡 Attacca",
        quality: "Epic",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/35.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.png",
        version: "Carat Photo 07",
        worth: 500,
        era: "🗡 Attacca",
        quality: "Epic",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/36.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.png",
        version: "Op 1 - 01",
        worth: 100,
        era: "🗡 Attacca",
        quality: "Common",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/37.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.png",
        version: "Op 1 - 02",
        worth: 100,
        era: "🗡 Attacca",
        quality: "Common",
        title: "Vernon",
        collection: 23,
        id: pad(count())
    },
    {
        link: "https://vernonbot.xyz/vernon-img/38.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.png",
        version: "Op 2 - 01",
        worth: 100,
        era: "🗡 Attacca",
        quality: "Common",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/39.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.png",
        version: "Op 2 - 02",
        worth: 100,
        era: "🗡 Attacca",
        quality: "Common",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/40.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/boysbe.png",
        version: "Seek",
        worth: 500,
        era: "📷 Boys Be",
        quality: "Epic",
        title: "Vernon",
        collection: 2,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/41.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/boysbe.png",
        version: "Hide",
        worth: 500,
        era: "📷 Boys Be",
        quality: "Epic",
        title: "Vernon",
        collection: 2,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/42.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/caratmembership.jpeg",
        version: "2022",
        worth: 250,
        era: "💎 Carat Membership",
        quality: "Rare",
        title: "Vernon",
        collection: 8,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/42.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/caratmembership.jpeg",
        version: "2022",
        worth: 250,
        era: "💎 Carat Membership",
        quality: "Rare",
        title: "Vernon",
        collection: 8,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/43.png",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/caratmembership.jpeg",
        version: "2021 - ID",
        worth: 100,
        era: "💎 Carat Membership",
        quality: "Common",
        title: "Vernon",
        collection: 8,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/44.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/caratmembership.jpeg",
        version: "2021 - ID",
        worth: 250,
        era: "💎 Carat Membership",
        quality: "Rare",
        title: "Vernon",
        collection: 8,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/45.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/caratmembership.jpeg",
        version: "2017 - 01",
        worth: 100,
        era: "💎 Carat Membership",
        quality: "Common",
        title: "Vernon",
        collection: 8,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/46.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/caratmembership.jpeg",
        version: "2017 - 02",
        worth: 100,
        era: "💎 Carat Membership",
        quality: "Common",
        title: "Vernon",
        collection: 8,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/47.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/caratmembership.jpeg",
        version: "2017 - 03",
        worth: 100,
        era: "💎 Carat Membership",
        quality: "Common",
        title: "Vernon",
        collection: 8,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/48.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/caratmembership.jpeg",
        version: "2017 - 04",
        worth: 100,
        era: "💎 Carat Membership",
        quality: "Common",
        title: "Vernon",
        collection: 8,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/49.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/caratland2020.jpeg",
        version: "2020 - 01",
        worth: 100,
        era: "💎 Caratland",
        quality: "Common",
        title: "Vernon",
        collection: 8,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/50.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/caratland2020.jpeg",
        version: "2020 - 02",
        worth: 100,
        era: "💎 Caratland",
        quality: "Common",
        title: "Vernon",
        collection: 8,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/51.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/caratland2020.jpeg",
        version: "2020 - 03",
        worth: 100,
        era: "💎 Caratland",
        quality: "Common",
        title: "Vernon",
        collection: 8,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/52.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/caratland2020.jpeg",
        version: "2020 - 04",
        worth: 100,
        era: "💎 Caratland",
        quality: "Common",
        title: "Vernon",
        collection: 8,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/53.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/caratland2020.jpeg",
        version: "Polaroid - 01",
        worth: 100,
        era: "💎 Caratland",
        quality: "Common",
        title: "Vernon",
        collection: 8,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/54.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/caratland2020.jpeg",
        version: "Polaroid - 02",
        worth: 100,
        era: "💎 Caratland",
        quality: "Common",
        title: "Vernon",
        collection: 8,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/55.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/caratland2020.jpeg",
        version: "2020 - 05",
        worth: 100,
        era: "💎 Caratland",
        quality: "Common",
        title: "Vernon",
        collection: 8,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/56.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/caratland2020.jpeg",
        version: "2020 - 06",
        worth: 100,
        era: "💎 Caratland",
        quality: "Common",
        title: "Vernon",
        collection: 8,
        id: pad(count())
    },
    {
        link: "https://vernonbot.xyz/vernon-img/57.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/fallinflower.jpeg",
        version: "Version C",
        worth: 100,
        era: "💐 Fallin Flower",
        quality: "Rare",
        title: "Vernon",
        collection: 1,
        id: pad(count())  
    },
    {
        link: "https://vernonbot.xyz/vernon-img/58.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/fallinflower.jpeg",
        version: "Regular",
        worth: 100,
        era: "💐 Fallin Flower",
        quality: "Rare",
        title: "Vernon",
        collection: 1,
        id: pad(count())  
    },
    {
        link: "https://vernonbot.xyz/vernon-img/59.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/fallinflower.jpeg",
        version: "Carat",
        worth: 100,
        era: "💐 Fallin Flower",
        quality: "Epic",
        title: "Vernon",
        collection: 1,
        id: pad(count())  
    },
    {
        link: "https://vernonbot.xyz/vernon-img/60.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/fallinflower.jpeg",
        version: "Version A",
        worth: 100,
        era: "💐 Fallin Flower",
        quality: "Epic",
        title: "Vernon",
        collection: 1,
        id: pad(count())  
    },
    {
        link: "https://vernonbot.xyz/vernon-img/61.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/goingmagazine.jpeg",
        version: "Version 1",
        worth: 100,
        era: "📖 Going Magazine",
        quality: "Common",
        title: "Vernon",
        collection: 1,
        id: pad(count())  
    },
    {
        link: "https://vernonbot.xyz/vernon-img/62.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/goingmagazine.jpeg",
        version: "Seventeen",
        worth: 100,
        era: "𝟙𝟟 Going Seventeen",
        quality: "Rare",
        title: "Vernon",
        collection: 1,
        id: pad(count())  
    },
    {
        link: "https://vernonbot.xyz/vernon-img/63.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/happyending.jpg",
        version: "Version A",
        worth: 100,
        era: "💙 Happy Ending",
        quality: "Rare",
        title: "Vernon",
        collection: 1,
        id: pad(count())  
    },
    {
        link: "https://vernonbot.xyz/vernon-img/64.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/happyending.jpg",
        version: "Version B",
        worth: 100,
        era: "💙 Happy Ending",
        quality: "Rare",
        title: "Vernon",
        collection: 1,
        id: pad(count())  
    },
    {
        link: "https://vernonbot.xyz/vernon-img/65.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/happyending.jpg",
        version: "Version C",
        worth: 100,
        era: "💙 Happy Ending",
        quality: "Rare",
        title: "Vernon",
        collection: 1,
        id: pad(count())  
    },
    {
        link: "https://vernonbot.xyz/vernon-img/66.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/happyending.jpg",
        version: "Regular",
        worth: 100,
        era: "💙 Happy Ending",
        quality: "Rare",
        title: "Vernon",
        collection: 1,
        id: pad(count())  
    },
    {
        link: "https://vernonbot.xyz/vernon-img/67.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/happyending.jpg",
        version: "Carat",
        worth: 100,
        era: "💙 Happy Ending",
        quality: "Epic",
        title: "Vernon",
        collection: 1,
        id: pad(count())  
    },

];

exports.v_list = v_list;
