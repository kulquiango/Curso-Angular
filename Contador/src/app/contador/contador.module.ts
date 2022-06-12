import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BtnRestaComponent } from "./components/btn-resta/btn-resta.component";
import { BtnSumaComponent } from "./components/btn-suma/btn-suma.component";
import { ContadorComponent } from "./components/contador/contador.component";

@NgModule({
  declarations: [ContadorComponent, BtnSumaComponent, BtnRestaComponent],
  imports: [CommonModule],
  exports: [ContadorComponent]
})
export class ContadorModule {

}
