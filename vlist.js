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
        title: `[⭐️⭐️⭐️] 24H Carat Vernon`, 
        id: pad(count()) 
    },
    { 
        link: "http://vernonbot.xyz/vernon-img/1.jpeg", 
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/ainochikara.jpeg", 
        version: "Weverse Preorder", 
        worth: 250, 
        era: "Ainochikara", 
        quality: "Rare", 
        title: `[⭐️⭐️] Ainochikara Weverse Vernon`, 
        id: pad(count()) 
    },
    {   
        link: "http://vernonbot.xyz/vernon-img/2.jpeg", 
        thumb: "https://vernonbot.xyz/vernon-img/thumbnail/ainochikara.jpeg", 
        version: "Christmas", 
        worth: 500, 
        era: "Ainochikara", 
        quality: "Epic", 
        title: `[⭐️⭐️⭐️] Ainochikara Christmas Vernon`, 
        id: pad(count()) 
    },
    
    
];

exports.v_list = v_list;
