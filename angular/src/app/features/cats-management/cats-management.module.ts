import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';
import { CatsManagementRoutingModule } from './cats-management-routing.module';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { TableComponent } from './table/table.component';
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
    FormsModule,
    DropdownModule,
    ButtonModule,
    StyleClassModule,
    TableModule,
    CatsManagementRoutingModule,
  ]
})
export class CatsManagementModule { }
