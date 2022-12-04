import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { QuestionnaireComponent } from "../questionnaire/questionnaire.component";
import { UtilsService } from "./utils.service";
import { HttpClientModule } from "@angular/common/http";
import { UiAngularModule } from "@nx-poc/ui-angular";

@NgModule({
  declarations: [QuestionnaireComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: QuestionnaireComponent,
      },
    ]),
    UiAngularModule,
  ],
  providers: [UtilsService],
})
export class RemoteEntryModule {}
