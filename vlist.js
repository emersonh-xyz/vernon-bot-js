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
    { link: "https://vernonbot.xyz/vernon-img/0.jpeg", thumb: "https://pbs.twimg.com/media/Ec9zDCUUEAEm6GV.jpg", version: "Carat", worth: 200, era: "24h", quality: "Epic", title: `[⭐️⭐️⭐️] 24h Carat Vernon`, id: pad(count()) },
    { link: "http://vernonbot.xyz/vernon-img/1.jpeg", thumb: "", version: "Weverse Preorder", worth: 200, era: "Ainochikara", quality: "Rare", title: `[⭐️⭐️] Ainochikara Weverse Vernon`, id: pad(count()) },
    { link: "http://vernonbot.xyz/vernon-img/2.jpeg", thumb: "", version: "Christmas", worth: 200, era: "Ainochikara", quality: "Epic", title: `[⭐️⭐️⭐️] Ainochikara Christmas Vernon`, id: pad(count()) },
    
    
];

exports.v_list = v_list;
