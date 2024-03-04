import { Component, OnInit } from '@angular/core';
// import { CatService } from '@proxy/controllers';
// import { first } from 'rxjs';

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
    constructor(/*
      private readonly catService: CatService*/) {} 
  
    ngOnInit() {
        // this.catService.getCat('589829D7-F85E-CFA3-E2FE-3A111D0DC0B6')
        // .pipe(first())
        // .subscribe(x => {
        //     console.log(x.age)
        //     console.log(x.isVaccinated)
        //     console.log(x.name)
        // });
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
