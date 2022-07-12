import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BtnDirective } from './directives/btn.directive';
import { ThemeDirective } from './directives/theme.directive';
import { ReactiveModule } from './reactive/reactive.module';

@NgModule({
  declarations: [
    AppComponent, ThemeDirective, BtnDirective],
  imports: [
    BrowserModule, ReactiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
