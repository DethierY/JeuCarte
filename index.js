//détermine la largeur responsive des cartes
// let hauteur:number = document.getElementById("carte").offsetHeight;
// let largeur:number = hauteur / 1.44;
// document.getElementById("carte").style.width = largeur + "px";
//nombre de cartes du jeu
const nbreCartes = 16;
//liste des positions horizontales des cartes
let listePositionVerticale = [2.5, 27.5, 52.5, 77.5];
//for(let i: number=0; i<4; i++)
//{
let div = document.createElement("div");
document.appendChild(div);
div.setAttribute("id", "carte");
div.setAttribute("height", "20 px");
let hauteur = div.offsetHeight;
document.getElementById("carte").style.width = hauteur / 1.44 + "px";
//div.setAttribute("width", hauteur/1.44 + "px");
div.setAttribute("background-color", "red");
//div.setAttribute("class","carre");
//}
//# sourceMappingURL=index.js.map