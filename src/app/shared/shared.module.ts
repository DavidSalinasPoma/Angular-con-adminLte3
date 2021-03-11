import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Rutas pero no se va a utilizar como Ruta
import { SharedRoutingModule } from './shared-routing.module';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [BreadcrumbsComponent, FooterComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    // Para que pueda ser utilizado en otros modulos
    BreadcrumbsComponent, FooterComponent, HeaderComponent, SidebarComponent
  ]
})
export class SharedModule { }
