import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActionSheetController, IonicModule } from '@ionic/angular';
import { ListesCoursesService } from '../listes-courses.service';
import { ListeCourses } from '../liste-courses';
import {NavController  } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { SharePlugin } from '@capacitor/share';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class HomePage {
  listesCourses;
  /*  private listesCoursesService: ListesCoursesService = inject(ListesCoursesService);
  listesCourses: ListeCourses[] = this.listesCoursesService.getListesCourses(); */
 

  constructor(private nav1 :Router, private list: ListesCoursesService,
    private actionSheetController:ActionSheetController ) {
    this.listesCourses =this.list.getListesCourses();

  }
  
  async presentActionSheet(liste: ListeCourses) {
    const actionSheet = await this.actionSheetController.create({
      header: `${liste.nom} ${liste.etat}`,
      buttons: [
        {
          text: 'modifier',
          icon: 'update',
          handler: () => {
            ;          },
        },
        {
          text: 'Absent',
          icon: 'eye-off-outline',
          handler: () => {
            ;
          },
        },
        {
          text: 'Supprimer',
          icon: 'trash',
          role: 'destructive',
          handler: () => {
            ;
          },
        },

        {
          text: 'Annuler',
          icon: 'close',
          role: 'cancel',
          handler: () => {},
        },
      ],
    });
    actionSheet.present();
  }
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
  ngOnInit() {
  }

 
}
