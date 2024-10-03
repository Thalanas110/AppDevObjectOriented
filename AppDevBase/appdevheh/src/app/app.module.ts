// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Problem1Component } from './problem1/problem1.component';
import { Problem3Component } from './problem3/problem3.component';
import { Problem4Component } from './problem4/problem4.component';
import { Problem5Component } from './problem5/problem5.component';
import { Problem6Component } from './problem6/problem6.component';

@NgModule({
  declarations: [
    AppComponent,
    Problem1Component,
    Problem3Component,
    Problem4Component,
    Problem5Component,
    Problem6Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
