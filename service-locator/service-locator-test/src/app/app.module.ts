import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Comp0Component } from './views/comp0/comp0.component';
import { Comp1Component } from './views/comp1/comp1.component';
import { ServiceLocator } from './service-locator';

@NgModule({
  declarations: [
    AppComponent,
    Comp0Component,
    Comp1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServiceLocator],
  bootstrap: [AppComponent]
})
export class AppModule { }
