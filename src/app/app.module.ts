import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modulos personalizados
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';

// Componentes
import { AppComponent } from './app.component';
// Pagina 404
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NopagesfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Modulos hijos del sistema
    AuthModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
