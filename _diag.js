const fs=require('fs');
const src=fs.readFileSync('index.html','utf8');
const scripts=[...src.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
const lines=scripts[3].split('\n');
console.log('LAST 40 CHARS of 3041:', JSON.stringify(lines[3040].slice(-40)));
let cnt=0;
const tail="seedInfo(k)+'</small></div><b>";
lines.forEach(l=>{if(l.trim().endsWith(tail))cnt++;});
console.log('truncated count:',cnt);
// pokaż też linię PRZED i PO
console.log('3040:', JSON.stringify(lines[3039].slice(-60)));
console.log('3042:', JSON.stringify(lines[3041].slice(0,60)));
