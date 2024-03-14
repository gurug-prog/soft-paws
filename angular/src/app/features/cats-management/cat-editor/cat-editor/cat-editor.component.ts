import { Component, Input, ViewChild } from '@angular/core';
import { CatDto } from '@proxy/cats';
import { CatService } from '@proxy/controllers';
import { first } from 'rxjs';

@Component({
  selector: 'app-cat-editor',
  templateUrl: './cat-editor.component.html',
  styleUrl: './cat-editor.component.scss'
})
export class CatEditorComponent {
  @ViewChild("op") op;
  @Input()
  title: string;

  @Input()
  catDraft: CatDto;

  constructor(private readonly catService: CatService) {}

  openEditor(event: Event) {
    this.op.toggle(event);
  }

  saveCatDraft() {
    if(this.catDraft.id) {
      this.updateCat();
    } else {
      this.createCat();
    }
  }

  updateCat() {
    this.catService.updateCat(this.catDraft)
    .pipe(first())
    .subscribe( 
      response => {
        console.log('Cat updated:', response);
        this.catDraft = response;
      }
    );
  }

  createCat() {
    this.catService.createCat(this.catDraft)
    .pipe(first())
    .subscribe( 
      response => {
        console.log('Cat created:', response);
        this.catDraft = response;
      }
    );
  }
}
