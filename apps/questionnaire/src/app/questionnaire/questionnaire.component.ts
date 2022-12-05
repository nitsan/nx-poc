import { Component } from '@angular/core';
import { UtilsService } from "../remote-entry/utils.service";

@Component({
  selector: 'nx-poc-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent {
  constructor(private utilsService: UtilsService) {}

  next() {
    this.utilsService.getNextPath();
  }
}
