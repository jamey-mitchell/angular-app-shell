import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CertificationsComponent } from "./certifications.component";
import { EvaluationsComponent } from "./evaluations/evaluations.component";
import { MemosforrecordComponent } from "./memosforrecord/memosforrecord.component";
import { QualificationsComponent } from "./qualifications/qualifications.component";

const routes: Routes = [
    {
        path: '',
        component: CertificationsComponent
    },
    {
        path: 'evals',
        component: EvaluationsComponent
    },
    {
        path: 'mfrs',
        component: MemosforrecordComponent
    },
    {
        path: 'quals',
        component: QualificationsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CertificationsRouting { }