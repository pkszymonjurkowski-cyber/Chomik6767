const row=(lbl,have,need)=>(lbl,have,need)=>'<div class="shRow"><div class="shn">'+lbl+'</div><b style="color:'+(have>=need?'#a8e063':'#ff8a7a')+">'+have+'/'+need+'</b></div>';;
console.log(typeof row);
