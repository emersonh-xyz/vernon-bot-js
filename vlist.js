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
        era: "24H", 
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
        era: "Ainochikara", 
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
        era: "Ainochikara", 
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
        era: "Ainochikara",
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
        era: "AL1",
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
        era: "AL1",
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
        era: "AL1",
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
        era: "An Ode",
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
        era: "An Ode",
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
        era: "An Ode",
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
        era: "An Ode",
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
        era: "An Ode",
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
        era: "An Ode",
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
        era: "An Ode",
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
        era: "An Ode",
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
        era: "An Ode",
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
        era: "An Ode",
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
        era: "An Ode",
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
        era: "An Ode",
        quality: "Common",
        title: "Vernon",
        collection: 12,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/19.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.jpeg",
        version: "One Side",
        worth: 100,
        era: "Attacca",
        quality: "Common",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/20.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.jpeg",
        version: "Other Side",
        worth: 100,
        era: "Attacca",
        quality: "Common",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/21.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.jpeg",
        version: "Other Side",
        worth: 100,
        era: "Attacca",
        quality: "Common",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/22.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.jpeg",
        version: "Beside",
        worth: 100,
        era: "Attacca",
        quality: "Common",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/23.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.jpeg",
        version: "Yizhiyu A",
        worth: 500,
        era: "Attacca",
        quality: "Epic",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/24.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.jpeg",
        version: "Yizhiyu B",
        worth: 500,
        era: "Attacca",
        quality: "Epic",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/25.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.jpeg",
        version: "Op 3",
        worth: 100,
        era: "Attacca",
        quality: "Common",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/26.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.jpeg",
        version: "Op 3",
        worth: 100,
        era: "Attacca",
        quality: "Common",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/27.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.jpeg",
        version: "Carat 02",
        worth: 250,
        era: "Attacca",
        quality: "Rare",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/28.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.jpeg",
        version: "Carat 03",
        worth: 250,
        era: "Attacca",
        quality: "Rare",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/29.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.jpeg",
        version: "Carat 04",
        worth: 250,
        era: "Attacca",
        quality: "Rare",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/30.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.jpeg",
        version: "Carat 01",
        worth: 250,
        era: "Attacca",
        quality: "Rare",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/31.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.jpeg",
        version: "Carat Photo 01",
        worth: 500,
        era: "Attacca",
        quality: "Epic",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/32.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.jpeg",
        version: "Carat Photo 02",
        worth: 500,
        era: "Attacca",
        quality: "Epic",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/33.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.jpeg",
        version: "Carat Photo 03",
        worth: 500,
        era: "Attacca",
        quality: "Epic",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/34.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.jpeg",
        version: "Carat Photo 05",
        worth: 500,
        era: "Attacca",
        quality: "Epic",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/35.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.jpeg",
        version: "Carat Pohoto 06",
        worth: 500,
        era: "Attacca",
        quality: "Epic",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/36.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.jpeg",
        version: "Carat Pohoto 07",
        worth: 500,
        era: "Attacca",
        quality: "Epic",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/37.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.jpeg",
        version: "Op 1 - 01",
        worth: 100,
        era: "Attacca",
        quality: "Common",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/38.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.jpeg",
        version: "Op 1 - 02",
        worth: 100,
        era: "Attacca",
        quality: "Common",
        title: "Vernon",
        collection: 23,
        id: pad(count())
    },
    {
        link: "https://vernonbot.xyz/vernon-img/39.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.jpeg",
        version: "Op 2 - 01",
        worth: 100,
        era: "Attacca",
        quality: "Common",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/40.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.jpeg",
        version: "Op 2 - 02",
        worth: 100,
        era: "Attacca",
        quality: "Common",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },
    {
        link: "https://vernonbot.xyz/vernon-img/39.jpeg",
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/attacca.jpeg",
        version: "Op 2 - 01",
        worth: 100,
        era: "Attacca",
        quality: "Common",
        title: "Vernon",
        collection: 23,
        id: pad(count())

    },

];

exports.v_list = v_list;
