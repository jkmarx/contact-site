import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NannyShareComponent } from './nanny-share/nanny-share.component';


@NgModule({
	imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NannyShareComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
