
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'
import { FormularioReactiveModule } from './components/formulario-reactive/formulario-reactive.module';
import { FormularioTemplateModule } from './components/formulario-template/formulario-template.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, FormularioReactiveModule, FormularioTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
