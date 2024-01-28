import { Component } from '@angular/core';
import {
  SearchService,
  DictionaryResponse,
} from './service/search/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isLoading = false;
  error = false;
  definitions: DictionaryResponse | null = null;

  constructor(private searchService: SearchService) {
    this.onSearch('hello');
  }

  onSearch(word: string) {
    this.isLoading = true;
    this.searchService.search(word).subscribe(
      (response) => {
        this.isLoading = false;
        this.error = false;
        this.definitions = response[0];
      },
      (error) => {
        this.isLoading = false;
        this.error = true;
        this.definitions = null;
      }
    );
  }
}
