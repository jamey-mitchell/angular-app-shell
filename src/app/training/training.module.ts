import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { TrainingComponent } from './training.component';
import { TrainingRouting } from './training-routing.module';
import { MissiontrainingComponent } from './mission/missiontraining.component';
import { OnthejobtrainingComponent } from './onthejob/onthejobtraining.component';


@NgModule({
  declarations: [
    TrainingComponent,
    MissiontrainingComponent,
    OnthejobtrainingComponent
  ],
  imports: [
    TrainingRouting
  ],
  exports: [ TrainingComponent ],
  bootstrap: [ TrainingComponent ]
})
export class TrainingModule { }
