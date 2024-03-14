import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CatBreed, CatDto, GetCatListDto } from '@proxy/cats';
import { CatService } from '@proxy/controllers';
import { catchError, finalize, first } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { PagedResultDto } from '@abp/ng.core';
import { DatePipe } from '@angular/common';
import { LazyLoadEvent } from 'primeng/api';


// import { first } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  tableData: CatDto[] = []; 
  cols: any[] = []; 
  loading: boolean = false;
  lastLoadEvent: LazyLoadEvent;
  
  breedNames: { [key: number]: string } = {
    [CatBreed.Abyssinian]: 'Abyssinian',
    [CatBreed.Bengal]: 'Bengal',
    [CatBreed.BritishShorthair]: 'British Shorthair',
    [CatBreed.EgyptianMau]: 'Egyptian Mau',
    [CatBreed.EuropeanShorthair]: 'European Shorthair',
    [CatBreed.MaineCoon]: 'Maine Coon',
    [CatBreed.Persian]: 'Persian',
    [CatBreed.Ragdoll]: 'Ragdoll',
    [CatBreed.Sphynx]: 'Sphynx',
    [CatBreed.YorkChocolate]: 'York Chocolate'
  };

  @Output()
  catEditEvent: EventEmitter<[CatDto, Event]> = new EventEmitter<[CatDto, Event]>();
  

  constructor(
    private readonly catService: CatService, 
    private readonly datePipe: DatePipe
    ) {}

  getBreedName(breed: CatBreed): string {
    return this.breedNames[breed] || 'Unknown';
  }

  rowEdit(event, cat: CatDto) {
    if (!event) {
        return;
    }
    this.catEditEvent.emit([cat, event]);
  }

  getCats(event: LazyLoadEvent) {
    this.loading = true;
    this.lastLoadEvent = event;
    const getCatListDto: GetCatListDto = {
        sorting: '', 
        searchQuery: '', 
        breedFilter: [], 
        skipCount: 0, 
        maxResultCount: 10 
    };

    this.catService.getCatsList(getCatListDto)
      .pipe(
          catchError(error => {
              console.error('Error loading cats:', error);
              return throwError(error);
          }),
          finalize(() => {
          })
      )
      .subscribe((response: PagedResultDto<CatDto>) => {
          this.tableData = response.items;
          this.loading = false;
      });
  }

  removeCat(id: string) {
      this.catService.removeCat(id)
        .pipe(first())
        .subscribe((response) => {
          if(response) {
            console.log("Deleted: " + id);
          } else {
            console.log("Cannot delete cat with id: " + id);
          }
          this.getCats(null);
        });
    }
    
  ngOnInit() {
      // this.catService.getCat('589829D7-F85E-CFA3-E2FE-3A111D0DC0B6')
      // .pipe(first())
      // .subscribe(x => {
      //     console.log(x.age)
      //     console.log(x.isVaccinated)
      //     console.log(x.name)
      // });
      this.getCats(null);
  } 
}
