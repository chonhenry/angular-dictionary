import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
})
export class DropdownComponent {
  @Input()
  isLightTheme = true;

  @Output()
  selectFontEvent = new EventEmitter();

  selectFont(value: string) {
    this.selectFontEvent.emit(value);
  }
}
