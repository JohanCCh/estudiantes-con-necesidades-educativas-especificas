import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudiantesNeeComponent } from './components/estudiantes-nee/estudiantes-nee.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { DestrezasComponent } from './components/destrezas/destrezas.component';
import { EstrategiasComponent } from './components/estrategias/estrategias.component';
import { HttpClientModule } from "@angular/common/http";
import { Filtro } from './pipes/filtro-destrezas.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesNeeComponent,
    PrincipalComponent,
    DestrezasComponent,
    EstrategiasComponent,
    Filtro,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
