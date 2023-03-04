var h = 0
var t_prix = 0
var prix1 = 0
var prix2 = 0
var prix3 = 0
var prix4 = 0
var prix5 = 0
var prix6 = 0
var prix7 = 0
var prix8 = 0
var prix9 = 0
function red1(){
  const z = document.getElementsByClassName("div1");
  z[0].remove()
  h--
  document.getElementById("f").innerHTML=h
  t_prix=t_prix-prix1
  document.getElementById("t_prix").innerHTML="$"+t_prix
}
function red2(){
  const z = document.getElementsByClassName("div2");
  z[0].remove()
  h--
  document.getElementById("f").innerHTML=h
  t_prix=t_prix-prix2
  document.getElementById("t_prix").innerHTML="$"+t_prix
}
function red3(){
  const z = document.getElementsByClassName("div3");
  z[0].remove()
  h--
  document.getElementById("f").innerHTML=h
  t_prix=t_prix-prix3
  document.getElementById("t_prix").innerHTML="$"+t_prix
}
function red4(){
  const z = document.getElementsByClassName("div4");
  z[0].remove()
  h--
  document.getElementById("f").innerHTML=h
  t_prix=t_prix-prix4
  document.getElementById("t_prix").innerHTML="$"+t_prix
}
function red5(){
  const z = document.getElementsByClassName("div5");
  z[0].remove()
  h--
  document.getElementById("f").innerHTML=h
  t_prix=t_prix-prix5
  document.getElementById("t_prix").innerHTML="$"+t_prix
}
function red6(){
  const z = document.getElementsByClassName("div6");
  z[0].remove()
  h--
  document.getElementById("f").innerHTML=h
  t_prix=t_prix-prix6
  document.getElementById("t_prix").innerHTML="$"+t_prix
}
function red7(){
  const z = document.getElementsByClassName("div7");
  z[0].remove()
  h--
  document.getElementById("f").innerHTML=h
  t_prix=t_prix-prix7
  document.getElementById("t_prix").innerHTML="$"+t_prix
}

function red8(){
  const z = document.getElementsByClassName("div8");
  z[0].remove()
  h--
  document.getElementById("f").innerHTML=h
  t_prix=t_prix-prix8
  document.getElementById("t_prix").innerHTML="$"+t_prix
}
function red9(){
  const z = document.getElementsByClassName("div9");
  z[0].remove()
  h--
  document.getElementById("f").innerHTML=h
  t_prix=t_prix-prix9
  document.getElementById("t_prix").innerHTML="$"+t_prix
}


//__________homme.html__________________




//_______img1__________________

function add1(){
  const k = document.createElement("nav");
k.className="div1"
  const x = document.createElement("img");
  const s = document.createElement("h6");
  const y = document.createTextNode("Pays-bas 2022/2023");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("$60.00");
  const a = document.createElement("button");
  a.addEventListener('click',red1)
  const aa = document.createElement("i");
  aa.className="ti-close"
  const t = document.createElement("br");
  x.src="imagehomme/1.webp";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(t);
  k.appendChild(a);
  h++
  prix1=60
  t_prix=t_prix+prix1
  document.getElementById("f").innerHTML=h
  document.getElementById("t_prix").innerHTML="$"+t_prix
  const ele = document.getElementById("s");
  ele.appendChild(k);
}



//_______img2__________________

function add2(){
  const k = document.createElement("nav");
  k.className="div2"
  const x = document.createElement("img");
  const s = document.createElement("h6");
  const y = document.createTextNode("Galatasaray Extérieur");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("$53.00");
  const a = document.createElement("button");
  a.addEventListener('click',red2)
  const aa = document.createElement("i");
  aa.className="ti-close"
  const t = document.createElement("br");
  x.src="imagehomme/2.webp";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(t);
  k.appendChild(a);
  h++
  prix2=53
  t_prix=t_prix+prix2
  document.getElementById("f").innerHTML=h
  document.getElementById("t_prix").innerHTML="$"+t_prix
  const ele = document.getElementById("s");
  ele.appendChild(k);
}






//_______img3__________________

function add3(){
  const k = document.createElement("nav");
  k.className="div3"
  const x = document.createElement("img");
  const s = document.createElement("h6");
  const y = document.createTextNode("Chelsea FC");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("$60.00");
  const a = document.createElement("button");
  a.addEventListener('click',red3)
  const aa = document.createElement("i");
  aa.className="ti-close"
  const t = document.createElement("br");
  x.src="imagehomme/3.webp";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(t);
  k.appendChild(a);
  h++
  prix3=60
  t_prix=t_prix+prix3
  document.getElementById("f").innerHTML=h
  document.getElementById("t_prix").innerHTML="$"+t_prix
  const ele = document.getElementById("s");
  ele.appendChild(k);
}







//_______img4__________________

function add4(){
  const k = document.createElement("nav");
  k.className="div4"
  const x = document.createElement("img");
  const s = document.createElement("h6");
  const y = document.createTextNode("Angleterre Strike");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("$90.00");
  const a = document.createElement("button");
  a.addEventListener('click',red4)
  const aa = document.createElement("i");
  aa.className="ti-close"
  const t = document.createElement("br");
  x.src="imagehomme/4.webp";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(t);
  k.appendChild(a);
  h++
  prix4=90
  t_prix=t_prix+prix4
  document.getElementById("f").innerHTML=h
  document.getElementById("t_prix").innerHTML="$"+t_prix
  const ele = document.getElementById("s");
  ele.appendChild(k);
}







//_______img5__________________

function add5(){
  const k = document.createElement("nav");
  k.className="div5"
  const x = document.createElement("img");
  const s = document.createElement("h6");
  const y = document.createTextNode("Galatasaray Strike");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("$60.00");
  const a = document.createElement("button");
  a.addEventListener('click',red5)
  const aa = document.createElement("i");
  aa.className="ti-close"
  const t = document.createElement("br");
  x.src="imagehomme/5.webp";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(t);
  k.appendChild(a);
  h++
  prix5=60
  t_prix=t_prix+prix5
  document.getElementById("f").innerHTML=h
  document.getElementById("t_prix").innerHTML="$"+t_prix
  const ele = document.getElementById("s");
  ele.appendChild(k);
}









//_______img6__________________

function add6(){
  const k = document.createElement("nav");
  k.className="div6"
  const x = document.createElement("img");
  const s = document.createElement("h6");
  const y = document.createTextNode("Portugal Strike");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("$90.00");
  const a = document.createElement("button");
  a.addEventListener('click',red6)
  const aa = document.createElement("i");
  aa.className="ti-close"
  const t = document.createElement("br");
  x.src="imagehomme/6.webp";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(t);
  k.appendChild(a);
  h++
  prix6=90
  t_prix=t_prix+prix6
  document.getElementById("f").innerHTML=h
  document.getElementById("t_prix").innerHTML="$"+t_prix
  const ele = document.getElementById("s");
  ele.appendChild(k);
}









//_______img7__________________

function add7(){
  const k = document.createElement("nav");
  k.className="div7"
  const x = document.createElement("img");
  const s = document.createElement("h6");
  const y = document.createTextNode("NIKE ZAPATILLA Noir/Orange");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("$64.00");
  const a = document.createElement("button");
  a.addEventListener('click',red7)
  const aa = document.createElement("i");
  aa.className="ti-close"
  const t = document.createElement("br");
  x.src="imagehomme/22.jpg";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(t);
  k.appendChild(a);
  h++
  prix7=64
  t_prix=t_prix+prix7
  document.getElementById("f").innerHTML=h
  document.getElementById("t_prix").innerHTML="$"+t_prix
  const ele = document.getElementById("s");
  ele.appendChild(k);
}






//_______img8__________________

function add8(){
  const k = document.createElement("nav");
  k.className="div8"
  const x = document.createElement("img");
  const s = document.createElement("h6");
  const y = document.createTextNode("NIKE ZAPATILLA Bleu Marine");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("$64.00");
  const a = document.createElement("button");
  a.addEventListener('click',red8)
  const aa = document.createElement("i");
  aa.className="ti-close"
  const t = document.createElement("br");
  x.src="imagehomme/44.jpg";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(t);
  k.appendChild(a);
  h++
  prix8=64
  t_prix=t_prix+prix8
  document.getElementById("f").innerHTML=h
  document.getElementById("t_prix").innerHTML="$"+t_prix
  const ele = document.getElementById("s");
  ele.appendChild(k);
}









//_______img9__________________

function add9(){
  const k = document.createElement("nav");
  k.className="div9"
  const x = document.createElement("img");
  const s = document.createElement("h6");
  const y = document.createTextNode("NIKE Chaussures Downshifter 11 Smoke");
  const ss = document.createElement("h6");
  const yy = document.createTextNode("$64.00");
  const a = document.createElement("button");
  a.addEventListener('click',red9)
  const aa = document.createElement("i");
  aa.className="ti-close"
  const t = document.createElement("br");
  x.src="imagehomme/55.webp";
  a.appendChild(aa);
  s.appendChild(y);
  ss.appendChild(yy);
  k.appendChild(x);
  k.appendChild(s);
  k.appendChild(ss);
  k.appendChild(t);
  k.appendChild(a);
  h++
  prix9=64
  t_prix=t_prix+prix9
  document.getElementById("f").innerHTML=h
  document.getElementById("t_prix").innerHTML="$"+t_prix
  const ele = document.getElementById("s");
  ele.appendChild(k);
}






















