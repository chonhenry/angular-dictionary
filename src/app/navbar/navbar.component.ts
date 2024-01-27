import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  public font: string = 'Sans Serif';
  public isLightTheme = true;
  public isDropdownOpen = true;

  onDropdownClick() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onThemeSwitchChange() {
    this.isLightTheme = !this.isLightTheme;

    document.body.setAttribute(
      'data-theme',
      this.isLightTheme ? 'light' : 'dark'
    );
  }

  onSetFontTheme(font: string) {
    this.isDropdownOpen = false;
    document.body.setAttribute('font-theme', font);

    if (font === 'sans-serif') {
      this.font = 'Sans Serif';
    } else if (font === 'serif') {
      this.font = 'Serif';
    } else {
      this.font = 'Mono';
    }
  }
}
