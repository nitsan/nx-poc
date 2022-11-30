import { Component, OnInit } from '@angular/core';
import { LeadFormService } from './lead-form.service';

@Component({
  selector: 'acme-lead-form',
  templateUrl: './lead-form.component.html',
  styleUrls: ['./lead-form.component.scss'],
})
export class LeadFormComponent implements OnInit {
  constructor(private leadFormService: LeadFormService) {}

  ngOnInit(): void {}

  getQuote() {
    this.leadFormService.getNextPath();
  }
}
