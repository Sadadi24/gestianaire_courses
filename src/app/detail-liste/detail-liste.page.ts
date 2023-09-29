import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonRouterOutlet, IonicModule, Platform } from '@ionic/angular';
import { ListesCoursesService } from '../listes-courses.service';
import { HomePage } from '../home/home.page';
import { App } from '@capacitor/app';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-liste',
  templateUrl: './detail-liste.page.html',
  styleUrls: ['./detail-liste.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetailListePage implements OnInit {
   listeCourses ;
  constructor(private route : ActivatedRoute,private listeService:ListesCoursesService,
  ) { 
  const id= this.route.snapshot.paramMap.get('id'); 
  this.listeCourses = this.listeService.getListesCoursesById(3)?.articles;

   
   
  }
  back(){

  }


  ngOnInit() {
    

  }

}
