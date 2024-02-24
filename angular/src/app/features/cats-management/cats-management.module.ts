import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';
import { BrowserModule } from '@angular/platform-browser';
import { CatsManagementRoutingModule } from './cats-management-routing.module';
import { CatsManagementComponent } from './cats-management.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    HeaderComponent, 
    SearchComponent, 
    TableComponent,
    CatsManagementComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    BrowserModule, 
    FormsModule, 
    DropdownModule, 
    BrowserAnimationsModule, 
    ButtonModule,  
    StyleClassModule,
    TableModule,
    CatsManagementRoutingModule,
  ]
})
export class CatsManagementModule { }
