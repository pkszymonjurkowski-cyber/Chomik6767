const fs=require('fs');
let s=fs.readFileSync('index.html','utf8');
const tail="seedInfo(k)+'</small></div><b>";
let cnt=0;
const lines=s.split('\n');
for(let i=0;i<lines.length;i++){
  if(lines[i].trim().endsWith(tail)){
    lines[i]="      h+='<div class=\"shRow\"><div class=\"shn\">'+iN(s)+'<small>'+seedInfo(k)+'</small></div><b>$'+fmtK(bPrice(s.cost))+'</b><button class=\"btn sm calm\" data-act=\"seed\" data-k=\"'+k+'\"'+(VG.money<bPrice(s.cost)?' disabled':'')+'>'+BUY+'</button></div>';";
    cnt++;
  }
}
s=lines.join('\n');
fs.writeFileSync('index.html',s);
console.log('fixed lines:',cnt);
// natychmiastowa weryfikacja
const s2=fs.readFileSync('index.html','utf8');
const l2=s2.split('\n').find(l=>l.includes('seedInfo(k)'));
console.log('verify:', JSON.stringify(l2.slice(0,200)));
const acorn=require('C:/Users/ASUS/AppData/Local/Temp/jsparse/node_modules/acorn');
const scripts=[...s2.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
try{acorn.parse(scripts[3],{ecmaVersion:2022});console.log('PARSE_OK');}catch(e){console.log('PARSE_ERR:',e.message);}
