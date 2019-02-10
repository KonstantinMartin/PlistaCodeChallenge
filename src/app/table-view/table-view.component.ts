import {Component } from '@angular/core';
import { DataService } from '../data-service.service';
import { Router } from '@angular/router';
import {IPlistaData} from '../models/edit-form';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent {
  displayedColumns: string[] = [
    'a',
    'campaignid',
    'userid',
    'camp_cpc',
    'date',
    'frienddomainid',
    'freeclick',
    'network',
    'PlistaProduct',
    'Edit'
  ];
  allItems: Array<IPlistaData>;

  constructor(private dataservice: DataService, private router: Router) {
    if (!this.allItems) {
      this.dataservice.allItems.subscribe(data => {
        this.allItems = data;
      });
    }
  }

  // Open Edit View on Click
  openEditView(item) {
    this.dataservice.singleItem.next(item);
    this.router.navigate(['/editView', item.a]);
  }
  }
