import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DictionaryResponse } from '../service/search/search.service';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrl: './definition.component.css',
})
export class DefinitionComponent {
  @Input() definitions!: DictionaryResponse;

  public getSourceUrl(): string {
    const wordLength = this.definitions.word.length;

    for (const url of this.definitions.sourceUrls) {
      if (url.slice(-wordLength) === this.definitions.word) {
        return url;
      }
    }

    return 'https://en.wiktionary.org/wiki/' + this.definitions.word;
  }
}
