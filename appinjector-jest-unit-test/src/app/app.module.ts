import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Comp0Component } from './views/comp0/comp0.component';
import { Comp1Component } from './views/comp1/comp1.component';
import { Service0Service } from './service0.service';
import { Service1Service } from './service1.service';

@NgModule({
  declarations: [
    AppComponent,
    Comp0Component,
    Comp1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [Service0Service, Service1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
