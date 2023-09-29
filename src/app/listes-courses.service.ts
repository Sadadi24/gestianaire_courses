import { Injectable } from '@angular/core';
import { ListeCourses } from './liste-courses';




@Injectable({
  providedIn: 'root'
})
export class ListesCoursesService {
  private listesCourses: ListeCourses[] = [

    {
      nom: " Courses de la semaine",
      etat:"Terminé",
      id:1,
      articles: [
        {id:3, nom: "Pain", quantite: 1, achete: false },
        {id:2,nom: "Lait", quantite: 2, achete: false },
        {id:4,nom: "Œufs", quantite: 12, achete: true },
        {id:19,nom: "Pommes", quantite: 6, achete: false }
      ]
    },
    {
      nom: "Articles de nettoyage",
      etat:"En cours",
      id:2,
      articles: [
        { id:7,nom: "Détergent à vaisselle", quantite: 1, achete: false },
        { id:8,nom: "Lessive", quantite: 1, achete: false },
        { id:9,nom: "Balai", quantite: 1, achete: true }
      ]
    },
    {
      nom: "Articles de bricolage",
      etat:"Terminé",
      id:3,
      articles: [
        { id:11,nom: "Peinture blanche", quantite: 2, achete: false },
        { id:21,nom: "Pinceau", quantite: 3, achete: false },
        { id:13,nom: "Vis de 2 pouces", quantite: 50, achete: false }
      ]
    }
  ];



  constructor() { }
  getListesCoursesById(id:number){
    return this.listesCourses.find(v=> v.id === id);
  }
  addListeCourse(listesCourse:ListeCourses){
    return this.listesCourses.push( listesCourse);
  }
  deleteListeCourse(id:number){
    this.listesCourses.splice(id,1);

  }

  getListesCourses(){
    return this.listesCourses;
  }
}
