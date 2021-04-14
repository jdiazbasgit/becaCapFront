import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JornadaComponent } from './jornada/jornada.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { JornadaModalComponent } from './jornada-modal/jornada-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    JornadaComponent,
    JornadaModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
