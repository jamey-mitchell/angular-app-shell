import { NgModule } from "@angular/core";
import { CertificationsRouting } from "./certifications-routing.module";
import { CertificationsComponent } from "./certifications.component";
import { EvaluationsComponent } from "./evaluations/evaluations.component";
import { MemosforrecordComponent } from "./memosforrecord/memosforrecord.component";
import { QualificationsComponent } from "./qualifications/qualifications.component";

@NgModule({
    declarations: [
        CertificationsComponent,
        EvaluationsComponent,
        MemosforrecordComponent,
        QualificationsComponent
    ],
    imports: [CertificationsRouting],
    exports: [ CertificationsComponent ],
    bootstrap: [ CertificationsComponent ]
})
export class CertificationsModule { }