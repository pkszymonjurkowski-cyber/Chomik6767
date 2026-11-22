const fs=require('fs');
let s=fs.readFileSync('index.html','utf8');
const broken="data-act=\"seed\" data-k=\"'+k+'\"'+(VG.money<bPrice(s.cost)?' disabled':'')+'>'+BUY+'</button></div>');";
if(!s.includes(broken)){console.log('MISS');process.exit(1);}
s=s.replace(broken,"data-act=\"seed\" data-k=\"'+k+'\"'+(VG.money<bPrice(s.cost)?' disabled':'')+'>'+BUY+'</button></div>';}");
fs.writeFileSync('index.html',s);
const acorn=require('C:/Users/ASUS/AppData/Local/Temp/jsparse/node_modules/acorn');
const scripts=[...s.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
try{acorn.parse(scripts[3],{ecmaVersion:2022});console.log('PARSE_OK');}catch(e){console.log('PARSE_ERR:',e.message);}
