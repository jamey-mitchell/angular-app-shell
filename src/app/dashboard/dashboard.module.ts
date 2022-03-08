import { NgModule } from "@angular/core";
import { ActionitemsComponent } from "./actionitems/actionitems.component";
import { DashboardComponent } from "./dashboard.component";
import { GonogoComponent } from "./gonogo/gonogo.component";
import { UpcomingeventsComponent } from "./upcomingevents/upcomingevents.component";

@NgModule({
    declarations: [
        ActionitemsComponent,
        DashboardComponent,
        GonogoComponent,
        UpcomingeventsComponent
    ],
    exports: [ DashboardComponent ],
    bootstrap: [ DashboardComponent ]
 })
export class DashboardModule { }