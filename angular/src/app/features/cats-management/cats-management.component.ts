import { Component, OnInit  } from '@angular/core';

interface Breed {
  name: string;
}


@Component({
  selector: 'app-cats-management',
  templateUrl: './cats-management.component.html',
  styleUrl: './cats-management.component.scss'
})
export class CatsManagementComponent implements OnInit {
  title = 'table';
  breed: Breed[] | undefined;
  selectedBreed: Breed | undefined;

  constructor() {
    return;
  }

  ngOnInit() {
    this.breed = [
        { name: 'Burmese' },
        { name: 'Ragdoll' },
        { name: 'Maine Coon' },
        { name: 'Sphynx'},
        { name: 'Chartreux' },
        { name: 'Cornish Rex' },
        { name: 'Devon Rex' },
        { name: 'Manx ' },
    ];
  }
}
