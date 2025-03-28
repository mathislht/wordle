import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { WordleComponent } from './components/wordle/wordle.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    WordleComponent
  ],
  bootstrap: []
})
export class AppModule { }
