//___________________famme.html_________________________//
var h=0
var t_prix = 0
var prix11 = 0
var prix12 = 0
var prix13 = 0
var prix14 = 0
var prix15 = 0
var prix16 = 0
var prix17 = 0
var prix18 = 0
var prix19 = 0




function red11(){
  const z = document.getElementsByClassName("div11");
  z[0].remove()
  h--
  document.getElementById("f").innerHTML=h
  t_prix=t_prix-prix11
  document.getElementById("t_prix").innerHTML="$"+t_prix
}
function red12(){
  const z = document.getElementsByClassName("div12");
  z[0].remove()
  h--
  document.getElementById("f").innerHTML=h
  t_prix=t_prix-prix12
  document.getElementById("t_prix").innerHTML="$"+t_prix
}
function red13(){
  const z = document.getElementsByClassName("div13");
  z[0].remove()
  h--
  document.getElementById("f").innerHTML=h
  t_prix=t_prix-prix13
  document.getElementById("t_prix").innerHTML="$"+t_prix
}
function red14(){
  const z = document.getElementsByClassName("div14");
  z[0].remove()
  h--
  document.getElementById("f").innerHTML=h
  t_prix=t_prix-prix14
  document.getElementById("t_prix").innerHTML="$"+t_prix
}
function red15(){
  const z = document.getElementsByClassName("div15");
  z[0].remove()
  h--
  document.getElementById("f").innerHTML=h
  t_prix=t_prix-prix15
  document.getElementById("t_prix").innerHTML="$"+t_prix
}
function red16(){
  const z = document.getElementsByClassName("div16");
  z[0].remove()
  h--
  document.getElementById("f").innerHTML=h
  t_prix=t_prix-prix16
  document.getElementById("t_prix").innerHTML="$"+t_prix
}
function red17(){
  const z = document.getElementsByClassName("div17");
  z[0].remove()
  h--
  document.getElementById("f").innerHTML=h
  t_prix=t_prix-prix17
  document.getElementById("t_prix").innerHTML="$"+t_prix
}

function red18(){
  const z = document.getElementsByClassName("div18");
  z[0].remove()
  h--
  document.getElementById("f").innerHTML=h
  t_prix=t_prix-prix8
  document.getElementById("t_prix").innerHTML="$"+t_prix
}
function red19(){
  const z = document.getElementsByClassName("div19");
  z[0].remove()
  h--
  document.getElementById("f").innerHTML=h
  t_prix=t_prix-prix9
  document.getElementById("t_prix").innerHTML="$"+t_prix
}


//_________famme.html__________________




//_______img11__________________

function add11(){
  const k = document.createElement("nav");
  k.className="div11"
  const x = document.createElement("img");
  const s = document.createElement("h6");
  const y = document.createTextNode("Nike Go");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("$60.00");
  const a = document.createElement("button");
  a.addEventListener('click',red11)
  const aa = document.createElement("i");
  aa.className="ti-close"
  const t = document.createElement("br");
  x.src="imagefemme/1.webp";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(t);
  k.appendChild(a);
  h++
  prix11=60
  t_prix=t_prix+prix11
  document.getElementById("f").innerHTML=h
  document.getElementById("t_prix").innerHTML="$"+t_prix
  const ele = document.getElementById("s");
  ele.appendChild(k);
}



//_______img12__________________

function add12(){
  const k = document.createElement("nav");
  k.className="div12"
  const x = document.createElement("img");
  const s = document.createElement("h6");
  const y = document.createTextNode("Nike Sportswear");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("$60.00");
  const a = document.createElement("button");
  a.addEventListener('click',red12)
  const aa = document.createElement("i");
  aa.className="ti-close"
  const t = document.createElement("br");
  x.src="imagefemme/2.webp";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(t);
  k.appendChild(a);
  h++
  prix12=60
  t_prix=t_prix+prix12
  document.getElementById("f").innerHTML=h
  document.getElementById("t_prix").innerHTML="$"+t_prix
  const ele = document.getElementById("s");
  ele.appendChild(k);
}






//_______img13__________________

function add13(){
  const k = document.createElement("nav");
  k.className="div13"
  const x = document.createElement("img");
  const s = document.createElement("h6");
  const y = document.createTextNode("NIKE GO");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("$60.00");
  const a = document.createElement("button");
  a.addEventListener('click',red13)
  const aa = document.createElement("i");
  aa.className="ti-close"
  const t = document.createElement("br");
  x.src="imagefemme/3.webp";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(t);
  k.appendChild(a);
  h++
  prix13=60
  t_prix=t_prix+prix13
  document.getElementById("f").innerHTML=h
  document.getElementById("t_prix").innerHTML="$"+t_prix
  const ele = document.getElementById("s");
  ele.appendChild(k);
}







//_______img14__________________

function add14(){
  const k = document.createElement("nav");
  k.className="div14"
  const x = document.createElement("img");
  const s = document.createElement("h6");
  const y = document.createTextNode("Nike Sportswear Phoenix Fleece");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("$80.00");
  const a = document.createElement("button");
  a.addEventListener('click',red14)
  const aa = document.createElement("i");
  aa.className="ti-close"
  const t = document.createElement("br");
  x.src="imagefemme/4.webp";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(t);
  k.appendChild(a);
  h++
  prix14=80
  t_prix=t_prix+prix14
  document.getElementById("f").innerHTML=h
  document.getElementById("t_prix").innerHTML="$"+t_prix
  const ele = document.getElementById("s");
  ele.appendChild(k);
}







//_______img15__________________

function add15(){
  const k = document.createElement("nav");
  k.className="div15"
  const x = document.createElement("img");
  const s = document.createElement("h6");
  const y = document.createTextNode("Nike Sportswear Phoenix Fleece");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("$80.00");
  const a = document.createElement("button");
  a.addEventListener('click',red15)
  const aa = document.createElement("i");
  aa.className="ti-close"
  const t = document.createElement("br");
  x.src="imagefemme/5.webp";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(t);
  k.appendChild(a);
  h++
  prix15=80
  t_prix=t_prix+prix15
  document.getElementById("f").innerHTML=h
  document.getElementById("t_prix").innerHTML="$"+t_prix
  const ele = document.getElementById("s");
  ele.appendChild(k);
}









//_______img16__________________

function add16(){
  const k = document.createElement("nav");
  k.className="div16"
  const x = document.createElement("img");
  const s = document.createElement("h6");
  const y = document.createTextNode("Jordan Flight");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("$69.00");
  const a = document.createElement("button");
  a.addEventListener('click',red16)
  const aa = document.createElement("i");
  aa.className="ti-close"
  const t = document.createElement("br");
  x.src="imagefemme/6.webp";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(t);
  k.appendChild(a);
  h++
  prix16=69
  t_prix=t_prix+prix16
  document.getElementById("f").innerHTML=h
  document.getElementById("t_prix").innerHTML="$"+t_prix
  const ele = document.getElementById("s");
  ele.appendChild(k);
}









//_______img17__________________

function add17(){
  const k = document.createElement("nav");
  k.className="div17"
  const x = document.createElement("img");
  const s = document.createElement("h6");
  const y = document.createTextNode("Nike Legend Essential 2");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("$55.00");
  const a = document.createElement("button");
  a.addEventListener('click',red17)
  const aa = document.createElement("i");
  aa.className="ti-close"
  const t = document.createElement("br");
  x.src="imagefemme/7.webp";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(t);
  k.appendChild(a);
  h++
  prix17=55
  t_prix=t_prix+prix17
  document.getElementById("f").innerHTML=h
  document.getElementById("t_prix").innerHTML="$"+t_prix
  const ele = document.getElementById("s");
  ele.appendChild(k);
}






//_______img18__________________

function add18(){
  const k = document.createElement("nav");
  k.className="div18"
  const x = document.createElement("img");
  const s = document.createElement("h6");
  const y = document.createTextNode("Nike Pegasus 39");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("$55.00");
  const a = document.createElement("button");
  a.addEventListener('click',red18)
  const aa = document.createElement("i");
  aa.className="ti-close"
  const t = document.createElement("br");
  x.src="imagefemme/8.webp";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(t);
  k.appendChild(a);
  h++
  prix18=55
  t_prix=t_prix+prix18
  document.getElementById("f").innerHTML=h
  document.getElementById("t_prix").innerHTML="$"+t_prix
  const ele = document.getElementById("s");
  ele.appendChild(k);
}









//_______img19__________________

function add19(){
  const k = document.createElement("nav");
  k.className="div19"
  const x = document.createElement("img");
  const s = document.createElement("h6");
  const y = document.createTextNode("Nike TC 7900");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("$80.00");
  const a = document.createElement("button");
  a.addEventListener('click',red19)
  const aa = document.createElement("i");
  aa.className="ti-close"
  const t = document.createElement("br");
  x.src="imagefemme/9.webp";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(t);
  k.appendChild(a);
  h++
  prix19=80
  t_prix=t_prix+prix19
  document.getElementById("f").innerHTML=h
  document.getElementById("t_prix").innerHTML="$"+t_prix
  const ele = document.getElementById("s");
  ele.appendChild(k);
}