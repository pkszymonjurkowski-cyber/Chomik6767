const fs=require('fs');
const s=fs.readFileSync('_tmp_check.js','utf8');
let line=1,i=0,mode=null;
const stack=[];
while(i<s.length){
  const c=s[i],n=s[i+1];
  if(c==='\n'){line++;i++;continue;}
  if(mode){
    if(c==='\\'){i+=2;continue;}
    if(mode==='//'){mode=null;i++;continue;}
    if(mode==='/*'&&s.slice(i,i+2)==='*/'){mode=null;i+=2;continue;}
    if(c===mode&&mode!=='//'&&mode!=='/*'){mode=null;}
    i++;continue;
  }
  if(c==='/'&&n==='/'){mode='//';i+=2;continue;}
  if(c==='/'&&n==='*'){mode='/*';i+=2;continue;}
  if(c==='\''||c==='"'||c==='`'){mode=c;i++;continue;}
  if(c==='{'||c==='('||c==='['){stack.push({c,line});}
  if(c==='}'||c===')'||c===']'){
    const t=stack.pop();
    const want=c==='}'?'{':c===')'?'(':'[';
    if(!t||t.c!==want){console.log('MISMATCH at line',line,'got',c,'opened',t&&t.c,'at',t&&t.line);process.exit(0);}
  }
  i++;
}
console.log('unclosed:',stack.slice(-6).map(t=>t.c+'@'+t.line).join(', ')||'none');
