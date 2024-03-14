import { Component, OnInit, ViewChild  } from '@angular/core';
import { CatBreed, CatDto } from '@proxy/cats';
import { CatService } from '@proxy/controllers';
import { CatEditorComponent } from './cat-editor/cat-editor/cat-editor.component';

interface TableCat {
  dto: CatDto;
  selectedBreed: Breed;
}

interface Breed {
  catBreed: CatBreed;
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
  checked: boolean = false;
  currentCat: TableCat = this.createEmptyCat();
  editorTitle: string;
  @ViewChild(CatEditorComponent) catEditorRef;

  constructor(private readonly catService: CatService) {}

  createEmptyCat(): TableCat {
    return {
      dto: {
        age: 0,
        breed: CatBreed.None,
        isVaccinated: false,
        id: "",
        name: "",
        creationTime: ""
      },
      selectedBreed: null
    };
  }

  startEditCat(event: [CatDto, Event]) {
    if(!event) {
      return;
    }
    const [cat, buttonEvent] = event;
    this.currentCat.dto = cat;
    this.currentCat.selectedBreed = this.breed.find(x => x.catBreed === cat.breed);
    this.selectedBreed = this.currentCat.selectedBreed;
    this.editorTitle = "Edit a cat";
    this.catEditorRef.openEditor(buttonEvent);
  }

  startAddCat(event) {
    if(!event) {
      return;
    }
    this.editorTitle = "Add a cat";
    this.catEditorRef.openEditor(event);
  }
  
  ngOnInit() {
    this.breed = [
      {
        catBreed: CatBreed.Abyssinian,
        name: "Abyssinian"
      },
      {
        catBreed: CatBreed.Bengal,
        name: "Bengal"
      },
      {
        catBreed: CatBreed.BritishShorthair,
        name: "British Shorthair"
      },
      {
        catBreed: CatBreed.EgyptianMau,
        name: "Egyptian Mau"
      },
      {
        catBreed: CatBreed.EuropeanShorthair,
        name: "European Shorthair"
      },
      {
        catBreed: CatBreed.MaineCoon,
        name: "Maine Coon"
      },
      {
        catBreed: CatBreed.Persian,
        name: "Persian"
      },
      {
        catBreed: CatBreed.Ragdoll,
        name: "Ragdoll"
      },      
      {
        catBreed: CatBreed.Sphynx,
        name: "Sphynx"
      },      
      {
        catBreed: CatBreed.YorkChocolate,
        name: "York Chocolate"
      }
    ]
  }
}
