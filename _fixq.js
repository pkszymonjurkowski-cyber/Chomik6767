const fs=require('fs');
const s=fs.readFileSync('index.html','utf8');
// uszkodzona linia: +">'+have... (brak cudzysłowów) → poprawna: + '">'+ have +
const bad="+\">'+have+'/'+need+'</b></div>';";
console.log('bad count:',(s.split(bad).length-1));
const good="+ '\">'+ have + '/' + need + '</b></div>';";
const fixed=s.split(bad).join(good);
fs.writeFileSync('index.html',fixed);
console.log('fixed:',s!==fixed);
