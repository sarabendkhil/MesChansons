import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChansonsComponent } from './chansons/chansons.component';
import { AddChansonComponent } from './add-chanson/add-chanson.component';
import { FormsModule } from '@angular/forms';
import { UpdateChansonComponent } from './update-chanson/update-chanson.component';
@NgModule({
  declarations: [
    AppComponent,
    ChansonsComponent,
    AddChansonComponent,
    UpdateChansonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
