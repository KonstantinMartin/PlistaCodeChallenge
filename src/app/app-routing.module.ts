import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SelectionMenuComponent} from './selection-menu/selection-menu.component';
import { Routes, RouterModule } from '@angular/router';
import {TableViewComponent} from './table-view/table-view.component';
import {EditViewComponent} from './edit-view/edit-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'selection', pathMatch: 'full'},
  { path: 'selection', component: SelectionMenuComponent },
  { path: 'tableView', component: TableViewComponent },
  { path: 'editView', component: EditViewComponent },
  { path: 'editView/:id', component: EditViewComponent },
  { path: '**', redirectTo: '/selection' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes),  CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
