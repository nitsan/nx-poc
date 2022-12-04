import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { QuestionnaireComponent } from "../questionnaire/questionnaire.component";

@NgModule({
  declarations: [QuestionnaireComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: QuestionnaireComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
