import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipesCommonModule } from './components/pipes-common/pipes-common.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PipesCommonModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
