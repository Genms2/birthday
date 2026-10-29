(function(){
var music=(function(){var au=document.getElementById("bgm"),usingAu=false,ac,mg,dl,on=false,step=0,nxt=0,btn=document.getElementById("mute");
var ch=[[48,52,55],[45,48,52],[41,45,48],[43,47,50]];
function f(m){return 440*Math.pow(2,(m-69)/12)}
function tone(m,t,d,v){var o=ac.createOscillator(),g=ac.createGain();o.type="triangle";o.frequency.value=f(m);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(v,t+.015);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g);g.connect(mg);g.connect(dl);o.start(t);o.stop(t+d+.05)}
function sched(){while(nxt<ac.currentTime+.4){var c=ch[Math.floor(step/8)%4],p=step%8,ix=[0,1,2,1,2,1,2,1][p];if(p===0)tone(c[0],nxt,1.8,.2);tone(c[ix]+24,nxt,.9,.15);if(p===4)tone(c[2]+36,nxt,1.2,.06);nxt+=.4;step++}}
function init(){ac=new(window.AudioContext||window.webkitAudioContext)();mg=ac.createGain();mg.gain.value=.5;mg.connect(ac.destination);dl=ac.createDelay();dl.delayTime.value=.45;var fb=ac.createGain();fb.gain.value=.35;dl.connect(fb);fb.connect(dl);var w=ac.createGain();w.gain.value=.5;dl.connect(w);w.connect(mg)}
function lab(){btn.textContent=on?"♪":"✕";btn.setAttribute("aria-label",on?"Matikan musik":"Nyalakan musik")}
function start(){try{if(!ac){init();nxt=ac.currentTime+.1;setInterval(sched,100)}ac.resume();on=true;btn.hidden=false;lab()}catch(e){}}
btn.onclick=function(){on=!on;if(usingAu){if(on)au.play();else au.pause()}else if(ac){if(on)ac.resume();else ac.suspend()}lab()};
document.addEventListener("visibilitychange",function(){if(!on)return;if(usingAu){if(document.hidden)au.pause();else au.play()}else if(ac){if(document.hidden)ac.suspend();else ac.resume()}});
function aStart(){var ok=function(){usingAu=true;on=true;btn.hidden=false;lab()};try{var pr=au.play();if(pr&&pr.then)pr.then(ok).catch(start);else ok()}catch(e){start()}}
return{start:aStart}})();
var ids=["s-intro","s-load","s-hbd","s-cake","s-m1","s-m2","s-m3","s-heart","s-env","s-letter","s-end"],cur=0;
var LT="Selamat ulang tahun kesayangankuu\n\nBoleh yaa, aku merayakan hari spesialmu lewat momen ini.\n\nKatanya, makin dewasa, ulang tahun bukan lagi soal seberapa ramai pesta. Tapi tentang siapa yang tetap tinggal saat dunia lagi gak baik-baik aja. Dan lewat momen ini, aku berharap kamu tahu kalau kamu selalu bisa mengandalkanku untuk itu. Isi tulisan ini gak lebih dari sekadar harapan dan do’a. Terima kasih ya, sudah mengizinkan aku menjadi bagian dari ceritamu di sepanjang tahun lalu.\n\nAku tahu betul betapa banyak tawa, tangis, dan lelah yang kamu lewati di tahun sebelumnya. Karena itu, aku bersyukur bisa merayakanmu di tahun ini. Dan kamu pantas dirayakan, meskipun kecil-kecilan. Terima kasih karena sudah selalu berusaha mencari alasan untuk tetap bertahan dan berjuang.\n\nSemoga di usia ini, tangki cintamu terisi penuh, duniamu terasa lebih teduh, dan perlahan mimpi-mimpimu itu tumbuh menjadi utuh.";
var lt=null;
function typeLetter(){var el=document.getElementById("letter");clearInterval(lt);el.scrollTop=0;if(calm){el.textContent=LT;return}var n=0;el.textContent="";lt=setInterval(function(){n+=1;el.textContent=LT.slice(0,n);el.scrollTop=el.scrollHeight;if(n>=LT.length)clearInterval(lt)},34)}
document.getElementById("letter").onclick=function(){clearInterval(lt);this.textContent=LT};
function drawHeart(){var N=14,pts=[];for(var k=0;k<N;k++){var t=k/N*6.2832,x=16*Math.pow(Math.sin(t),3),y=13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t);pts.push([100+x*5.4,88-y*5.4])}
var d="M"+pts.map(function(q){return q[0].toFixed(1)+" "+q[1].toFixed(1)}).join("L")+"Z";
var c=pts.map(function(q,k){return '<circle class="hs" cx="'+q[0].toFixed(1)+'" cy="'+q[1].toFixed(1)+'" r="3.4" style="animation-delay:'+(k*.22).toFixed(2)+'s"/>'}).join("");
document.getElementById("heart").innerHTML='<path class="hl" pathLength="1" d="'+d+'"/>'+c+'<text x="100" y="94" text-anchor="middle" class="ht">Bebee</text>'}
function drawBouquet(){var fl=[[110,52,3,"#7db4ff"],[66,78,2.6,"#a9cdff"],[154,78,2.6,"#7db4ff"],[40,115,2.2,"#5f9ef0"],[180,115,2.2,"#a9cdff"],[92,100,2.4,"#5f9ef0"],[130,102,2.4,"#8fbfff"],[110,136,2.2,"#a9cdff"],[85,60,1.3,"#dbe9ff"],[135,62,1.3,"#dbe9ff"],[58,100,1.3,"#dbe9ff"],[162,98,1.3,"#dbe9ff"],[75,128,1.3,"#dbe9ff"],[148,128,1.3,"#dbe9ff"]],o='<g class="fl" style="transform-origin:110px 225px">',i,j,f,p;
for(i=0;i<fl.length;i++){f=fl[i];o+='<path class="bs" pathLength="1" style="animation-delay:'+(i*.12).toFixed(2)+'s" d="M110 205Q'+(110+(f[0]-110)*.2).toFixed(1)+' '+((205+f[1])/2).toFixed(1)+' '+f[0]+' '+f[1]+'"/>'}
o+='<ellipse class="bl" cx="72" cy="138" rx="12" ry="4.5" transform="rotate(-35 72 138)"/><ellipse class="bl" cx="148" cy="138" rx="12" ry="4.5" transform="rotate(35 148 138)"/>';
for(i=0;i<fl.length;i++){f=fl[i];p='';for(j=0;j<5;j++)p+='<ellipse cx="0" cy="-5.6" rx="4.1" ry="5.3" transform="rotate('+j*72+')" fill="'+f[3]+'"/>';o+='<g class="bf" style="animation-delay:'+(1+i*.16).toFixed(2)+'s"><g transform="translate('+f[0]+' '+f[1]+') scale('+f[2]+')">'+p+'<circle r="2.8" fill="#fff6d6"/><circle r="1.6" fill="#ffd27a"/></g></g>'}
o+='<g class="bw"><path d="M58 148L162 148L124 222Q110 228 96 222Z" fill="#2a62a3"/><path d="M110 150L96 222M110 150L124 222" stroke="#3b7cc4" stroke-width="1.5" fill="none"/><path d="M58 148q13 -9 26 0t26 0t26 0t26 0" stroke="#8ec5ff" stroke-width="2" fill="none"/></g>';
o+='<g class="bb"><ellipse cx="92" cy="170" rx="14" ry="7" transform="rotate(-20 92 170)" fill="#ffe3c4"/><ellipse cx="128" cy="170" rx="14" ry="7" transform="rotate(20 128 170)" fill="#ffe3c4"/><path d="M110 172q-10 14 -16 24M110 172q10 14 16 24" stroke="#ffe3c4" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="110" cy="169" r="5" fill="#ffd27a"/></g></g>';
document.getElementById("bouquet").innerHTML=o}
function lanterns(){var box=document.getElementById("lanterns");box.innerHTML="";for(var i=0;i<9;i++){var e=document.createElement("i");e.className="lt";e.style.setProperty("--x",(6+Math.random()*84)+"%");e.style.setProperty("--dx",((Math.random()-.5)*80)+"px");e.style.setProperty("--d",(9+Math.random()*6)+"s");e.style.animationDelay=(i*.9)+"s";if(calm){e.style.animation="none";e.style.opacity=".85";e.style.bottom=(4+Math.random()*22)+"%"}box.appendChild(e)}}
document.getElementById("env").onclick=function(){if(this.classList.contains("open"))return;this.classList.add("open");setTimeout(function(){show(cur+1)},1200)};
var sp=[];
function flora(){var W=innerWidth,H=120,o='<svg viewBox="0 0 '+W+' '+H+'" width="'+W+'" height="'+H+'">';
for(var r=1;r>=0;r--){var gap=r?34:30,k=r?.72:1,n=Math.ceil(W/gap)+1;
for(var i=0;i<n;i++){var x=i*gap+(r?16:4)+Math.random()*12,y=(r?58:34)+Math.random()*(r?28:42),sc=k*(.85+Math.random()*.55),dl=(-Math.random()*4.5).toFixed(2),c=Math.random()<.3?"#a9cdff":"#7db4ff",bx=x+(Math.random()-.5)*16,ly=y+(H-y)*.55;
o+='<g class="fl" style="transform-origin:'+x.toFixed(0)+'px '+H+'px;animation-delay:'+dl+'s" opacity="'+(r?.65:1)+'"><path d="M'+x.toFixed(1)+' '+H+'Q'+bx.toFixed(1)+' '+((H+y)/2).toFixed(1)+' '+x.toFixed(1)+' '+y.toFixed(1)+'" stroke="#3d8b66" stroke-width="1.6" fill="none"/><ellipse cx="'+(x+7).toFixed(1)+'" cy="'+ly.toFixed(1)+'" rx="7" ry="2.6" transform="rotate(-30 '+(x+7).toFixed(1)+' '+ly.toFixed(1)+')" fill="#3d8b66"/><g transform="translate('+x.toFixed(1)+' '+y.toFixed(1)+') scale('+sc.toFixed(2)+')">';
for(var j=0;j<5;j++)o+='<ellipse cx="0" cy="-5.6" rx="4.1" ry="5.3" transform="rotate('+j*72+')" fill="'+c+'"/>';
o+='<circle r="2.8" fill="#fff6d6"/><circle r="1.6" fill="#ffd27a"/></g></g>'}}
document.getElementById("flora").innerHTML=o+'</svg>'}
flora();addEventListener("resize",flora);
function spark(x,y,n){if(calm)return;var d=devicePixelRatio;for(var i=0;i<n;i++)sp.push({x:x*d,y:y*d,vx:(Math.random()-.5)*(n>2?3:1.2)*d,vy:(Math.random()*.8+.2-(n>2?1.2:0))*d,l:1,r:(1+Math.random()*1.8)*d,w:Math.random()<.4});if(sp.length>140)sp.splice(0,sp.length-140)}
document.addEventListener("pointermove",function(e){spark(e.clientX,e.clientY,1)});
document.addEventListener("pointerdown",function(e){spark(e.clientX,e.clientY,8)});
function show(i){cur=i;ids.forEach(function(id,k){document.getElementById(id).classList.toggle("on",k===i)});if(i===2)burst(110);var nm=ids[i];if(nm==="s-letter")typeLetter();if(nm==="s-heart")drawHeart();if(nm==="s-env")document.getElementById("env").classList.remove("open");if(nm==="s-end"){lanterns();drawBouquet()}else document.getElementById("lanterns").innerHTML=""}
document.getElementById("start").onclick=function(){music.start();show(1);var p=0,t=setInterval(function(){p=Math.min(100,p+Math.ceil(Math.random()*9));document.getElementById("pct").textContent=p;document.getElementById("fill").style.width=p+"%";if(p>=100){clearInterval(t);setTimeout(function(){show(2)},350)}},110)};
Array.prototype.forEach.call(document.querySelectorAll(".next"),function(b){b.onclick=function(){show(cur+1)}});
document.getElementById("again").onclick=function(){document.getElementById("cake").classList.remove("out");document.getElementById("wish").textContent="ketuk kuenya untuk meniup lilin";show(0)};
document.getElementById("cake").onclick=function(){if(this.classList.contains("out"))return;this.classList.add("out");document.getElementById("cakeNext").disabled=false;document.getElementById("wish").textContent="Semoga semua yang kamu minta terkabul.";burst(160)};
var cv=document.getElementById("cv"),cx=cv.getContext("2d"),ps=[],run=false,calm=window.matchMedia("(prefers-reduced-motion:reduce)").matches;
function size(){cv.width=innerWidth*devicePixelRatio;cv.height=innerHeight*devicePixelRatio}size();addEventListener("resize",size);
function burst(n){if(calm)n=20;var c=["#8ec5ff","#ffd27a","#ffe3c4","#f4f8ff"],d=devicePixelRatio;for(var i=0;i<n;i++)ps.push({x:cv.width/2,y:cv.height*.4,vx:(Math.random()-.5)*14*d,vy:(-Math.random()*13-3)*d,s:(4+Math.random()*5)*d,c:c[i%4],r:Math.random()*6});if(!run){run=true;requestAnimationFrame(tick)}}
function tick(){cx.clearRect(0,0,cv.width,cv.height);ps=ps.filter(function(p){return p.y<cv.height+20});ps.forEach(function(p){p.vy+=.35*devicePixelRatio;p.x+=p.vx;p.y+=p.vy;p.r+=.2;cx.fillStyle=p.c;cx.save();cx.translate(p.x,p.y);cx.rotate(p.r);cx.fillRect(-p.s/2,-p.s/2,p.s,p.s*.6);cx.restore()});if(ps.length)requestAnimationFrame(tick);else run=false}
var sk=document.getElementById("sky"),sx=sk.getContext("2d"),st=[],sh=null,nextSh=2500;
function skySize(){sk.width=innerWidth*devicePixelRatio;sk.height=innerHeight*devicePixelRatio;st=[];var n=Math.round(innerWidth*innerHeight/5200);for(var i=0;i<n;i++)st.push({x:Math.random()*sk.width,y:Math.random()*sk.height*.85,r:(.4+Math.random()*1.1)*devicePixelRatio,p:Math.random()*6.28,s:.6+Math.random()*1.6,w:Math.random()<.18})}
skySize();addEventListener("resize",skySize);
function sky(t){var d=devicePixelRatio;sx.clearRect(0,0,sk.width,sk.height);
st.forEach(function(a){sx.globalAlpha=calm?.8:.35+.65*(.5+.5*Math.sin(t/1000*a.s+a.p));sx.fillStyle=a.w?"#ffe3c4":"#f4f8ff";sx.beginPath();sx.arc(a.x,a.y,a.r,0,6.283);sx.fill()});
sx.globalAlpha=1;
for(var q=sp.length-1;q>=0;q--){var a=sp[q];a.l-=.025;if(a.l<=0){sp.splice(q,1);continue}a.x+=a.vx;a.y+=a.vy;a.vy+=.02*d;sx.globalAlpha=a.l*.9;sx.fillStyle=a.w?"#ffe3c4":"#ffffff";sx.beginPath();sx.arc(a.x,a.y,a.r*(.4+a.l*.6),0,6.283);sx.fill()}
sx.globalAlpha=1;
if(!calm){if(!sh&&t>nextSh){sh={x:Math.random()*sk.width*.8+sk.width*.2,y:Math.random()*sk.height*.3,l:0};nextSh=t+4500+Math.random()*5000}
if(sh){sh.l+=.025;var x=sh.x-sh.l*sk.width*.45,y=sh.y+sh.l*sk.height*.3,g=sx.createLinearGradient(x,y,x+90*d,y-60*d);g.addColorStop(0,"#ffffff");g.addColorStop(1,"rgba(255,255,255,0)");sx.strokeStyle=g;sx.lineWidth=2*d;sx.lineCap="round";sx.beginPath();sx.moveTo(x,y);sx.lineTo(x+90*d,y-60*d);sx.stroke();if(sh.l>1)sh=null}}
requestAnimationFrame(sky)}
requestAnimationFrame(sky);
})();
