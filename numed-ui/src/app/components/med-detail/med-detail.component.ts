import { DrugService } from './../../services/drug.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrugDetailModel } from 'src/app/models/drug-detail-model';

@Component({
  selector: 'app-med-detail',
  templateUrl: './med-detail.component.html',
  styleUrls: ['./med-detail.component.scss']
})
export class MedDetailComponent implements OnInit {

  drugId: number | null = 0;
  drugDetail: DrugDetailModel | undefined;

  constructor(
    private drugService: DrugService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.drugId = Number(this.route.snapshot.queryParamMap.get('drugId'));
    this.getDrugDetail(this.drugId);
  }

  getDrugDetail(drugId: number) {
    this.drugDetail = this.drugService.getDrugDetail(drugId);
  }

}
