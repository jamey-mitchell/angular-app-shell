import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissiontrainingComponent } from './mission/missiontraining.component';
import { OnthejobtrainingComponent } from './onthejob/onthejobtraining.component';
import { TrainingComponent } from './training.component';

const routes: Routes = [
  { 
    path: '', 
    component: TrainingComponent
  },
  {
    path: 'mission',
    component: MissiontrainingComponent
  },
  {
    path: 'onthejob',
    component: OnthejobtrainingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRouting { }
