import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CatBreed, CatDto, GetCatListDto } from '@proxy/cats';
import { CatService } from '@proxy/controllers';
import { catchError, finalize, first } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LocalizationService, PagedResultDto } from '@abp/ng.core';
import { DatePipe } from '@angular/common';
import { LazyLoadEvent } from 'primeng/api';
import { LocalizedMessageService } from 'src/app/services/localized-message.service';
import { ConfirmationService } from 'primeng/api';

interface Breed {
  value: CatBreed;
  name: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  tableData: CatDto[] = [];
  loading: boolean = false;
  lastLoadEvent: LazyLoadEvent;
  totalRecords: number;

  @Input()
  localizedBreeds: Breed[];

  @Output()
  catEditEvent: EventEmitter<[CatDto, Event]> = new EventEmitter<[CatDto, Event]>();

  _searchQuery: string;
  get searchQuery(): string {
    return this._searchQuery;
  }

  @Input() set searchQuery(value: string) {
    this._searchQuery = value;
    this.refreshTable();
  }

  @Input()
  breedFilter: CatBreed[];

  constructor(
    private readonly catService: CatService,
    private readonly datePipe: DatePipe,
    private confirmationService: ConfirmationService,
    private readonly localizedMessageService: LocalizedMessageService,
    private readonly localizationService: LocalizationService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.totalRecords = 0;
  }

  confirmDeleteCat(event: Event, id: string) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: this.localizationService.instant(`::CatMessage:Are you sure you want to delete cat?`),
      //message: 'Are you sure you want to delete cat?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: "none",
      rejectIcon: "none",
      rejectButtonStyleClass: "p-button-text",
      accept: () => {
        this.removeCat(id);
      },
    });
  }

  getBreedName(breed: CatBreed): string {
    return this.localizedBreeds.find(uiBreed => uiBreed.value === breed).name || 'Unknown';
  }

  rowEdit(event, cat: CatDto) {
    if (!event) {
      return;
    }
    this.catEditEvent.emit([cat, event]);
  }

  getCats(event: LazyLoadEvent) {
    console.dir(`getcats searchQuery: ${this._searchQuery}`);
    this.loading = true;
    this.lastLoadEvent = event;
    const getCatListDto: GetCatListDto = {
      sorting: '',
      searchQuery: this._searchQuery,
      breedFilter: this.breedFilter,
      skipCount: event.first,
      maxResultCount: event.first + event.rows
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
        this.totalRecords = response.totalCount;
        this.loading = false;
      });
  }

  refreshTable() {
    this.getCats(this.lastLoadEvent);
  }

  removeCat(id: string) {
    this.catService.removeCat(id)
      .pipe(first())
      .subscribe({
        next: (response) => {
          if (response === true) {
            console.log("Deleted: " + id);
            this.localizedMessageService.showLocalizedMessage('success', 'Deleted', `::CatMessage:CatDeleted`);
            // this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'You have deleted the cat' });
          } else {
            console.log("Cannot delete cat with id: " + id);
            this.localizedMessageService.showLocalizedMessage('error', 'Error', `::CatMessage:CatDeleteError`);
            // this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Cannot delete the cat' });
          }
          this.getCats(null);
        },
        error: (error) => {
          this.localizedMessageService.showLocalizedMessage('error', 'Error', `::CatMessage:CatDeleteError`);
        }
      });
  }
}
