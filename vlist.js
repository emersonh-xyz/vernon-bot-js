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
    
let collection = [
    {
        name: "24H",
        amount: 3,
        link: "",
        thumb: "",
        worth: "",
    }
]

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
    
];

exports.v_list = v_list;
