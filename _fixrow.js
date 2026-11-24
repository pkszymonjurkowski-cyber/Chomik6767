const fs=require('fs');
let s=fs.readFileSync('index.html','utf8');
// napraw uciętą linię w renderShop (seeds) — przywróć pełny wiersz ze zniżką
const broken="      h+='<div class=\"shRow\"><div class=\"shn\">'+iN(s)+'<small>'+seedInfo(k)+'</small></div><b>}";
const good="      h+='<div class=\"shRow\"><div class=\"shn\">'+iN(s)+'<small>'+seedInfo(k)+'</small></div><b>$'+fmtK(bPrice(s.cost))+'</b><button class=\"btn sm calm\" data-act=\"seed\" data-k=\"'+k+'\"'+(VG.money<bPrice(s.cost)?' disabled':'')+'>'+BUY+'</button></div>';";
if(!s.includes(broken)){console.log('BROKEN NOT FOUND');process.exit(1);}
s=s.replace(broken,good);
fs.writeFileSync('index.html',s);
console.log('row restored');
