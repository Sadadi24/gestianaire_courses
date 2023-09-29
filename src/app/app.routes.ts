import { Routes } from '@angular/router';
import { DetailListePage } from './detail-liste/detail-liste.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'detail-liste/:id',
    loadComponent: () => import('./detail-liste/detail-liste.page').then( m => m.DetailListePage)
  },
  {
    path:'details/:id',
    component:DetailListePage
  },
  {
    path: 'add-or-edit-list',
    loadComponent: () => import('./add-or-edit-list/add-or-edit-list.page').then( m => m.AddOrEditListPage)
  },
  {
    path: 'list',
    loadComponent: () => import('./list/list.page').then( m => m.ListPage)
  },
];
