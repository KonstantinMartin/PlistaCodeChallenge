import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { IPlistaData } from './models/edit-form';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public singleItem = new BehaviorSubject(undefined);
  public allItems = new BehaviorSubject(undefined);

  constructor(private httpService: HttpClient) {
    this.getJsonData();
  }

  // Read Json File and assign to allItems
  public getJsonData() {
    return this.httpService.get('./assets/data.json').subscribe((data: Array<IPlistaData>) => {
      this.allItems.next(data);
    });
  }

  // Load Single item with ID
  getSingleItem(id) {
      const i = this.allItems.value.find(( item : IPlistaData ) => item.a === id);
      this.singleItem.next(i);
  }

  // save - Update Item
  saveItem(newItem) {
    const allItems = this.allItems.value.map(( oldItem : IPlistaData ) => {
      if ( newItem.a === oldItem.a ) {
        oldItem = newItem;
      }
    })
  }
}


