import { NgModule } from '@angular/core';
import { TaskRoutingModule } from './task-routing.module';
import { MainTaskComponent } from './pages/components/main-task/main-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedCustomModule } from '../shared/sharedCustom.module';
import { MatIconModule } from '@angular/material/icon';
import { TaskUpdateComponent } from './pages/components/task-update/task-update.component';
import { NavbarComponent } from './pages/components/navbar/navbar.component';
@NgModule({
  declarations: [MainTaskComponent, TaskUpdateComponent, NavbarComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    ReactiveFormsModule,
    SharedCustomModule,
    MatIconModule,
  ],
})
export class TaskModule {}
