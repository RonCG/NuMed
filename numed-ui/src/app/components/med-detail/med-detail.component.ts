import { DrugService } from './../../services/drug.service';
import { Component, OnInit } from '@angular/core';
import { DrugDetailModel } from 'src/app/models/drug-detail-model';

@Component({
  selector: 'app-med-detail',
  templateUrl: './med-detail.component.html',
  styleUrls: ['./med-detail.component.scss']
})
export class MedDetailComponent implements OnInit {

  drugDetail: DrugDetailModel | undefined;

  constructor(
    private drugService: DrugService
  ) {

  }

  ngOnInit(): void {
    this.initDrugDetail();
  }

  initDrugDetail() {
    this.drugDetail = this.drugService.getDrugDetail();
  }

}
