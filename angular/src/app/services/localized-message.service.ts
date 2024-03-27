import { Injectable } from "@angular/core";
import { MessageService } from 'primeng/api';
import { LocalizationService } from '@abp/ng.core';

@Injectable({
  providedIn: 'root',
})
export class LocalizedMessageService{
  constructor(
    private messageService: MessageService,
    private readonly localizationService: LocalizationService) { }

  showMessage = (severity: string, summary: string, detail: string) => {
    this.messageService.add({ severity: severity, summary: summary, detail: detail });
  }

  showLocalizedMessage = (severity: string, summary: string, localizationKey: string) => {
    this.messageService.add({ severity: severity, summary: summary, detail: this.localizationService.instant(localizationKey) });
  }
}