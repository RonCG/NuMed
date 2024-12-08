import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutoCompleteCompleteEvent, AutoCompleteSelectEvent } from 'primeng/autocomplete';
import { DrugService } from 'src/app/services/drug.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  drugs: any[] = [];
  selectedDrug: any;
  filteredDrugs: any[] = [...this.drugs];

  constructor(
    private router: Router,
    private drugService: DrugService
  ) {

  }

  ngOnInit(): void {
    this.getDrugsList();
  }

  getDrugsList() {
    this.drugs = this.drugService.getDrugsList();
  }


  filterDrug(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.drugs as any[]).length; i++) {
      let drug = (this.drugs as any[])[i];
      if (drug.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(drug);
      }
    }

    this.filteredDrugs = filtered;
  }

  onDrugSelected(event: AutoCompleteSelectEvent) {
    this.router.navigate(['/detail'], { queryParams: { drugId: event.value.value } });}
}
