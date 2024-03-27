import { Component, OnInit, ViewChild } from '@angular/core';
import { CatBreed, CatDto } from '@proxy/cats';
import { CatEditorComponent } from './cat-editor/cat-editor/cat-editor.component';
import { LocalizationService } from '@abp/ng.core';
import { TableComponent } from './table/table.component';

interface TableCat {
  dto: CatDto;
  selectedBreed: Breed;
}

interface Breed {
  value: CatBreed;
  name: string;
}

@Component({
  selector: 'app-cats-management',
  templateUrl: './cats-management.component.html',
  styleUrl: './cats-management.component.scss'
})
export class CatsManagementComponent implements OnInit {
  title = 'table';
  localizedBreeds: Breed[] | undefined;
  checked: boolean = false;
  currentCat: TableCat = this.createEmptyCat();
  editorTitle: string;
  searchQuery: string;
  breedFilter: CatBreed[] = [];
  @ViewChild(CatEditorComponent) catEditorRef;

  constructor(
    private readonly localizationService: LocalizationService
  ) { }

  ngOnInit() {
    this.localizedBreeds = Object.keys(CatBreed)
      .filter(v => isNaN(Number(v)))
      .map(name => {
        return {
          value: CatBreed[name as keyof typeof CatBreed] as unknown as CatBreed,
          name: this.localizationService.instant(`::CatBreed:${name}`)
        }
      });
  }

  onBreedSelect(breed: CatBreed) {
    console.dir(`Mangement breed`);
    console.dir(breed);
    this.breedFilter = [breed];
  }

  onSearchChange(query: string) {
    console.log("onSearchChange " + query);
    this.searchQuery = query;
  }

  createEmptyCat(): TableCat {
    return {
      dto: {
        age: 0,
        breed: CatBreed.None,
        isVaccinated: false,
        id: undefined,
        name: "",
        creationTime: undefined
      },
      selectedBreed: null
    };
  }

  startEditCat(event: [CatDto, Event]) {
    if (!event) {
      return;
    }
    const [cat, buttonEvent] = event;
    console.log('edit cat:', cat);
    this.currentCat.dto = cat;
    this.currentCat.selectedBreed = this.localizedBreeds.find(x => x.value === cat.breed);
    this.editorTitle = "Edit a cat";
    this.catEditorRef.openEditor(buttonEvent);
  }

  startAddCat(event) {
    if (!event) {
      return;
    }
    this.editorTitle = "Add a cat";
    this.catEditorRef.openEditor(event);
  }
}
