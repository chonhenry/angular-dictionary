import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  @Output()
  onSearchEvent = new EventEmitter();

  constructor() {}

  onSubmit(f: NgForm) {
    const word = f.value.word;
    if (word.length === 0) return;

    this.onSearchEvent.emit(word);
  }
}
