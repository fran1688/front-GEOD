import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from '../guards/auth.guard';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Grafica1Component} from './grafica1/grafica1.component';
import {PromesasComponent} from './promesas/promesas.component';

const routes: Routes = [
  { path: 'dashboard',
    component: PagesComponent,
    canActivate: [ AuthGuard ],
    children: [
      { path: '', component: DashboardComponent, data: { title: 'Dashbord'} },
      { path: 'progress', component: ProgressComponent, data: { title: 'Progress'} },
      { path: 'grafica1', component: Grafica1Component, data: { title: 'Grafica #1'} },
      { path: 'promesas', component: PromesasComponent, data: { title: 'Promesas'} },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule { }
