import { Component, OnInit } from '@angular/core';
import { Opps } from '../_models/opps.model';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../_services/backend.service';

@Component({
  selector: 'app-opsearch',
  templateUrl: './opsearch.component.html',
  styleUrls: ['./opsearch.component.css']
})
export class OpsearchComponent implements OnInit {

  public opportunity_list: Opps[] = [];
  public domain = 'Core';
  public searchstring;

  constructor(private actRoute: ActivatedRoute, private backendService: BackendService) {
    this.actRoute.params.subscribe(val => {
      this.domain = val.domain;
    });
   }

  ngOnInit(): void {
    this.opportunity_list.push(new Opps());
    this.opportunity_list[0].domain = 'Core';
    this.opportunity_list[0].Deadline = '1 Week';
    this.opportunity_list[0].Location = 'Singapore';
    this.opportunity_list[0].Name_of_Program = 'STEP Youth Regional Affairs Dialogue';
    this.opportunity_list[0].Organiser = 'Commitee Organis';
    this.opportunity_list[0].Type = 'CONFERENCE';
  }

  getMainColor() {
    if(this.domain.toUpperCase() == 'CORE') {
      return '#05905F';
    }
    else if(this.domain.toUpperCase() == 'INFORMATION TECHNOLOGY') {
      return '#FFA954';
    }
    else if(this.domain.toUpperCase() == 'CONSULTING') {
      return '#E76D50';
    }
    else if(this.domain.toUpperCase() == 'ENTREPRENEURSHIP') {
      return '#225882';
    }
    else if(this.domain.toUpperCase() == 'FINANCE') {
      return '#9562A5';
    }
    else if(this.domain.toUpperCase() == 'SOCDEV & POLICY') {
      return '#44A7C1';
    }
  }

  getDomain() {
    return this.domain.toLowerCase();
  }

  search(form) {
    this.backendService.getOpps(form.value.searchstring)
      .subscribe((opps => {
        this.opportunity_list = opps;
      }));
  }

}
