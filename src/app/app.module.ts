import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudiantesNeeComponent } from './components/estudiantes-nee/estudiantes-nee.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { DestrezasComponent } from './components/destrezas/destrezas.component';
import { EstrategiasComponent } from './components/estrategias/estrategias.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesNeeComponent,
    PrincipalComponent,
    DestrezasComponent,
    EstrategiasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
