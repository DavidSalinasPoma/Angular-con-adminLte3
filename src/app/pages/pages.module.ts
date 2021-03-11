import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router'; // Utilizar este

// Modulos importados personalizados
import { SharedModule } from '../shared/shared.module';

// Componentes de este Modulo
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';


@NgModule({
  declarations: [PagesComponent, DashboardComponent, Grafica1Component, ProgressComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    // Se exporta para que pueda ser utilizado en otros modulos
    PagesComponent, DashboardComponent, Grafica1Component, ProgressComponent
  ]
})
export class PagesModule { }
