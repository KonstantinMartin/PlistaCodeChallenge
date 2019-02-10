import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { DataService} from '../data-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IPlistaData } from '../models/edit-form';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.css']
})
export class EditViewComponent implements OnInit, OnDestroy {

  item: IPlistaData;
  allItems;
  params$: Subscription;
  singleItem$: Subscription;
  counter = 0;
  networks = [
    'a',
    'b',
    'c'
  ];
  products = [
    'Product 1',
    'Product 2',
    'Product 3',
    'Product 4',
    'Product 5',
    'Product 6',
    'Product 7',
    'Product 8',
    'Product 9',
    'Product 10'
  ];
  PlistaForm: FormGroup;
  settings = {
    bigBanner: true,
    timePicker: true,
    format: 'dd-MM-yyyy / hh:mm',
    defaultOpen: false
  }

  constructor(private fb: FormBuilder, private dataservice: DataService, private route: ActivatedRoute, private location: Location, private router: Router) {
    this.PlistaForm = this.createFormGroup();
    this.singleItem$ = this.dataservice.singleItem.subscribe(item => {
      if (item) {
        this.item = item;
        this.setFormValues(item);
      }
    });
  }

  ngOnInit() {
    this.params$ = this.route.params.subscribe(params => {
      // User enters directly the Edit View
      if (!+params.id || (+params.id && !this.item) ) {
        this.dataservice.allItems.subscribe(allItems => {
          if (allItems) {
            this.allItems = allItems;
            this.item = this.allItems[0];
            this.setFormValues(this.item);
          }
        });
      }
      // User enters from Table View with ID
      else if (+params.id) {
        this.dataservice.getSingleItem(+params.id);
      }
    });
  }

  // Destroy Observable subscriptions
  ngOnDestroy() {
    if (this.params$) {
      this.params$.unsubscribe();
    }
    if (this.singleItem$) {
      this.singleItem$.unsubscribe();
    }
  }

  // Create Form Groups and set validation criteria
  createFormGroup() {
    return new FormGroup({
      camp_cpc: new FormControl('', [Validators.required, Validators.pattern('^\\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9]?[0-9]?[0-9]?)?$')]),
      date: new FormControl('', Validators.required),
      freeclick: new FormControl('', Validators.required),
      network: new FormControl('', Validators.required),
      PlistaProduct: new FormControl('', Validators.required)
    });
  }

  // Set Start Values for selected Item
  setFormValues(item) {
    this.PlistaForm.controls.camp_cpc.setValue(item.camp_cpc);
    this.PlistaForm.controls.date.setValue(item.date);
    this.PlistaForm.controls.freeclick.setValue(item.freeclick);
    this.PlistaForm.controls.network.setValue(item.network);
    this.PlistaForm.controls.PlistaProduct.setValue(item.PlistaProduct);
  }

  // Go to next item on click
  changeItem(counter) {
    if (counter === '-1') {
      this.counter = this.counter - 1;
    }
    if (counter === '1') {
      this.counter = this.counter + 1;
    }
    this.item = this.allItems[this.counter];
    this.setFormValues(this.item);
    //this.dataservice.singleItem.next(this.item);
  }

  // Go back to previous location
  goBack() {
    this.location.back();
  }

  // Update current Item and send to saveItem() in Dataservice
  saveItem() {
    this.item.camp_cpc = this.PlistaForm.controls.camp_cpc.value;
    this.item.date = this.PlistaForm.controls.date.value;
    this.item.freeclick = this.PlistaForm.controls.freeclick.value;
    this.item.network = this.PlistaForm.controls.network.value;
    this.item.PlistaProduct = this.PlistaForm.controls.PlistaProduct.value;
    this.dataservice.saveItem(this.item);
    this.router.navigate(['/tableView']);
  }
}
