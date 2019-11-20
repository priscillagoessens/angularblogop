import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  items= [{
    title:"Stranger Things",
    content:"Quand un jeune garçon disparaît, une petite ville découvre une affaire mystérieuse, des expériences secrètes, des forces surnaturelles terrifiantes... et une fillette.",
    date: new Date,
    loveIt: 0,
    img:"../assets/img/stranger.jpg"
  },
  {
    title:"Game of Thrones",
    content:"Il y a très longtemps, à une époque oubliée, une force a détruit l'équilibre des saisons. Dans un pays où l'été peut durer plusieurs années et l'hiver toute une vie, des forces sinistres et surnaturelles se pressent aux portes du Royaume des Sept Couronnes. La confrérie de la Garde de Nuit, protégeant le Royaume de toute créature pouvant provenir d'au-delà du Mur protecteur, n'a plus les ressources nécessaires pour assurer la sécurité de tous. Après un été de dix années, un hiver rigoureux s'abat sur le Royaume avec la promesse d'un avenir des plus sombres. Pendant ce temps, complots et rivalités se jouent sur le continent pour s'emparer du Trône de Fer, le symbole du pouvoir absolu.",
    date:new Date,
    loveIt: 0,
    img:"../assets/img/Got.jpg"
  },
  {
    title:"You",
    content:"Joe Goldberg est le gérant d'une modeste librairie à New York. Un jour, il fait la rencontre d'une cliente, Guinevere Beck. La jeune femme est un véritable coup de foudre pour Joe qui décide de la retrouver sur Internet.Joe devient vite obsédé par Beck. Il l observe et cherche à connaitre chaque détail de sa vie sur les réseaux sociaux, notamment ses habitudes ou ses amis. Persuadé qu'ils sont faits l'un pour l'autre, il va tenter de renverser tous les obstacles qui pourraient se dresser en travers de son chemin et élaborer un stratagème machiavélique pour la séduire. ",
    date:new Date,
    loveIt: 0,
    img:"../assets/img/you.png"
  },
  {
    title:"Glitch",
    content:"James Hayes est un policier local qui enquête sur la réapparition soudaine de six personnes présumées mortes en pleine santé. Aidé par le docteur Elishia McKellar, il va devoir découvrir la vérité sur ce mystérieux incident. ",
    date:new Date,
    loveIt: 0,
    img:"../assets/img/Glitch.jpg"
  },
  {
    title:"The Walking Dead",
    content:"Après une apocalypse ayant transformé la quasi-totalité de la population en zombies, un groupe d'hommes et de femmes mené par l'officier Rick Grimes tente de survivre... Ensemble, ils vont devoir tant bien que mal faire face à ce nouveau monde devenu méconnaissable, à travers leur périple dans le Sud profond des États-Unis.",
    date:new Date,
    loveIt: 0,
    img:"../assets/img/Twd.jpg"
  }]
}
