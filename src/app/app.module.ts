import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaComponent } from './dia/dia.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { MesComponent } from './mes/mes.component';

@NgModule({
  declarations: [
    AppComponent,
    DiaComponent,
    CalendarioComponent,
    MesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
