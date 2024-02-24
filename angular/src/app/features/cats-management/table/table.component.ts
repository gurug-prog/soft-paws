import { Component, OnInit } from '@angular/core';

interface Cats { 
  firstname?: string; 
  lastname?: string; 
  age?: string; 
  vaccinated?: boolean;
} 

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  tableData: Cats[] = []; 
    cols: any[] = []; 
    constructor() { } 
  
    ngOnInit() { 
        this.cols = [ 
            { 
                field: 'firstname', 
                header: 'First Name'
            }, 
            { 
                field: 'lastname', 
                header: 'Last Name'
            }, 
            { 
                field: 'age', 
                header: 'Age'
            }, 
            { 
                field: 'vaccinated', 
                header: 'vaccinated'
            }, 
        ]; 
        this.tableData = [ 
            { 
                firstname: 'David', 
                lastname: 'ace', 
                age: '40', 
                vaccinated: true, 
            }, 
            { 
                firstname: 'AJne', 
                lastname: 'west', 
                age: '40', 
                vaccinated: true, 
            }, 
            { 
                firstname: 'Mak', 
                lastname: 'Lame', 
                age: '40', 
                vaccinated: true, 
            }, 
        ]; 
    } 
}
