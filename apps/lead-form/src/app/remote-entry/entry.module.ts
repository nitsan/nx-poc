import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LeadFormComponent } from "../lead-form/lead-form.component";
import { HttpClientModule } from "@angular/common/http";
import { LeadFormService } from "../lead-form/lead-form.service";

@NgModule({
  declarations: [LeadFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: LeadFormComponent,
      },
    ]),
  ],
  providers: [LeadFormService],
})
export class RemoteEntryModule {}
