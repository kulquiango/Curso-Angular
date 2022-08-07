import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTaskComponent } from './pages/components/main-task/main-task.component';
import { TaskUpdateComponent } from './pages/components/task-update/task-update.component';

const routes: Routes = [
  {
    path: '',
    component: MainTaskComponent,
  },
  {
    path: ':id/:name',
    component: TaskUpdateComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
