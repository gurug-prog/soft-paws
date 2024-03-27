import { LocalizationService } from '@abp/ng.core';
import { Component, Input, ViewChild } from '@angular/core';
import { CatBreed, CatDto } from '@proxy/cats';
import { CatService } from '@proxy/controllers';
import { first } from 'rxjs';
import { LocalizedMessageService } from 'src/app/services/localized-message.service';

interface Breed {
  catBreed: CatBreed;
  name: string;
}

@Component({
  selector: 'app-cat-editor',
  templateUrl: './cat-editor.component.html',
  styleUrl: './cat-editor.component.scss',
})
export class CatEditorComponent {
  @ViewChild("op") op;

  @Input()
  title: string;

  @Input()
  catDraft: CatDto;

  @Input()
  breedOptions: Breed[];
  
  constructor(
    private readonly catService: CatService,
    private readonly localizedMessageService: LocalizedMessageService,
    private readonly localizationService: LocalizationService) { }

  openEditor(event: Event) {
    this.op.toggle(event);
  }

  closeEditor() {
    this.op.hide();
  }

  saveCatDraft() {
    console.dir(this.catDraft.id)
    if (this.catDraft.id) {
      this.updateCat();
    } else {
      this.createCat();
    }
    this.closeEditor();
  }

  cancelCatDraft() {
    console.dir(this.catDraft.id);
    this.closeEditor();
  }

  updateCat() {
    this.catService.updateCat(this.catDraft)
      .pipe(first())
      .subscribe(
        response => {
          console.log('Cat updated:', response);
          this.localizedMessageService.showLocalizedMessage('success', 'Updated', `::CatMessage:CatUpdated`);
          //this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'You have updated the cat' });
          this.catDraft = response;
        },
        error => {
          this.localizedMessageService.showLocalizedMessage('error', 'Error', `::CatMessage:CatUpdateError`);
          //this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Cannot update the cat' });
        }
      );
  }

  createCat() {
    this.catService.createCat(this.catDraft)
      .pipe(first())
      .subscribe(
        response => {
          if (response.id) {
            console.log('Cat created:', response);
            this.localizedMessageService.showLocalizedMessage('success', 'Created', `::CatMessage:CatCreated`);
            //this.messageService.add({ severity: 'success', summary: 'Created', detail: 'You have created the cat' });
            this.catDraft = response;
          } else {
            this.localizedMessageService.showLocalizedMessage('error', 'Error', `::CatMessage:CatCreateError`);
            //this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Cannot create the cat' });
          }
        },
      );
  }

  updateSelectedBreed(selectedBreed: Breed) {
    this.catDraft.breed = selectedBreed.catBreed;
  }
}
