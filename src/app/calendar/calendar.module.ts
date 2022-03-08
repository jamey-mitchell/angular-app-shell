import { NgModule } from "@angular/core";
import { CalendarRouting } from "./calendar-routing.module";
import { CalendarComponent } from "./calendar.component";

@NgModule({
    declarations: [ CalendarComponent ],
    imports: [ CalendarRouting],
    exports: [ CalendarComponent ],
    bootstrap: [ CalendarComponent ]
})
export class CalendarModule { }