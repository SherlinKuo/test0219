import { SCommonModule } from './components/s-common/s-common.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Home2Component } from './home2/home2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
