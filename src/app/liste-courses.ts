import { Articles } from "./article";

export class ListeCourses {
    
    constructor(public id:number,public nom: string, public articles : Articles[] = [], public etat?: 'En cours' | 'Terminé'){}
}
