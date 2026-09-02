
const lessons = [
{n:1,title:"Hier kommt Lubo aus dem All!",goals:["Förderprogramm kennenlernen","Gruppenregeln"],materials:["Handpuppe „Lubo“","Bild von Lubo im Raumschiff","Kleiner Ball","Regelkarten und kleiner Beutel o. Ä.","Lebhaftes Lied und Abspielgerät","Schönes Tuch für die Kreismitte"],prep:["Umgang mit der Handpuppe kurz ausprobieren.","Stuhlkreis und Kreismitte vorbereiten.","Lubo zunächst außerhalb des Raums aufbewahren."],steps:[["Begrüßung & Lubo vorstellen","Lubo als Besucher aus dem All einführen. Er möchte von den Kindern lernen, wie man auf der Erde gut miteinander umgeht.","Handpuppe, Lubo-Bild"],["Namensspiel mit Ball","Ball im Kreis zurollen, Blickkontakt aufnehmen und den eigenen Namen sagen. In einer zweiten Runde kann der Name des Kindes genannt werden, zu dem der Ball rollt.","Ball"],["Gruppenregeln","Regelkarten gemeinsam anschauen, die dargestellten Regeln mit den Kindern formulieren und anschließend sichtbar im Raum lassen.","Regelkarten"],["Kooperationsspiel „Eisscholle“","Die Gruppe rückt auf einer kleiner werdenden Fläche zusammen. Gemeinsam Lösungen finden, damit alle Platz haben.","Spielfläche / Eisscholle"],["Abschlussritual","Gemeinsam aufstehen, Hände zur Mitte und die Stunde mit dem vereinbarten Ritual beenden.","–"]]},
{n:2,title:"Zusammen sind wir eine Gruppe!",goals:["Gruppengefühl stärken","Sternenrunde einführen"],materials:["Handpuppe „Lubo“","Regelkarten","Tuch für die Kreismitte","Musik und Abspielgerät","Sternenaufkleber","Farbiges Tonpapier","Dunkelblauer Fotokarton","Fotogerät"],prep:["Fotokarton und Bastelmaterial bereitlegen.","Eigenes Handmuster als Beispiel vorbereiten.","Raum und Kreismitte gestalten; Gruppenregeln sichtbar aufhängen.","Lubo-Lied bereithalten."],steps:[["Begrüßung","Lubo-Lied und kurze Wiederholung der Gruppenregeln. Gemeinsam einen Gruppennamen festlegen.","Lubo, Lied, Regelkarten"],["Namensspiel „Mein rechter, rechter Platz ist frei“","Im Stuhlkreis bleibt ein Platz frei. Das Kind daneben wünscht ein anderes Kind auf den freien Platz; Namen werden wiederholt.","Stuhlkreis"],["Gruppenbild gestalten","Jedes Kind gestaltet einen Handumriss. Die Hände werden gemeinsam als Gruppenbild angeordnet und mit Namen versehen.","Tonpapier, Fotokarton, Bastelmaterial"],["Sternenrunde","Lubo hebt bei jedem Kind konkret etwas Positives aus der Stunde hervor. Das Kind erhält einen Stern.","Sternenaufkleber"],["Gruppenfoto","Ein Foto der Gruppe für das Gruppenbild aufnehmen.","Fotogerät"],["Abschlussritual","Gemeinsamer Abschluss wie in Stunde 1.","–"]]},
{n:3,title:"Lubo und die Kinder machen einen Wetterbericht",goals:["Stimmungsbarometer einführen","Gefühle erkennen und benennen"],materials:["Handpuppe „Lubo“","Emotionsbilder von Lubo","Emotionsbilder von Kindern","Fragezeichen-Karte","Bilder oder Fotos: Sonne, Regen, Gewitter und Nebel","Tücher: gelb, blau, weiß und grau","Bild „Lubo mit Herz“","Sternenaufkleber"],prep:["Vier Wetterecken vorbereiten: Sonne, Regen, Gewitter/Sturm und Nebel.","Passende Tücher, Wetterbilder und Emotionsbilder bereitlegen."],steps:[["Begrüßung","Lubo-Lied; bei Bedarf die Gruppenregeln kurz wiederholen.","Lubo, Lied"],["„Markt der Gefühle“","Kinder bewegen sich durch den Raum und stellen verschiedene Gefühlslagen körperlich dar, z. B. fröhlich, traurig oder müde, selbstbewusst, ängstlich oder wütend.","Freie Bewegungsfläche"],["Gefühlswetter einführen","Gemeinsam Gefühle mit Wetterlagen vergleichen und zuordnen. Unterschiedliche Zuordnungen sind ausdrücklich möglich.","Emotionsbilder, Wetterbilder, Tücher"],["Eigener Wetterbericht","Jedes Kind überlegt: „Welches Wetter ist gerade in mir?“ und stellt sich in die passende Wetterecke. Wer möchte, erklärt kurz warum.","Vorbereitete Wetterecken"],["Sternenrunde","Lubo benennt bei jedem Kind etwas Positives aus der Stunde und vergibt einen Stern.","Sternenaufkleber"],["Abschlussritual","Gemeinsamer Abschluss wie in Stunde 1.","–"]],note:"Beim Gefühlswetter gibt es kein „richtig“ oder „falsch“. Die Kinder entscheiden selbst, welches Wetter zu ihrer momentanen Stimmung passt."}
];

const restTitles=["Wir lernen uns besser kennen","Das kann ich gut!","Auf dem nebligen See","Wer ist alles in der Sternengruppe?","Wir sind die Detektive der Sternengruppe","Wir sind eine Gruppe und halten zusammen!","Mein Körper verrät mir, wie es mir geht!","Lubo freut sich über seine neuen Freunde","Lubo hat Heimweh","Lubo hat Ärger bekommen","Lubo hat Angst","Lubos mutige Freunde","Lubo und die Gefühlsdetektive","Wie würdest du dich fühlen?","Eine Busfahrt mit viel Gefühl","Die Sternengruppe wird gebraucht","Ich fühle mich wohl!","Lubos Raumschiff ist weg!","Lubo darf nicht mitspielen","Lubo wird gehänselt","Lubo kann ganz ruhig bleiben","Zusammen können wir vieles lösen","Lubo verliert ein Spiel","Lubo lernt, mit Enttäuschungen umzugehen","Wir können gut zusammenarbeiten!","Lubo löst einen Streit","Sternenfahrt","Lubo möchte gerne mitmachen!","Lubo hat gelernt, wie man gut miteinander umgeht","Lubos neues Raumschiff","Auf Wiedersehen!"];
restTitles.forEach((title,i)=>lessons.push({n:i+4,title}));

const app=document.getElementById("app");

function setNav(active){
  document.querySelectorAll("nav button").forEach(btn=>btn.classList.toggle("active",btn.dataset.view===active));
}

function renderHome(){
  setNav("home");
  let html='<section class="card hero"><span class="pill">Praxis-Spickzettel</span><h2>Was brauche ich? Was mache ich?</h2><p>Interne Arbeitshilfe für die Durchführung – ohne Eingaben, Speicherung oder Dokumentation.</p></section><h3 class="phase">Einführung · Rituale & Gruppengefühl</h3><section class="card">';
  lessons.forEach((lesson)=>{
    if(lesson.n===4){html+='</section><h3 class="phase">Weitere Stunden · bereits als Übersicht angelegt</h3><section class="card">';}
    const goals=lesson.goals?'<div>'+lesson.goals.map(g=>'<span class="tag">'+g+'</span>').join('')+'</div>':'<div class="muted">noch nicht eingepflegt</div>';
    const button=lesson.n<=3?'<button data-open="'+lesson.n+'">Öffnen</button>':'';
    html+='<div class="lesson '+(lesson.n>3?'locked':'')+'"><div class="num">'+lesson.n+'</div><div><b>'+lesson.title+'</b>'+goals+'</div>'+button+'</div>';
  });
  html+='</section>';
  app.innerHTML=html;
  document.querySelectorAll("[data-open]").forEach(btn=>btn.addEventListener("click",()=>renderLesson(Number(btn.dataset.open))));
}

function renderLesson(n){
  setNav("home");
  const lesson=lessons.find(l=>l.n===n);
  if(!lesson||!lesson.materials){renderHome();return;}
  let html='<button class="back" id="backBtn">← Übersicht</button>';
  html+='<section class="card hero"><span class="pill">Stunde '+lesson.n+'</span><h2>'+lesson.title+'</h2><div>'+lesson.goals.map(g=>'<span class="tag">'+g+'</span>').join('')+'</div></section>';
  html+='<section class="card"><h3>🧰 Das brauche ich</h3>'+lesson.materials.map(x=>'<div class="material">• '+x+'</div>').join('')+'</section>';
  html+='<section class="card"><h3>🛠️ Vorher vorbereiten</h3>'+lesson.prep.map(x=>'<div class="material">• '+x+'</div>').join('')+'</section>';
  html+='<section class="card"><h3>▶️ So geht’s</h3>'+lesson.steps.map((s,i)=>'<div class="step" data-step="'+(i+1)+'"><b>'+s[0]+'</b><p>'+s[1]+'</p><div class="miniMaterial"><b>Material:</b> '+s[2]+'</div></div>').join('')+'</section>';
  if(lesson.note){html+='<section class="card note"><b>Praxishinweis</b><p>'+lesson.note+'</p></section>';}
  app.innerHTML=html;
  document.getElementById("backBtn").addEventListener("click",renderHome);
}

function renderMaterials(){
  setNav("materials");
  app.innerHTML='<section class="card hero"><span class="pill">Vorbereitung</span><h2>Materialübersicht · Stunden 1–3</h2><p>Zum schnellen Bereitlegen vor den ersten drei Einheiten.</p></section><div class="materialsGrid">'+lessons.slice(0,3).map(l=>'<section class="card"><h3>'+l.n+'. '+l.title+'</h3>'+l.materials.map(x=>'<div class="material">• '+x+'</div>').join('')+'<button class="primary" data-material-open="'+l.n+'" style="margin-top:12px">Stunde öffnen</button></section>').join('')+'</div>';
  document.querySelectorAll("[data-material-open]").forEach(btn=>btn.addEventListener("click",()=>renderLesson(Number(btn.dataset.materialOpen))));
}

document.querySelector('[data-view="home"]').addEventListener("click",renderHome);
document.querySelector('[data-view="materials"]').addEventListener("click",renderMaterials);
document.getElementById("homeIcon").addEventListener("click",renderHome);
renderHome();
