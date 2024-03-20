import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output()
  searchChange: EventEmitter<string> = new EventEmitter<string>();

  value: string = '';

  constructor() {}

  onSearch() {
    console.log(this.value);
    this.searchChange.emit(this.value);
  }
}
