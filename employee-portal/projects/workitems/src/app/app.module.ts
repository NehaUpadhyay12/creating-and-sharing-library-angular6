import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpSharedModule } from 'emp-shared';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EmpSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
