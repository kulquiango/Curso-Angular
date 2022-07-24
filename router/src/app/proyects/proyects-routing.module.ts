import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformactionComponent } from './informaction/informaction.component';
import { ProyectsComponent } from './proyects.component';

const routes: Routes = [
  {
    path: '',
    component: ProyectsComponent,
  },
  {
    path: 'information/:name',
    component: InformactionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectsRoutingModule {}
