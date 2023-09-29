import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListesCoursesService } from '../listes-courses.service';
import { ListeCourses } from '../liste-courses';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListPage implements OnInit {
  private listesCoursesService: ListesCoursesService = inject(ListesCoursesService);
  listesCourses: ListeCourses[] = [];
  
  constructor() {}

  ngOnInit() {
    this.listesCourses = this.listesCoursesService.getListesCourses();
  }

}
