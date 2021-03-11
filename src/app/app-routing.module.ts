// Modulos
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Ruta Personalizadas
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';

// Componentes
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';

const routes: Routes = [
  // path:'/auth' AuthRouting
  // path:'/dashboard' pagesRouting


  // Cuando la ruta va a ser vacio va aredireccionar al dashboard 
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },


  // Ruta Padre 4
  // Cuando se equivoquen de escribir una ruta
  { path: '**', component: NopagesfoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // Rutas tomadas
    AuthRoutingModule,
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
