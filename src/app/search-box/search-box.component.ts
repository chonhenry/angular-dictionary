import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from '../service/search/search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  @Output()
  onSearchEvent = new EventEmitter();

  constructor(private searchService: SearchService) {}

  onSubmit(f: NgForm) {
    const word = f.value.word;
    if (word.length === 0) return;

    this.onSearchEvent.emit(word);

    // this.searchService.search(word).subscribe(
    //   (response) => {
    //     console.log(response[0]);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
}
