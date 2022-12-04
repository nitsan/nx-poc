import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { QuestionnaireComponent } from "../questionnaire/questionnaire.component";
import { UtilsService } from "./utils.service";
import { HttpClientModule } from "@angular/common/http";

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
  ],
  providers: [UtilsService],
})
export class RemoteEntryModule {}
