import { Component, OnInit } from '@angular/core';
import { UtilsService } from "../remote-entry/utils.service";

@Component({
  selector: 'nx-poc-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {}

  next() {
    this.utilsService.getNextPath();
  }
}
